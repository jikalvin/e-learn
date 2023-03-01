import React from 'react';
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image} from 'react-native';
import { 
  Stack,
  HStack, 
  TextInput, 
  IconButton,
  Text,
  Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ScreenFour = props => {

  return (
    <View style={styles.main}>
      <Text>Please enter your credentials</Text>
      <Stack style={styles.hstack}>
      <TextInput
          label="email"
          leading={props => <Icon name="email" {...props} />}
          variant="outlined"
          style={{borderColor: "#2196F3", width:300}}
        />
        <TextInput
          label="Password"
          variant="outlined"
          style={{borderColor: "#2196F3", width:300, marginTop: 25}}
          leading={props => <Icon name="key" {...props} />}
        />
        <TextInput
          label="Confirm Password"
          variant="outlined"
          style={{borderColor: "#2196F3", width:300, marginTop: 25}}
          leading={props => <Icon name="key" {...props} />}
        />
      </Stack>
      <HStack style={styles.hstack}>
        <Button 
          title="Back" 
          color="#2196F3" 
          tintColor='#ffffff' 
          style={{width: 100, marginRight:10, padding:10}}
        />
        <Button title="Finish" color="#ffffff" tintColor='#2196F3' style={{padding:10}} />
      </HStack>
    </View>
  );
  };
  
  const styles = StyleSheet.create({
    main:{
      backgroundColor: "#FFFFFF",
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    stretch: {
      width: 50,
      height: 50,
      resizeMode: 'stretch',
    },
    hstack:{
      width:"100%", 
      alignItems:"center", 
      justifyContent:"center",
      marginTop: 20,
    }
  })

export default ScreenFour;