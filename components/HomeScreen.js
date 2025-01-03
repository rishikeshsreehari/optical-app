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
          image: require('../assets/images/home/single-vision.jpg')
        },
        {
          name: 'Bifocal',
          description: 'Two viewing areas',
          image: require('../assets/images/home/bifocals.jpg')

          
        },
        {
          name: 'Progressive',
          description: 'Seamless transition',
          image: require('../assets/images/home/progressive.jpg')},
        {
          name: 'Office',
          description: 'Computer work',
          image: require('../assets/images/home/office.jpg')
        },
        {
          name: 'Sports',
          description: 'Active lifestyle',
          image: require('../assets/images/home/sports.jpg')
        },
        {
          name: 'Drive',
          description: 'For driving',
          image: require('../assets/images/home/driving.jpg')
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
      backgroundColor: '#f8f9fa',
      padding: 12,
    },
    categoryTitle: {
      textAlign: 'center',
      marginVertical: 20,
      color: '#1e88e5',
      fontSize: 24,
      fontWeight: 'bold',
    },
    tilesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
    },
    tile: {
      width: '31%',
      marginBottom: 16,
      backgroundColor: '#ffffff',
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
    },
    tileContent: {
      padding: 12,
    },
    tileImage: {
      height: 90,
      borderRadius: 8,
      marginBottom: 10,
    },
    placeholderTile: {
      height: 90,
      backgroundColor: '#f1f3f5',
      borderRadius: 8,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    placeholderText: {
      color: '#868e96',
      fontSize: 12,
    },
    tileName: {
      fontSize: 14,
      fontWeight: '600',
      textAlign: 'center',
      marginBottom: 6,
      color: '#333',
    },
    tileDescription: {
      fontSize: 12,
      color: '#868e96',
      textAlign: 'center',
      lineHeight: 16,
    }
  });

export default HomeScreen;