import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import theme from '../../assets/theme';

const { colors } = theme;

export default function BookmarkScreen({ bookmarks }) {
  const data = bookmarks || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bookmark</Text>

      {bookmarks.length === 0 ? (
        <Text style={styles.empty}>Belum ada servis disimpan</Text>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />

              <View style={styles.content}>
                <Text style={styles.category}>{item.category}</Text>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          )}
        />
      )}
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
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark(),
    marginBottom: 10,
  },
  empty: {
    textAlign: 'center',
    marginTop: 50,
    color: colors.textSecondary(),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: 90,
    height: 90,
  },
  content: {
    padding: 10,
    justifyContent: 'space-between',
  },
  category: {
    fontSize: 12,
    color: colors.primary(),
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.dark(),
  },
  price: {
    fontSize: 13,
    color: colors.primary(),
    fontWeight: 'bold',
  },
});