import React, { Component } from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'
export default class AppDevelopment extends Component {

    render() {
        return (
            <div>
                <Navbar reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='app'>
                    {/* app section 1 starts */}
                    <div className='app-section-1'>
                        <div className='head'>
                        Application Development
                        </div>
                        <div className='content'>
                        We offer best interactive designed applications for clients that create impact on the customers
                        </div>
                        <button onClick={()=>{this.props.history.push('/portfolio/app-development')}}>
                               View Portfolio
                            </button>
                    </div>
                    {/* app section 1 ends */}


                    <div className='app-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/app-pic.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            Your Mobile App is a Key to the World
                            </div>
                            <div className='text'>
                            About one-half of the smartphone users in the world believe they cannot live without their phones. If you are ignoring them, you are making a wrong move. We develop mobile apps that provide a sophisticated and user-friendly experience on any hand-held device. 
                            </div>
                            <div className='text'>
                            We live in an age where anyone can access the world through a single touch of a screen. About one-half of the smartphone users in the world believe they cannot live without their cell phones. If you are ignoring a big opportunity, you are making a wrong move. 
                            </div>
                            <div className='text'>
                            We do end-to-end mobile app development by creating applications that provide a sophisticated and user-friendly experience on any hand-held device.
                            </div>
                        </div>
                    </div>
                    <div className='app-section-3 change'>
                        <div className='image'>
                            <img src={require('./assets/images/app-pic-2.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                            S-TECH TECHNOLOGIES AND DEVICES ARE FAR BETTER THAN OTHER MOBILE APP DEVELOPMENT 
                            </div>
                            <div className='text'>
                            We have all the devices from app management, designing, development, testing to marketing and selling. Our Company also has a keen eye on the coming modern technologies such as Beacon Technology, Artificial Intelligence (AI), Internet Of Thing (IOT), Chatbot, Augmented Reality (AR), etc. We are not only monitoring but also implementing these technologies to create our Apps. We have all the modern era skills, creativeness, and ideas which are essential to developing a good App. We design apps with the help of different languages such as React JS, React Native, Java, C#, HTML 5, JavaScript, Objective-C, Swift, Kotlin, etc. We design the IOS App. Similarly, we also design the App on the Android platform and we will help you make it even on the window                            
                            </div>
                            <div className='text'>
                            We will not be looting with you like others. We will do your job at a reasonable and valid price. You will feel that what you got is more than what you spent. S-tech has seen today’s era, we have seen the needs of people, we have seen their wishes and with these in mind, we design an App. We work by thinking tomorrow more than today. You contact us and can ask any queries you have in mind openly, we will eliminate your mental confusion by answering your queries as much as possible.
                             </div>
                        </div>
                    </div>

                    <div className='app-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/partner.jpg')} />
                        </div>
                        <div className='content'>
                            <div className=' head-2'>
                            Are You Looking For Your Business App?
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