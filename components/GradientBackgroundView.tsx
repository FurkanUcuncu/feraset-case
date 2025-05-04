import { Colors } from "@/constants/Colors";
import { GRADIENT } from "@/constants/Constants";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import {IGradientBackgroundViewProps} from "@/types/props.types";

export function GradientBackgroundView({children, style, color}: IGradientBackgroundViewProps) {
    return (
        <View style={[styles.gradientWrapper, style]}>
            {
                color === 'dark' ? <LinearGradient
                    colors={Colors.dark.gradientBackgroundOverlay}
                    style={StyleSheet.absoluteFill}
                /> : null
            }
            <LinearGradient
                colors={Colors[color]?.gradientBackground}
                locations={color === 'light' ? GRADIENT[color]?.locations : undefined}
                start={GRADIENT?.[color]?.start}
                end={GRADIENT?.[color]?.end}
                style={StyleSheet.absoluteFill}
            />
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    gradientWrapper: {
        overflow: 'hidden',
        position: 'relative',
        justifyContent: 'center',
        padding: 12
    },
});