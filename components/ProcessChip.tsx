import { Colors } from '@/constants/Colors';
import { IMAGE_PROCESS } from '@/constants/Constants';
import { useAppSelector } from '@/hooks/redux';
import { useRouter } from 'expo-router';
import {useCallback, useEffect, useRef} from 'react';
import { Animated, Easing, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { GradientBackgroundView } from './GradientBackgroundView';
import { ThemedText } from './ThemedText';

import MockImage from '../assets/images/mockImage.jpg';
import ErrorOverlayImage from '../assets/images/subtract.png';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function ProcessChip() {
    const router = useRouter();
    const { loading } = useAppSelector(state => state?.logo);

    const animatedValue = useRef(new Animated.Value(0)).current;
    const RADIUS = 13;
    const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

    const _IMAGE_PROCESS = IMAGE_PROCESS?.[loading ?? 'loading']

    useEffect(() => {
        Animated.loop(
            Animated.timing(animatedValue, {
                toValue: 1,
                duration: 1200,
                easing: Easing.linear,
                useNativeDriver: false,
            })
        ).start();
    }, [loading, animatedValue]);

    const strokeDashoffset = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [CIRCUMFERENCE, 0],
    });
    
    const handleNavigateToDesign = useCallback(() => {
        if(loading === 'success')
            router.push('/design');
    },[loading, router])

    const renderText = () => (
        <>
            <ThemedText
                type='defaultExtraBold'
                style={[styles.contentTitle, { color: _IMAGE_PROCESS?.titleColor }]}
            >
                {_IMAGE_PROCESS?.title}
            </ThemedText>
            <ThemedText
                style={[styles.contentSubtitle, { color: _IMAGE_PROCESS?.subtitleColor }]}
            >
                {_IMAGE_PROCESS?.subtitle}
            </ThemedText>
        </>
    );

    return (
        <TouchableOpacity onPress={handleNavigateToDesign}>
            <View style={styles.createLoaderContainer}>
                <View style={styles.createLoaderImage}>
                    {
                        loading === 'loading' ? <Svg width={30} height={30} viewBox="0 0 30 30">
                            <Circle
                                cx={15}
                                cy={15}
                                r={RADIUS}
                                stroke="#333339"
                                strokeWidth={2}
                                fill="none"
                            />
                            <AnimatedCircle
                                cx={15}
                                cy={15}
                                r={RADIUS}
                                stroke="#fff"
                                strokeWidth={2}
                                fill="none"
                                strokeDasharray={CIRCUMFERENCE}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                rotation="-90"
                                origin="15,15"
                            />
                        </Svg> : null
                    }
                    {
                        loading !== 'loading' ? <Image style={styles.mockImage} source={MockImage} /> : null
                    }
                    {
                        loading === 'error' ? <View style={styles.errorOverlay}>
                            <Image source={ErrorOverlayImage} />
                        </View> : null
                    }
                </View>
                <View style={styles.createLoaderContent}>
                    {loading === 'error' ? 
                        <View style={styles.gradientBackground}>
                            {renderText()}
                        </View> : null
                    }

                    {loading === 'loading' ?
                        <GradientBackgroundView color='dark' style={styles.gradientBackground}>
                            {renderText()}
                        </GradientBackgroundView> : null
                    }

                    {loading === 'success' ?
                        <GradientBackgroundView color='light' style={styles.gradientBackground}>
                            {renderText()}
                        </GradientBackgroundView> : null
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    createLoaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderColor: 'transparent',
        overflow: 'hidden',
        marginVertical: 20,
        height: 70
    },
    createLoaderImage: {
        width: 70,
        height: 70,
        backgroundColor: Colors.dark.loaderBackground,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'relative'
    },
    mockImage: {
        height: '100%',
        width: '100%'
    },
    errorOverlay: {
        backgroundColor: Colors.light.LIGHT_200,
        height: '100%',
        width: '100%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    createLoaderContent: {
        flex: 1,
        backgroundColor: Colors.light.LIGHT_250,
        position: 'relative',
        height: '100%'
    },
    gradientBackground: {
        height: '100%',
        justifyContent: 'center',
        padding: 12
    },
    contentTitle: {
        fontSize: 16,
        lineHeight: 21,
        color: Colors.light.text
    },
    contentSubtitle: {
        fontSize: 13,
        lineHeight: 18,
        color: Colors.dark.DARK_500
    }
});