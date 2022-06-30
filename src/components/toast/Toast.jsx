import React, {useState} from 'react'
import { Col, Row, Toast } from 'react-bootstrap';
import { HooksToast } from './hooksToast'
// import { Button } from 'react-bootstrap/Button';

export const ToastBox = () => {
const [show, setShow] = useState(false);
 
  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      {/* <Col xs={6}>
        <button onClick={() => setShow(true)}>Show Toast</button>
      </Col> */}
    </Row>
  )
}
