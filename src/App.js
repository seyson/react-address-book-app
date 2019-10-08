import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListContacts from './ListContacts.js';
import {generate} from 'randomstring';

class App extends Component {
  state = {
    "contacts": [
      {
        "key": generate(10),
        "firstName": "Cathy" ,
        "lastName": "Pierce",
        "birthday": "9/14/1996",
        "telephone": "200-910-8132"
      },
      {
        "key": generate(10),
        "firstName": "Alfonso",
        "lastName": "Cooley",
        "birthday": "8/10/1973",
        "telephone": "200-657-9362"
      },
      {
        "key": generate(10),
        "firstName": "Victor",
        "lastName": "Gordon",
        "birthday":  "8/3/1970",
        "telephone": "200-661-9407"
      },
      {
        "key": generate(10),
        "firstName": "Colleen",
        "lastName": "Wright",
        "birthday": "10/28/1967",
        "telephone": "200-250-7949"
      },
      {
        "key": generate(10),
        "firstName": "James",
        "lastName": "Johnston",
        "birthday": "5/11/1972",
        "telephone": "200-645-3176"
      },
      {
        "key": generate(10),
        "firstName": "Anna",
        "lastName": "Reyes",
        "birthday": "9/10/1975",
        "telephone": "200-707-8670"
      }
    ],
    "formFirstName": '',
    "formLastName": '',
    "formBirthday": '',
    "formTelephone": ''
  }

  addContactHandler = (event) => {
    event.preventDefault();
    let newContact = {
      key: generate(10),
      firstName: this.state.formFirstName,
      lastName: this.state.formLastName,
      birthday: this.state.formBirthday,
      telephone: this.state.formTelephone
    };
    this.setState({contacts: [...this.state.contacts, newContact]});
    this.setState({
      "formFirstName": '',
      "formLastName": '',
      "formBirthday": '',
      "formTelephone": ''  
    });
  }

  deleteContactHandler = (key, event) => {
    let contacts = [...this.state.contacts];
    let deleteIndex = contacts.findIndex((item)=>item.key===key);
    contacts.splice(deleteIndex, 1);
    this.setState({"contacts": contacts});
  }

  render() {
    return (
      <div className="App">
        <Container>
          <header className="App-header text-center">
            <h1>React Address Book</h1>
          </header>
          <ListContacts
            contacts={this.state.contacts}
            closer={(key, e) =>
              window.confirm("Are you sure you want to delete this contact?") && this.deleteContactHandler(key, e)}>
          </ListContacts>
        </Container>
      </div>
    );
  }
};

export default App;
