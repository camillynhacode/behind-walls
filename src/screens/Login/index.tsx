import React, {useEffect} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {Form} from '../../components/Login/Form';
import {useAuth} from '../../contexts/AuthContext';
import styles from './styles';

const Login = ({route, navigation}: any) => {
  const UseAuth = useAuth();
  useEffect(() => {
    UseAuth.logout();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Form navigation={navigation} />
    </View>
  );
};

export default Login;
