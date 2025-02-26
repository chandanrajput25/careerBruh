import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Lock } from "react-bootstrap-icons";

const PersonalInfo = () => {
    return (
        <div>
            <Form>
                <Row>
                    <Form.Group as={Col} md="12" className="mb-3">
                        <Form.Label className="fw-bold fs-14">Full Name</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14" >Email</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">Mobile Number</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">State</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" className="mb-3">
                        <Form.Label className="fw-bold fs-14">City</Form.Label>
                        <Form.Control required type="text" size="lg" />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                 
                    <Form.Group className="my-3">
                        <Button
                            variant="primary"
                            type="submit"
                            className="py-3 mb-3 w-100 text-white"
                        >
                            Get Best Expert
                        </Button>
                        <p className="text-primary fs-14 text-center d-flex align-items-center justify-content-center">
                            <Lock size={16} /> Your Information is Secure with us
                        </p>

                    </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default PersonalInfo
