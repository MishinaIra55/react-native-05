import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {PostsScreen} from "./MainScreen/PostsScreen";

export const Home = () => {

    return (
        <View style={styles.container}>
            <PostsScreen />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});