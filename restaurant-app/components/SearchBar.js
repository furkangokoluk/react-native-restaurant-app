import { AntDesign } from '@expo/vector-icons';
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
            <TextInput style={styles.inputStyle} placeholder='Ara' autoCapitalize='none'
                value={term} onChangeText={onTermChange} onEndEditing={onTermSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "lightgray",
        flexDirection: "row",
        margin: 10,
        height: 50,
        alignItems: "center",
        borderRadius: 20,
    },
    iconStyle: {
        marginHorizontal: 15,

    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    }
});
