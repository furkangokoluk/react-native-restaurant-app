import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

export default function ResultShowScreen({ route }) {
    const [result, setResult] = useState(null);

    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Image
                style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null}
            />
            <View style = {styles.icon}>
            {
                result.is_closed ? <Ionicons name="lock-closed-outline" size={35} color="black" /> 
                : <MaterialIcons name="delivery-dining" size={35} color="black" />
            }
            </View>

            <Text style={styles.phone}>{result.phone}</Text>
            <FlatList style={styles.adres}
                horizontal={false}
                numColumns={3}
                data={result.location.display_address}
                renderItem={({ item }) => {
                    return (
                        <Text>{item}</Text>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 300,
        borderRadius: 10,
        marginBottom: 5,
        marginLeft: 5,
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginVertical: 10,
        backgroundColor: "lightblue",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    phone: {
        alignSelf: "center",
        fontSize: 20,
        marginVertical: 10,
        backgroundColor: "green",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20
    },
    adres: {
        marginLeft: 8,
        fontSize: 18,
        marginVertical: 10,
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginRight : 8
    },
    icon : {
        alignSelf :"center",
    }
});
