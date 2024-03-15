import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagebgs: {
        width: 400,
        height: 800,
        position: 'absolute',
    },
    nav: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        top: -340,
        borderWidth: 2,
        borderColor: '#81b2c1',
        fontFamily: 'Roboto'
    },
    textnav: {
        top: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        left: '10%',
        width: '60%',
        height: '25%',
        position: 'relative',
        borderColor: '#81b2c1',
        borderWidth: 1,
    },
    textnav2: {
        fontSize: 20,
    },
    imgnav: {
        top: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        right: '35%',
        width: '30%',
        height: '50%',
        position: 'relative'
    },
    imgicon: {
        width: '80%',
        height: '80%'
    },
    imggelin: {
        width: '60%',
        height: '60%',
        margin: 10,
    },
    main: {
        width: '60%',
        height: '40%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderWidth: 5,
        borderRadius: 10,
        borderColor: '#81b2c1',
        position: 'absolute',
    },
    comprinha: {
        width: '100%',
        height: '34%',
        backgroundColor: '#81b2c1',
        alignItems: 'center',
        position: 'relative',
    },
    textcomprinha1: {
        margin: 3,
        fontSize: 18,
    },
    textcomprinha2: {
        fontSize: 15,
    },
    butao: {
        width: '80%',
        height: 50,
        margin: 5,
    },
    textbutao: {
        fontSize: 5,
    },
    titlezin: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        position: 'absolute',
        top: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#4b9db7',
        borderWidth: 2,
        borderRadius: 7,
    },
    texttitle: {
        fontSize: 17,
    },
});
