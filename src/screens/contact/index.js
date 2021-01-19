import React from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import Footer from '../../components/footer/index'

import emailjs from 'emailjs-com';

export default function ContactUs () {
        const sendEmail=(e)=> {
        e.preventDefault();
    
        emailjs.sendForm('service_lrdm1pq', 'template_ru4gi8a', e.target, 'user_IvwVVSukaIlSWorkY9L8j')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    
        return (
            <div>
                <Navbar  reRoute={(e)=>{this.props.history.push(e)}} />
                <div className='contact'>
                    {/* contact section 1 starts */}
                    <div className='contact-section-1'>
                        <div className='head'>
                            Let's
                <span> Create</span> <br />
                            <span> Progress </span>
                 Together
                </div>
                        <div className='content' style={{marginBottom:"110px",}}>
                            We enjoy partnering with brands seeking new heights of differentiation.We enjoy partnering with brands seeking new heights of differentiation.
                </div>
               



                </div>
                    {/* contact section 1 ends */}
                    {/* section 2 starts */}
                    <div className='contact-section-2'>
                        <div className='text'>
                            Please submit your project details for a free consultation call and proposal. We review every inquiry and respond promptly.
                    </div>
                    </div>
                    {/* section 2 ends */}

                    {/* location starts */}
                    <div className='contact-section-3'>
                        <div className='image'>
                            <img src={require('./assets/images/location.jpg')} />
                        </div>
                        <div className='content'>
                            <div className='head'>
                                More Contact:
                            </div>

                   





                           
                           <div className="bigs">
                           <div className='contact-inner-content'>
                                

                                <div>
                                     {/* form section */}

                                <div className="app" style={{marginBottom:'100px'}}>
                               <form onSubmit={'sendEmail'}>
                               <label>Message</label>

                               <textarea placeholder="Message" name="message" className="area5"></textarea>
                        
                              <label>Name</label>
                                <input placeholder="Name" name="name" />

                             <label>Email</label>
                              <input placeholder="Email" name="" />
                              <br />

                             
                             
                             <button type="submit">Submit</button>
                           </form>
                                  </div>


                                   {/* {/* Form section end  } */}
                                      </div>
                                      <div style={{marginLeft:'100px',marginTop:'300px'}}>

                                <div className='location-div'>
                                    <div className='head'>
                                        Location
                                     </div>
                                    <div className='content'>
                                        <div className='icon'>
                                            <LocationOnIcon htmlColor='#FF4F5A' fontSize='large' />
                                        </div>
                                        <div className='text'>
                                            Work Hall, Ground Floor Village restaurant, Karachi <br/>
                                            258 GLEAVE TERRACE, <br/>
                                            L9T 8N9 Milton ON, Canada
                                        </div>
                                    </div>
                                </div>
                                <div className='email-div'>
                                    <div className='head'>
                                        Email
                                    </div>
                                    <div className='content'>
                                    <div className='icon'>
                                            <EmailIcon fontSize='large' htmlColor='#FF4F5A'/>
                                        </div>
                                        <div className='text' style={{marginRight:'100px'}}>
                                            sajid@staffingsolutions.com.pk
                                        </div>
                                    </div>
                                </div>

                                          </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    {/* location ends */}

                    {/* footer starts */}
                    {/* <Footer/> */}
                        <Footer/>
                    {/* footer ends */}
                </div>
            </div>
        )

    }









