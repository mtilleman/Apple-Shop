import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Products } from './products';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            products: Products,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
};