import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Label, Col, Row, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderProduct({product}) {
    return (
        <div className="col-md-5 m-1">
                <Card className="cardCSS">
                    <CardImg top src={baseURL + product.image} alt={product.name} />
                    <CardBody>
                        <CardText className="cardTextProducts">{product.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: '',
            author: '',
            text: '',
            touched: {
                rating: false,
                author: false,
                commentMessage: false,
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.dropdownSelector = this.dropdownSelector.bind(this);
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.productId, values.rating, values.author, values.text);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    dropdownSelector() {
        this.setState({

        });
    }

    render() {    

        return(
            <>
                <Row className="form-group">
                    <Col md={12}>
                        <Button outline onClick={this.toggleModal}>
                            <i className="fa fa-pencil fa-lg" /> Submit Comment
                        </Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values =>this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="rating"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                        >
                                        <option>Select Rating</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                    <Errors
                                        className="text-danger"
                                        model=".rating"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required'
                                        }}
                                    />
                                </Col>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author" md={2}>Name</Label>
                                <Col>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" md={2}>Comment</Label>
                                <Col>
                                    <Control.textarea model=".text" id="text" name="text"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </div>
                            <Button type="submit" color="primary">
                                Submit Comment
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

function RenderComments({comments, postComment, productId}) {
    if(comments) {
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                    {
                        comments.map(comment => {
                        return (
                            <div>
                                <p>
                                    {comment.text}<br />
                                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        );
                    })
                }
                <CommentForm productId={productId} postComment={postComment} />
            </div>
        );
    }
    return <div />;
}

function ProductInfoComponent(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    if (props.product) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Shop</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.product.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.product.name}</h2>
                        <hr />
                        <br />
                    </div>
                </div>
                <div className="productRow row">
                    <div>
                        <RenderProduct className="productRendered" product={props.product} />
                    </div>
                    <br />
                    <div nameClass="purchaseOptionsContainer">
                        <div className="priceCard">
                                <h1 className="priceCardText">$999.99</h1>
                        </div>
                        <div className="purchaseOptions">
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="conditionDropdown form-control"
                                    validators={{
                                        required,
                                    }}
                                    >
                                    <option>Condition</option>
                                    <option>New</option>
                                    <option>Open Box</option>
                                    <option>Used</option>
                                    <option>Refurbished</option>
                                </Control.select>
                                <Button className="buyButton" type="submit" value="submit" color="danger">Buy</Button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="productConditiontText">
                        <div className="conditionHeaderContainer"> 
                        <h4 className="conditionHeader"> Condition</h4>
                        </div>
                        <p className="conditionP">
                            <ul>
                                <li>
                                <strong>New</strong> - Factory sealed
                                </li>
                                <br />
                                <li>
                                    <strong>Open Box</strong> - Box might be open/damaged, but the product inside is perfect
                                </li>
                                <br />
                                <li>
                                    <strong>Used</strong> - Fully functinal, may have slight cosmetic wear
                                </li>
                                <br />
                                <li>
                                    <strong>Refurbished</strong> - Apple Certified Refurbished
                                </li>
                                <br />
                            </ul>
                            <i>Every product we recieve in individually hand inspected by one of our trained technicians. We take pride in representing every prodcuts we sell as honestly and accurately as possible. If you have any questions at all, please don't hesitate to contact us!</i>
                            </p>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* <RenderComments
                            comments={props.comments}
                            postComment={props.postComment}
                            productId={props.product.id}
                        /> */}
                    </div>
                </div>
            </div>
        );
    } else {
        return <div />
    }
}

export default ProductInfoComponent; 