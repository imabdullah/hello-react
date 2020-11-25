import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () =>{
       return {
           background: '#f4f4f4',
           padding: '10px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed? 'line-through':'none'
       }
    }


    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
                    { title }
                    <button style={delBtn} onClick = {this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const delBtn = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    float: 'right',
    cursor: 'pointer',
    borderRadius: '50%'
}
const itemStyle = {
    backgroundColor: '#f4f4f4'
}
export default TodoItem
