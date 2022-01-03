import React from "react";
import { View } from "react-native";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, toggleComplete }) => {
  todos = todos.map((todo, i) => {
    return <Todo 
    key={i} 
    deleteTodo={deleteTodo}
    toggleComplete={toggleComplete}
    todo={todo} />;
  });
  return <View>{todos}</View>;
};

export default TodoList;
