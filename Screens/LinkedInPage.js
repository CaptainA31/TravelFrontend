import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import styles from '../style';

WebBrowser.maybeCompleteAuthSession();

export default function LinkedInPage() {
  const [userInfo, setUserInfo] = useState(null);
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: 'YOUR_LINKEDIN_CLIENT_ID',
      redirectUri: AuthSession.makeRedirectUri({
        native: 'YOUR_APP_SCHEME://redirect',
      }),
      scopes: ['r_liteprofile', 'r_emailaddress'],
      responseType: 'code',
    },
    {
      authorizationEndpoint: 'https://www.linkedin.com/oauth/v2/authorization',
      tokenEndpoint: 'https://www.linkedin.com/oauth/v2/accessToken',
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      exchangeCodeForToken(code);
    }
  }, [response]);

  const exchangeCodeForToken = async (code) => {
    const redirectUri = AuthSession.makeRedirectUri({
      native: 'YOUR_APP_SCHEME://redirect',
    });
    const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_id=YOUR_LINKEDIN_CLIENT_ID&client_secret=YOUR_LINKEDIN_CLIENT_SECRET`,
    });
    const tokenData = await tokenResponse.json();
    getUserInfo(tokenData.access_token);
  };

  const getUserInfo = async (token) => {
    try {
      const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const emailResponse = await fetch('https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const profileData = await profileResponse.json();
      const emailData = await emailResponse.json();
      const user = {
        ...profileData,
        email: emailData.elements[0]['handle~'].emailAddress,
      };
      await AsyncStorage.setItem('@user', JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('@user');
    setUserInfo(null);
  };

  return (
    <View style={[styles.mainContainer, { flex: 1, justifyContent: 'center', alignItems: 'center' }]}>
      <Text>LinkedInPage</Text>
      <Text>{JSON.stringify(userInfo, null, 2)}</Text>
      <Button title="Sign in with LinkedIn" disabled={!request} onPress={() => promptAsync()} />
      <Button title="Logout" onPress={handleLogout} />
      <StatusBar style="auto" />
    </View>
  );
}
