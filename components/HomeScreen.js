import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Text } from '@rneui/themed';

const categories = [
    { 
      id: 1, 
      title: 'Lens Types', 
      items: [
        {
          name: 'Single Vision',
          description: 'For single distance',
          image: null
        },
        {
          name: 'Bifocal',
          description: 'Two viewing areas',
          image: null
        },
        {
          name: 'Progressive',
          description: 'Seamless transition',
          image: null
        },
        {
          name: 'Office',
          description: 'Computer work',
          image: null
        },
        {
          name: 'Sports',
          description: 'Active lifestyle',
          image: null
        },
        {
          name: 'Drive',
          description: 'For driving',
          image: null
        }
      ]
    },
    { 
      id: 2, 
      title: 'Materials', 
      items: [
        {
          name: 'BXM',
          description: 'High-index material',
          image: null
        },
        {
          name: 'Photochromic',
          description: 'Adapts to light',
          image: null
        },
        {
          name: 'Polarized',
          description: 'Reduces glare',
          image: null
        },
        {
          name: 'Tints',
          description: 'Color options',
          image: null
        },
        {
          name: 'Thickness',
          description: 'Various thickness',
          image: null
        }
      ]
    },
    { 
      id: 3, 
      title: 'Coating', 
      items: [
        {
          name: 'Protective',
          description: 'Scratch resistant',
          image: null
        },
        {
          name: 'Mirror',
          description: 'Stylish finish',
          image: null
        },
        {
          name: 'Specialized',
          description: 'Special needs',
          image: null
        }
      ]
    }
   ];

const PlaceholderTile = () => (
  <View style={styles.placeholderTile}>
    <Text style={styles.placeholderText}>No Image</Text>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <View key={category.id}>
          <Text h4 style={styles.categoryTitle}>
            {category.title}
          </Text>
          <View style={styles.tilesContainer}>
            {category.items.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={styles.tile}
                onPress={() => navigation.navigate('Product', { 
                  title: item.name,
                  description: item.description,
                  image: item.image
                })}
              >
                <View style={styles.tileContent}>
                  {item.image ? (
                    <Card.Image
                      source={item.image}
                      style={styles.tileImage}
                    />
                  ) : (
                    <PlaceholderTile />
                  )}
                  <Text style={styles.tileName}>{item.name}</Text>
                  <Text style={styles.tileDescription}>
                    {item.description}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  categoryTitle: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#2089dc',
    fontWeight: 'bold',
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: '31%', // slightly less than 33.33% to account for spacing
    marginBottom: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  tileContent: {
    padding: 8,
  },
  tileImage: {
    height: 80,
    borderRadius: 4,
    marginBottom: 8,
  },
  placeholderTile: {
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 12,
  },
  tileName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  tileDescription: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  }
});

export default HomeScreen;