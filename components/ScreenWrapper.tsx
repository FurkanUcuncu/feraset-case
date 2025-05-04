import { StyleSheet, View } from "react-native";
import { ImageBackground } from "expo-image";

import BackgroundImage from '../assets/images/background.png';
import {IScreenWrapperProps} from "@/types/props.types";
import {SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ScreenWrapper({children}: IScreenWrapperProps) {
    const insets = useSafeAreaInsets();
    return (
        <ImageBackground source={BackgroundImage} style={styles.fill}>
            <SafeAreaProvider style={styles.fill}>
                <View style={[styles.container, {paddingTop: insets.top}]}>
                    {children}
                </View>
            </SafeAreaProvider>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    container: {
        flex: 1,
        marginHorizontal: 24,
        marginVertical: 12,
    }
}); 