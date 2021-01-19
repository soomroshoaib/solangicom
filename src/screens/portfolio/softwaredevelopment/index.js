import React, { Component } from 'react'
import Navbar from '../../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../../components/footer/index'
export default class SoftwareDevelopmentPortFolio extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='softwareportfolio'>
                    {/* softwareportfolio section 1 starts */}
                    <div className='softwareportfolio-section-1'>
                        <div className='head'>
                            Customized Software Development PortFolio
                        </div>
                        <div className='content'>
                            We offer client-focused and customer-centric Customized software solutions that deliver tangible
                        </div>
                    </div>
                    {/* softwareportfolio section 1 ends */}

                    <div className='softwareportfolio-section-3'>
                        <div className='no-portfolio-text'>
                            Portfolio will be uploaded soon 
                        </div>
                    </div>

                    <div className='softwareportfolio-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                                Are You Looking For Your Business softwareportfoliosite?
                            </div>
                        </div>

                    </div>

                    {/* <Footer/> */}
                    <Footer />
                    {/* footer ends */}
                </div>
            </div>
        )

    }









}