import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
    ScrollView
} from "react-native";
import { StatusBar } from 'expo-status-bar';
import { 
    Stack,  
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

    const schoolData = [
        {
            id: 1,
            name: "Saint Paul Comprehensive College",
            icon: "https://i.postimg.cc/J08pQNGB/concept-mot-science-23-2148533907.jpg",
        },
        {
            id: 2,
            name: "GBHS Atiela",
            icon: "https://i.postimg.cc/9fjw0JST/Adobe-Stock-60467600-cup.webp",
        },
        {
            id: 3,
            name: "Bayelle",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 4,
            name: "GBHS Downtown",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 5,
            name: "Educare",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 6,
            name: "Sacred Heart",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        }
    ]

    const courseData = [
        {
            id: 1,
            name: "Fundamentals of biology",
            icon: "https://i.postimg.cc/J08pQNGB/concept-mot-science-23-2148533907.jpg",
        },
        {
            id: 2,
            name: "Matrices",
            icon: "https://i.postimg.cc/9fjw0JST/Adobe-Stock-60467600-cup.webp",
        },
        {
            id: 3,
            name: "Newtons' law",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 4,
            name: "Cameroon history",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 5,
            name: "Educare",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        },
        {
            id: 6,
            name: "Sacred Heart",
            icon: "https://i.postimg.cc/kgSt7kjq/photo-1610563166150-b34df4f3bcd6-ixlib-rb-4-0.jpg",
        }
    ]


    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    // const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    // function onSelectCategory(category) {
    //     //filter restaurant
    //     let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

    //     setRestaurants(restaurantList)

    //     setSelectedCategory(category)
    // }

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
                    padding: SIZES.padding
                }}
            >
                <TextInput
                    // variant='outlined'
                    // leading={props => <Icon name="search" {...props} />}
                    // leading={props => <AntDesign name="search1" size={25} color="black" />}
                    placeholder='Search for a course'
                    style={{
                        width: 300,
                        height: 40,
                        backgroundColor: '#fff',
                        paddingVertical: 10,
                        paddingHorizontal: 15,
                        borderColor: '#ccc',
                        borderWidth: 1,
                        borderRadius: 15, 
                        fontSize: 16,
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
                    // onPress={() => onSelectCategory(item)}
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
            <View style={{ padding: SIZES.padding * 2, paddingBottom: 10 }}>
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
                    top: 0,
                    paddingTop: 0
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: "#072a46",
                        height: "100%",
                        padding: 35,
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white,
                        }}
                        variant="h6"
                    >Institutions</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        backgroundColor: "#072a46",
                        height: "100%",
                        padding: 35
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.white
                        }}
                        variant="h6"
                    >Instructors</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderSchoolsAround() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        // borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        width: 150,
                        ...styles.shadow
                    }}
                    // onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 100,
                            height: 75,
                            // borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{uri: item.icon}}
                            resizeMode="contain"
                            style={{
                                width: 100,
                                height: 75
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
            <View style={{ padding: SIZES.padding * 2, marginTop: 20 }}>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Text>Schools Around You</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "60%",
                        bottom: 8,
                        left: 3
                    }}
                />
                </View>
                <FlatList
                    data={schoolData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderTeachersAround() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        // borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        width: 150,
                        ...styles.shadow
                    }}
                    // onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 100,
                            height: 75,
                            // borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{uri: item.icon}}
                            resizeMode="contain"
                            style={{
                                width: 100,
                                height: 75
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
            <View style={{ padding: SIZES.padding * 2, paddingTop: 0, top: 0 }}>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Text>Teachers Around You</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "60%",
                        bottom: 8,
                        left: 3
                    }}
                />
                </View>
                <FlatList
                    data={schoolData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRecommended() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        // borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        width: 150,
                        ...styles.shadow
                    }}
                    // onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 100,
                            height: 75,
                            // borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={{uri: item.icon}}
                            resizeMode="contain"
                            style={{
                                width: 100,
                                height: 75
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
                    <Button 
                        variant="outlined" 
                        title="Enrol"
                        style={{
                            width: "100%"
                        }}
                        onPress={() => navigation.navigate("Course")}
                    />
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ 
                padding: SIZES.padding * 2, 
                paddingTop: 0, 
                top: 0,
                marginBottom: SIZES.padding *3
                }}>
                <View
                    style={{
                        flexDirection: "row"
                    }}
                >
                    <Text>Recommended</Text>
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        width: "60%",
                        bottom: 8,
                        left: 3
                    }}
                />
                </View>
                <FlatList
                    data={courseData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    { renderHeader() }
                    {renderMainCategories()}
                    {renderStatus()}
                    {renderSchoolsAround()}
                    {renderTeachersAround()}
                    {renderRecommended()}
                </ScrollView>
                
                {/* {renderRestaurantList()} */}
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