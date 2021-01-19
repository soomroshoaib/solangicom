import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import * as Routes from './index'
// import Navbar from '../../components/navbar/index'
export default class Navigation extends Component{

    render(){
        return(
            <BrowserRouter>
            {/* <Navbar/> */}
                <Route  path='/' exact component={Routes.Home}/>
                <Route  path='/aboutus' component={Routes.AboutUs}/>
                <Route  path='/contactus' component={Routes.ContactUs}/>
                <Route   path='/web-development' component={Routes.WebDevelopment}/>
                <Route   path='/app-development' component={Routes.AppDevelopment}/>
                <Route   path='/custom-software-development' component={Routes.SoftwareDevelopment}/>
                <Route   path='/off-shore-management' component={Routes.OffShoreManagement}/>
                <Route   path='/digital-marketing' component={Routes.DigitalMarketing}/>
                <Route   path='/portfolio/web-development' component={Routes.WebDevelopmentPortfolio}/>
                <Route   path='/portfolio/app-development' component={Routes.AppDevelopmentPortfolio}/>
                <Route   path='/portfolio/software-development' component={Routes.SoftwareDevelopmentPortfolio}/>
                <Route   path='/portfolio/digital-marketing' component={Routes.MarketingPortfolio}/>
                <Route   path='/portfolio/off-shore-management' component={Routes.OffShoreManagementPortfolio}/>
                <Route exact path='/services' component={Routes.Services}/>
            </BrowserRouter>
        )

    }









}