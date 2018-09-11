import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
//import { Todo } from './Todo';
import { _Todo } from './Todox';
import {store} from './store';

render(<Provider store={store}><_Todo /></Provider>, document.getElementById('app'));
