import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    FlatList
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Avatar, Card, ProgressBar, MD3Colors } from 'react-native-paper';
import { Button } from '@react-native-material/core';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

import { COLORS, SIZES, images } from '../../constants';

const Quiz = () => {

    const modules = [
        {
            id: 1,
            title: "Introduction"
        },
        {
            id: 2,
            title: "Osmosis and transportation"
        },
        {
            id: 3,
            title: "Factors necessary for life"
        },
        {
            id: 4,
            title: "The human body"
        },
        {
            id: 5,
            title: "Reproduction in plants"
        },
        {
            id: 6,
            title: "Genetics"
        },
    ]

    function renderHeader(){
        return(
            <View>
                <ImageBackground 
                    source={{uri: "https://i.postimg.cc/Vk3M7SSy/acadhomelink.jpg"}}
                    resizeMode="cover"
                    style={{
                        justifyContent: "center",
                        opacity: 0.7
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: SIZES.padding
                        }}
                    >
                        <Ionicons name="arrow-back" size={30} color="black" />
                        <MaterialIcons name="message" size={30} color="black" />
                    </View>
                    <View
                    style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    >
                        <Text
                            style={{
                                color: COLORS.primary,
                                fontSize: 16,
                                fontWeight: "bold"
                            }}
                        >GHS Atiela</Text>
                        <Text
                            style={{
                                fontSize: 24,
                                fontWeight: "bold",
                            }}
                        >Biology Fundamentals</Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: COLORS.primary,
                                fontWeight: "bold"
                            }}
                        >120 learners</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: SIZES.padding*2+6
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginRight: SIZES.padding*2,
                                borderColor: COLORS.blue,
                                padding: SIZES.padding,
                                // borderWidth: 3,
                                borderBottomWidth: 3,
                                borderRadius: SIZES.padding
                            }}
                        >
                            <Text style={{fontWeight:"bold", color:COLORS.blue}}>lessons</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                // marginRight: SIZES.padding*2,
                                borderColor: COLORS.blue,
                                padding: SIZES.padding,
                                borderWidth: 3,
                                borderBottomWidth: 0,
                                borderRadius: SIZES.padding
                            }}
                        >
                            <Text 
                            style={{fontWeight:"bold"}}>
                                quizzes</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginRight: SIZES.padding*2,
                                borderColor: COLORS.blue,
                                padding: SIZES.padding,
                                // borderWidth: 3,
                                borderBottomWidth: 3,
                                borderRadius: SIZES.padding
                            }}
                        >
                            <Text 
                                style={{fontWeight:"bold", color:COLORS.blue}}
                                >references</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }


    function renderModules(){
        const Item = ({title}) => {
            return(
                <Card
                mode='elevated'
                elevation={5}
                style={{
                    marginTop: SIZES.padding * 2,
                    backgroundColor: COLORS.white,
                    flexDirection: "row"
                }}
            >
                <View style={{
                    flexDirection:"row",
                    }}>
                <Card.Content
                    style={{
                        padding: SIZES.padding*2
                    }}
                >
                    <AntDesign name="questioncircleo" size={30} color={COLORS.blue} />
                </Card.Content>
                <Card.Content
                    style={{
                        width: "63%",
                        padding: SIZES.padding*2
                    }}
                >
                    <Text
                        style={{fontWeight: "bold"}}
                    >
                        {title}
                    </Text>
                    <Text
                        style={{
                            color:COLORS.secondary,
                            top: 15
                        }}
                    >20 mins</Text>
                </Card.Content>
                <Card.Content
                    style={{
                        padding: SIZES.padding*2,
                    }}
                >
                    <Text
                        style={{
                            color:COLORS.blue
                        }}
                    >3/10</Text>
                    <Text
                        style={{
                            color: COLORS.blue
                        }}
                    >Marks</Text>
                </Card.Content>
                </View>
            </Card>
            )
        }

        return(
                <FlatList
                    data={modules}
                    renderItem={({item}) => <Item title={item.title} />}
                    keyExtractor={item => item.id}
                    horizontal={false}
                />
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {/* {renderStartLearning()} */}
            {/* {renderCompleted()} */}
            {/* {renderSummary()} */}
            {renderModules()}
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


export default Quiz;