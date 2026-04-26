import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Wrench } from 'lucide-react-native';
import theme from '../../assets/theme';
import ListBlog from '../components/ListBlog';
import DetailScreen from './DetailScreen';
import { useFonts } from 'expo-font';

const { colors, fonts } = theme;

export default function HomeScreen() {
  const [loaded] = useFonts(fonts);
  const [selectedCategory, setSelectedCategory] = useState('Servis');

 
  const [selectedItem, setSelectedItem] = useState(null);

  if (!loaded) return null;

  const categories = ['Servis', 'Oli', 'Ban', 'Aki', 'Cuci'];


  if (selectedItem) {
    return (
      <DetailScreen
        item={selectedItem}
        onBack={() => setSelectedItem(null)}
      />
    );
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
          {categories.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(item)}
              style={{
                ...category.item,
                marginLeft: index === 0 ? 24 : 5,
                marginRight: index === categories.length - 1 ? 24 : 5,
                backgroundColor:
                  selectedCategory === item
                    ? colors.primary()
                    : colors.border(),
              }}
            >
              <Text
                style={{
                  ...category.title,
                  color:
                    selectedCategory === item
                      ? '#fff'
                      : colors.textSecondary(),
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* LIST */}
      <ListBlog
        styles={styles}
        category={selectedCategory}
        onSelect={setSelectedItem} 
      />

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
    fontSize: 20,
    fontFamily: 'Pjs-ExtraBold',
    color: colors.dark(),
  },
  listCategory: {
    paddingVertical: 10,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Pjs-SemiBold',
  },
});