import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { GraphPoint } from 'react-native-graph';
import { LineGraph } from 'react-native-graph';
import * as Haptics from 'expo-haptics';
import { LinearGradient } from 'expo-linear-gradient';

export function StockGraph() {
    const priceHistory: GraphPoint[] = [
        { value: 10, date: new Date(2024, 5, 29) },
        { value: 15, date: new Date(2024, 5, 30) },
        { value: 8, date: new Date(2024, 6, 1) },
        { value: 12, date: new Date(2024, 6, 2) },
        { value: 9, date: new Date(2024, 6, 3) },
    ];

    const { width, height } = Dimensions.get('window');
    const graphHeight = height * 0.4; // Adjust the height as needed

    const [selectedPoint, setSelectedPoint] = useState(priceHistory[priceHistory.length - 1]);

    useEffect(() => {
        console.log("StockGraph component mounted");
        console.log("Price history data: ", priceHistory);
    }, []);

    const handleGestureStart = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    };

    const updatePriceTitle = (point: React.SetStateAction<GraphPoint>) => {
        // Update the selected point
        setSelectedPoint(point);
    };

    const resetPriceTitle = () => {
        // Reset to the most recent value
        setSelectedPoint(priceHistory[priceHistory.length - 1]);
    };

    console.log("Rendering StockGraph component");

    return (
        <View style={[styles.graphContainer, { width, height: graphHeight }]}>
            <View style={styles.labelContainer}>
                <Text style={styles.labelText}>{selectedPoint.value}</Text>
            </View>
            <View style={styles.graphContent}>
                <LineGraph
                    points={priceHistory}
                    animated={true}
                    color="#4484B2"
                    enablePanGesture={true}
                    onGestureStart={handleGestureStart}
                    onPointSelected={updatePriceTitle}
                    onGestureEnd={resetPriceTitle}
                    style={{ width: '100%', height: '100%' }}
                />
                <LinearGradient
                    colors={['rgba(68, 132, 178, 0.5)', 'rgba(68, 132, 178, 0)']}
                    style={[styles.gradient, { width: width, height: graphHeight }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    graphContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    labelContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
    labelText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    graphContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    gradient: {
        position: 'absolute',
        top: 0,
    },
});
