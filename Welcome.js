import React, { useEffect, useState } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import SliderWithPictures from "./SliderWithPictures";

const AnimatedWelcomeScreen = () => {
    const [showSuccessText, setShowSuccessText] = useState(false);
    const opacity = new Animated.Value(0);

    useEffect(() => {
        const fadeIn = Animated.timing(opacity, {
            toValue: 1,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        });

        const fadeOut = Animated.timing(opacity, {
            toValue: 0,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        });

        // Початкова анімація
        fadeIn.start();

        // По закінченню анімації виводимо "Анімація пройшла успішно"
        setTimeout(() => {
            setShowSuccessText(false);
            fadeOut.start(() => {
                // Очищуємо флаг після закінчення анімації
                setShowSuccessText(true);
            });
        }, 2000);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {!showSuccessText && <Animated.Text style={{ opacity, fontSize: 72, textAlign: 'center' }}>
                Welcome
            </Animated.Text>}
            {showSuccessText && <SliderWithPictures />}
            {/* Додайте інший функціонал тут */}
        </View>
    );
};

export default AnimatedWelcomeScreen;