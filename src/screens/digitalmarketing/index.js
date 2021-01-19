import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'
export default class DigitalMarketing extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='marketing'>
                    {/* marketing section 1 starts */}
                    <div className='marketing-section-1'>
                        <div className='head'>
                             Digital Marketing
                        </div>
                        <div className='content'>
                            We offer client-focused and customer-centric marketingsite solutions that deliver tangible
                        </div>
                        <button onClick={()=>{this.props.history.push('/portfolio/digital-marketing')}}>
                               View Portfolio
                            </button>
                    </div>
                    {/* marketing section 1 ends */}


                    <div className='marketing-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/dm1.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            Digital Marketing Services
                            </div>
                            <div className='text'>
                            By looking at the growing engagement of people in today’s world. DIGITAL means internet and marketing mean catching attention so by digital marketing we catch the attention of people via the internet through many ways and methods. With the help of our services, you will not have to visit in any street, any area, any city or any country with you can easily introduce your products and services just sitting on a relaxing chair. The purpose of The S-tech behind this service is to facilitate you to save your money and time. Only wisest and counselors can understand the value of time. S-tech knows the value of time better than others That’s why S-tech wants to saves your time and put your money in such a place that can benefit you.
                             </div>
                            <div className='text'>
                            We are providing such a platform in which you can easily check people’s response through your single touch. This platform will protect you from disgrace, save your time and money. The best thing is that of this platform that you can experiment here freely and openly. S-tech do their best to eliminate the distance between people and you through this marketing is as possible. And keep your good name in people’s hearts and minds. The growth of business starts with marketing so, you can grow your business with digital marketing no matter how small it is. Marketing is compulsory before selling. Digital Marketing will turn your small business into a big one
                             </div>
                        </div>
                    </div>
                    <div className='marketing-section-3 change'>
                        <div className='image'>
                            <img src={require('./assets/images/dm2.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            S-TECH DIGITAL MARKETING AGENCY SAVE YOUR TIME, MONEY AND SPACE
                            </div>
                            <div className='text'>
                            CSS DIGITAL MARKETING AGENCY STARTED digital marketing, by looking at the growing engagement of people in today’s world. DIGITAL means internet and marketing mean catching attention so by digital marketing we catch the attention of people via the internet through many ways and methods. With the help of our services, you will not have to visit in any street, any area, any city or any country with you can easily introduce your products and services just sitting on a relaxing chair. The purpose of The S-tech AGENCY behind this service is to facilitate you to save your money and time. Only wisest and counselors can understand the value of time. S-tech AGENCY knows the value of time better than others That’s why S-tech wants to saves your time and put your money in such a place that can benefit you.
                                {/* <li>Responsive e-commerce marketingsite development</li>
                                <li>CMS/custom marketingsite development</li>
                                <li>Application marketingsite development</li>
                                <li>The experience and knowledge needed to produce scalable and cost-
                                    effective solutions that exceed your expectations</li>
                                <li>Custom ecommerce pricing to help you fine-tune your marketingsite design, and custom software development that fits into your budget</li>
                                <li>Personalized ecommerce tool development and implementation, including Magento and shopping cart feeds</li> */}
                                {/* <li>Get a free quote today and we will make a customized marketingsite for you as per your needs and requirements!</li> */}
                                </div>
                            <div className='text'>
                            BRING YOUR PRODUCT TO THE MARKET WITH SINGLE TOUCH, RAISE YOUR BUSINESS LEVEL AND MAINTAIN YOUR GOODWILL
                            </div>
                        </div>
                    </div>

                    <div className='marketing-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                                Are You Looking For Your Business marketingsite?
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