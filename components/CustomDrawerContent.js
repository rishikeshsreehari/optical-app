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
    <DrawerContentScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.header}>
        <Text h3 style={styles.headerTitle}>Pixel Opticals</Text>
        <Text style={styles.headerSubtitle}>Premium Eye Care</Text>
      </View>
      
      <ListItem
        onPress={() => navigation.navigate('Main', { screen: 'Home' })}
        containerStyle={styles.menuItem}
      >
        <Icon name="home" type="material" color="#1e88e5" size={24} />
        <ListItem.Content>
          <ListItem.Title style={styles.menuText}>Home</ListItem.Title>
        </ListItem.Content>
      </ListItem>

      {Object.entries(menuStructure).map(([category, items]) => (
        <View key={category}>
          <ListItem
            onPress={() => setExpandedCategory(expandedCategory === category ? null : category)}
            containerStyle={[
              styles.menuItem,
              expandedCategory === category && styles.activeMenuItem
            ]}
          >
            <Icon {...getMenuIcon(category)} color="#1e88e5" size={24} />
            <ListItem.Content>
              <ListItem.Title style={styles.menuText}>{category}</ListItem.Title>
            </ListItem.Content>
            <Icon
              name={expandedCategory === category ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
              type="material"
              color="#1e88e5"
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
                  <View style={styles.submenuDot} />
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
          containerStyle={styles.menuItem}
        >
          <Icon {...getMenuIcon(item)} color="#1e88e5" size={24} />
          <ListItem.Content>
            <ListItem.Title style={styles.menuText}>{item}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingTop: 0,
  },
  header: {
    backgroundColor: '#1e88e5',
    padding: 20,
    paddingTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    color: '#ffffff',
    opacity: 0.8,
    fontSize: 14,
  },
  menuItem: {
    padding: 12,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  activeMenuItem: {
    backgroundColor: '#f1f3f5',
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  submenuContainer: {
    backgroundColor: '#f8f9fa',
    marginLeft: 16,
    marginRight: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  submenuItem: {
    paddingLeft: 50,
    backgroundColor: 'transparent',
  },
  submenuDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#1e88e5',
    marginRight: 8,
  },
  submenuText: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    marginVertical: 16,
    marginHorizontal: 16,
    backgroundColor: '#e9ecef',
    height: 1,
  }
});

export default CustomDrawerContent;