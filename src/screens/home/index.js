import React,{ Component  } from 'react'
import Navbar from '../../components/navbar/index'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import './assets/css/app.css'
import Footer from '../../components/footer/index'

export default class Home extends Component{
  state={
      active:''
  }
  render(){
      return(
          <div>
            <Navbar  reRoute={(e)=>{this.props.history.push(e)}}/>
            <div className='home'>
              <div className='home-section-1'> 
                <div className='home-section-1-text'>
                 {/* We Make Digital Products & Experiences That Have Lasting Impact. */}
                 CONVERT YOUR DIFFICULTY INTO EASE WITH <b>S-TECH</b> 
                </div>
                <div className='home-section-1-image'>
                  <img src={require('./assets/images/homeImage1.jpg')} />
                </div>
              </div>
             {/* services section */}
              <div className='home-section-2'>
                <div className='section-2-head'>
                  <div className='sec-2-text-1'> 
                    Sevices
                  </div>
                  <div className='sec-2-text-2'>
                    Driven By Passion
                  </div>
                </div>
                <div className='content'>
                     <div className='sec-2-content-item'>
                        <div className='icon'> 
                          <CheckCircleIcon htmlColor='#FF4F5A' fontSize={'large'}/>
                        </div>
                        <div className='text'>
                          <span>
                             Web Development
                          </span>
                          We offer client-focused and customer-centric website solutions that deliver tangible
                        </div>
                    </div>  
                     <div className='sec-2-content-item'>
                        <div className='icon'> 
                          <CheckCircleIcon htmlColor='#FF4F5A' fontSize={'large'}/>
                        </div>
                        <div className='text'>
                          <span>
                             App Development
                          </span>
                          We offer best interactive designed applications for clients that create impact on the customers
                        </div>
                    </div>  
                     <div className='sec-2-content-item'>
                        <div className='icon'> 
                          <CheckCircleIcon htmlColor='#FF4F5A' fontSize={'large'}/>
                        </div>
                        <div className='text'>
                          <span>
                             Custom Software Development
                          </span>
                          Custom Software Development is a crucial part of any business as it always leaves a memorable impression
                        </div>
                    </div>  
                     <div className='sec-2-content-item'>
                        <div className='icon'> 
                          <CheckCircleIcon htmlColor='#FF4F5A' fontSize={'large'}/>
                        </div>
                        <div className='text'>
                          <span>
                             Digital Marketing
                          </span>
                          Digital marketing helps you retain customers. You can reach your customers
                        </div>
                    </div>  
                     <div 
                    //  style={{margin:'10px auto'}} 
                     className='sec-2-content-item'>
                        <div className='icon'> 
                          <CheckCircleIcon htmlColor='#FF4F5A' fontSize={'large'}/>
                        </div>
                        <div className='text'>
                          <span>
                             Off Shore Management
                          </span>
                          Off Shore Management is a crucial part of any business as it always leaves a memorable impression
                        </div>
                    </div>
                </div>
              </div>
              {/* services section ends */}
              
              {/* client section */}
              <div className='home-section-3'>
                <div className='image'>
                  <img src={require('./assets/images/homeImage2bg.png')}/>
              
                </div>
                <div className='content'>
                  <div className='text-1'>
                  OUR CLIENTELE
                  <a href="https://signcove.com.au/demo/"> <img  src={require('../home/assets/images/Capture.PNG')}  className="photes"  /> </a>
                   <a href="http://101.0.117.115/~passportdog/customize-passport/"> <img src={require('../home/assets/images/Capture2.PNG')} className="phote12" /> </a>
                  </div>
                  <div className='text-2'>
                  We take good ideas—and turn them into fantastic experiences 
              
                  </div>

               
                  {/* <div className='btn'>
                    <button>VIEW CLIENTELE</button>
                  </div> */}
                </div>
              </div>

              <a href="https://www.oneflare.com.au/"> <img src={require('../home/assets/images/Capture3.PNG')} className="living"  /> </a>
              <a href="https://zenithgold.com.au/">   <img src={require('../home/assets/images/Capture4.PNG')} className="moveing" /> </a>
              {/* client section ends */}
              
              {/* testimonials Section */}
              <div className='home-section-4'>
                <div className='head'>
                  <span>
                    testimonials
                  </span>
                  What They Say About Us
                </div>
                <div className='content'>
                  <div className='image'>
                    <img src={require('./assets/images/homeImage3.jpg')} />
                  </div>
                  <div className='text'>
                  Like What You See? Let’s Have A Conversation.
                  <ThumbUpIcon fontSize='large' htmlColor='#FFDC5D' />
                  </div>
                </div>
              </div>
              {/* testimonials section end */}
              
              {/* footer starts */}
              <Footer/>
              {/* footer ends */}
            </div> 
          </div>
        )

    }








}
