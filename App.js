import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, Keyboard, Pressable, Modal } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Status component */}
      <View style={styles.status}>
        <Text>Network Status</Text>
      </View>

      {/* MessageList component */}
      <View style={styles.messageList}>
        <FlatList
          data={[{ key: 'Hello' }, { key: 'World' }]} // Example data
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
      </View>

      {/* Toolbar component */}
      <View style={styles.toolbar}>
        <TextInput
          style={styles.textInput}
          placeholder="Type something!"
        />
      </View>

      {/* InputMethodEditor (IME) component */}
      <View style={styles.inputMethodEditor}>
        <Text>Image Picker or Other Input Method</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// #2 - Stylesheet objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  // Status component style
  status: {
    height: 50,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },

  // MessageList component style
  messageList: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // Toolbar component style
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.04)',
    backgroundColor: '#ffffff',
    padding: 8,
  },

  // TextInput style within Toolbar
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },

  // InputMethodEditor (IME) style
  inputMethodEditor: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
