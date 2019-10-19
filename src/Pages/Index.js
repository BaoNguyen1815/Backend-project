import React, { Component } from 'react'
import HomepageBestSeller from '../Components/HomepageBestSeller'
import HomepageImage from '../Components/HomepageImage'
import HomepageContent from '../Components/HomepageContent'
import Header from '../Components/Header';


export default class Index extends Component {


    render() {
        return (
            <div>
                <Header></Header>
                <HomepageImage></HomepageImage>
                <HomepageBestSeller></HomepageBestSeller>
                <HomepageContent></HomepageContent>
            </div>
        )
    }
}
