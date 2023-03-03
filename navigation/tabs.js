import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs"
import Svg, { Path } from 'react-native-svg';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { NavigationContainer } from '@react-navigation/native';

import Land from '../screens/Land';
import MyCourses from '../screens/MyCourses';
import Certifications from '../screens/Certifications';
import Downloaded from '../screens/Downloaded';
import ChatAI from '../screens/ChatAI';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, icons } from "../constants"

const Tab = createBottomTabNavigator();

const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: "center" }}>
                <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.blue }}></View>
                    <Svg
                        width={70}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.blue}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.blue }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.blue
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.blue
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

const CustomTabBar = (props) => {
    if (isIphoneX()) {
        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: COLORS.blue
                    }}
                ></View>
                <BottomTabBar
                    {...props.props}
                />
            </View>
        )
    } else {
        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

}

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#2196F3',
                position: 'absolute',
                borderTopWidth: 0,
                elevation: 0,
                left: 0,
                right: 0,
                bottom: 0,
            },
            })}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="Home"
                component={Land}
                options={{
                    tabBarIcon: ({ focused }) => (
                        // <Image
                        //     source={icons.cutlery}
                        //     resizeMode="contain"
                        //     style={{
                        //         width: 25,
                        //         height: 25,
                        //         tintColor: focused ? COLORS.primary : COLORS.secondary
                        //     }}
                        // />
                        <Entypo 
                            name="home"
                            size={30}
                            color={focused ? COLORS.primary : COLORS.white}
                            style={{
                                tintColor: focused ? COLORS.primary : COLORS.secondary,
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Library"
                component={MyCourses}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo 
                            name="book"
                            size={30}
                            color={focused ? COLORS.primary : COLORS.white}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Courses"
                component={Certifications}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name="md-school-sharp" 
                            size={30} 
                            color={focused ? COLORS.primary : COLORS.white} 
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Downloads"
                component={Downloaded}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo 
                            name="upload-to-cloud"
                            size={30}
                            color={focused ? COLORS.primary : COLORS.white}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Assistant"
                component={ChatAI}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <MaterialCommunityIcons 
                            name="message-bulleted" 
                            size={30} 
                            color={focused ? COLORS.primary : COLORS.white} />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs