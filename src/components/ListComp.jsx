import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


const ListComp = ({username , age , gender , email , phone}) => {
  return (
    <ListGroup>
      <ListGroup.Item>Username : {username}</ListGroup.Item>
      <ListGroup.Item>Age : {age}</ListGroup.Item>
      <ListGroup.Item>Gender : {gender}</ListGroup.Item>
      <ListGroup.Item>Email : {email}</ListGroup.Item>
      <ListGroup.Item>Phone : {phone}</ListGroup.Item>
    </ListGroup>
  )
}

export default ListComp