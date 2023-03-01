import React from 'react';
import {
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image} from 'react-native';
import { 
  Stack, 
  TextInput, 
  IconButton,
  Text,
  Button } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

//Navigation import
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const ScreenTwo = props => {

    //onPress To Navigate
    const onPress = () => {
      props.navigation.navigate('Register - Details');
    };
  
    return (
      <View style={styles.main}>
        <Image source={{uri: 'https://i.postimg.cc/rFKjHgn4/Asset-7-10x-8.png'}}
       style={{width: 90, height: 100}} />
        {/* <Image
                        source={{uri:"https://www.dropbox.com/s/x6s43dagj98uwko/logo.png?dl=0"}}
                        style={{
                            width: 60,
                            height: 60,
                            resizeMode: "contain"
                        }}
                    /> */}
        <Text variant='h6'>Welcome to e-learn, what is your role</Text>
        <Stack spacing={2} style={{ margin: 16, width: "90%" }}>
          <Button 
            title="I am an instructor" 
            color="#2196F3"
            style={[styles.textWhite, styles.p10]}
            tintColor='#FFFFFF' />
          <Button 
            title="I am a student" 
            color="#2196F3" 
            tintColor='#FFFFFF' 
            onPress={onPress}
            style={[styles.textWhite, styles.p10]}
          />
        </Stack>
        <TouchableOpacity onPress={onPress}>
          <Text color='#2196F3'>Already have an account? sign in</Text>
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
    textWhite:{
      color: "#FFFFFF"
    },
    p10:{
      padding: 10,
    }
  })

export default ScreenTwo;