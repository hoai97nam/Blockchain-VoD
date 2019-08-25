import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
// import hello from './hello';
// import 2 images 
import mr from './mrPickles.jpg'
import dra from './draven.jpg'

class App extends Component {

  state = {
    message: '',
    inputValue: '',
    inputValue1: '',
    inputValue2: '',
    status: '',
    content1:''
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
      status: '',
      content1:''
    }
  }

  confirm = async () => {                                   
  }
  
  onSubmit = async (event) => {
    event.preventDefault();                                
    
    this.setState({ status: 'Waiting for processes: ' + this.state.inputValue }); 
    this.setState({ status: 'Done' });
    
    const accounts = await web3.eth.getAccounts();
    const hell = this.state.content1;
    const message = await hell.methods.confirm(accounts[0],"nam","nam2").call();   
    if(message !== '') {
      this.setState({ message: message });
    }
    else {
      alert('Your account is invalid');
    }
  }

  onSubmit1 = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await this.state.content1.methods.addUsr(accounts[0],"nam","nam").send({
      from: accounts[0]
    })
  }

  onSubmit2 = async (event) => {
    event.preventDefault();
    const message = await this.state.content1.methods.countInstructors().call();
    this.setState({inputValue1: message});
  }

  onClickImg = async (event) =>{
    const address = '0x6799890215e2c72fad3eb08efaa3d5ee0678faad';
    const abi = [
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_addUsr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_passwd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_daytime",
            "type": "string"
          }
        ],
        "name": "addUsr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_addUsr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_passwd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_daytime",
            "type": "string"
          }
        ],
        "name": "confirm",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "countInstructors",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "usrStorages",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ];
    const hello = new web3.eth.Contract(abi, address);
    this.setState({ content1: hello });
    alert('you have choosen Mr. Pickles');
  }
  onClickImg2 = async (event) => {
    const address = '0x3018af0c08d720672fcbfaffb8984845b1cea1fa';
    const abi = [
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "usrStorages",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [
          {
            "internalType": "address",
            "name": "_addUsr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_passwd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_daytime",
            "type": "string"
          }
        ],
        "name": "confirm",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "internalType": "address",
            "name": "_addUsr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_passwd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_daytime",
            "type": "string"
          }
        ],
        "name": "addUsr",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "countInstructors",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      }
    ]; 
    const hello = new web3.eth.Contract(abi, address);
    this.setState({ content1: hello });
    alert('you have choosen Draven from League of Legends');
  }

  render() {
    return (
      <div class="App">
        <h2>Hello Contract</h2>
        <p>The message is: {this.state.message}</p>

        <img onClick={this.onClickImg} src={mr} alt="Draven" height="50" width="50"></img>

        <img onClick={this.onClickImg2} src={dra} alt="Mr. Pickles" height="50" width="50"></img>

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