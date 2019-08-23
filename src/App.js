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
  async componentWillMount() {
    
  }
  async componentDidMount() { // repeat after you had rendered
  }
   async componentWillUnmount(){
    this.setState = {
      message: '',
      inputValue: '',
      inputValue1: '',
      inputValue2: '',
      status: ''
    }
  }

  confirm = async () => {
    const accounts = await web3.eth.getAccounts();
    const message = await hello.methods.confirm(accounts[0],"nam","nam2").call();   
    if(message != '') {
      this.setState({ message: message });
    }
    else {
      alert('Your account is invalid');
    }
                                      
  }
  
  onSubmit = async (event) => {
    event.preventDefault();                                
    
    this.setState({ status: 'Waiting for processes: ' + this.state.inputValue }); 
    this.setState({ status: 'Done' });
    await this.confirm()
  }

  onSubmit1 = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await hello.methods.addUsr(accounts[0],"nam","nam").send({
      from: accounts[0]
    })
  }

  onSubmit2 = async (event) => {
    event.preventDefault();
    const message = await hello.methods.countInstructors().call();
    this.setState({inputValue1: message});
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
          <button>find</button>
        </form>

        <form onSubmit={this.onSubmit1}>
          <input onChange={event => this.setState({ inputValue: event.target.value })} />
          <input onChange={event => this.setState({ inputValue1: event.target.value })} />
          <input onChange={event => this.setState({ inputValue2: event.target.value })} />
          <button>add user</button>
        </form>

        <p>{this.state.status}</p>
        <p>{this.state.inputValue1}</p>
        <p>{this.state.inputValue2}</p>
        <iframe src={this.state.message} width='300' height='300'></iframe>
        

        <button onClick={this.onSubmit2}>Inspect number of user</button>
        <p>{this.state.inputValue1}</p>

      </div>
    );
  }
}

export default App;