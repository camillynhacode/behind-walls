// Formik x React Native example
import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';
import COLORS from '../../../styles/colors';
import { useAuth } from '../../../contexts/AuthContext';

interface FormProps {
    navigation: any
}
export const Form = (props: FormProps) => {
    const UseAuth = useAuth();
    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={ async (values) => {
                const logado = await UseAuth.login(values)
                
                if(logado){
                    return props.navigation.navigate('Home')
                }
                else{
                    props.navigation.navigate('Login', {
                        error: true
                    })
                }
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Não tem conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            )}
        </Formik>
    )

}
