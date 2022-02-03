import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList} from '../..';
import {useAppContext} from '../../context';
import {Colors, Theme} from '../../theme';

const Login = () => {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {login, isLoading} = useAppContext();

  const onPress = async () => {
    if (
      username.toLowerCase() === 'test00@test.com' &&
      password.toLowerCase() === 'password1234'
    ) {
      await login(username, password);
      navigation.navigate('Dashboard');
    } else {
      setError(true);
    }
  };

  React.useEffect(() => {
    if (username || password) {
      setError(false);
    }
  }, [username, password]);

  const isDisabled = !username.length || !password.length;

  if (isLoading) {
    return (
      <ActivityIndicator
        color={Colors.yellow}
        size={'large'}
        style={styles.loader}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      {error && <Text style={styles.errorText}>Invalid user or password</Text>}
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{...styles.button, opacity: isDisabled ? 0.5 : 1}}
        onPress={onPress}
        disabled={isDisabled}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.background,
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    color: Theme.text,
    fontSize: 28,
    marginBottom: 124,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    backgroundColor: Theme.card.background,
    borderRadius: 26,
    borderColor: 'transparent',
    color: Theme.text,
  },
  button: {
    backgroundColor: Theme.button.background,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    height: 52,
    borderRadius: 26,
    borderColor: 'transparent',
  },
  buttonText: {
    color: Theme.button.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.background,
  },
});

export default Login;
