import React,{Component} from 'react'
import Navbar from '../../components/navbar/index'
import './assets/css/app.css'
import Footer from '../../components/footer/index'
export default class AboutUs extends Component{
  
    render(){
        return(
          <div>
            <Navbar  reRoute={(e)=>{this.props.history.push(e)}}/>
            <div className='aboutus'>
              <div className='aboutus-section-1'> 
                <div className='aboutus-section-1-image'>
                  <img src={require('./assets/images/aboutus.png')} />
                </div>
                <div className='aboutus-section-1-text'>
                    What They Say
                    <span>
                        About Us
                    </span>
                </div>
              </div>
              {/*  our mission section  */}
                <div className='aboutus-section-2'>
                    <div className='head'>
                        Our Mission
                    </div>
                    <div className='text'>
                    We create value for our clients by creating value for their customers.
                    </div>
                </div>
             {/* our mission ends */}

             {/* dreamers and doers section */}
                <div className='aboutus-section-3'>
                    <div className='head'>
                        Dreamers & doers
                    </div>
                    <div className='content'>
                        <div className='text-1'>
                        We are a team of dreamers and doers united by a simple idea: If we make a difference for your customers we will make a difference for your business too.
                        </div>
                        <div className='text-2'>
                        And it works.
                        </div>
                        <div className='text-3'>
                        Since 2015, we have led early-stage startups and top-tier brands to “wow” their customers with best-in-class digital products and experiences.
                        </div>
                    </div>
                </div>
             {/* dreamers and doers section end */}
             
             {/* testimonials section */}
                <div className='aboutus-section-4'>
                    <div className='head'>
                        <span>
                            TESTIMONIALS
                        </span>
                        What They Say About Us
                    </div>
                    <div className='content'>
                        <div>
                            <div className='image'>
                                <img src={require('./assets/images/person1.png')} />
                            </div>
                        </div>
                        <div className='extended'>
                            <div className='image'>
                                <img src={require('./assets/images/person2.jpg')} />   
                            </div>
                        </div>
                        <div>
                            <div className='image'>
                                <img src={require('./assets/images/person3.jpg')} />   
                            </div>
                        </div>
                    </div>
                </div>
             {/* testimonials section ends */}

            {/* Clientele section */}
                <div class='aboutus-section-5'>
                    <div className='text'>
                    Trusted by hundreds of the world's best organizations.
                    </div>
                    {/* <div className='btn'>
                        <button>View Clientele</button>
                    </div> */}
                </div>
            {/* Clientele section ends */}

            {/* projects section */}
                {/* <div className='aboutus-section-6'>
                    <div className='item'>
                        <div className='number'>
                            100
                        </div>
                        <div className='text'>
                            Established
                        </div>
                    </div>
                    <div className='item'>
                        <div className='number'>
                            120+
                        </div>
                        <div className='text'>
                        HAPPY CLIENTS
                        </div>
                    </div>
                    <div className='item'>
                        <div className='number'>
                            160+
                        </div>
                        <div className='text'>
                        SUCCESFUL PROJECTS
                        </div>
                    </div>
                    <div className='item'>
                        <div className='number'>
                            35k
                        </div>
                        <div className='text'>
                        CUP A TEA
                        </div>
                    </div>
                </div> */}
            {/* projects section ends */}
              
              {/* footer starts */}
              <Footer/>
              {/* footer ends */}
            </div> 
          </div>
        )

    }









}