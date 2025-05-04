import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import CopyIcon from "@/assets/images/copy.png";
import {GradientBackgroundView} from "@/components/GradientBackgroundView";
import {Colors} from "@/constants/Colors";
import {useAppSelector} from "@/hooks/redux";
import {useCallback} from "react";
import * as Clipboard from 'expo-clipboard';

export default function DesignResultContent() {
    const {prompt, logoStyle} = useAppSelector(state => state?.logo);
    
    const handleCopy = useCallback(async () => {
        await Clipboard.setStringAsync(prompt);
    }, [prompt]);
    
    return(
        <GradientBackgroundView color='dark' style={styles.promptContainer}>
            <View style={styles.promptTitleWrapper}>
                <ThemedText type='defaultBold' style={styles.promptTitle}>Prompt</ThemedText>
                <TouchableOpacity onPress={handleCopy} style={styles.copyContainer}>
                    <Image source={CopyIcon} />
                    <ThemedText style={styles.copyText}>Copy</ThemedText>
                </TouchableOpacity>
            </View>
            <ThemedText style={styles.promptContent}>
                {prompt}
            </ThemedText>
            <View style={styles.promptLogoStyle}>
                <ThemedText style={styles.promptLogoText}>{logoStyle}</ThemedText>
            </View>
        </GradientBackgroundView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mockImage: {
        width: '100%',
        maxHeight: 342,
        marginTop: 12,
        borderRadius: 16
    },
    promptContainer: {
        marginTop: 24,
        borderRadius: 16
    },
    promptTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    promptTitle: {
        fontSize: 15,
        lineHeight: 20
    },
    copyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    },
    copyText: {
        fontSize: 11,
        lineHeight: 13,
        color: Colors.light.LIGHT_400,
    },
    promptContent: {
        fontSize: 16,
        lineHeight: 21,
        color: Colors.light.LIGHT_50,
        marginTop: 12
    },
    promptLogoStyle: {
        borderRadius: 50,
        height: 24,
        backgroundColor: Colors.light.LIGHT_40,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 4
    },
    promptLogoText: {
        fontSize: 12,
        lineHeight: 16,
        color: Colors.light.LIGHT_50
    }
});