import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DatePicker from 'react-native-datepicker';
 function UpdateAppointment({ route, navigation }) {
    //console.log(route.params.dataAppoint)
   const [name, setName] = useState("");
   const [lastname, setLastname] = useState("");
   const [identification, setIdentification] = useState();
   const [birthday, setBirthday] = useState("");
   const [city, setCity] = useState("");
   const [neighborhood, setNeighborhood] = useState("");
   const [cellphoneNumber, setCellphoneNumber] = useState();

   
   const updateAppoinment = async () => {
    if(name == '' && lastname == '' && (identification == '' || identification == undefined) && birthday == '' && city == '' && neighborhood == '' && (cellphoneNumber == '' || cellphoneNumber == undefined)){
      Alert.alert(
        'Required:',
        'Please fill in all the fields!'        
        );
    } else{
      if(name == ''){
        Alert.alert(
          'Required:',
          'Please fill Name field!'        
          );
      } else if(lastname == ''){
        Alert.alert(
          'Required:',
          'Please fill Lastname field!'        
          );
      }
      else if(identification == '' || identification == undefined){
        Alert.alert(
          'Required:',
          'Please fill Identification field!'        
          );
      }
      else if(identification  != '' || identification != undefined){
        if(isNaN(identification) != false){
          Alert.alert(
            'Required:',
            'Please fill Identification field with numeric data!'        
            );
        }
        else if(birthday == '' || birthday == undefined){
          Alert.alert(
            'Required:',
            'Please fill Birth date field!'        
            );
        }
        else if(city == ''){
          Alert.alert(
            'Required:',
            'Please fill City field!'        
            );
        }
        else if(neighborhood == ''){
          Alert.alert(
            'Required:',
            'Please fill Neighborhood field!'        
            );
        }
        else if(cellphoneNumber == '' || cellphoneNumber == undefined){
          Alert.alert(
            'Required:',
            'Please fill CellphoneNumber field!'        
            );
        }
        else if(cellphoneNumber  != '' || cellphoneNumber != undefined){
          if(isNaN(cellphoneNumber) != false){
            Alert.alert(
              'Required:',
              'Please fill CellphoneNumber field with numeric data!'        
              );
          }  else if(cellphoneNumber.length < 10){
            Alert.alert(
              'Format Required:',
              'Phone number format must be of 10 numbers!'        
              );
          }     
          else{            
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
                    birthday: new Date(birthday),
                    city: city,
                    neighborhood: neighborhood,
                    cellphoneNumber: cellphoneNumber,
                  }),
                }
              );
              const json = await response.json();
              Alert.alert(
                'Update:',
                'Appointment updated successfully'
                );
              navigation.navigate('Home');
            } catch (error) {
              Alert.alert(
               'Update:',
               'Error:', error.message
                );
            }
      

          } 
        }
        
      }          
    }     
   };

   useEffect(()=>{
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

      <View style={styles.textInput}>
        <Icon name='address-book' size={35} color='#88d2da'></Icon>
        <TextInput        
        value={name}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
        style={styles.textInput2}
       ></TextInput>
      </View>

      <View style={styles.textInput}>
        <Icon name='address-book' size={35} color='#88d2da'></Icon>
        <TextInput
        value={lastname}
        placeholder="Lastname"
        onChangeText={(text) => setLastname(text)}
        style={styles.textInput2}
       ></TextInput>
       </View>

       <View style={styles.textInput}>
        <Icon name='address-card' size={35} color='#88d2da'></Icon>
        <TextInput
        numeric value={String(identification)}
        keyboardType={'numeric'}
        placeholder="Identification"
        onChangeText={(text) => setIdentification(text)}
        style={styles.textInput2}
       ></TextInput>
       </View>
       
       <View style={styles.textInput}>
        <Icon name='calendar-day' size={35} color='#88d2da'></Icon>
        <DatePicker style={styles.datePicker} format="YYYY-MM-DD" minDate="01-01-1900" date={birthday} mode='date' placeholder="Birth date"
        allowFontScaling={true}
        customStyles={{
            dateIcon: {
              display: 'none',              
            },
            dateInput: {
              marginLeft: 36,              
              marginLeft:10,
              alignItems:'baseline',
              padding:10,
              borderColor:'#e3e3e3'
            },
            dateText:{
              fontSize:20,
              color:'black'
            },
            placeholderText:{
              fontSize:20,
              color:'gray'
            }
          }}
          onDateChange={(birthday) => {
            setBirthday(birthday);
          }}
          >          
        </DatePicker>          
       </View>

       <View style={styles.textInput}>
        <Icon name='city' size={35} color='#88d2da'></Icon>
        <TextInput
        value={city}
        placeholder="City"
        onChangeText={(text) => setCity(text)}
        style={styles.textInput2}
       ></TextInput>
       </View>

       <View style={styles.textInput}>
        <Icon name='home' size={35} color='#88d2da'></Icon>
        <TextInput
        value={neighborhood}
        placeholder="Neighborhood"
        onChangeText={(text) => setNeighborhood(text)}
        style={styles.textInput2}
       ></TextInput>
       </View>

       <View style={styles.textInput}>
        <Icon name='mobile-alt' size={35} color='#88d2da'></Icon>
        <TextInput
        numeric value={String(cellphoneNumber)}
        keyboardType={'numeric'}
        maxLength={10}
        placeholder="CellphoneNumber"
        onChangeText={(text) => setCellphoneNumber(text)}
        style={styles.textInput2}
       ></TextInput>
       </View>       

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
    backgroundColor: '#236b73',
    flexDirection:"column", 
    alignItems:"center"
  },
  textInput: {   
    flexDirection:'row',    
    backgroundColor:'#e3e3e3',
    marginTop:25,
    padding:5,
    borderColor: "#88d2da",
    borderWidth:1,
    borderRadius:5,
    width: Dimensions.get('screen').width*0.9
  },
  buttonUpdate: {
    marginTop:10,
    backgroundColor: "#88d2da",
    padding: 15,
    alignItems:"center",
    borderRadius:25,    
    width: Dimensions.get('screen').width * 0.5
  },
  textButtonUpdate: {
    color: "black",
    fontSize:22
  },
  textInput2: {   
    backgroundColor:'#e3e3e3',    
    flex:1,
    marginLeft:15,
    fontSize:20
  },

});

export default UpdateAppointment;
