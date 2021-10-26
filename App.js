import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task/index.js';
import TaskInput from './components/TaskInput/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        
        <View style={styles.items}>
          <Task text={"taks 1"} />
          <Task text={ "taks 2"}/>
        </View>

      </View>

        <TaskInput />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  taskContainer: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 30,
  }
});
