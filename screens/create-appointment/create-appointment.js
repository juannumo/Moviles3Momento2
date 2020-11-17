import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';

 function CreateAppointment({ navigation }) {
   const [name, setName] = useState("");
   const [lastname, setLastname] = useState("");
   const [identification, setIdentification] = useState();
   const [birthday, setBirthday] = useState("");
   const [city, setCity] = useState("");
   const [neighborhood, setNeighborhood] = useState("");
   const [cellphoneNumber, setCellphoneNumber] = useState();
   const createAppoinment = async () => {
     try {
       const response = await fetch(
         "https://momento2m3.herokuapp.com/appointments/create_medical_appointment",
         {
           method: "POST",
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
       Alert.alert("Appointment created successfully");
       navigation.goBack();
     } catch (error) {
       Alert.alert('Error:', error.message);
     }
   };

   return (
     <View style={styles.container}>
       
       <TextInput
         placeholder="Name"
         onChangeText={(text) => setName(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="Lastname"
         onChangeText={(text) => setLastname(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="Identification"
         onChangeText={(text) => setIdentification(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="Birthday"
         onChangeText={(text) => setBirthday(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="City"
         onChangeText={(text) => setCity(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="Neighborhood"
         onChangeText={(text) => setNeighborhood(text)}
         style={styles.textInput}
       ></TextInput>
       <TextInput
         placeholder="CellphoneNumber"
         onChangeText={(text) => setCellphoneNumber(text)}
         style={styles.textInput}
       ></TextInput>

       <TouchableHighlight
          activeOpacity={0.8}
          underlayColor="#DDDDDD"
          style={styles.buttonCreate}
          onPress={createAppoinment}
       >
         <Text style={styles.teaxtButtonCreate}>Create</Text>
       </TouchableHighlight>
     </View>
   );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#236b73',
    flexDirection:"column", 
    alignItems:"center"
  },
  textInput: {
    backgroundColor:'#e3e3e3',
    marginTop:25,
    padding:10,
    borderColor: "#88d2da",
    borderWidth:1,
    borderRadius:5,
    width: Dimensions.get('screen').width*0.9
  },
  buttonCreate: {
    marginTop:10,
    backgroundColor: "#88d2da",
    padding: 15,
    alignItems:"center",
    borderRadius:25,
    width: Dimensions.get('screen').width * 0.5
  },
  teaxtButtonCreate: {
    color: "black",
    fontSize:22
  },


});

export default CreateAppointment;
