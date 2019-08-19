import React, { Component } from 'react';
import './App.css';
// import web3 from './web3';
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
    const message = await hello.methods.getMessage().call();    // goi message ra
    this.setState({ message });                                 // set mess khac trong state 
  }
  
 
  onSubmit = async (event) => {
    event.preventDefault();                                     // tra ve mac dinh
    // const acounts = await web3.eth.getAccounts();
    const accounts = '0xC17B31059c72E68BB99018dc7Be844C5199732C9' // 
    this.setState({ status: 'Waiting for set message: ' + this.state.inputValue }); // thay doi noi dung trong state
    await hello.methods.setMessage(this.state.inputValue)
    // .send(                 // set trong hop dong thong qua account
    //   {
    //     from: accounts
    //   }
    // );
    this.setState({ status: 'Done' });   // thay doi state
    await this.getMessage();              // show message ra trong reactjs
  }
 
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
        <iframe src={this.state.message}></iframe>
 
      </div>
    );
  }
}
 
export default App;