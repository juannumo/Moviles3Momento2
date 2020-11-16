import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";



function DetailAppointment({route, navigation}){
    console.log(route.params.detail)
    const {identification, name, lastname, birthday, city, neighborhood, cellphoneNumber} = route.params.detail;
    return <View style={styles.container}>
                <View style={styles.detailCard}>
                    <Text style={styles.textID}>ID:  {identification}  </Text>
                    <Text style={styles.textItem}>Name:  {name}  {lastname} </Text>
                    <Text  style={styles.textItem} >Phone Number:  {cellphoneNumber} </Text>
                    <Text  style={styles.textItem}>City:  {city} </Text>
                    <Text  style={styles.textItem}>Neighborhood:  {neighborhood} </Text>
                    <Text  style={styles.textItem}>Birthday:  {birthday} </Text>
                    <View style={styles.viewButtons}>
                        <TouchableHighlight style={styles.buttonEdit}>
                                <Text style={styles.textButtons}>
                                    EDIT
                                </Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.buttonDelete}>
                                <Text style={styles.textButtons}>
                                    DELETE
                                </Text>
                        </TouchableHighlight>
                    </View>

                </View>  
    </View>
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      flexDirection: "column",
    },
    detailCard: {
        padding:10,
        borderRadius:5,
        borderWidth:1,
        borderColor: 'black',     
        
    },
    viewButtons: {        
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonEdit:{
        backgroundColor:'orange',
        margin: 10,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5, 
        borderRadius:5
    },
    buttonDelete:{
        backgroundColor:'red',
        margin: 10,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,  
        borderRadius:5
    },
    textButtons: {
    fontSize: 20,
    fontWeight:'bold',
    color:'white'    
    },
    textItem:{
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        color:'black'
    },
    textID:{
        marginTop: 5,
        marginBottom: 5,
        fontSize: 20,
        color:'black',
        alignSelf:'flex-end'
    }
  });
  
export default DetailAppointment;

