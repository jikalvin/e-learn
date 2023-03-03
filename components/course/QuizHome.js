import React, { useState, useCallback, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    Alert,
    ScrollView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, Card, ProgressBar, MD3Colors } from 'react-native-paper';
// import { Button } from '@react-native-material/core';
// import YoutubePlayer from "react-native-youtube-iframe";

// import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
// import Orientation from 'react-native-orientation';

import { COLORS, SIZES, images } from '../../constants';

const QuizHome = ({navigation}) => {

    function startQuiz(){
        navigation.navigate("QuizPage")
    }

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
                    <Ionicons name="arrow-back" size={30} color={COLORS.white} />
                    <Text
                        style={{
                            color: COLORS.white,
                            fontSize: 16
                        }}
                    >
                        Biology Fundamentals
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="message" size={30} color={COLORS.white} />
                </TouchableOpacity>
            </View>
        )
    }

    function renderTitle(){
        return(
            <Card
                mode='elevated'
                elevation={5}
                style={{
                    marginTop: 0,
                    backgroundColor: COLORS.white,
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <View style={{flexDirection:"row"}}>
                <Card.Content
                    style={{
                        width: "80%",
                        padding: SIZES.padding*2,
                        paddingLeft: 0
                    }}
                >
                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <AntDesign name="left" size={30} color={COLORS.blue} />
                        <Text
                            style={{
                                color: COLORS.blue,
                                fontWeight: "bold",
                                fontSize: 14
                            }}
                        >
                            Final Exam
                        </Text>
                    </TouchableOpacity>
                </Card.Content>
                <Card.Content
                    style={{
                        padding: SIZES.padding*2
                    }}
                >
                    <Text>
                        20 mins
                    </Text>
                </Card.Content>
                </View>
            </Card>
        )
    }

    function renderStart(){
        return(
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: SIZES.padding*3
                }}
            >
                <Text
                    style={{
                        fontWeight: "bold",
                        fontSize: 20
                    }}
                >45 Mins</Text>
                <Text
                    style={{
                        fontSize: 18
                    }}
                >Start</Text>
                <TouchableOpacity
                    onPress={startQuiz}
                >
                    <AntDesign name="play" size={40} color={COLORS.blue} />
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle()}
            {renderStart()}
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

export default QuizHome;