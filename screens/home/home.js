import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import { FlatList, TouchableHighlight } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {useIsFocused} from '@react-navigation/native'

function HomeAppointments({ navigation }) {
  
  return (
    <View style={styles.container}>
      <View  style={styles.containerLogo}>
      <Image
          style={styles.imagelogo}
          source={require('../../images/Logo_1.png')}
          />
      </View>
      <TouchableHighlight onPress={() => navigation.navigate('List')}
      activeOpacity={1}
      underlayColor=""
      >
      <Image
          style={styles.imageBack}
          source={require('../../images/Image_1.png')}
          
      />
      </TouchableHighlight>
      

            <TouchableHighlight
                underlayColor="#236b73"
                style={styles.buttonlook}
                >                
                    <Text style={styles.textButtonGoList} onPress={() => navigation.navigate('List')}> 
                    Look your Appointments!
                    </Text>                
            </TouchableHighlight> 
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#88d2da",
    flexDirection: "column",
    alignItems: 'center'    
  },
  buttonlook: {
    marginBottom:15,
    marginTop: 10,
    padding: 15,
    alignItems:"center",
    justifyContent:'center',
    borderRadius: 25
  },
  textButtonGoList: {
    color: "white",
    fontSize:25,
    fontWeight:'bold',
    alignSelf:'center',
    justifyContent:'center'
  },
  listItem:{
    marginTop: 5,
    padding: 5,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    width: Dimensions.get('screen').width * 0.8
  },
  imageBack:{
    marginTop:15,
    width: 400,
    height: 350,
  },
  imagelogo:{
    marginBottom:10,
    width: 345,
    height: 135,
  },
  containerLogo: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent:'center',
    width: Dimensions.get('screen').width
  }

});

export default HomeAppointments;

