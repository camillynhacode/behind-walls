import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const Welcome = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.image}
                    source={require('../../assets/images/welcome/welcome-image-1.png')}
                />
                <Text style={styles.text}>Bem vindo!</Text>
                <Text style={styles.textDescription}>Texto para fins ilustrativos!</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.buttonContinue}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Text style={styles.textButton}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Welcome;