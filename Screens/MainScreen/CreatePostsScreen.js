import React from "react";
import {View, Text, StyleSheet,  Image} from "react-native";

export const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <View
                style={styles.avatar}
            >
                <Image
                    source={require("../../assets/images/avatarcreat.svg")}
                    style={styles.avatarBtn}
                />
            </View>
            <Text>Загрузите фото</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff"
    },
    avatar: {
        position: "relative",
        // top: -60,
        // transform: [{ translateX: -60 }],
        height: 240,
        width: 343,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    avatarBtn: {
        position: "absolute",
        top: 50,
        // right: -13,
        height: 60,
        width: 60,
        color:"#562",
    },
});