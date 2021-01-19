import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'
export default class SoftwareDevelopment extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='software'>
                    {/* software section 1 starts */}
                    <div className='software-section-1'>
                        <div className='head'>
                        Custom Software Development
                        </div>
                        <div className='content'>
                        We offer best interactive designed softwares for clients that create impact on the customers
                        </div>
                        <button onClick={()=>{this.props.history.push('/portfolio/software-development')}}>
                               View Portfolio
                            </button>
                    </div>
                    {/* software section 1 ends */}


                    <div className='software-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/app.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            What is Lorem Ipsum?
                            </div>
                            <div className='text'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                            {/* <div className='text'>
                            TrafxDigital is an android software design company, with years of experience in Java programming language. We specialize in building highly scale-able android softwares for diverse verticals and industries. The softwares developed by us are packed with brilliant features, helping us provide innovative mobile solutions that deliver high returns on investment. We use the best practices and proven methodologies, and thorough testing for bug-free android softwarelications.
                            </div>
                            <div className='text'>
                            Each online stores or eCommerce company website that we offer is a joint effort of our website designers, developers, expert strategists, and Internet marketers. With outstanding eCommerce website design from our team, our solutions function as a reliable, long-lasting online store for any business. They also look amazing and display properly on all devices using responsive design or mobile- friendly elements to make sure eCommerce companies are accessible at any time, even when users are on the go. Here, we offer an eCommerce Internet solution for any business.
                            </div> */}
                        </div>
                    </div>
                    <div className='software-section-3 change'>
                        <div className='image'>
                            <img src={require('./assets/images/app2.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            Why do we use it?
                            </div>
                            <div className='text'>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                              </div>
                            {/* <div className='text'>
                            The iOS software Store has over 1 million softwares, all trying to attract consumer attention. We make sure your iPhone mobile software is designed the right way to do so. TrafxDigital an experienced iPhone software development company, we provide customized iOS software services to help you achieve your business goals. We have a dedicated team of highly innovative iOS softwarelication developers and iOS software designers who are light years ahead of using the latest technologies and trends prevailing in iOS software
                            </div> */}
                        </div>
                    </div>

                    <div className='software-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                            Are You Looking For Your Business software?
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