import React, { useState } from 'react'
import { Button, Container, Dropdown, DropdownDivider, DropdownItem, Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

function Modals() {

  const [ show, setShow ] = useState(false)

  const HandleShow = () => setShow(true)
  const HandleClose = () => setShow(false)

  return (
    <Container>

      <Button className='btn btn-primary my-5' onClick={HandleShow}>Login</Button>

      <Modal show={show}>
        <ModalHeader>
          <h1>Login</h1>
          <h1 onClick={HandleClose} className='cursor-pointer'>&times;</h1>
        </ModalHeader>
        <ModalBody>
          <input className='w-100 my-3 rounded border-dark p-2' type="text" placeholder='Enter Username'/><br />
          <input className='w-100 my-3 rounded border-dark p-2' type="password" placeholder='Enter Password'/>
        </ModalBody>
        <ModalFooter>
          <Button className='btn btn-primary'>Submit</Button>
        </ModalFooter>
      </Modal>

      <Dropdown>
        <Dropdown.Toggle variant='success'>
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Briyani</Dropdown.Item>
          <DropdownDivider></DropdownDivider>
          <Dropdown.Item>Shawarma</Dropdown.Item>
          <DropdownDivider></DropdownDivider>
          <Dropdown.Item>Noodles</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>

  )
}

export default Modals