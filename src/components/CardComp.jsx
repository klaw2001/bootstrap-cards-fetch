import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListComp from './ListComp';

const CardComp = ({ firstName, lastName ,ip, image, username, age, gender, email, phone }) => {
  return (
    <Card >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Name : {firstName} {lastName}</Card.Title>
        <Card.Text>
            IP Address : {ip}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <ListComp
          username={username}
          age={age}
          gender={gender}
          email={email}
          phone={phone}
        />
      </Card.Body>
    </Card>
  );
};

export default CardComp;
