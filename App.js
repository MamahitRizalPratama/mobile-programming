import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wrench } from 'lucide-react-native';
import theme from './assets/theme';
import ListBlog from './src/components/ListBlog';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const { colors, fonts } = theme;

export default function App() {
  const [loaded] = useFonts(fonts);
  const [selectedCategory, setSelectedCategory] = useState('Servis');
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.light()} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>ServiceGo</Text>
        <Wrench color={colors.primary()} size={24} />
      </View>

      {/* CATEGORY */}
      <View style={styles.listCategory}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => setSelectedCategory('Servis')}>
            <View style={{ ...category.item, marginLeft: 24 }}>
              <Text style={{ ...category.title, color: selectedCategory === 'Servis' ? colors.primary() : colors.textSecondary() }}>
                Servis
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedCategory('Oli')}>
            <View style={category.item}>
              <Text style={{ ...category.title, color: selectedCategory === 'Oli' ? colors.primary() : colors.textSecondary() }}>
                Oli
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedCategory('Ban')}>
            <View style={category.item}>
              <Text style={{ ...category.title, color: selectedCategory === 'Ban' ? colors.primary() : colors.textSecondary() }}>
                Ban
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedCategory('Aki')}>
            <View style={category.item}>
              <Text style={{ ...category.title, color: selectedCategory === 'Aki' ? colors.primary() : colors.textSecondary() }}>
                Aki
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedCategory('Cuci')}>
            <View style={category.item}>
              <Text style={{ ...category.title, color: selectedCategory === 'Cuci' ? colors.primary() : colors.textSecondary() }}>
                Cuci
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setSelectedCategory('Lainnya')}>
            <View style={{ ...category.item, marginRight: 24 }}>
              <Text style={{ ...category.title, color: selectedCategory === 'Lainnya' ? colors.primary() : colors.textSecondary() }}>
                Lainnya
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* LIST */}
      <ListBlog styles={styles} category={selectedCategory} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light(),
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  title: {
    fontSize: 22,
    fontFamily: 'bold',
    color: colors.dark(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.border(),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: 'medium',
    fontSize: 14,
    color: colors.textSecondary(),
  },
});