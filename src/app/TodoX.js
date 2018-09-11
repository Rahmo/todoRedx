import React, { Component } from 'react';
import {connect} from 'react-redux';

import {TodoFrom} from './TodoForm';
class Todox extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        };
    }
    handleChange(e) {
        this.setState({newTodo: e.target.value});
    };

    handlePress() {
        this.props.createToDO(this.state.newTodo);
    };


    render(){
    return (
      <div>
        <TodoFrom todos = {this.props.todos}
                  newTodo = {this.state.newTodo}
                  handleChange = {this.handleChange.bind(this)}
                  handlePress = {this.handlePress.bind(this)}
         />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) =>({
    createToDO(todo){
        dispatch({type:'CREATE_TODO',payload:todo})
        }
});

const mapStateToProps = (state) => (
{todos:state.todos}
)
export const _Todo = connect( mapStateToProps,mapDispatchToProps)(Todox);
