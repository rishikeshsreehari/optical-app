// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ProductPage from './components/ProductPage';
import CustomDrawerContent from './components/CustomDrawerContent';

// Placeholder components for new routes
const FilterScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Filter Screen</Text>
  </View>
);

const ContactScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Contact Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About Screen</Text>
  </View>
);

const LanguageScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Change Language Screen</Text>
  </View>
);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerTitle: ''
        }}
      />
      <Stack.Screen 
        name="Product" 
        component={ProductPage}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen 
        name="Change Language" 
        component={LanguageScreen}
        options={{ title: 'Change Language' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen 
          name="Main" 
          component={MainStack}
          options={{
            headerShown: true,
            headerTitle: ''
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}