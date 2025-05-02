import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ButtonIcon = require('../assets/images/elements.png');

const LOGO_STYLES = [
  { label: 'No Style', icon: require('../assets/images/no-style.png') },
  { label: 'Monogram', icon: require('../assets/images/monogram.png') },
  { label: 'Abstract', icon: require('../assets/images/abstract.png') },
  { label: 'Mascot', icon: require('../assets/images/mascot.png') },
];

export default function IndexPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState(0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ThemedText type='defaultExtraBold' style={styles.header}>AI Logo</ThemedText>
        <View style={styles.labelContainer}>
          <ThemedText type='defaultExtraBold' style={styles.label}>Enter Your Prompt</ThemedText>
          <TouchableOpacity>
            <ThemedText style={styles.surpriseMeText}>🎲   Surprise me</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="A blue lion logo reading 'HEXA' in bold letters"
            placeholderTextColor="#71717A"
            value={prompt}
            onChangeText={setPrompt}
            multiline
            maxLength={500}
          />
          <ThemedText style={styles.charCount}>{prompt.length}/500</ThemedText>
        </View>      
        <ThemedText type='defaultExtraBold' style={{ ...styles.label, marginTop: 24 }}>Logo Styles</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.logoStylesRow}>
          {LOGO_STYLES.map((style, idx) => (
            <View style={styles.logoWrapper} key={style.label}>
              <TouchableOpacity
                style={[styles.logoStyle, selectedStyle === idx && styles.logoStyleSelected]}
                onPress={() => setSelectedStyle(idx)}
              >
                <Image style={[styles.icon, selectedStyle === idx && styles.logoStyleSelected]} source={style.icon} />
              </TouchableOpacity>
              <Text style={[styles.logoLabel, selectedStyle === idx && styles.logoLabelSelected]}>{style.label}</Text>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.createButton}>
          <LinearGradient
            colors={['#943DFF', '#943DFF', '#2938DC']}
            locations={[0, 0.2459, 1]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            style={StyleSheet.absoluteFill} // or any other custom styles
          />
          {/* background: linear-gradient(270deg, #943DFF 24.59%, #2938DC 100%); */}
          <Text style={styles.createButtonText}>Create</Text>
          <Image source={ButtonIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#18182F',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#18182F',
  },
  header: {
    color: '#FAFAFA',
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 12,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  label: {
    color: Colors.light.text,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '700',
    marginBottom: 12,
    marginTop: 8,
  },
  surpriseMeText: {
    color: Colors.light.text,
    fontSize: 13,
    lineHeight: 18
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: '#27272A',
    color: Colors.light.text,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 32,
    fontSize: 16,
    lineHeight: 21,
    minHeight: 175,
  },
  charCount: {
    color: '#71717A',
    fontSize: 11,
    position: 'absolute',
    bottom: 12,
    left:12
  },
  logoStylesRow: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  logoWrapper: {
    alignItems: 'center'
  },
  logoStyle: {
    backgroundColor: '#23234A',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    borderWidth: 2,
    borderRadius: 16,
    borderColor: 'transparent',
    width: 90,
    height: 90,
  },
  logoStyleSelected: {
    borderColor: '#fff',
  },
  logoIconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#18182F',
    marginBottom: 8,
  },
  logoLabel: {
    color: '#A1A1AA',
    fontSize: 13,
    lineHeight: 18,
    marginRight: 16
  },
  logoLabelSelected: {
    color: '#fff',
  },
  createButton: {
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 4,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  inputBlur: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 8,
  },
}); 