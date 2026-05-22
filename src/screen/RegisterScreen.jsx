import React, { useState } from 'react';

import {
  View,
  Text,
 StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import theme from '../../assets/theme';

const { colors } = theme;

export default function RegisterScreen({ navigation }) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Register
      </Text>

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.login}>
          Sudah punya akun? Login
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: colors.light(),
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary(),
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
    elevation: 2,
  },

  button: {
    backgroundColor: colors.primary(),
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  login: {
    marginTop: 20,
    textAlign: 'center',
    color: colors.primary(),
  },
});