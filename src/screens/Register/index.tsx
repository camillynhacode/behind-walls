import React, { useEffect } from "react"
import { Alert, Image, ScrollView, Text, View } from "react-native";
import { Form } from "../../components/Register/Form";
import { useAuth } from "../../contexts/AuthContext";
import styles from "./styles";


const Register = ({ route, navigation }: any) => {
    const UseAuth = useAuth();
    useEffect(() => {     
        UseAuth.logout()
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image 
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                />
                
            </View>
            <ScrollView>
                <Form navigation={navigation}/>
            </ScrollView>
        </View>
    );
}

export default Register;