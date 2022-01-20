import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Hello from './components/Hello/Hello';
import Input from './components/Input/Input';
import Poulet from './components/Poulet/Poulet';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'stranger',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <Input />
        <Poulet />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
