import React, { useState } from 'react';
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
import { gql, useMutation } from '@apollo/client';

// import { setTokens } from '../../util/tokens';

const LOGIN = gql`
mutation logMeIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password)
}
`;


const ScreenOne = props => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

  const handleSubmit = () => {
      props.action({
        variables: {
          email: email,
          password: password,
          username: username
        }
      })
  };
  
    return (
      <View style={styles.main}>
        <Image source={{uri: 'https://i.postimg.cc/rFKjHgn4/Asset-7-10x-8.png'}}
       style={{width: 90, height: 100}} />
        <Text variant="h6">Welcome to e-learn</Text>
        <Stack spacing={2} style={{ margin: 16, width: "90%", padding: 8 }}>
        <TextInput
            // label="username or email"
            placeholder='email'
            leading={props => <Icon name="email" {...props} />}
            variant="outlined"
            style={{borderColor: "#2196F3"}}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            // label="username or email"
            placeholder='username'
            leading={props => <Icon name="account" {...props} />}
            variant="outlined"
            style={{borderColor: "#2196F3"}}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            // label="password"
            placeholder='password'
            variant="outlined"
            style={{borderColor: "#2196F3"}}
            trailing={props => (
              <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
            )}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          {/* {credError ? <Text style={styles.error}>Invalid credentials</Text> : null} */}
          <Button 
            title="Sign In" 
            color="#2196F3" 
            style={{padding: 10}}
            tintColor="#ffffff"
            onPress={handleSubmit}
          />
        </Stack>
        <TouchableOpacity onPress={props.onPress}>
          <Text color='#2196F3'>Click here to sign up</Text>
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
  error: {
    tintColor: "red",
    color: "red"
  }
})
  
export default ScreenOne;