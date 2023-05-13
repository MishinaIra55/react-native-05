import React from "react";
import {View,  StyleSheet} from "react-native";
import {Camera} from 'expo-camera';
import {TouchableOpacity} from "react-native-gesture-handler";
import Photo from "../../assets/images/camera.svg";

export const CreateScreen = () => {
    return (
        <View style={styles.container}>
            <Camera style={styles.camera}>
                <TouchableOpacity
                    style={styles.cameraContainer}
                    onPress={() => {
                }}>
                    <Photo/>
                </TouchableOpacity>
            </Camera>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        paddingTop: 32,
        paddingLeft: 16,
        paddingRight: 16,
    },
    //not work border background for camera
    camera: {
        height: 240,
        alignItems: "center",
        overflow:'hidden',
        borderRadius: 8,
        backgroundColor: '#BDBDBD',

    },
    // cameraBtn: {
    //     height:24,
    //     width: 24,
    //     backgroundColor: '#BDBDBD',
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
    cameraContainer: {
        marginTop: 90,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    }
});