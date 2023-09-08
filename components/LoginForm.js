import React, {useContext} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useAuthentication} from '../hooks/ApiHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';
import {Button, Input, Card} from '@rneui/themed';
import {Alert} from 'react-native';

const LoginForm = () => {
  const {postLogin} = useAuthentication();
  const {setIsLoggedIn, setUser} = useContext(MainContext);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const logIn = async (loginData) => {
    console.log('Login button pressed');
    try {
      const loginResponse = await postLogin(loginData);
      console.log('login response', loginResponse);
      // TODO: fix dofetch() to display errors from API (e.g when bad user/pw)
      // use loginResponse.user for storing token & userdata
      await AsyncStorage.setItem('userToken', loginResponse.token);
      setIsLoggedIn(true);
      setUser(loginResponse.user);
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <Card>
      <Card.Title>Login form</Card.Title>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.username?.message}
          />
        )}
        name="username"
      />

      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />

      <Button title="Login" onPress={handleSubmit(logIn)} />
    </Card>
  );
};

export default LoginForm;
