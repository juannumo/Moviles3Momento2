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
    console.log("is focused: "+isFocused);
    getAppointments();
  }, [isFocused])

  const detailAppoinment = (data) =>{
    try {
      navigation.navigate('Detail', {
        detail: data,
      });
      // console.log(data);
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
        <Text style={styles.teaxtButtonCreate}>Create appoinment</Text>
      </TouchableHighlight>
      <FlatList 
      data={appoinments} 
      renderItem={({item}) => 
      <TouchableHighlight onPress={()=> detailAppoinment(item)} style={styles.listItem}>        
        <CardComponent appointment={item}>
        </CardComponent>
      </TouchableHighlight>}
      keyExtractor={item => item._id}
       >

      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: 'center'    
  },
  buttonCreate: {
    marginTop: 10,
    backgroundColor: "red",
    padding: 15,
    alignItems:"center",
    width: Dimensions.get('screen').width * 0.8,
    borderRadius: 25
  },
  teaxtButtonCreate: {
    color: "white"
  },
  listItem:{
    marginTop: 5,
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.8
  }

});

export default ListAppointments;



/*
function ListAppointments({navigation}) {
  const isFocused = useIsFocused();
  const [appoinments, setAppointments] = useState([]);
  const getAppointments = async ()=>{
    let response = await fetch('https://momento2m3.herokuapp.com/appointments/get_medical_appointments');
    let json = await response.json();
    setAppointments(json);
  }
  useEffect(()=>{
    console.log("is focused: "+isFocused);
    getAppointments();
  }, [isFocused])

  const detailAppoinment = (data) =>{
    try {
      navigation.navigate('Detail', {detail : data});
      console.log(data);
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
        <Text style={styles.teaxtButtonCreate}>Create appoinment</Text>
      </TouchableHighlight>
      <FlatList data={appoinments} 
      renderItem={({item}) =><TouchableHighlight onPress={()=> detailAppoinment(item)} style={styles.listItem}>        
        <CardComponent appointment={item}>
        </CardComponent>
      </TouchableHighlight>}
      keyExtractor={item => item._id}
       >

      </FlatList>
    </View>
  );
}
*/

