import {useForm, Controller} from 'react-hook-form';
import {useUser} from '../hooks/ApiHooks';
import {Button, Input, Card} from '@rneui/themed';
import {Alert} from 'react-native';
import {PropTypes} from 'prop-types';

const RegisterForm = ({setToggleRegister}) => {
  const {postUser, checkUsername} = useUser();

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
    reset,
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      full_name: '',
    },
    mode: 'onBlur',
  });

  const signIn = async (userData) => {
    try {
      delete userData.confirm_password;
      await postUser(userData);
      Alert.alert('Success', 'User created!');
      setToggleRegister(false);
      reset();
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <Card>
      <Card.Title>Register form</Card.Title>
      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
          minLength: {value: 3, message: 'min length is 3 characters'},
          validate: async (value) => {
            try {
              const isAvailable = await checkUsername(value);
              console.log('username validator', value, isAvailable);
              return isAvailable ? isAvailable : 'Username taken';
            } catch (error) {
              console.error(error);
            }
          },
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
          minLength: {value: 5, message: 'min length is 5 characters'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.password?.message}
          />
        )}
        name="password"
      />

      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
          validate: (value) => {
            const {password} = getValues();
            // console.log('getValues password', password);
            return value === password ? true : 'Passwords dont match!';
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Confirm password"
            secureTextEntry
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            errorMessage={errors.confirm_password?.message}
          />
        )}
        name="confirm_password"
      />

      <Controller
        control={control}
        rules={{
          required: {value: true, message: 'is required'},
          pattern: {
            // TODO: add better regexp for email      ^([a-zA-Z0-9_-].?)+@([a-zA-Z0-9-].?)+[a-z]{2,8}$    ^\S+@\+\.\S+$
            value: /\S+@\+\.\S+$/,
            message: 'must be a valid email',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.email?.message}
          />
        )}
        name="email"
      />

      <Controller
        control={control}
        rules={{
          required: false,
          minLength: {value: 3, message: 'min length is 3 characters'},
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            placeholder="Full name"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            errorMessage={errors.full_name?.message}
          />
        )}
        name="full_name"
      />

      <Button title="Register" onPress={handleSubmit(signIn)} />
    </Card>
  );
};

RegisterForm.propTypes = {
  setToggleRegister: PropTypes.func,
};

export default RegisterForm;
