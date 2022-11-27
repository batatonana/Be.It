import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
        center:{
            display:"flex",
            justifyContent:"center",
            alignItems:"center", 
            flex:1,
            backgroundColor:"#ffffff"
        },
        moneyCard:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"row",
            borderRadius:16,
            backgroundColor: "#01593D20",
            width: "85%",
            height: "13%",
        },
        moneyText:{
            fontSize:"55%",
            marginRight:10,
                },
        container:{
            margin:10,
            height:"5%",
            width:"85%",
            marginBottom: 20,
        },card:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:16,
            backgroundColor: "#0000000F",
            width: "85%",
            height: "10%",
            marginBottom:"5%",
        },
        completed:{
            color: "#01593D",
            fontWeight: "700",
        },
        inProgress:{
            color: "#4A448D",
            fontWeight: "700",
        },
        text:{
            fontWeight: "600",
        },
        card1:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            borderRadius:16,
            backgroundColor: "#ffffff",
            width: "99%",
            height:"96%"
        },
        container2:{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"center",
        },
        dailyText:{
            marginRight:"30%",
            fontWeight:"600",
            fontSize:20,
        },
        bar:{
            marginTop: 5,
            borderRadius:"100%",
            width:"100%",
            height:8,
            backgroundColor:"#01593D",
        }
    });