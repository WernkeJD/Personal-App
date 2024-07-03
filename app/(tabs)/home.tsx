import React from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';
import { StockGraph } from '@/components/StockGraph';

export default function HomePage() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text>This is Home Page!!!!!????</Text>
                <View style={styles.graphContainer}>
                    <StockGraph />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: 20,
    },
    graphContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300, // Set specific height for the graph
    },
});


