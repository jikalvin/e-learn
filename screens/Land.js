import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
    Stack, 
    TextInput, 
    IconButton,
    Text,
    Button } from "@react-native-material/core";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { AntDesign } from '@expo/vector-icons';


const Home = ({ navigation }) => {

      // Dummy Datas

      const initialCurrentLocation = {
        streetName: "Kuching",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Sciences",
            icon: "https://i.postimg.cc/J08pQNGB/concept-mot-science-23-2148533907.jpg",
        },
        {
            id: 2,
            name: "Maths",
            icon: "https://i.postimg.cc/9fjw0JST/Adobe-Stock-60467600-cup.webp",
        },
        {
            id: 3,
            name: "Computer",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 4,
            name: "Language and vocabulary",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 5,
            name: "Social sciences",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 6,
            name: "Geography",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        }
    ]

    

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ 
                flexDirection: 'column', 
                backgroundColor: COLORS.blue,
                top: 0
                }}>
            <View style={{ 
                flexDirection: 'row', 
                height: 50, 
                backgroundColor: COLORS.blue }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.user}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.white
                        }}
                    />
                    {}
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            // backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            // borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3, color:COLORS.white  }}>E-LEARN</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Ionicons 
                        name="notifications" 
                        size={30} 
                        color={COLORS.white} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    alignItems:"center",
                    justifyContent: "center",
                    padding: 20
                }}
            >
                <TextInput
                    variant='outlined'
                    // leading={props => <Icon name="search" {...props} />}
                    leading={props => <AntDesign name="search1" size={25} color="black" />}
                    style={{
                        borderColor: "#2196F3",
                        width: "70%",
                    }}
                    inputContainerStyle={{
                        borderColor: "#2196F3",
                        padding: 0
                    }}
                    inputStyle = {{
                        padding: 0
                    }}
                />
            </View>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{uri: item.icon}}
                            resizeMode="contain"
                            style={{
                                width: 50,
                                height: 50
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderStatus(){
        return(
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    flexDirection: "row",
                    top: 0
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "#072a46",
                        height: "100%",
                        padding: 40,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                        }}
                        variant="h6"
                    >Student</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#072a46",
                        height: "100%",
                        padding: 40
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white
                        }}
                        variant="h6"
                    >Instructor</Text>
                </TouchableOpacity>
            </View>
        )
    }

    

    return(
            <SafeAreaView style={styles.container}>
                { renderHeader() }
                {renderMainCategories()}
                {renderStatus()}
                <StatusBar style="light" backgroundColor={COLORS.blue} />
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

export default Home;