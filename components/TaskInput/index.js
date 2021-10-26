import React from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

const TaskInput = () => {
    return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}>
            
                <TextInput style={styles.textInput} placeholder={'Write a task'} />
                
                <TouchableOpacity>
                    <View style={styles.addContainer}>
                        <Text style={styles.addTask}>+</Text>
                    </View>
                </TouchableOpacity>
            
            </KeyboardAvoidingView>
    )
}

export default TaskInput
