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

// App.js
function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,  // Hide stack navigator header
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
      />
      <Stack.Screen 
        name="Product" 
        component={ProductPage}
        options={({ route }) => ({ 
          headerShown: true,  // Show header only for product pages
          title: route.params.title 
        })}
      />
      {/* Other stack screens... */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerTitle: 'Pixel Opticals',
          headerTitleAlign: 'center',
          headerStyle: {
            height: 60,
            borderBottomWidth: 0,  // Remove border bottom
            elevation: 0,  // Remove shadow on Android
            shadowOpacity: 0,  // Remove shadow on iOS
          },
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          }
        }}
      >
        <Drawer.Screen 
          name="Main" 
          component={MainStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}