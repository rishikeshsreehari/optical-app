// components/CustomDrawerContent.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { ListItem, Icon, Text, Divider } from '@rneui/themed';

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

  const getMenuIcon = (menuItem) => {
    switch(menuItem.toLowerCase()) {
      case 'home':
        return { name: 'home', type: 'material' };
      case 'lens types':
        return { name: 'visibility', type: 'material' };
      case 'materials':
        return { name: 'layers', type: 'material' };
      case 'coating':
        return { name: 'palette', type: 'material' };
      case 'filter':
        return { name: 'filter-list', type: 'material' };
      case 'contact':
        return { name: 'contact-mail', type: 'material' };
      case 'about':
        return { name: 'info', type: 'material' };
      case 'language':
        return { name: 'language', type: 'material' };
      default:
        return { name: 'lens', type: 'material' };
    }
  };

  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <Text h4 style={styles.headerText}>Pixel Opticals</Text>
      </View>
      
      <ListItem
        onPress={() => navigation.navigate('Main', { screen: 'Home' })}
        containerStyle={styles.listItem}
      >
        <Icon {...getMenuIcon('home')} color="#2089dc" />
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>Home</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {Object.entries(menuStructure).map(([category, items]) => (
        <View key={category}>
          <ListItem
            onPress={() => setExpandedCategory(expandedCategory === category ? null : category)}
            containerStyle={styles.listItem}
          >
            <Icon {...getMenuIcon(category)} color="#2089dc" />
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>{category}</ListItem.Title>
            </ListItem.Content>
            <Icon
              name={expandedCategory === category ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              type="material"
              color="#666"
            />
          </ListItem>
          
          {expandedCategory === category && (
            <View style={styles.submenuContainer}>
              {items.map((item) => (
                <ListItem
                  key={item}
                  onPress={() => {
                    navigation.navigate('Main', {
                      screen: 'Product',
                      params: { title: item }
                    });
                  }}
                  containerStyle={styles.submenuItem}
                >
                  <Icon name="panorama-fish-eye" type="material" size={8} color="#666" />
                  <ListItem.Content>
                    <ListItem.Title style={styles.submenuText}>{item}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          )}
        </View>
      ))}

      <Divider style={styles.divider} />

      {['Filter', 'Contact', 'About', 'Language'].map((item) => (
        <ListItem
          key={item}
          onPress={() => navigation.navigate('Main', { screen: item })}
          containerStyle={styles.listItem}
        >
          <Icon {...getMenuIcon(item)} color="#2089dc" />
          <ListItem.Content>
            <ListItem.Title style={styles.listItemTitle}>{item}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#2089dc',
    marginBottom: 8,
  },
  headerText: {
    color: '#fff',
    textAlign: 'center',
  },
  listItem: {
    paddingVertical: 12,
  },
  listItemTitle: {
    fontSize: 16,
  },
  submenuContainer: {
    backgroundColor: '#f9f9f9',
  },
  submenuItem: {
    paddingLeft: 50,
    backgroundColor: '#f9f9f9',
  },
  submenuText: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
    height: 1,
  }
});

export default CustomDrawerContent;