import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseURL } from '../shared/baseURL';

function RenderDirectoryItem({product}) {
    return (
        <Card id="directoryCards">
            <Link to={`/directory/${product.id}`}>
                <CardImg width="100%" src={baseURL + product.image} alt={product.name} />
                <CardTitle className="shopCareTitles">{product.name}</CardTitle>
            </Link>
        </Card>
    );
}

function Directory(props) {
    
    const directory = props.products.products.map(product => {
        return (
            <div key={product.id} className="col-md-5 m-1">
                <RenderDirectoryItem product={product} />
            </div>
        );
    });

    if (props.products.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.products.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.products.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Shop</BreadcrumbItem>
                    </Breadcrumb>
                    <br />
                    <h2>Shop</h2>
                    <hr />
                </div>
            </div>
            <div id="directoryContainer" className="row">
                {directory}
                <br />
            </div>
            <hr />
            <br />
        </div>
    );
}

export default Directory;