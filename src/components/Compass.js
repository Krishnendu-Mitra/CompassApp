// src/components/Compass.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Magnetometer } from 'react-native-sensors';
import theme from '../styles/theme';

const Compass = () => {
    const [heading, setHeading] = useState(0);

    useEffect(() => {
        const subscription = Magnetometer.subscribe(({ x, y }) => {
            let angle = Math.atan2(y, x) * (180 / Math.PI);
            angle = angle < 0 ? angle + 360 : angle; // Normalize angle
            setHeading(Math.round(angle));
        });

        return () => subscription.unsubscribe();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.compassContainer}>
                <Image
                    source={require('../../assets/compass.png')}
                    style={[styles.compass, { transform: [{ rotate: `${-heading}deg` }] }]}
                />
            </View>
            <Text style={styles.heading}>{`${heading}°`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
    },
    compassContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 5,
        borderColor: theme.colors.primary,
        overflow: 'hidden',
    },
    compass: {
        width: 240,
        height: 240,
    },
    heading: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        color: theme.colors.white,
    },
});

export default Compass;
