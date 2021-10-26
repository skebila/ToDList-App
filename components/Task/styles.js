import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    item: {
        //width: 335,
        height: 53,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap', //if item gets too long, it wraps to the next line

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 14,
        fontWeight: '400'
    },
    circularItem: {
        width: 12,
        height: 12,
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#55BCF6'
    }

})

export default styles
