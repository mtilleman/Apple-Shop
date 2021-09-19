import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return <Loading />;
    }
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    return (
            <Card>
                <CardImg src={baseURL + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
    );
}

function Home(props) {
    return (
        <div>
            <div id="homeContainer" className="container">
            <div className="homeIntro">
                <h3>Welcome to Apple Resller</h3>
                <p>Your number one way to buy Apple products at great prices!</p>
            </div>
            <hr />
                <div className="homeCategories row">
                    <div className="homeImgContainer">
                        <Link to={`/directory`}>
                            <img className="homeIMG1" src="/images/Apple-Macbooks.svg" />
                        </Link>
                    </div>
                    <div className="homeImgContainer">
                        <Link to={`/directory`}>
                            <img className="homeIMG2" src="/images/Apple-airpod.svg" />
                        </Link>
                    </div>
                    <div className="homeImgContainer">
                        <Link to={`/directory`}>
                            <img className="homeIMG3" src="/images/Apple-iMacs.svg" />
                        </Link>
                    </div>
                    <div className="homeImgContainer">
                        <Link to={`/directory`}>
                            <img className="homeIMG4" src="/images/Apple-Wat.svg" />
                        </Link>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col">
                    <Link to={`/directory`}>
                        <Button className="homeShopButton" type="submit" value="submit" color="danger">Shop</Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;