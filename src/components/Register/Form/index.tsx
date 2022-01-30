// Formik x React Native example
import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';
import COLORS from '../../../styles/colors';
import { useAuth } from '../../../contexts/AuthContext';
import api from '../../../services/api';

interface FormProps {
    navigation: any
}
export const Form = (props: FormProps) => {
    const UseAuth = useAuth();
    const register: any = async (data: any) => {
        const username = data && data.email ? data.email.split('@')[0] : '';
        const first_name = data && data.nome ? data.nome.split(' ')[0] : '';
        const last_name = data && data.nome ? data.nome.split(' ')[1] || '' : '';
        let work = false
        await api.post('usuarios/', {...data, username, first_name, last_name}).then(response => {
            work = true
        }).catch((error) => {
            console.log('error: ', error);
            
            work = false
        })  
        console.log({...data, username, first_name, last_name});

        return work
    }

    return (
        <Formik
            initialValues={{ email: '', password: '', nome: '', username: '', rg: '', contato: '', cep: '', zona: '', bairro: '', rua: '' }}
            onSubmit={ async (values) => {
                const registrado = await register(values)
                console.log(registrado);

            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome completo"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('nome')}
                    onBlur={handleBlur('nome')}
                    value={values.nome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="RG"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('rg')}
                    onBlur={handleBlur('rg')}
                    value={values.rg}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone ou celular"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('contato')}
                    onBlur={handleBlur('contato')}
                    value={values.contato}
                />

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />

                <TextInput
                    style={styles.input}
                    placeholder="CEP"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('cep')}
                    onBlur={handleBlur('cep')}
                    value={values.cep}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Zona"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('zona')}
                    onBlur={handleBlur('zona')}
                    value={values.zona}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Bairro"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('bairro')}
                    onBlur={handleBlur('bairro')}
                    value={values.bairro}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Rua"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('rua')}
                    onBlur={handleBlur('rua')}
                    value={values.rua}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={COLORS.secondaryColor}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            )}
        </Formik>
    )

}
