"use client"
import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './QuestionModal.module.scss'
import LogoWithoutLink from '../../Global/Logo/LogoWithoutLink';
import QuestionStepForm from '../QuestionStepForm/QuestionStepForm';

const QuestionModal = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }

  

    useEffect(() => {
       const setTimeOut = setTimeout(() => {
        setShow(true)
       }, 1000)
       return () => clearTimeout(setTimeOut)
    }, [])
    return (
        <div>
            {/* <p onClick={handleShow}>Ask a Question</p> */}
            <Modal contentClassName='rounded-4' show={show} onHide={handleClose}  className={`${styles.questionModal}`} size="lg">
               {/* <Modal.Header closeButton>
                
               </Modal.Header> */}
                <Modal.Body className='py-0 rounded-4 overflow-hidden bg-light'>
                    <Row>
                        
                   
                        <Col className='col-3 py-4'>
                            <LogoWithoutLink/>
                        </Col>
                        <Col className='col-9 py-4'>
                         
                            


                            <QuestionStepForm/>
                            

                        </Col>

                  </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default QuestionModal
