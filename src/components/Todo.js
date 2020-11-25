import { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';

class Todo extends Component{
   
    render(){
        return this.props.todo.map((each_todo) =>(
        <TodoItem key={each_todo.id} todo={each_todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo} />
        ));
    }
}

Todo.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todo;
