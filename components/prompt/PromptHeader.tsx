import {ThemedText} from "@/components/ThemedText";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import {Colors} from "@/constants/Colors";

export default function PromptHeader() {
    return(
        <View style={styles.labelContainer}>
            <ThemedText type='defaultExtraBold' style={styles.label}>Enter Your Prompt</ThemedText>
            <TouchableOpacity>
                <ThemedText style={styles.surpriseMeText}>🎲   Surprise me</ThemedText>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
})