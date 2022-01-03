import React, { Component } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Heading from './components/Heading'

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



