import {ThemedText} from "@/components/ThemedText";
import {ScrollView, StyleSheet} from "react-native";
import {LOGO_STYLES} from "@/constants/Constants";
import React from "react";
import {Colors} from "@/constants/Colors";
import {ILogoStyle} from "@/types/logo.types";
import LogoStyleItem from "@/components/logoStyle/LogoStyleItem";

export default function LogoStyle() {
    return(
        <>
            <ThemedText type='defaultExtraBold' style={styles.label}>Logo Styles</ThemedText>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.logoStylesRow}>
                {LOGO_STYLES.map((style: ILogoStyle) => (
                    <LogoStyleItem key={style.label} label={style.label} icon={style.icon} />                    
                ))}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    label: {
        color: Colors.light.text,
        fontSize: 20,
        lineHeight: 25,
        fontWeight: '700',
        marginBottom: 12,
        marginTop: 24,
    },
    logoStylesRow: {
        flexDirection: 'row',
        marginBottom: 32,
    }
})