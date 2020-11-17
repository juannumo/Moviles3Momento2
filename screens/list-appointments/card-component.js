import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";



function CardComponent(props){
    const {identification, name, lastname, birthday, city, neighborhood, cellphoneNumber} = props.appointment;
    return <View style={styles.container}>
        <Text style={styles.textComponent}>Id:  {identification}  </Text>
        <Text style={styles.textComponent}>Name:  {name}  {lastname} </Text>
    </View>
}



const styles = StyleSheet.create({
    container: {
      padding:5,
      backgroundColor: "#88d2da",
      
    },    
    textComponent: {
      fontSize:20,
      color: "black",
      margin:5
      
    },
  });
  
export default CardComponent;
