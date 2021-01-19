import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'
export default class OffShoreManagement extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='offshore'>
                    {/* offshore section 1 starts */}
                    <div className='offshore-section-1'>
                        <div className='head'>
                             Off Shore Management
                        </div>
                        <div className='content'>
                            We offer client-focused and customer-centric offshoresite solutions that deliver tangible
                        </div>
                        <button onClick={()=>{this.props.history.push('/portfolio/off-shore-management')}}>
                               View Portfolio
                            </button>
                    </div>
                    {/* offshore section 1 ends */}


                    <div className='offshore-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/web.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                                What makes STech. a leading offshore management agency?
                            </div>
                            <div className='text'>
                                With Trafxdigtal as your offshore development agency, you will receive client-focused, customer-centric, effective offshoresite solutions that deliver tangible business results. We combine our vast industry experience with the latest technology trends and help each brand to achieve its most desirable digital goals. That’s how we roll and deliver user-friendly and interactive offshore solutions to all valuable clients.
                             </div>
                            <div className='text'>
                                Each online stores or eCommerce company offshoresite that we offer is a joint effort of our offshoresite designers, developers, expert strategists, and Internet marketers. With outstanding ecommerce offshoresite design from our team, our solutions function as a reliable, long-lasting online store for any business. They also look amazing and display properly on all devices using responsive design or mobile- friendly elements to make sure eCommerce companies are accessible at any time, even when users are on the go. Here, we offer an eCommerce Internet solution for any business.
                            </div>
                        </div>
                    </div>
                    <div className='offshore-section-3 change'>
                        <div className='image'>
                            <img src={require('./assets/images/web2.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                                We can help you manage your
                            </div>
                            <div className='text'>
                                <li>Responsive e-commerce offshoresite development</li>
                                <li>CMS/custom offshoresite development</li>
                                <li>Application offshoresite development</li>
                                <li>The experience and knowledge needed to produce scalable and cost-
                                    effective solutions that exceed your expectations</li>
                                <li>Custom ecommerce pricing to help you fine-tune your offshoresite design, and custom software development that fits into your budget</li>
                                <li>Personalized ecommerce tool development and implementation, including Magento and shopping cart feeds</li>
                                {/* <li>Get a free quote today and we will make a customized offshoresite for you as per your needs and requirements!</li> */}
                                </div>
                            <div className='text'>
                            Get a free quote today and we will make a customized offshoresite for you as per your needs and requirements!
                            </div>
                        </div>
                    </div>

                    <div className='offshore-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                                Are You Looking For Your Business offshoresite?
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