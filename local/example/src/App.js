import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import hello from './hello';
 
class App extends Component {
 
  state = {
    message: '',
    inputValue: '',
    status: ''
  }
 
  async componentDidMount() {
    await this.getMessage();
  }
 
  getMessage = async () => {
    const message = await hello.methods.getMessage().call();
    this.setState({ message });
  }
 
  onSubmit = async (event) => {
    event.preventDefault();
    const acounts = await web3.eth.getAccounts();
    this.setState({ status: 'Waiting for set message: ' + this.state.inputValue });
    await hello.methods.setMessage(this.state.inputValue).send(
      {
        from: acounts[0]
      }
    );
    this.setState({ status: 'Done' });
    await this.getMessage();
  }
  /////////////////////////////////////////////////// additional
  // onSubmit1 = async (event) => {
  //   event.preventDefault();
  //   const acounts = await web3.eth.getAccounts();/////////////////////////////////// in construct
  //   await hello.methods.send()
  // }
 
  render() {
    return (
      <div class="App">
        <h2>Hello Contract</h2>
        <p>The message is: {this.state.message}</p>
        <form onSubmit={this.onSubmit}>
          <input onChange={event => this.setState({
            inputValue: event.target.value
          })} />
          <button>Set</button>
        </form>
        <p>{this.state.status}</p>
        
        <form onSubmit={this.onSubmit1}>
          <button>send</button>
        </form>
      </div>
    );
  }
}
 
export default App;