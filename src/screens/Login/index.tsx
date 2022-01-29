import React from "react"
import { Image, Text, View } from "react-native";
import { Form } from "../../components/Login/Form";
import styles from "./styles";


const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
            </View>
            <Form />
        </View>
    );
}

export default Login;