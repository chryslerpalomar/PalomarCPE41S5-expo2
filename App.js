import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Status from './components/Status'; 
import { FontAwesome } from '@expo/vector-icons';  

export default function App() {
  const [messages, setMessages] = useState([
    { key: 'Hello', from: 'user-left' },  
    { key: 'World', from: 'user-left' },  
    { key: 'This is sample chat only', from: 'user-right' },
    { key: 'This is added in the program', from: 'user-right' },
  ]);
  
  const [inputText, setInputText] = useState('');

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const newMessage = { key: inputText, from: 'user-right' };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputText(''); 
    }
  };

  return (
    <ImageBackground
      source={require('./assets/background.jpg')} 
      style={styles.container}
    >
      <Status />  

      <View style={styles.status}></View>

      <View style={styles.messageList}>
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            item.from === 'user-left' ? (            
              <View style={styles.messageContainerLeft}>
                <Text style={styles.messageText}>{item.key}</Text>
              </View>
            ) : (
              <View style={styles.messageContainerRight}>
                <Text style={styles.messageText}>{item.key}</Text>
              </View>
            )
          )}
        />
      </View>

      <View style={styles.toolbar}>
        <TextInput
          style={styles.textInput}
          placeholder="Type something!"
          value={inputText}  
          onChangeText={(text) => setInputText(text)} 
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <FontAwesome name="send" size={24} color="#007bff" style={styles.sendButton} />
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

// Styles for components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)',
  },

  // Status bar container
  status: {
    height: 35,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 10,
  },

  // Message List styling
  messageList: {
    flex: 1,
    backgroundColor: 'transparent', 
  },

  // Message container styling (this will wrap each chat message to Left)
  messageContainerLeft: {
    marginTop: 7,
    marginHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#c8edfd', 
    marginLeft: 20,
    alignSelf: 'flex-start',
  },

  // Message container styling (this will wrap each chat message to Right)
  messageContainerRight: {
    marginTop: 7,
    marginHorizontal: 7,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#c8edfd', 
    marginLeft: 20,
    alignSelf: 'flex-end',
  },

  // Message text styling
  messageText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 10,
    paddingRight: 10,
  },

  // Toolbar for text input
  toolbar: {
    //marginTop: 5,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.01)',
    backgroundColor: 'transparent',  
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.04)',
    flexDirection: 'row',  
    justifyContent: 'space-between',  
    alignItems: 'center',  
  },

  // TextInput within Toolbar
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: 'transparent', 
    flex: 1,  
    marginRight: 10,  
  },

  // Send button styling (FontAwesome icon)
  sendButton: {
    padding: 5,
    marginRight: 10,  
  },

});
