import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header'
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v1 as uuid } from "uuid";
import axios from 'axios';

class App extends Component {
  state = {
    todo: [
      
    ]
  }

  markComplete = (id) => {
    console.log("hello from app" + id)
    this.setState({
      todo: this.state.todo.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=> this.setState({ todo: [...this.state.todo.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    console.log(title)
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todo: [...this.state.todo, res.data] }))
    
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({todo: res.data}))
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todo todo={this.state.todo} markComplete={this.markComplete} delTodo={this.delTodo} />

              </React.Fragment>
            )}
            />
            <Route path="/about" component={About} />

          </div>
        </div>

      </Router>
    );
  }
}
export default App;