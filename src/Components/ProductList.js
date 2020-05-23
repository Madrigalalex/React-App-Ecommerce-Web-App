import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import {storeProduct} from '../data';

export default class ProductList extends Component {
    state = {
        products:[]
    }
    render() {
        return (
            <React.Fragment>
                <div className="dy-5">
                    <div className="container">
                        <Title name="Phone" title="Products"/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
            //<Product/>
        )
    }
}
