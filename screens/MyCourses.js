import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView,
    ImageBackground
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { 
    Stack,  
    IconButton,
    Text,
    Button } from "@react-native-material/core";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Avatar, Card, ProgressBar, MD3Colors } from 'react-native-paper';


const MyCourses = ({ navigation }) => {

    function renderHeader(){
        return(
            <View
                style={{
                    flexDirection: "row",
                    paddingTop: SIZES.padding*2,
                    paddingBottom: SIZES.padding,
                    paddingLeft: SIZES.padding,
                    paddingRight: SIZES.padding,
                    justifyContent: "space-between",
                    backgroundColor: COLORS.blue,
                }}
            >
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems:"center"
                    }}
                >
                    <AntDesign name="user" size={30} color="white" />
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 16
                        }}
                    >
                        My Courses
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <AntDesign name="search1" size={30} color="white" 
                        style={{
                            marginLeft: 20
                        }}
                    />
                    <Ionicons name="notifications" size={30} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    function renderCourse(){
        return(
            <Card
                style={{
                    padding: SIZES.padding*2,
                    backgroundColor: COLORS.white,
                    margin: SIZES.padding
                }}
            >
                <TouchableOpacity>
                <ImageBackground 
                    source={{uri: "https://i.postimg.cc/Vk3M7SSy/acadhomelink.jpg"}}
                    resizeMode="cover"
                    style={{
                        justifyContent: "space-between",
                        // opacity: 0.7,
                        flexDirection: 'row',
                        height: 125,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "bold",
                            color: COLORS.white
                        }}
                    >
                        Biology Fundamentals
                    </Text>
                    <Entypo name="dots-three-horizontal" size={30} color="white" />
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Overall Progress: 40%</Text>
                    <ProgressBar progress={0.4} color={COLORS.blue}/>
                </TouchableOpacity>
            </Card>
        )
    }

    return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    { renderHeader() }
                    { renderCourse() }
                </ScrollView>
                
                {/* {renderRestaurantList()} */}
                <StatusBar  backgroundColor={COLORS.blue} />
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.lightGray4,
        top: 30
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default MyCourses;