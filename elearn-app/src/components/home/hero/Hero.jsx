 import React from 'react'
 import "./hero.css"
 import Title from "../../common/title/title"
 

 const Hero = () => {
   return (
     <>
     <section className='hero'>
        <div className='container'>
            <div className='row'>
                <Title subtitle='WELCOME TO ACADEMIA' title="Best Online Education " />
                <p>Start your learning journey with world-class courses designed to help you achieve your goals. Join millions of learners and unlock your potential today.</p>
                <div className='button'>
                    <button className='primary-btn'>
                        GET STARTED NOW <i className="fa fa-long-arrow-right"></i>
                    </button>
                    <button>
                        VIEW COURSE <i className="fa fa-long-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
     </section>
     <div className="margin"></div>
     </>
   )
 }
 
 export default Hero