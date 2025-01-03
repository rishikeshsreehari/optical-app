// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '@rneui/themed';
import PolarizedPage from './components/PolarizedPage';

// Import components
import HomeScreen from './components/HomeScreen';
import CustomDrawerContent from './components/CustomDrawerContent';

const theme = {
  lightColors: {
    primary: '#1e88e5',       // Modern blue
    secondary: '#5e35b1',     // Deep purple
    background: '#ffffff',
    grey0: '#f8f9fa',        // Light grey for backgrounds
    grey1: '#f1f3f5',        // Slightly darker grey
    grey2: '#e9ecef',        // For borders
  },
  Button: {
    raised: true,
    borderRadius: 8,
  },
  Card: {
    borderRadius: 12,
    padding: 15,
  }
};

// Placeholder components
const ProductScreen = ({ route }) => (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text h4>{route.params?.title || 'Default Product'}</Text>
 </View>
);

const FilterScreen = () => (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text h4>Filter Screen</Text>
 </View>
);

const ContactScreen = () => (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text h4>Contact Screen</Text>
 </View>
);

const AboutScreen = () => (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text h4>About Screen</Text>
 </View>
);

const LanguageScreen = () => (
 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text h4>Language Screen</Text>
 </View>
);

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
 return (
   <Stack.Navigator
     screenOptions={{
       headerShown: false,
     }}
   >
     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen 
       name="Product" 
       component={ProductScreen}
       options={({ route }) => ({ 
         headerShown: true,
         title: route.params?.title 
       })}
     />
     <Stack.Screen 
        name="PolarizedPage" 
        component={PolarizedPage}
        options={{
          headerShown: true,
          title: 'Polarized Lenses'
        }}
      />
     <Stack.Screen name="Filter" component={FilterScreen} />
     <Stack.Screen name="Contact" component={ContactScreen} />
     <Stack.Screen name="About" component={AboutScreen} />
     <Stack.Screen 
       name="Language" 
       component={LanguageScreen}
       options={{ title: 'Change Language' }}
     />
   </Stack.Navigator>
 );
}

export default function App() {
 return (
   <SafeAreaProvider>
     <ThemeProvider theme={theme}>
       <NavigationContainer>
         <Drawer.Navigator
           drawerContent={(props) => <CustomDrawerContent {...props} />}
           screenOptions={{
             headerTitle: () => <Text h4 style={{ color: '#2089dc' }}>Pixel Opticals</Text>,
             headerTitleAlign: 'center',
             headerStyle: {
               height: 60,
               borderBottomWidth: 0,
               elevation: 0,
               shadowOpacity: 0,
             },
           }}
         >
           <Drawer.Screen name="Main" component={MainStack} />
         </Drawer.Navigator>
       </NavigationContainer>
     </ThemeProvider>
   </SafeAreaProvider>
 );
}