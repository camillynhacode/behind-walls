// Formik x React Native example
import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';
import COLORS from '../../../styles/colors';

interface FormProps {}
export const Form = (props: FormProps) => (
  <Formik
    initialValues={{ email: '', password: '' }}
    onSubmit={values => console.log(values)}
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

        <TouchableOpacity onPress={handleSubmit}>
            <Text style={styles.registerText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    )}
  </Formik>
);