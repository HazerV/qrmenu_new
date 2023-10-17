export const homeStyles = {
    container: {
        backgroundColor: "black",
        minHeight: 100,
        display: "flex",
        flex: 1,
        width: '100%',
        height: '100%',
        paddingBottom: 100
    },
    head: {
        alignSelf: 'center',
        justifyContent: 'center',  
        marginBottom: 16,
        marginTop: -40
    },
    menu: {
        textAlign: 'left',
        color: 'white',
        fontSize: 24,
        fontFamily: "Gilroy-Regular",
        marginBottom: 25,
        marginLeft:16 
    },
    buttons: {
        justifyContent: 'space-between',
        columnGap: 16,
        flexDirection: 'row',
        marginBottom: 16,
        marginLeft: 16,
        marginRight: 16,
        width: '90%',
        marginStart: "5%",
        marginEnd: '10%',
    },
    attention: {
        textAlign: 'justify',
        color: '#BBBBBB',
        fontSize: 14,
        fontFamily: "Gilroy-Regular",
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 15,
        marginBottom: 52,
        width: '90%'
    },
    icons: {
        display: 'flex', 
        flexDirection: 'row', 
        columnGap: 8, 
        // justifyContent: 'flex-start',
        marginLeft: 16
    },
    oferta: {
        color: '#BBBBBB', textDecorationLine: 'underline', height: 22, fontFamily: 'Gilroy-Regular', marginBottom: 8
    },
}


// export const stylez = {
//     container: {
//         flex: 1,
//         backgroundColor: theme == 'light' ? lightTheme : '#fff',
//         alignSelf: 'center',
//         justifyContent: 'center'
//       },
//       container: {
//         backgroundColor: theme == "light" ? 'white' : 'black',
//         minHeight: 100,
//         display: "flex",
//         flex: 1,
//         width: '100%',
//         height: '100%',
//         paddingBottom: 100
//       },
//       attention: {
//         textAlign: 'justify',
//         color: theme == 'light' ? 'black' : 'white',
//         fontSize: 14,
//         fontFamily: "Gilroy-Regular",
//         alignSelf: 'center',
//         marginLeft: 10,
//         marginRight: 15,
//         marginBottom: 52,
//         width: '90%'
//       },
//       menu: {
//         textAlign: 'left',
//         color: theme == 'light' ? 'black' : "white",
//         fontSize: 24,
//         fontFamily: "Gilroy-Regular",
//         marginBottom: 25,
//         marginLeft:16 
//       },
//       oferta: {
//         color: theme == 'light' ? 'black' : 'white', 
//         textDecorationLine: 'underline', 
//         height: 22, 
//         fontFamily: 'Gilroy-Regular', 
//         marginBottom: 8}
//     }
