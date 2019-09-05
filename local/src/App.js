import React, { Component } from 'react';
// import './App.css';
import web3 from './web3';
// import hello from './hello';
// import 2 images 
import mr from './mrPickles.jpg'
import dra from './draven.jpg'
import passenger from './passenger.jpg'
import perfect from './perfect.jpg'
import vod from './vod_edit.jpg'

class App extends Component {

  state = {
    message: '',
    inputValue: '',
    inputValue1: '',
    inputValue2: '',
    status: '',
    content1: ''
  }

  async componentWillMount() {
  }

  async componentDidMount() { // repeat after you had rendered
  }

  async componentWillUnmount() {
    this.setState = {
      message: '',
      inputValue: '',
      inputValue1: '',
      inputValue2: '',
      status: '',
      content1: ''
    }
  }

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({ status: 'Waiting for processes: ' + this.state.inputValue });


    const accounts = await web3.eth.getAccounts();
    const hell = this.state.content1;
    const message = await hell.methods.confirm(accounts[0], "nam", "nam2").call();
    if (message !== '') {
      this.setState({ message: message });
    }
    else {
      alert('Your account is invalid');
    }
    this.setState({ status: 'Done' });
  }

  onSubmit1 = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await this.state.content1.methods.addUsr(accounts[0], "nam", "nam").send({
      from: accounts[0]
    })
  }

  onSubmit2 = async (event) => {
    event.preventDefault();
    const message = await this.state.content1.methods.countInstructors().call();
    this.setState({ inputValue1: message });
  }

  onClickImg = async (event) => {
    const address = '0x7CFb2Cdb311A8889459Ab9A6BAd6b94C70b6EF9e';
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
    const address = '0xd48c3AfaBA1a2Cd9fb6F79C13640E8479Cdc6136';
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
    alert('you have choosen Draven from League of Legends');
  }

  render() {
    return (
      <div class="App">

        <div class="row">
          <div class="column left">
            <h2>Detailed</h2>
            <div class="grid-container">
              <div class="grid-item">
                <img onClick={this.onClickImg} src={passenger} alt="draven" width="200" height="150" />
              </div>
              <div class="grid-item">
                <p><i class="far fa-file-video"></i> Home | Passenger <br />
                  <i class="fab fa-bitcoin"></i> Price: 0.99$
                </p>
              </div>
              <div class="grid-item">
                <div>
                  <img onClick={this.onClickImg2} src={perfect} alt="mrPickles" width="200" height="150" />
                </div>
              </div>
              <div class="grid-item">
                <p><i class="far fa-file-video"></i> Perfect | Ed Sheeran <br />
                  <i class="fab fa-bitcoin"></i> Price: 0.99$
                </p>
              </div>
            </div>
          </div>

          <div class="column center">
            <h2>Broadcast</h2>
            <iframe src={this.state.message} title="mytitle" height="400" width="600"></iframe>
          </div>

          <div class="column right">
            <h2>Interactions</h2>
            <button class="button" onSubmit={this.onSubmit}><span>Play</span></button>
            <button onSubmit={this.onSubmit}>run</button>

            <form onSubmit={this.onSubmit}>
              <button class="button"><span>foolish</span></button>
            </form>
            
          </div>
        </div>

        <h2>Hello Contract</h2>
        <p>The message is: {this.state.message}</p>

        <img onClick={this.onClickImg} src={mr} alt="Draven" height="50" width="50"></img>

        <img onClick={this.onClickImg2} src={dra} alt="Mr. Pickles" height="50" width="50"></img>

        <form onSubmit={this.onSubmit}>
          <input onChange={event => this.setState({ inputValue: event.target.value })} />
          <input onChange={event => this.setState({ inputValue1: event.target.value })} />
          <input onChange={event => this.setState({ inputValue2: event.target.value })} />
          <button class="button"><span>find</span></button>
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
        <iframe src={this.state.message} title="mytitle" width='300' height='300'></iframe>


        <button onClick={this.onSubmit2}>Inspect number of user</button>
        <p>{this.state.inputValue1}</p>

      </div>
    );
  }
}

export default App;