import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform
} from 'react-native';
import { Text } from '@rneui/themed';

const SCREEN_WIDTH = Dimensions.get('window').width;

const COLORS = {
  grey: 'rgba(128, 128, 128, 0.4)',
  brown: 'rgba(139, 69, 19, 0.4)',
  green: 'rgba(0, 128, 0, 0.4)'
};

const COLOR_NAMES = {
  grey: 'Grey',
  brown: 'Brown',
  green: 'Green'
};

const PolarizedPage = () => {
  const [selectedColor, setSelectedColor] = useState('grey');
  const [viewMode, setViewMode] = useState('standard');

  return (
    <ScrollView style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageSection}>
        {/* Base Image with Blur */}
        <Image
          source={require('../assets/scenery.jpg')}
          style={[styles.baseImage]}
          resizeMode="cover"
          blurRadius={3}
        />

        {/* Lens Overlay */}
        <View style={styles.lensOverlay}>
          <View style={styles.lensContainer}>
            {/* Lens Border */}
            <View style={styles.lensBorder}>
              {/* Clear Image within Lens */}
              <Image
                source={require('../assets/scenery.jpg')}
                style={[
                  styles.clearImage,
                  { 
                    opacity: viewMode === 'standard' ? 0.85 : 1,
                    blurRadius: viewMode === 'standard' ? 0.5 : 0
                  }
                ]}
                resizeMode="cover"
              />
              {/* Color Tint Layer */}
              <View
                style={[
                  styles.tintLayer,
                  { backgroundColor: COLORS[selectedColor] }
                ]}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Controls Section */}
      <View style={styles.controlsSection}>
        <Text style={styles.sectionTitle}>Select Tint Color</Text>
        
        {/* Color Selection Buttons */}
        <View style={styles.colorButtonsContainer}>
          {Object.keys(COLORS).map(color => (
            <TouchableOpacity
              key={color}
              onPress={() => setSelectedColor(color)}
              style={styles.colorButtonWrapper}
            >
              <View
                style={[
                  styles.colorButton,
                  { backgroundColor: COLORS[color] },
                  selectedColor === color && styles.selectedColor
                ]}
              />
              <Text style={[
                styles.colorLabel,
                selectedColor === color && styles.selectedColorLabel
              ]}>
                {COLOR_NAMES[color]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* View Mode Selection */}
        <View style={styles.viewModesContainer}>
          <TouchableOpacity
            style={[
              styles.viewModeButton,
              viewMode === 'standard' && styles.activeViewMode
            ]}
            onPress={() => setViewMode('standard')}
          >
            <Text style={[
              styles.viewModeText,
              viewMode === 'standard' && styles.activeViewModeText
            ]}>Standard</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[
              styles.viewModeButton,
              viewMode === 'imprint' && styles.activeViewMode
            ]}
            onPress={() => setViewMode('imprint')}
          >
            <Text style={[
              styles.viewModeText,
              viewMode === 'imprint' && styles.activeViewModeText
            ]}>Imprint</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Description Section */}
      <View style={styles.description}>
        <Text h4 style={styles.descriptionTitle}>
          Polarized Lens Technology
        </Text>
        <Text style={styles.descText}>
          Our polarized lenses utilize advanced technology to eliminate glare from 
          reflective surfaces, providing clearer vision and better contrast. Perfect 
          for driving and outdoor activities, these lenses reduce eye strain and 
          offer superior visual comfort in bright conditions.
        </Text>
        <Text style={styles.features}>
          Key Features:
        </Text>
        <Text style={styles.featureItem}>• UV400 Protection</Text>
        <Text style={styles.featureItem}>• Anti-Reflective Coating</Text>
        <Text style={styles.featureItem}>• Scratch-Resistant Surface</Text>
        <Text style={styles.featureItem}>• Water-Repellent Treatment</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageSection: {
    height: 350,
    width: SCREEN_WIDTH,
    position: 'relative',
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  baseImage: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
  },
  lensOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lensContainer: {
    width: SCREEN_WIDTH * 0.85,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lensBorder: {
    width: '100%',
    height: '100%',
    borderRadius: 110,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    overflow: 'hidden',
    transform: [{ scaleY: 0.7 }],
    ...Platform.select({
      android: {
        elevation: 10,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  clearImage: {
    width: '100%',
    height: '100%',
    transform: [{ scale: 1.2 }],
  },
  tintLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  controlsSection: {
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e88e5',
  },
  colorButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  colorButtonWrapper: {
    alignItems: 'center',
  },
  colorButton: {
    width: 45,
    height: 45,
    borderRadius: 23,
    borderWidth: 2,
    borderColor: '#fff',
    ...Platform.select({
      android: {
        elevation: 4,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
    }),
  },
  selectedColor: {
    borderColor: '#1e88e5',
    transform: [{ scale: 1.1 }],
  },
  colorLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  selectedColorLabel: {
    color: '#1e88e5',
    fontWeight: 'bold',
  },
  viewModesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  viewModeButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: '#fff',
    minWidth: 120,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1e88e5',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
    }),
  },
  activeViewMode: {
    backgroundColor: '#1e88e5',
  },
  viewModeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e88e5',
  },
  activeViewModeText: {
    color: '#fff',
  },
  description: {
    padding: 20,
  },
  descriptionTitle: {
    marginBottom: 15,
    color: '#1e88e5',
  },
  descText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  features: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e88e5',
  },
  featureItem: {
    fontSize: 16,
    lineHeight: 28,
    color: '#333',
    paddingLeft: 10,
  },
});

export default PolarizedPage;