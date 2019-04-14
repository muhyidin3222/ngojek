const styles = ({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea'
    },
    Account: {
        padding: 13,
        width: '100%',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewFaceebook: {
        padding: 10,
        backgroundColor: '#ffffff',
        marginTop: 20
    },
    background: {
        backgroundColor: '#ffffff',
        flex: 1,
        marginTop: 20
    },
    out: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#ffffff',
        marginTop: 20
    }
});

const image = ({
    codePromo: {
        width: 20,
        height: 24,
        margin: 20
    },
    voucer: {
        width: 23,
        height: 26,
        margin: 20
    },
    language: {
        width: 27,
        height: 20,
        margin: 20
    },
    help: {
        width: 24,
        height: 24,
        margin: 20
    },
    provisions: {
        width: 23,
        height: 24,
        margin: 20
    },
    policy: {
        width: 23,
        height: 26,
        margin: 20
    },
    judgment: {
        width: 25,
        height: 24,
        margin: 20
    }
})


const changeAccount = ({
    textInput: {
        right: 5,
        fontSize: 15,
    },
    form: {
        marginTop: 30,
        backgroundColor: "#ffffff"
    },
    fontInput: {
        color: 'black',
        fontSize: 15,
        marginTop: 10
    },
    layout: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    backgroundInput: {
        paddingLeft: 15,
        paddingRight: 15,
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 0.5,
        width: '100%'
    },
    number: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    setTextInput: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export { styles, image, changeAccount };