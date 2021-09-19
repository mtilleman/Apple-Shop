import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import ProductInfo from './ProductInfoComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchProducts, fetchComments, fetchPromotions } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        products: state.products,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

const mapDispatchToProps = {
    postComment: (productId, rating, author, text) => (postComment(productId, rating, author, text)),
    fetchProducts: () => (fetchProducts()),
    resetFeedbackForm: () => (actions.reset('feedbackForm')),
    fetchComments: () => (fetchComments()),
    fetchPromotions: () => (fetchPromotions())
};


class Main extends Component {

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchComments();
        this.props.fetchPromotions();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    product={this.props.products.products.filter(product => product.featured)[0]}
                    productsLoading={this.props.products.isLoading}
                    productsErrMess={this.props.products.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const ProductWithId = ({match}) => {
            return (
                <ProductInfo 
                    product={this.props.products.products.filter(product => product.id === +match.params.productId)[0]}
                    isLoading={this.props.products.isLoading}
                    errMess={this.props.products.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.productId === +match.params.productId)}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />     
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory products={this.props.products} />} />
                            <Route path='/directory/:productId' component={ProductWithId} />
                           <Route exact path='/contactus' render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} /> } />
                            <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                            <Redirect to='/home' />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));