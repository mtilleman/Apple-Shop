import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';



function About(props) {

    const partners = props.partners.map(partner => {
        return (
            <Media tag="li" key={partner.id}>
                <RenderPartner partner={partner} />
            </Media>
        );
    });
    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                        <div nameClass="container">
                            <div nameClass="row">
                                <div className="col-12">
                                <img className="aboutUsImg" src="/images/about-us-photo.jpg" />
                                </div>
                            </div>
                        </div>
                    <hr />
                </div>
            </div>
            <br />
            <br />
            <div className="row row-content">
                <div className="aboutUsText col my-4 text-center">
                    <p>We are a small team of professionals who specialize in providing our customers with the best prices on Apple products. Our 20+ years of experience in Sales, E-Commerce and Consulting in the industry allow us to find the best prices and pass the savings on to you! Our goal is to represent every product as accurately and honestly as possible with help from our Grading Scale. A product is deemed BStock for various reasons and typically the product inside is in perfect condition. Transparency is key to building trust with all of our customers! Want to know the backstory on the product you are buying? We’ll do our best to tell you.</p>
                </div>
            </div>
            <br />
            <br />
            <div className="row row-content">
                <div className="col my-4">
                    <Card className="quoteCard col-sm-10 mt-2">
                        <CardBody className="quoteBox">
                            <blockquote className="blockquote">
                                <p className="mb-0"><i className="quoteText">"We buy these products, we know these products, we use these products."</i></p><br/>
                                <footer className="blockquote-footer"><cite className="quoteTextAuthor" title="Source Title">Michael Tilleman
                                    (Creator 2021)</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <br />
            <br />
        </div>
    );
}



function RenderPartner({partner}) {
   
    if(partner){
        return(
            < >
                <Media object src={partner.image} alt={partner.name} width="150px"/>
                <Media body className="ml-5 mb-4">
                    <Media heading>
                        {partner.name}
                    </Media>
                    {partner.description}
                </Media>
            </ >
        )
    }
    else {
        <div />
    }
}


export default About;

