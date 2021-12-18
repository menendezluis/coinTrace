import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Actions = () => {
    return (
        <View style={styles.screens}>
            <Text>Actions</Text>
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

export default Actions