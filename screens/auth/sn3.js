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

import PicSelect from '../../components/PicSelect';

const ScreenThree = props => {

    //onPress To Navigate
    const onPress = () => {
      props.navigation.navigate('Credentials');
    };
  
    return (
      <View style={styles.main}>
        <PicSelect />
        <Text>Select profile picture</Text>
        <HStack m={4} spacing={6} style={styles.hstack}>
        <TextInput
            label="First Name"
            leading={props => <Icon name="account" {...props} />}
            variant="outlined"
            style={{borderColor: "#2196F3", width:150}}
          />
          <TextInput
            label="Last Name"
            variant="outlined"
            style={{borderColor: "#2196F3", width:150}}
            leading={props => <Icon name="account" {...props} />}
          />
        </HStack>
        <Stack style={styles.hstack}>
        <TextInput
            label="username"
            leading={props => <Icon name="account" {...props} />}
            variant="outlined"
            style={{borderColor: "#2196F3", width:300}}
          />
          <TextInput
            label="Which institution are you part of?"
            variant="outlined"
            style={{borderColor: "#2196F3", width:300, marginTop: 25}}
            leading={props => <Icon name="school" {...props} />}
          />
        </Stack>
        <HStack style={styles.hstack}>
          <Button 
            title="Back" 
            color="#2196F3" 
            tintColor='#ffffff' 
            style={{width: 100, marginRight:10, padding: 10}}
          />
          <Button 
            title="Continue" 
            color="#ffffff" 
            tintColor='#2196F3' 
            style={{padding:10}}
          />
        </HStack>
        <TouchableOpacity onPress={onPress}>
          <Text>Hello From Screen One</Text>
        </TouchableOpacity>
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

export default ScreenThree;