import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import hello from './hello';

class App extends Component {

  state = {
    message: '',
    inputValue: '',
    inputValue1: '',
    inputValue2: '',
    status: ''
  }

  async componentDidMount() { // repeat after you had rendered
    await this.confirm();
  }
  async componentWillUnmount(){
    alert('end game !!!')
  }

  confirm = async () => {

    const accounts = await web3.eth.getAccounts();
    const message = await hello.methods.confirm(accounts[0],"nam","nam2").call();   
    this.setState({ message });                                  
  }
  
  onSubmit = async (event) => {
    event.preventDefault();                                
    
    this.setState({ status: 'Waiting for processes: ' + this.state.inputValue }); 
    this.setState({ status: 'Done' });
    await this.confirm()
  }
  render() {
    return (
      <div class="App">
        <h2>Hello Contract</h2>
        <p>The message is: {this.state.message}</p>
        <form onSubmit={this.onSubmit}>
          <input onChange={event => this.setState({ inputValue: event.target.value })} />
          <input onChange={event => this.setState({ inputValue1: event.target.value })} />
          <input onChange={event => this.setState({ inputValue2: event.target.value })} />
          <button>GO</button>
        </form>
        <p>{this.state.status}</p>
        <p>{this.state.inputValue1}</p>
        <p>{this.state.inputValue2}</p>
        <iframe src={this.state.message} width='400' height='400'></iframe>

      </div>
    );
  }
}

export default App;