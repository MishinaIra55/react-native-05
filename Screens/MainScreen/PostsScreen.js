import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";


export const PostsScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text}>
                <View style={styles.imageContainer}>
                <Image source={require("../../assets/images/foto.png")} style={styles.image}/>
                </View>
                <View style={{ display: "flex", flexDirection:"column" }}>
                    <Text style={styles.name}>Natali Romanova</Text>
                    <Text style={styles.email}>email@example.com</Text>
                </View>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        paddingTop: 32,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 15,
    },
    email: {
        fontWeight: '400',
        fontSize: 11,
        lineHeight: 13,
        color: 'rgba(33, 33, 33, 0.8)',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 16,
    },
    imageContainer: {
        paddingLeft: 16,
        paddingRight: 8,
    }

});