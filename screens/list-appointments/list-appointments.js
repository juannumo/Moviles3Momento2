import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardComponent from './card-component';
import {useIsFocused} from '@react-navigation/native'

function ListAppointments({ navigation }) {
  const isFocused = useIsFocused();
  const [appoinments, setAppointments] = useState([]);
  const getAppointments = async ()=>{
    let response = await fetch('https://momento2m3.herokuapp.com/appointments/get_medical_appointments');
    let json = await response.json();
    setAppointments(json);
  }
  useEffect(()=>{
    //console.log("is focused: " + isFocused);
    getAppointments();
  }, [isFocused])

  const detailAppoinment = (data) =>{
    try {
      navigation.navigate('Detail', {
        detail: data,
      });      
    } catch (error) {
      console.log(error);
    }  
  }

  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.buttonCreate}
        onPress={() => navigation.navigate('Create')}
      >
          <Text style={styles.teaxtButtonCreate}>Click to create an Appointment</Text>
      </TouchableHighlight>

      <View style={styles.containerAppoint}>

        <FlatList 
        data={appoinments} 
        renderItem={({item}) => 
          <TouchableHighlight onPress={()=> detailAppoinment(item)} 
          style={styles.listItem}          
          >        
            <CardComponent appointment={item} style={styles.cardComponent}>
            </CardComponent>
          </TouchableHighlight>}
          keyExtractor={item => item._id}
          >
        </FlatList>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#236b73",
    flexDirection: "column",
    alignItems: 'center'    
  },
  buttonCreate: {
    marginBottom:15,
    marginTop: 10,
    padding: 15,
    alignItems:"center",
    justifyContent:'center',
    borderRadius: 25
  },
  teaxtButtonCreate: {
    color: "white",
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
    justifyContent:'center'
  },
  listItem:{
    marginTop: 10,
    padding: 0,
    borderRightWidth:5,
    borderBottomWidth:5, 
    borderRightColor: '#adc9c9', 
    borderBottomColor: '#adc9c9',   
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.8,
    
  },
  containerAppoint: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.9,
    marginBottom:20
  },
  cardComponent:{
    fontSize:25
  }

});

export default ListAppointments;

