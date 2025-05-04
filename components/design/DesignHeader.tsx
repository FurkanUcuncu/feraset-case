import {ThemedText} from "@/components/ThemedText";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import CloseIcon from "@/assets/images/close.png";
import {useNavigation} from "expo-router";

export default function DesignHeader() {
    const navigation = useNavigation();
    
    return(
        <View style={styles.content}>
            <ThemedText type='defaultExtraBold' style={styles.title}>
                Your Design
            </ThemedText>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={CloseIcon}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        lineHeight: 28
    },
});