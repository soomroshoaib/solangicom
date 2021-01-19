import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'
export default class WebDevelopment extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e) => { this.props.history.push(e) }} />
                <div className='web'>
                    {/* web section 1 starts */}
                    <div className='web-section-1'>
                        <div className='head'>
                            Web Development
                        </div>
                        <div className='content'>
                            We offer client-focused and customer-centric website solutions that deliver tangible
                        </div>
                        {/* <div className='btn'> */}
                        <button onClick={() => { this.props.history.push('/portfolio/web-development') }}>
                            View Portfolio
                            </button>
                        {/* </div> */}
                    </div>
                    {/* web section 1 ends */}


                    <div className='web-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/website-wallpaper.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                                Your Website is your Brand.
                            </div>
                            <div className='text'>
                                Build your business for life and advertise your services/products from everywhere with our programming language expertise and customer-centric designs.
                                Digital revolution has led the world towards massive change on both micro and macro levels. Multimodal communication is reshaping the lives of people every passing day. In this crucial moment, if you are lagging in the game, you are leading your business towards a dead end. At Stang Solutions, We build your online presence by creating a killer website that is customer-centric and promises a high retention rate for your website.
                             </div>
                            <div className='text'>
                                Increase Your Business Through Our Programming Language Expertise
                                We will make your websites using dierent programming languages such as React JS, React Native, Java, Python, JavaScript, CSS/HTML, PHP, C, SQL, etc. that will increase your business trac
                            </div>
                        </div>
                    </div>
                    <div className='web-section-3 change'>
                        <div className='image'>
                            <img src={require('./assets/images/website-wallpaper2.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            Maintain Healthy Finance Through Proper Planning And Web Development
                            </div>
                            <div className='text'>
                            Our goal is to build your website in such a way that seizes your clients’ attention at a glance. We want to gain trust and increase your credibility in the market, which in return will also increase your ROI. Through our Web Development services, you not only build a strong company prole but also be satised with our reasonable price. Some investment now will give you millions of rupees prot for your business.
                                {/* <li>Responsive e-commerce Website development</li>
                                <li>CMS/custom website development</li>
                                <li>Application website development</li>
                                <li>The experience and knowledge needed to produce scalable and cost-
                                    effective solutions that exceed your expectations</li>
                                <li>Custom ecommerce pricing to help you fine-tune your website design, and custom software development that fits into your budget</li>
                                <li>Personalized ecommerce tool development and implementation, including Magento and shopping cart feeds</li> */}
                                {/* <li>Get a free quote today and we will make a customized website for you as per your needs and requirements!</li> */}
                            </div>
                            <div className='text'>
                            Keeping the constant technology shift in mind, we keep ourselves updated with the latest trends of the market. We not only provide forward-thinking designs but also equip your website with modern tools and technologies. Such as Sublime Text, Chrome Development, JQvery, GitHub, Twitter Bootstrap, etc. which is essential for creating a website that works 24 hours a day, 365 days a year.
                            </div>
                        </div>
                    </div>

                    <div className='web-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                                Are You Looking For Your Business Website?
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