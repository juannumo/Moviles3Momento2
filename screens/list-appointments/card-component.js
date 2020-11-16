import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";



function CardComponent(props){
    const {identification, name, lastname, birthday, city, neighborhood, cellphoneNumber} = props.appointment;
    return <View>
        <Text> {identification}  </Text>
        <Text> {name}  {lastname} </Text>
    </View>
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "column",
    },
    buttonCreate: {
      backgroundColor: "red",
      padding: 15,
      alignItems:"center"
    },
    teaxtButtonCreate: {
      color: "white"
    },
  });
  
export default CardComponent;
