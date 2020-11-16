import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';

 function UpdateAppointment({ route, navigation }) {
    console.log(route.params.dataAppoint)
   const [name, setName] = useState("");
   const [lastname, setLastname] = useState("");
   const [identification, setIdentification] = useState();
   const [birthday, setBirthday] = useState("");
   const [city, setCity] = useState("");
   const [neighborhood, setNeighborhood] = useState("");
   const [cellphoneNumber, setCellphoneNumber] = useState();
   const updateAppoinment = async () => {
     try {
       const response = await fetch(
         "https://momento2m3.herokuapp.com/appointments/update_medical_appointment/" + route.params.dataAppoint._id,
         {
           method: "PATCH",
           headers: {
             Accept: "application/json",
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             name: name,
             lastname: lastname,
             identification: identification,
             birthday: birthday,
             city: city,
             neighborhood: neighborhood,
             cellphoneNumber: cellphoneNumber,
           }),
         }
       );
       const json = await response.json();
       Alert.alert("Appointment updated successfully");
       navigation.navigate('Home');
     } catch (error) {
       Alert.alert('Error:', error.message);
     }
   };

   useEffect(()=>{
    //console.log("is focused: "+isFocused);
    setName(route.params.dataAppoint.name);
    setLastname(route.params.dataAppoint.lastname);
    setIdentification(route.params.dataAppoint.identification);
    setBirthday(route.params.dataAppoint.birthday);
    setCity(route.params.dataAppoint.city);
    setNeighborhood(route.params.dataAppoint.neighborhood);
    setCellphoneNumber(route.params.dataAppoint.cellphoneNumber);
  }, [])


   return (
     <View style={styles.container}>
       <Text>Create Appointment</Text>
       <TextInput
        value={name}
         placeholder="Name"
         onChangeText={(text) => setName(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       value={lastname}
         placeholder="Lastname"
         onChangeText={(text) => setLastname(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       numeric value={String(identification)}
       keyboardType={'numeric'}
         placeholder="Identification"
         onChangeText={(text) => setIdentification(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       value={birthday}
         placeholder="Birthday"
         onChangeText={(text) => setBirthday(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       value={city}
         placeholder="City"
         onChangeText={(text) => setCity(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       value={neighborhood}
         placeholder="Neighborhood"
         onChangeText={(text) => setNeighborhood(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
       numeric value={String(cellphoneNumber)}
       keyboardType={'numeric'}
         placeholder="CellphoneNumber"
         onChangeText={(text) => setCellphoneNumber(text)}
         style={styles.textInput}
       ></TextInput>

       <TouchableHighlight
         style={styles.buttonUpdate}
         onPress={updateAppoinment}
       >
         <Text style={styles.textButtonUpdate}>Update</Text>
       </TouchableHighlight>
     </View>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:"column", 
    alignItems:"center"
  },
  textInput: {
    marginTop:10,
    padding:10,
    borderColor: "purple",
    borderWidth:1,
    borderRadius:5,
    width: Dimensions.get('screen').width*0.9
  },
  buttonUpdate: {
    marginTop:10,
    backgroundColor: "purple",
    padding: 15,
    alignItems:"center",
    borderRadius:25
  },
  textButtonUpdate: {
    color: "white"
  },


});

export default UpdateAppointment;
