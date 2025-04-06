import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native";
interface StateBtnProps {
    name: string;
    state:string
}

import React from 'react'
import { State } from "swr";

const StateBtn:React.FC<StateBtnProps> = (props) => {
    const {name,state} = props

    let color = "";
    if (state === "vacant") {
      color = "white";
    } else if (state === "required") {
      color = "#FF8095";
    } else if (state === "cleaning") {
      color = "#7FA6D6";
    } else if (state === "completed") {
      color = "#6FCF97";
    } else if (state === "unnecessary") {
      color = "#B0B0B0";
    }
  
    return (
       <TouchableOpacity>
        <Text style={[{backgroundColor:`${color}`,width:120,padding:5,margin:5,fontSize:25,textAlign: "center",borderWidth:2, borderRadius: 5,fontWeight:"bold"}]}>{name}</Text>
       </TouchableOpacity>
      )
    }


    const style = StyleSheet.create({
        text:{
            color:"whtie"
        }
    })
export default StateBtn

