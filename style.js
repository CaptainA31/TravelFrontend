import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFFFFF',
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
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
        height: 260,
        width: 260,
        marginTop: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        paddingTop: 18,
        paddingBottom: 8,
        marginTop: 15,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: '#BB8493',
        borderRadius: 50,
    },
    textInput: {
        flex: 1,
        marginTop: -10,
        color: '#49243E',
        fontSize: 16,
    },
    loginContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    text_header: {
        color: '#49243E',
        fontWeight: 'bold',
        fontSize: 30,
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
        height: 65,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5, // Add horizontal margin between buttons
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
        textAlign: "center"
    },
    textSmall: {
        color: 'black',
        fontSize: 15,
        marginTop: 5,
        textAlign: "center"
    },
    ButtonFill : {
        justifyContent: "center",
        width: '85%',
        height: '5%',
        backgroundColor: '#2566FE',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 15,
        borderRadius: 10,
        // shadowColor: '#2566FE',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },

    ButtonNoFill : {
        width: '85%',
        height: '5%',
        justifyContent: "center",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        // paddingHorizontal: 20,
        // paddingVertical: 15,
        borderRadius: 10,
        // shadowColor: '#2566FE',
        // shadowOffset: {
        //     width: 0,
        //     height: 6,
        // },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderColor: "#2566FE",
        borderWidth: 2
    },
    
    
});

export default styles;
