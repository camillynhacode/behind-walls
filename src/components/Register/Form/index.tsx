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
            initialValues={{ email: '', password: '', nome: '', username: '', rg: '', contato: '', cep: '', zona: '', bairro: '', rua: '' }}
            onSubmit={ async (values) => {
                console.log(values)
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
