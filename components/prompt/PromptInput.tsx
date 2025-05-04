import {GradientBackgroundView} from "@/components/GradientBackgroundView";
import {StyleSheet, TextInput, View} from "react-native";
import {ThemedText} from "@/components/ThemedText";
import React from "react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {changePrompt} from "@/store/logo/logoSlice";
import {Colors} from "@/constants/Colors";

export default function PromptInput() {
    const dispatch = useAppDispatch();
    const {prompt} = useAppSelector(state => state?.logo);
    const [focused, setFocused] = React.useState(false);
    return(
        <View style={styles.inputContainer}>
            <GradientBackgroundView color='dark' style={[styles.gradientBackground, focused && styles.inputFocused]}>
                <TextInput
                    style={styles.input}
                    placeholder="A blue lion logo reading 'HEXA' in bold letters"
                    placeholderTextColor={Colors.dark.DARK_500}
                    value={prompt}
                    onChangeText={(e) => dispatch(changePrompt(e))}
                    multiline
                    maxLength={500}
                    onPress={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                />
            </GradientBackgroundView>
            <ThemedText style={styles.charCount}>{prompt.length}/500</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative'
    },
    gradientBackground: {
        borderRadius: 16
    },
    input: {
        color: Colors.light.text,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'transparent',
        fontSize: 16,
        lineHeight: 21,
        minHeight: 175,
        textAlignVertical: 'top'
    },
    charCount: {
        color: Colors.dark.DARK_500,
        fontSize: 11,
        position: 'absolute',
        bottom: 6,
        left:12
    },
    inputFocused: {
        borderColor: Colors.light.LIGHT_50,
        borderWidth: 1
    }
})