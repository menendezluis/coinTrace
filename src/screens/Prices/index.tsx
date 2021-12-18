import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Prices = () => {
    return (
        <View style={styles.screens}>
            <Text>Prices</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Prices