import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  smallIcon: {
    marginRight: 10,
    fontSize: 24,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 90, // Adjusted to fit within the header line
    width: 90,  // Adjusted to fit within the header line
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    width: '85%',
    height: 50,
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 20,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#49243E',
    fontSize: 16,
  },
  loginContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#DDDDDD',
  },
  
  backButton: {
    marginTop: -10,
    marginBottom: 10,
    marginLeft: -20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text_header: {
    color: '#49243E',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    padding: 15,
    backgroundColor: '#EFF8FF',
  },
  roundedText: {
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginLeft: '7.5%', // Align label with TextInput
    marginBottom: 5,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ButtonFill: {
    justifyContent: 'center',
    width: '85%',
    height: 50,
    backgroundColor: '#2566FE',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  backButton: {
    // backgroundColor: '#704264',
    marginTop: -10,
    marginBottom: 10,
    marginLeft: -20,
    height: 50,
    width: 50,
    // borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#704264',
    // shadowOffset: {
    //   width: 0,
    //   height: 6,
    // },
    // shadowOpacity: 0.37,
    // shadowRadius: 7.49,
    // elevation: 12,
    marginRight: 10,
  },
  
  roundedText: {
    borderRadius: 15, // Add border radius for rounded corners
    borderColor: 'black', // Set border color to black
    borderWidth: 1, // Add border width to make border visible
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  city: {
    marginVertical: 20,
    alignItems: 'center',
  },
  cityImage: {
    width: 400,
    height: 110, // Adjusted height to maintain aspect ratio
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio within the specified dimensions
  },
  cityName: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    marginTop: 10,
    margin: 20,
  },
  inBut: {
    width: '70%',
    backgroundColor: '#49243E',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 50,
    shadowColor: '#49243E',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  inBut2: {
    backgroundColor: '#704264',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#704264',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  bottomButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', // Center the buttons
    marginTop: 20,
  },
  smallIcon2: {
    fontSize: 40,
  },
  bottomText: {
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 5,
  },
  textBig: {
    color: 'black',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  textSmall: {
    color: 'black',
    fontSize: 15,
    marginTop: 5,
    textAlign: 'center',
  },


  ButtonFill: {
    justifyContent: 'center',
    width: '85%',
    height: 50,
    backgroundColor: '#2566FE',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  ButtonNoFill: {
    width: '85%',
    height: '5%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    borderRadius: 10,
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderColor: '#2566FE',
    borderWidth: 2,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
  },












  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 0, // Handle safe area manually
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
  },
  smallLogo: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  appMessage: {
    backgroundColor: '#EEE',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: '80%',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  optionBox: {
    width: '48%',
    backgroundColor: '#EFF8FF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 10,
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  chatInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 20,
    marginRight: 10,
  },
  cameraButton: {
    padding: 10,
  },
});

export default styles;
