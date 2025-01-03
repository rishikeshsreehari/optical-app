// components/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const categories = [
  { id: 1, title: 'Lens Types', items: ['Single Vision', 'Bifocal', 'Progressive', 'Office', 'Sports', 'Drive'] },
  { id: 2, title: 'Materials', items: ['BXM', 'Photochromic', 'Polarized', 'Tints', 'Thickness'] },
  { id: 3, title: 'Coating', items: ['Protective Coating', 'Mirror Coating', 'Specialized Coating'] },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <View key={category.id} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{category.title}</Text>
          <View style={styles.tilesContainer}>
            {category.items.map((item) => (
              <TouchableOpacity
                key={item}
                style={styles.tile}
                onPress={() => navigation.navigate('Product', { title: item })}
              >
                <Text style={styles.tileText}>{item}</Text>
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
    padding: 10,
  },
  categoryContainer: {
    marginBottom: 20,
    alignItems: 'center', // Center align the category container
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center', // Center align the title text
  },
  tilesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%', // Ensure the tiles container takes full width
  },
  tile: {
    width: '48%',
    backgroundColor: '#e0e0e0',
    padding: 20,
    borderRadius: 8,
    marginBottom: 10,
  },
  tileText: {
    textAlign: 'center',
  },
});

export default HomeScreen;