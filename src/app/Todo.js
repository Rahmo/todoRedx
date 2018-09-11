import React, { Component } from 'react';

export class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todos: [1, 2, 4,7],
            newTodo: ''
        };
    }
    handleChange(e) {
        this.setState({newTodo: e.target.value});
    };
    handlePress() {
        this.setState({todos:[...this.state.todos,this.state.newTodo],newTodo:''})
    };

    render(){
    return (
      <div>
          {this.state.todos.map((todo,i)=>(<span key={i}>{todo}</span>))}
          <input type="text" value={this.state.newTodo} onChange={this.handleChange.bind(this)}/>
          <input type="submit" onClick={this.handlePress.bind(this)} value="Send Request"/>
      </div>
    );
  }
}
