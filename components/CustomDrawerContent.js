// components/CustomDrawerContent.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const menuStructure = {
    'Lens Types': [
      'Single Vision', 'Bifocal', 'Progressive', 'Office', 'Sports', 'Drive'
    ],
    'Materials': [
      'BXM', 'Photochromic', 'Polarized', 'Tints', 'Thickness'
    ],
    'Coating': [
      'Protective Coating', 'Mirror Coating', 'Specialized Coating'
    ]
  };

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
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
        <View key={category}>
          <TouchableOpacity
            style={styles.categoryHeader}
            onPress={() => toggleCategory(category)}
          >
            <Text style={styles.menuText}>{category}</Text>
            <Text style={styles.arrow}>
              {expandedCategory === category ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
          
          {expandedCategory === category && items.map((item) => (
  <TouchableOpacity
    key={item}
    style={styles.submenuItem}
    onPress={() => {
      navigation.navigate('Main', {
        screen: 'Product',
        params: { title: item }
      });
    }}
  >
    <Text style={styles.submenuText}>{item}</Text>
  </TouchableOpacity>
))}
        </View>
      ))}

      <View style={styles.divider} />

      {['Filter', 'Contact', 'About', 'Language'].map((item) => (
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
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  arrow: {
    fontSize: 12,
  },
  submenuItem: {
    padding: 15,
    paddingLeft: 30,
    backgroundColor: '#f5f5f5',
  },
  submenuText: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 15,
  }
});

export default CustomDrawerContent;