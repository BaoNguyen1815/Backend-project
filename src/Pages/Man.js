import React, { Component } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ManProductDisplay from '../Components/ManProductDisplay';
import axios from "../axios";
import SortDropbox from '../Components/SortDropbox';
import Banner from '../Components/Banner';
import FootBanner from '../Components/FootBanner';
// const axios = require('axios');
export default class Man extends Component {
    state = {
        products : [],
        searchString : "",
        sortOption : 0,
        quantityDisplayed : 0,
    };

    _onSearchChanged = text => this.setState({searchString : text});

    _onSort = number => this.setState({sortOption : number});

    componentDidMount(){
        
        axios.get("http://localhost:6969/api/product")
            .then(data => {              
                this.setState({
                    products : data.data.data,
                    quantityDisplayed : data.data.data.length,
               });                
            }).catch(err => console.log(err));
            
    }

    componentDidUpdate(prevState){
        if(this.state.sortOption !== prevState.sortOption){
            if(this.state.sortOption === 1){
                axios.get("http://localhost:6969/api/product/Nam/sortByAlphabet/1")
            .then(data => {              
                this.setState({
                    products : data.data.data,                    
               });                
            }).catch(err => console.log(err));           
            }
        }
       
            if(this.state.sortOption === 2){
                axios.get("http://localhost:6969/api/product/Nam/sortByAlphabet/-1")
            .then(data => {              
                this.setState({
                    products : data.data.data,                    
               });                
            }).catch(err => console.log(err));           
            }
        
  
            if(this.state.sortOption === 3){
                axios.get("http://localhost:6969/api/product/Nam/sortByPrice/1")
            .then(data => {              
                this.setState({
                    products : data.data.data,                    
               });                
            }).catch(err => console.log(err));           
            }
                    if(this.state.sortOption === 4){
                axios.get("http://localhost:6969/api/product/Nam/sortByPrice/-1")
            .then(data => {              
                this.setState({
                    products : data.data.data,                    
               });                
            }).catch(err => console.log(err));           
            }
        
    }

    render() {
        const displayedProducts =  this.state.products.filter(
            product =>
              product.title.includes(this.state.searchString) ||
              product.type_product.includes(this.state.searchString)
          );
    
        
          
        return (
            
            <div>
                <Header onSearchChanged = {this._onSearchChanged}/>
                <Banner/>
                <SortDropbox onSort = {this._onSort} quantityDisplayed = {this.state.quantityDisplayed}/>
                <ManProductDisplay  products = {displayedProducts}/>
                <FootBanner/>
                <Footer/>
            
            </div>
        )
    };
}
