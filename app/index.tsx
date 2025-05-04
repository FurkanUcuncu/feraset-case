import { GradientBackgroundView } from '@/components/GradientBackgroundView';
import ProcessChip from '@/components/ProcessChip';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { createLogo } from '@/store/logo/logoSlice';
import React, { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ScreenWrapper from "@/components/ScreenWrapper";

import ButtonIcon from '../assets/images/elements.png';
import { LOGO_STYLES } from '@/constants/Constants';

export default function IndexPage() {
  const dispatch = useAppDispatch();

  const { loading } = useAppSelector(state => state?.logo);

  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('No Style');

  const handleCreateLogo = useCallback(() => {
    dispatch(createLogo({ prompt, style: selectedStyle }));
  }, [dispatch, prompt ,selectedStyle])

  return (
    <ScreenWrapper>
      <ThemedText type='defaultExtraBold' style={styles.header}>AI Logo</ThemedText>
      {loading !== null ? <ProcessChip /> : null}
      <View style={styles.labelContainer}>
        <ThemedText type='defaultExtraBold' style={styles.label}>Enter Your Prompt</ThemedText>
        <TouchableOpacity>
          <ThemedText style={styles.surpriseMeText}>🎲   Surprise me</ThemedText>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.inputContainer}>
          <GradientBackgroundView color='dark' style={styles.gradientBackground}>
            <TextInput
                style={[styles.input, { backgroundColor: 'transparent' }]}
                placeholder="A blue lion logo reading 'HEXA' in bold letters"
                placeholderTextColor="#71717A"
                value={prompt}
                onChangeText={setPrompt}
                multiline
                maxLength={500}
            />
          </GradientBackgroundView>
          <ThemedText style={styles.charCount}>{prompt.length}/500</ThemedText>
        </View>
        <ThemedText type='defaultExtraBold' style={{ ...styles.label, marginTop: 24 }}>Logo Styles</ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.logoStylesRow}>
          {LOGO_STYLES.map((style) => (
              <View style={styles.logoWrapper} key={style.label}>
                <TouchableOpacity
                    style={[styles.logoStyle, selectedStyle === style.label && styles.logoStyleSelected]}
                    onPress={() => setSelectedStyle(style.label)}
                >
                  <Image style={[styles.icon, selectedStyle === style.label && styles.logoStyleSelected]} source={style.icon} />
                </TouchableOpacity>
                <Text style={[styles.logoLabel, selectedStyle === style.label && styles.logoLabelSelected]}>{style.label}</Text>
              </View>
          ))}
        </ScrollView>
        <TouchableOpacity onPress={handleCreateLogo}>
          <GradientBackgroundView
            color='light'
            style={styles.createButton}
          >
            <Text style={styles.createButtonText}>Create</Text>
            <Image source={ButtonIcon} />
          </GradientBackgroundView>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
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
    position: 'relative'
  },
  gradientBackground: {
    borderRadius: 16
  },
  input: {
    color: Colors.light.text,
    borderRadius: 16,
    fontSize: 16,
    lineHeight: 21,
    minHeight: 175,
    textAlignVertical: 'top'
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
    marginRight: 16,
    marginTop: 4
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
  }
}); 