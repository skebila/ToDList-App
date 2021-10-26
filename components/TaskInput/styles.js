import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 60,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    textInput: {
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        textAlign: 'center'
    },
    addContainer: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 52,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addTask: {
        fontWeight: '100',
        fontSize: 40,
        color: '#c0c0c0',
    }
})

export default styles