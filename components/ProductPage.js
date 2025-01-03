// components/ProductPage.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProductPage = ({ route }) => {
  const [activeTab, setActiveTab] = useState('standard');
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/350x150' }}
        style={styles.banner}
      />
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'standard' && styles.activeTab]}
          onPress={() => setActiveTab('standard')}
        >
          <Text>Standard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'imprint' && styles.activeTab]}
          onPress={() => setActiveTab('imprint')}
        >
          <Text>Imprint</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>
        Product description for {activeTab} view of {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  banner: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  activeTab: {
    backgroundColor: '#c0c0c0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default ProductPage;