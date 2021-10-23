import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const Task = (props) => {
    return (
        <View style={styles.item}>

            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text styles={styles.itemText}>{props.text}</Text>
            </View>
            
            <View style={styles.circularItem}></View>
            
        </View>
    )
}

export default Task
