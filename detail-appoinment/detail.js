import React, {useEffect, useState} from "react";
import { Alert, Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";



function DetailAppointment({route, navigation}){    
    const {identification, name, lastname, birthday, city, neighborhood, cellphoneNumber, _id} = route.params.detail;   

    const createAlertDelete = ()=>Alert.alert(
        'Delete: ',
        'Do you want to continue?',
        [
            {
             text: 'Cancel',             
             style:'cancel'
            },
            {
             text: 'Ok',
             onPress: ()=> {
                 deleteAppoinment()
            }
            
            }
          ]
    );
    const deleteAppoinment = async () =>{        
        try {
            const response = await fetch(
              ("https://momento2m3.herokuapp.com/appointments/delete_medical_appointment/" + _id),
              {
                method: "DELETE",
                headers: {
                  Accept: 'application/json, text/plain, */*',
                  "Content-Type": "application/json",
                },                
              }             
            );
            const json = await response.json();            
            Alert.alert(
                'Delete: ',
                'Appointment deleted successfully'
                );
            navigation.goBack();
          } catch (error) {
            console.log(error);
            Alert.alert(
                'Delete: ',
                'Error:', error.message
                );
          }
    }

    const updateAppointment = ()=>{
        navigation.navigate('Update', {dataAppoint:route.params.detail});
    }
    return (
    <View style={styles.container}>
                <View style={styles.detailCard}>
                    <Text style={styles.textID}>Id:  {identification}  </Text>
                    <Text style={styles.textItem}>Name:  {name}  {lastname} </Text>
                    <Text  style={styles.textItem} >Phone Number:  {cellphoneNumber} </Text>
                    <Text  style={styles.textItem}>City:  {city} </Text>
                    <Text  style={styles.textItem}>Neighborhood:  {neighborhood} </Text>
                    <Text  style={styles.textItem}>Birthday:  {(new Date(birthday)).getFullYear()}-{(new Date(birthday)).getMonth()+1}-{(new Date(birthday)).getDate()} </Text>
                    <View style={styles.viewButtons}>
                        <TouchableHighlight 
                        onPress={updateAppointment} style={styles.buttonEdit}>
                                <Text style={styles.textButtons}>
                                    EDIT
                                </Text>
                        </TouchableHighlight>
                        <TouchableHighlight 
                        onPress={createAlertDelete} style={styles.buttonDelete}>
                                <Text style={styles.textButtons}>
                                    DELETE
                                </Text>
                        </TouchableHighlight>
                    </View>

                </View>  
                <Image
        style={styles.imageBack}
        source={require('../images/Image_2.jpg')}
    />
    </View>
    )
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
        backgroundColor: "#88d2da"    
        
    },
    viewButtons: {        
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonEdit:{
        backgroundColor:'#2f909a',
        margin: 10,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5, 
        borderRadius:5, 
        width: Dimensions.get('screen').width * 0.3,
        alignItems:'center',
        borderRightWidth:5,
    borderBottomWidth:5, 
    borderRightColor: '#677575', 
    borderBottomColor: '#677575',   
    },
    buttonDelete:{
        backgroundColor:'#2f909a',
        margin: 10,
        paddingRight:15,
        paddingLeft:15,
        paddingBottom:5,
        paddingTop:5,  
        borderRadius:5,
        width: Dimensions.get('screen').width * 0.3,
        alignItems:'center',
        borderRightWidth:5,
    borderBottomWidth:5, 
    borderRightColor: '#677575', 
    borderBottomColor: '#677575',   
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
    },
    imageBack:{
        marginTop:5,
        width: 370,
        height: 320,
        marginStart:25
      }
  });
  
export default DetailAppointment;


