import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Footer from '../../components/footer/index'
export default class Services extends Component {

    render() {
        return (
            <div>
                <Navbar  reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='services'>
                    {/* services section 1 starts */}
                    <div className='services-section-1'>
                        <div className='head'>
                            Our Services
                        </div>
                        <div className='content'>
                            Transform your Digital Outreach
                        </div>
                    </div>
                    {/* services section 1 ends */}
                    
                    <div className='services-section-2'>
                        <div className='head'>
                            <div className='text-1'>
                                Our Services
                            </div>
                            <div className='text-2'>
                             Our Featured Services
                            </div>
                            <div className='text-3'>
                             Crafting beautiful brands & Engaging audience
                            </div>
                        </div>
                        <div className='content'>
                            <div onClick={()=>this.props.history.push('/web-development')} className='item'>
                                <div className='icon'>
                                    <CheckCircleIcon fontSize='large' htmlColor='#FF4F5A'/>
                                </div>
                                <div className='text'>
                                    WEB DEVELOPMENT
                                </div>
                            </div>
                            <div onClick={()=>this.props.history.push('/app-development')} className='item'>
                                <div className='icon'>
                                    <CheckCircleIcon fontSize='large' htmlColor='#FF4F5A'/>
                                </div>
                                <div className='text'>
                                    MOBILE DEVELOPMENT
                                </div>
                            </div>
                            <div onClick={()=>this.props.history.push('/software-development')} className='item'>
                                <div className='icon'>
                                    <CheckCircleIcon fontSize='large' htmlColor='#FF4F5A'/>
                                </div>
                                <div className='text'>
                                    CUSTOM SOFTWARE DEVELOPMENT
                                </div>
                            </div>
                            <div onClick={()=>this.props.history.push('/off-shore-management')} className='item'>
                                <div className='icon'>
                                    <CheckCircleIcon fontSize='large' htmlColor='#FF4F5A'/>
                                </div>
                                <div className='text'>
                                    OFF SHORE TEAM MANAGEMENT
                                </div>
                            </div>
                            <div onClick={()=>this.props.history.push('/digital-marketing')} className='item'>
                                <div className='icon'>
                                    <CheckCircleIcon fontSize='large' htmlColor='#FF4F5A'/>
                                </div>
                                <div className='text'>
                                    DIGITAL MARKETING
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='services-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/graphs.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>              
                                Brand Growth hacking
                            </div>
                            <div className='text'>
                                Whether you want to increase conversions or increase traffic on your website, we can design a marketing campaign that can help you achieve your digital goals.
                            </div>
                            <div className='btn'>
                                <button onClick={()=>this.props.history.push('/digital-marketing')}>
                                    Show More Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='services-section-3 change'>
                    <div className='image'>
                            <img src={require('./assets/images/webdev.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>              
                                 Our web designing has unique approaches that provide exceptional customer experiences.
                            </div>
                            <div className='text'>
                            S-tech equip their best services to “Bell The Cat” with their professional Web designers. The web means a complex system of interconnected elements and Design means planning, so web designing a complete meaning is the planning of complex interconnected elements. S-tech Web Designing Company believes that. “No one in this world is helpless if they start helping others” and S-tech is also ready to share your burden with their reliable services.
                             </div>
                            <div className='btn-2'>
                                <button onClick={()=>this.props.history.push('/web-development')}>
                                    Show More Details
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className='services-section-3'>
                    <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>              
                            Partner With Us Now
                            </div>
                        </div>
                        
                    </div>

                    {/* <Footer/> */}
                        <Footer/>
                    {/* footer ends */}
                </div>
            </div>
        )

    }









}