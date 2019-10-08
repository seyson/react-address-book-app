import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function ListContacts(props) {
  let contacts = [...props.contacts];
  let contactsList = contacts.map((item) =>
      <Card key={item.key}>
        <Card.Body className="text-left">
        <Card.Title><h5>{item.lastName}, {item.firstName}</h5>
        </Card.Title>
        <Card.Subtitle>
            <h6 className="mb-1 text-muted">born {item.birthday}</h6>
        </Card.Subtitle>
        <Card.Text>
            <p>Telephone: {item.telephone}</p>
        </Card.Text>
        <span>
            <i key={item.key}
              className="fa fa-trash-o text-danger"
              aria-hidden="true"
              onClick={props.closer.bind(null,item.key)} />
        </span>
        </Card.Body>
      </Card>);
    return contactsList;
}

export default ListContacts;