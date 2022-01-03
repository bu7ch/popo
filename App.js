import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "./components/Button";
import Heading from "./components/Heading";
import Input from "./components/TextInput";

let todoIndex = 0;
export default class App extends Component {
  state = {
      inputValue: "",
      todos: [],
      type: "All",
    };
  
  inputChange(inputValue) {
    console.log(" Input value: ", inputValue);
    this.setState({ inputValue });
  }

   submitTodo =()=> {
    if (this.state.inputValue.match(/^\d+$/)) {
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    const todos = [...this.state.todos, todo];
    this.setState({ todos, inputValue: "" }, () => {
      console.log("State: ", this.state);
    });
  }

  render() {
    let { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <Button submitTodo={this.submitTodo} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
