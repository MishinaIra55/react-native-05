import React, { useState} from "react";
import {View, StyleSheet, Image, Text } from "react-native";
import { Camera } from 'expo-camera';
import {TouchableOpacity} from "react-native-gesture-handler";
import Photo from "../../assets/images/camera.svg";
import * as Location from 'expo-location';


export const CreateScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');


    const takePhoto = async ()=> {
        const photo = await  camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        console.log("location", location);
        setPhoto(photo.uri);
        console.log("photo", photo);
    };

    const sendPhoto = () => {
        console.log("navigation", navigation);
        navigation.navigate('Posts', {photo});
    };


    return (
        <View style={styles.container}>
            <Camera style={styles.camera} ref={setCamera}>
                {photo && (
                    <View style={styles.takePhotoContainer}>
                        <Image source={{uri: photo}}  style={{width: 200, height: 200}}/>
                    </View>
                )}
                <TouchableOpacity
                    style={styles.cameraContainer}
                    onPress={takePhoto}>
                    <Photo/>
                </TouchableOpacity>
            </Camera>
            <View style={{marginBottom: 48}}>
                <Text>Загрузите фото</Text>
            </View>
            <View>
                <TouchableOpacity onPress={sendPhoto} style={styles.btn}>
                    <Text style={styles.btnText}>Опубликовать</Text>
                </TouchableOpacity>
            </View>

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

    cameraContainer: {
        marginTop: 90,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    takePhotoContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderWidth: 1,
        borderColor: '#fff',

    },
    btn: {
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 32,
    },

    btnText: {
        fontStyle: "normal",
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19,

        textAlign: "center",

        color: "#BDBDBD",
    },
});