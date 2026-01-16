import * as SplashScreen from 'expo-splash-screen';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';

interface AppSplashScreenProps {
    onAnimationFinish?: () => void;
}

export function AppSplashScreen({ onAnimationFinish }: AppSplashScreenProps) {
    const animation = useRef<LottieView>(null);

    useEffect(() => {
        // Hide the native static splash screen once this component mounts
        const hideNativeSplash = async () => {
            try {
                await SplashScreen.hideAsync();
            } catch (e) {
                // Ignore error if splash screen is already hidden
                console.warn('Error hiding native splash screen:', e);
            }
        };

        hideNativeSplash();
    }, []);

    return (
        <View style={styles.container}>
            <LottieView
                ref={animation}
                source={require('../../assets/lottie/Doctor.json')}
                autoPlay
                loop={false}
                resizeMode="contain"
                onAnimationFinish={onAnimationFinish}
                style={styles.animation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', // Or match your app theme background
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        width: '100%',
        height: '100%',
    },
});
