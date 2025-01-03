// components/CustomDrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  const menuStructure = {
    'Lens Types': [
      'Single Vision',
      'Bifocal',
      'Progressive',
      'Office',
      'Sports',
      'Drive'
    ],
    'Materials': [
      'BXM',
      'Photochromic',
      'Polarized',
      'Tints',
      'Thickness'
    ],
    'Coating': [
      'Protective Coating',
      'Mirror Coating',
      'Specialized Coating'
    ]
  };

  return (
    <DrawerContentScrollView>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.menuText}>Home</Text>
      </TouchableOpacity>

      {Object.entries(menuStructure).map(([category, items]) => (
        <View key={category} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.submenuItem}
              onPress={() => navigation.navigate('Product', { title: item })}
            >
              <Text style={styles.submenuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <View style={styles.divider} />

      {/* Additional menu items */}
      {['Filter', 'Contact', 'About', 'Change Language'].map((item) => (
        <TouchableOpacity
          key={item}
          style={styles.menuItem}
          onPress={() => navigation.navigate(item)}
        >
          <Text style={styles.menuText}>{item}</Text>
        </TouchableOpacity>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    padding: 15,
  },
  menuText: {
    fontSize: 16,
  },
  categoryContainer: {
    marginTop: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
  },
  submenuItem: {
    padding: 15,
    paddingLeft: 30,
  },
  submenuText: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
    marginHorizontal: 15,
  }
});

export default CustomDrawerContent;