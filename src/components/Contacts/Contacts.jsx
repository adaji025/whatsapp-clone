import React from 'react'
import { ListGroup } from 'react-bootstrap'

import { useContacts } from '../../context/ContactsContext'

const Contacts = () => {
    const {contacts} = useContacts()
    console.log(contacts)
  return (
    <ListGroup variant='flush'>
        {contacts.map(contact => (
            <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
        ))}
    </ListGroup>
  )
}

export default Contacts