import { ThemedText } from '@/components/ThemedText';
import { useNavigation } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateLogoScreen() {
    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                    <ThemedText>
                        Your Design
                    </ThemedText>
                    <ThemedText
                        onPress={() => navigation.goBack()}
                    >
                        Go Back
                    </ThemedText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16,
    },
    text: {
        fontSize: 16,
    },
});
