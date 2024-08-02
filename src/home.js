/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { Icon, Button } from '@rneui/base';
import React, { useState, useEffect, } from 'react';
import { FlatList, StatusBar, Text, View, ActivityIndicator, Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts'
const Home = () => {

    // Variable which is used for store static data for whole meals
    const Wholedata = [
        {
            name: 'Keto bento veg box meal',
            id: 1,
            type: 'routine',
            dish: 'Pickup meals',
            actual_rate: 200,
            discount_rate: 179,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-u0yCpeCHRXtoPE_fKuBHqnI5owL-0gimA&s',
            kcal: '250',
            productDetails: "This meal has high protein which will help you develop muscles and high fibre",
        },
        {
            name: 'Low-carb protein bowl',
            id: 2,
            type: 'premium',
            dish: 'Delivery meals',
            actual_rate: 250,
            discount_rate: 225,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREq_xd_QdEOo2sfFIMiQn8Xh_wlHmW5cFCg&s',
            kcal: '300',
            productDetails: "Packed with lean protein and healthy fats for sustained energy",
        },
        {
            name: 'Vegan green curry',
            id: 3,
            type: 'special',
            dish: 'Frozen meals',
            actual_rate: 180,
            discount_rate: 162,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0qS64dJGGqma0JnznQ3fdZseEUWiehZQqw&s',
            kcal: '220',
            productDetails: "Plant-based goodness with a spicy kick",
        },
        {
            name: 'Mediterranean salad box',
            id: 4,
            type: 'sesonal',
            dish: 'Pickup meals',
            actual_rate: 190,
            discount_rate: 171,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKs8y0w59Tm7HJs3Sa5TKjA9LBeK4955l7aQ&s',
            kcal: '180',
            productDetails: "Fresh and flavorful, perfect for a light lunch",
        },
        {
            name: 'Chicken tikka masala',
            id: 5,
            type: 'premium',
            dish: 'Delivery meals',
            actual_rate: 230,
            discount_rate: 207,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsbqHJKhIn_NewuxOcPpW0GAdD4WAy5QsBQA&s',
            kcal: '350',
            productDetails: "Classic Indian dish with a rich and creamy sauce",
        },
        {
            name: 'Shrimp scampi',
            id: 6,
            type: 'sesonal',
            dish: 'Pickup meals',
            actual_rate: 280,
            discount_rate: 252,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-7nQq3r6O7xQpyn66JxuDQrrUYPnBtnZZgw&s',
            kcal: '320',
            productDetails: "Delicious seafood with garlic and butter sauce",
        },
        {
            name: 'Beef stir-fry',
            id: 7,
            type: 'routine',
            dish: 'Delivery meals',
            actual_rate: 240,
            discount_rate: 216,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSABlX3Ge0Aa4WgpqbeK9KUOJq5voZHi2Pnqw&s',
            kcal: '310',
            productDetails: "Packed with flavor and vegetables",
        },
        {
            name: 'Salmon with roasted vegetables',
            id: 8,
            type: 'premium',
            dish: 'Pickup meals',
            actual_rate: 270,
            discount_rate: 243,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFx2N2ZINSdlywuIoClvIrKmmG7iivRnVAtQ&s',
            kcal: '300',
            productDetails: "Healthy and satisfying meal with omega-3 fatty acids",
        },
        {
            name: 'Lentil soup and whole grain bread',
            id: 9,
            type: 'seasonal',
            dish: 'Frozen meals',
            actual_rate: 160,
            discount_rate: 144,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjMmwEXGiszbMoee0oclqv-SZshADHE54K3Q&s',
            kcal: '200',
            productDetails: "Warm and comforting vegetarian option",
        },
        {
            name: 'Chicken Caesar salad',
            id: 10,
            type: 'routine',
            dish: 'Pickup meals',
            actual_rate: 210,
            discount_rate: 189,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCISrx3ISaGW1aAOM9kVlifUL4ZfMgycBUzg&s',
            kcal: '280',
            productDetails: "Classic salad with grilled chicken and croutons",
        }
    ];
    // Variable which is used for store pie chart data
    const pieDataArray = [
        {
            key: 1,
            amount: 50,
            svg: { fill: '#344055' },
        },
        {
            key: 2,
            amount: 50,
            svg: { fill: '#344055' }
        },
        {
            key: 3,
            amount: 50,
            svg: { fill: '#7F55DA' }
        },
    ];
    // Variable which is used for list footer loader
    const [isLimit, setIsLimit] = useState(false);
    // variable which is used for store chunk data
    const [data, setData] = useState([]);
    // Variable which is used for store limit for flat list render
    const [limit, setLimit] = useState(5);
    // Variable which is used for store offset for flat list render
    const [offset, setOffset] = useState(0);
    //    useEffect used for call getInitialData function
    useEffect(() => {
        getInitialData(0, 5);
    }, []);

    //Function which is used for product data 
    const getInitialData = (offset, limit) => {
        if (Wholedata?.length > offset) {
            let arr = [];
            for (let i = offset; i < limit; i++) {
                if (i > Wholedata?.length) {
                    break;
                }
                else {
                    arr.push(Wholedata[i]);
                }
            }
            setData(prev => [...prev, ...arr]);
        }
        setIsLimit(false);
    }

    // Function which is used to Render Footer
    const RenderFooter = () => {
        return isLimit ? (
            <View style={{ flex: 1, marginBottom: 20 }}>
                <ActivityIndicator size="large" color={'black'} />
            </View>
        ) : null;
    };

    // function which is used for render flat list
    const render = ({ item }) => {
        return (
            <View style={{ flex: 1, borderBottomWidth: 1, paddingBottom: 7, marginHorizontal: 10, borderColor: '#c6f9f7' }}>
                <View style={{ flex: 1, marginTop: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View>
                        <View style={{ flexDirection: "row", alignItems: 'center' }}>
                            <View style={{ borderWidth: 1, height: 16, width: 16, justifyContent: 'center', borderColor: item?.type === 'premium' ? "green" : "#8d7d5d" }}>
                                <Icon name={item.type === 'routine' ? 'circle' : 'triangle'} type={item.type === 'routine' ? 'font-awesome' : 'ionicon'} size={10} color={item?.type === 'premium' ? "green" : "#8d7d5d"} />
                            </View>
                            <Text style={{ color: '#8d7d5d', fontSize: 12, marginLeft: 7, padding: 2, backgroundColor: '#ffe4e4', borderRadius: 5, paddingHorizontal: 10, fontWeight: '600' }}>{item?.kcal} kcal</Text>
                            <Text style={{
                                marginLeft: 12, fontSize: 12, padding: 2, backgroundColor: item?.type === 'premium' ? '#f7f0e1' : item?.type === 'sesonal' ? '#eefafb' : '#eaf3ff', borderRadius: 5, paddingHorizontal: 10, color: item?.type === 'premium' ? '#a87f26' : item?.type === 'sesonal' ? '#6b9295' : '#1270ec', fontWeight: '600',
                            }}>{item?.type}</Text>
                        </View>
                        <View style={{ marginTop: 9 }}>
                            <Text style={{ color: 'black', fontWeight: '700', fontSize: 16 }}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginTop: 7, padding: 2, paddingHorizontal: 9, alignItems: "center", backgroundColor: '#e2fefc', borderRadius: 7 }}>
                            <Icon name='silverware-fork-knife' type='material-community' size={12} />
                            <Text style={{ color: '#646363', fontWeight: '500', marginLeft: 5 }}>{item.dish}</Text>
                        </View>
                        <Text style={{ color: 'black', marginTop: 7, fontWeight: '700', fontSize: 14 }}>₹{item.discount_rate} <Text style={{ textDecorationLine: 'line-through', color: '#797979', fontWeight: '600', fontSize: 12 }}>₹{item?.actual_rate}</Text></Text>
                    </View>
                    <View>
                        <Image source={{ uri: item?.image }} style={{ height: 120, resizeMode: 'cover', width: 120, borderRadius: 20 }} />
                    </View>
                </View>
                <View style={{ flex: 1, marginTop: 10, paddingHorizontal: 10, backgroundColor: '#e2fefc', height: 50, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Text numberOfLines={2} style={{ color: '#646363', fontSize: 12, flex: 0.8, fontWeight: '500' }}>{item?.productDetails}</Text>
                    <Button title='Order' buttonStyle={{ backgroundColor: '#475ee7', paddingVertical: 4, paddingHorizontal: 30, borderRadius: 20 }} />
                </View>
            </View >
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar barStyle={"white"} backgroundColor={'#192231'} />
            <View style={{ height: 250, backgroundColor: "#192231" }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name='location-sharp' type='ionicon' size={25} color={'#7F55DA'} />
                        <View style={{ width: 130, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text numberOfLines={1} style={{ fontSize: 12, flex: 1, fontWeight: '500' }}>Home : IIM,Vatsara near Gandhi mall</Text>
                            <Icon name='chevron-down' type='ionicon' color={'#98ecd7'} size={15} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={{ fontSize: 12, marginRight: 10, fontWeight: '400', color: '#98ecd7' }}>Athlete</Text>
                        <View style={{ borderColor: 'white', justifyContent: 'center', borderWidth: 0.5, height: 30, width: 30, borderRadius: 30 / 2 }}>
                            <Icon name='person' type='octicon' color={'white'} size={18} />
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', marginHorizontal: 8, alignItems: 'center' }}>
                    <View style={{ borderRadius: 7, flex: 0.25, backgroundColor: '#2a3039', paddingHorizontal: 15, paddingVertical: 7 }}>
                        <Text style={{ color: '#5c857b', fontSize: 14 }}>Deliver Now</Text>
                    </View>
                    <View style={{ borderRadius: 7, backgroundColor: '#344055', paddingHorizontal: 10, flex: 0.72, paddingVertical: 7, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                        <Text style={{ marginRight: 5, color: 'white', fontWeight: 'bold' }}>Breakfast <Text style={{ fontWeight: '400', color: "#5c857b" }}>(1:30pm - 2.00 pm)</Text></Text>
                        <Icon name='chevron-down' type='ionicon' color={'white'} size={15} style={{ justifyContent: 'flex-end' }} />
                    </View>
                </View>
                <View style={{ backgroundColor: '#2a3039', height: 150, marginTop: 7, paddingVertical: 18, marginHorizontal: 10, borderRadius: 10, flexDirection: 'row', justifyContent: "space-around" }}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.19, borderColor: 'white' }}>
                        <Text style={{ fontWeight: '600' }}>You need</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white' }}>250-350 kcal</Text>
                        <Text style={{ fontWeight: '600' }}>recommended</Text>
                    </View>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ marginTop: -40 }}>
                            <PieChart
                                style={{ height: 200 }}
                                valueAccessor={({ item }) => item.amount}
                                data={pieDataArray}
                                spacing={0}
                                outerRadius={'65%'}
                            />
                            <View style={{ marginTop: 90, marginLeft: 40, position: 'absolute', flexDirection: "row", alignItems: "center" }}>
                                <Icon name='arrow-left' type='materialicons' color={'white'} />
                                <Text style={{ fontWeight: 'bold', backgroundColor: "white", color: 'black', borderRadius: 30, paddingHorizontal: 7, marginLeft: -5, fontSize: 12, }}>Breakfast</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={render}
                    keyExtractor={((item, index) => index.toString())}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    onEndReached={() => {
                        if (offset < Wholedata?.length) {
                            setOffset(prev => prev + limit)
                            setLimit(prev => prev + 5)
                            setIsLimit(true)
                            setTimeout(() => {
                                getInitialData(offset + limit, limit + 5)
                            }, 1000)
                        }
                    }}
                    ListFooterComponent={<RenderFooter />}
                />
            </View>

            <View style={{ position: "absolute", bottom: 40, width: "90%", height: 55, alignSelf: "center", borderRadius: 10, }}>
                <View style={{ zIndex: 4, justifyContent: "space-between", alignItems: "center", flex: 1, paddingHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}>
                        <View style={{ backgroundColor: "white", paddingHorizontal: 10, padding: 2, borderRadius: 4 }}>
                            <Text style={{ color: "green", fontSize: 12, fontWeight: 'bold' }}>Breakfast</Text>
                        </View>
                        <View >
                            <Text style={{ color: "grey", fontSize: 12 }}>scheduled</Text>
                            <Text style={{ color: "white", fontSize: 11, fontWeight: '500', marginTop: 5 }}>today, 9:30 am - 10:00 am</Text>
                        </View>
                    </View>
                    <View>
                        <Icon name='chevron-right' type='material-community' size={22} color={"grey"} />
                    </View>
                </View>
                <View style={{ position: "absolute", zIndex: 3, height: "100%", width: "100%", backgroundColor: '#2a3039', borderRadius: 15, elevation: 2, shadowColor: "#7D786C", }} />
                <View style={{ position: "absolute", zIndex: 2, marginTop: 8, height: "100%", width: "100%", backgroundColor: "#2a3039", borderRadius: 15, elevation: 1, shadowColor: "#7D786C" }} />
                <View style={{ position: "absolute", zIndex: 1, marginTop: 18, height: "100%", width: "100%", backgroundColor: "#2a3039", borderRadius: 15 }} />
            </View>
        </View >
    );
};
export default Home;
