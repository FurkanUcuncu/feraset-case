import ProcessChip from '@/components/ProcessChip';
import { ThemedText } from '@/components/ThemedText';
import { useAppSelector } from '@/hooks/redux';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import ScreenWrapper from "@/components/ScreenWrapper";
import LogoStyle from "@/components/logoStyle/LogoStyle";
import CreateButton from "@/components/CreateButton";
import {Colors} from "@/constants/Colors";
import PromptContainer from "@/components/prompt/PromptContainer";

export default function IndexPage() {

  const { loading } = useAppSelector(state => state?.logo);

  return (
    <ScreenWrapper>
      <ThemedText type='defaultExtraBold' style={styles.header}>AI Logo</ThemedText>
      {loading !== null ? <ProcessChip /> : null}
      
      <ScrollView>
          <PromptContainer/>
          <LogoStyle/>
      </ScrollView>
      <CreateButton/>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  header: {
    color: Colors.light.LIGHT_50,
    fontSize: 17,
    lineHeight: 22,
    fontWeight: '700',
    alignSelf: 'center',
    marginBottom: 12,
  }
}); 