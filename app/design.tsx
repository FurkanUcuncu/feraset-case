import { Image, StyleSheet } from 'react-native';
import ScreenWrapper from "@/components/ScreenWrapper";
import MockImage from '../assets/images/mockImage.jpg';
import DesignHeader from "@/components/design/DesignHeader";
import DesignResultContent from "@/components/design/DesignResultContent";

export default function DesignScreen() {
    return (
        <ScreenWrapper>
            <DesignHeader/>
            <Image style={styles.mockImage} source={MockImage} />
            <DesignResultContent/>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    mockImage: {
        width: '100%',
        maxHeight: 342,
        marginTop: 12,
        borderRadius: 16
    }
});