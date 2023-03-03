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
import { Button } from '@react-native-material/core';
import YoutubePlayer from "react-native-youtube-iframe";

// import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
// import Orientation from 'react-native-orientation';

import { COLORS, SIZES, images } from '../../constants';

const ModulePage = () => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

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
                            Introduction
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

    function renderVideo(){
        return (
            <View>
                <YoutubePlayer
                    height={200}
                    play={playing}
                    videoId={"iee2TATGMyI"}
                    onChangeState={onStateChange}
                />
            </View>
        )
    }

    function renderNotes(){
        return(
            <Card
                mode='elevated'
                elevation={5}
                style={{
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    top: 25
                }}
            >
                <Card.Content>
                    <ScrollView>
                    <Text>
                    VLC media player library is a flexible option supporting all network streams, including RTSP, RTP, HLS, MMS, and RTMP. What’s more, it supports files in almost any existing format (even the exotic ones like MKV).

                    It can play multiple audio tracks (including 5.1) and subtitles tracks (including SSA).

                    The package comes with a sample React Native project you can check before integrating the library into your app.

                    6. React Native MO video player
                    Mo React video library offers a feature-rich package with many customizable options.

                    In addition to basic features, it allows you to choose a video cover, apply video settings like speed, sound volume, and quality, change video style, etc. You’re welcome to check out this demo project to see it in action.
                    </Text>
                    <Text>
                    7. React Native video processing
                    As the name suggests, this library can deliver many processing options like trimming, editing, "boomerang," and reverse video creation.

                    Like the others, it works on both platforms, but on Android, it also allows you to compress the video.

                    Though the library has a standalone API and a sustainable community of contributors, it hasn't seen any new versions released to npm in the past 12 months.
                    </Text>
                    </ScrollView>
                </Card.Content>
            </Card>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle()}
            {renderVideo()}
            {renderNotes()}
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

export default ModulePage;