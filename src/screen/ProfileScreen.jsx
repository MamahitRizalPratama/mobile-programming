import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';

import theme from '../../assets/theme';
import API from '../services/api';

const { colors } = theme;

export default function ProfileScreen() {

  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [selectedId, setSelectedId] = useState(null);

  // ================= GET =================
  const getUsers = async () => {
    try {

      const response = await API.get('/users');

      setUsers(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // ================= POST =================
  const addUser = async () => {

    if (!name || !email) {
      Alert.alert('Isi semua data');
      return;
    }

    try {

      const response = await API.post('/users', {
        name,
        email,
      });

      setUsers([...users, response.data]);

      setName('');
      setEmail('');

      Alert.alert('Data berhasil ditambah');

    } catch (error) {
      console.log(error);
    }
  };

  // ================= PUT =================
  const updateUser = async () => {

    try {

      const response = await API.put(`/users/${selectedId}`, {
        name,
        email,
      });

      const updatedData = users.map((item) =>
        item.id === selectedId
          ? response.data
          : item
      );

      setUsers(updatedData);

      setSelectedId(null);

      setName('');
      setEmail('');

      Alert.alert('Data berhasil diupdate');

    } catch (error) {
      console.log(error);
    }
  };

  // ================= DELETE =================
  const deleteUser = async (id) => {

    try {

      await API.delete(`/users/${id}`);

      const filtered = users.filter(
        (item) => item.id !== id
      );

      setUsers(filtered);

      Alert.alert('Data berhasil dihapus');

    } catch (error) {
      console.log(error);
    }
  };

  // ================= EDIT =================
  const selectUser = (item) => {

    setSelectedId(item.id);

    setName(item.name);

    setEmail(item.email);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Profile REST API
      </Text>

      {/* INPUT */}
      <TextInput
        placeholder="Nama"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      {/* BUTTON */}
      {selectedId ? (
        <TouchableOpacity
          style={styles.button}
          onPress={updateUser}
        >
          <Text style={styles.buttonText}>
            UPDATE
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={addUser}
        >
          <Text style={styles.buttonText}>
            POST DATA
          </Text>
        </TouchableOpacity>
      )}

      {/* LIST */}
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.name}>
              {item.name}
            </Text>

            <Text style={styles.email}>
              {item.email}
            </Text>

            <View style={styles.row}>

              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => selectUser(item)}
              >
                <Text style={styles.btnText}>
                  PUT
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteUser(item.id)}
              >
                <Text style={styles.btnText}>
                  DELETE
                </Text>
              </TouchableOpacity>

            </View>

          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.light(),
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.dark(),
    marginBottom: 20,
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 10,
    elevation: 2,
  },

  button: {
    backgroundColor: colors.primary(),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.dark(),
  },

  email: {
    color: colors.textSecondary(),
    marginTop: 5,
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },

  editBtn: {
    flex: 1,
    backgroundColor: '#3B82F6',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  deleteBtn: {
    flex: 1,
    backgroundColor: '#EF4444',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});