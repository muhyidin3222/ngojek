
const Views = ({
    LogiEndRegister: {
        flexDirection: 'row',
        paddingTop: 30,
        justifyContent: 'space-between'
    },
    content: {
        paddingTop: 55
    },
    information: {
        flexDirection: "row"
    },
    proviso: {
        marginTop: 20
    }
});

const Texts = ({
    promosiSize: {
        fontSize: 14
    },
    welcome: {
        fontSize: 25,
        fontWeight: '500',
        paddingBottom: 5
    },
    daftar: {
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: '400'
    },
    register: {
        alignItems: 'center',
        color: '#ffffff',
        fontWeight: '400'
    },
    provisions: {
        color: 'green'
    }
});

const TouchableOpacitys = ({
    LogiEndRegister: {
        width: '45%',
        height: 40,
        backgroundColor: "#51d140",
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: '400',
        borderRadius: 2
    }
});

const Images = ({
    backgroundImage: {
        width: '100%',
        height: 200
    },
    LogoGojekStyle: {
        width: 65,
        height: 16
    },
    flagStyle: {
        width: 30,
        height: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between'
    }
});

export { Images, TouchableOpacitys, Texts, Views };