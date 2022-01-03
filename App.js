import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Heading from './components/Heading'
import Input from './components/TextInput'

export default class App extends Component {
  state = {
  inputValue: '',
  todos:[],
  type: 'All'
}
  render() {
    return (
      <View style ={styles.container}>
        <ScrollView style={styles.content}> 
        <Heading />
        <Input />
         </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})



