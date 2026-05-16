import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Home,
  Compass,
  Bookmark,
  User,
} from 'lucide-react-native';

import HomeStack from './src/navigation/HomeStack';

import DiscoverScreen from './src/screen/DiscoverScreen';

import BookmarkScreen from './src/screen/BookmarkScreen';
import DiscoverStack from './src/navigation/DiscoverStack';

const Tab = createBottomTabNavigator();

export default function App() {

  const [bookmarks, setBookmarks] = useState([]);

  return (
    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: '#4F46E5',

          tabBarInactiveTintColor: '#999',

          tabBarStyle: {
            height: 60,
            paddingBottom: 5,
          },

          tabBarIcon: ({ color, size }) => {

            if (route.name === 'Home') {
              return <Home color={color} size={size} />;
            }

            if (route.name === 'Discover') {
              return <Compass color={color} size={size} />;
            }

            if (route.name === 'Bookmark') {
              return <Bookmark color={color} size={size} />;
            }

            if (route.name === 'Profile') {
              return <User color={color} size={size} />;
            }
          },
        })}
      >

        {/* HOME */}
        <Tab.Screen name="Home">
          {() => (
            <HomeStack
              bookmarks={bookmarks}
              setBookmarks={setBookmarks}
            />
          )}
        </Tab.Screen>

        {/* DISCOVER */}
        <Tab.Screen
          name="Discover"
          component={DiscoverStack}
        />

        {/* BOOKMARK */}
        <Tab.Screen name="Bookmark">
          {() => (
            <BookmarkScreen
              bookmarks={bookmarks}
            />
          )}
        </Tab.Screen>

        {/* PROFILE */}
        <Tab.Screen
          name="Profile"
          component={DummyScreen}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

function DummyScreen() {
  return null;
}