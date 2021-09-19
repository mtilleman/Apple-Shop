import React, { Component }from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };
      
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
    }


    render() {    


        return (
            < >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>Contact</h2>
                            <hr />
                            <div nameClass="row">
                                <div className="col-12">
                                <img className="aboutUsImg" src="/images/contact-us-photo.jpg" />
                                </div>
                            </div>
                            <hr />
                            <br />
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col">
                            <LocalForm className="contactForm" onSubmit={values =>this.handleSubmit(values)}>
                                <container className="contactContainer">
                                    <Col className="col">
                                        <Col className="form-group">
                                            <Control.text model=".firstName" id="firstName" name="firstName"
                                                placeholder="Name"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    minLength: minLength(2),
                                                    maxLength: maxLength(30)
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".firstName"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                            />
                                        </Col>
                                        <Col className="form-group">
                                            <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                                placeholder="#"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    minLength: minLength(10),
                                                    maxLength: maxLength(15),
                                                    isNumber
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".phoneNum"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be at least 10 numbers',
                                                    maxLength: 'Must be 15 numbers or less',
                                                    isNumber: 'Must be a number'
                                                }}
                                            />
                                        </Col>
                                        <Col className="form-group">
                                            <Control.text model=".email" id="email" name="email"
                                                placeholder="@"
                                                className="form-control"
                                                validators={{
                                                    required,
                                                    validEmail
                                                }}
                                            />
                                            <Errors
                                                className="text-danger"
                                                model=".email"
                                                show="touched"
                                                component="div"
                                                messages={{
                                                    required: 'Required',
                                                    validEmail: 'Invalid email address'
                                                }}
                                            />
                                        </Col>

                                        <Col className="form-group">
                                            <Control.textarea model=".feedback" id="feedback" name="feedback"
                                                placeholder="Message"
                                                rows="12"
                                                className="textAreaForm form-group md={{size: 10, offset: -1}}"
                                            />
                                        </Col>
                                        <Col className="form-group" md={{size: 12, offset: -1}}>
                                            <Button type="submit" color="danger" className="contactButton">
                                                Send
                                            </Button>
                                        </Col>
                                    </Col>
                                </container>
                            </LocalForm>
                        </div>
                        <br />
                        <br />
                     </div>
                </div>
            </ >
        );
    }
}

export default Contact;