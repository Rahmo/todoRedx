import React from 'react'


export const TodoFrom = (props)=>(
    <div>{props.todos.map((todo, i) => (<span key={i}>{todo}</span>))}
        <input type="text" value={props.newTodo} onChange={props.handleChange}/>
        <input type="submit" onClick={props.handlePress} value="Send Request"/></div>
);


