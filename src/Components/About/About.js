import React from 'react';
import Header from "../Header/mainHeader";
import Footer from "../Footer/Footer";
import './About.css';
import facebook from '../../assets/icons/facebook.ico';
import github from '../../assets/icons/github.ico';
import whatsapp from '../../assets/icons/whatsapp.ico';
import stanley from '../../assets/team/stanley.png';
import peter from '../../assets/team/peter.png';
import oyin from '../../assets/team/oyinda.png';

const About =()=>{
    return (
  
<div className=" covr  br3 ba  b--black-10  w-100 w-100-m w-100-l  shadow-5 ">
<Header/>


        <div className=" w-100 ">
        <h6 className="tc pr4 f2 bg-color flex flex-column  ">About </h6>
    <p className=" f3">  E-voting was a project carried out by a team of five developers connected through a Developer&apos;s circle innovative program
    intended to connect developers in order to solve problems that affects our society through technology.
    As a team amongst this various systems of the society we chose  Project 16 ,which was to help reduce one source of corruption and bribery in our community
    and with that we developed an online voting system in order to solve the problem in our voting system as a society with the intent to 
    acheive  less corruption in voting, increase security of life and property as voters don&apos;t leave their comfort zone ,
    create opportunity for Everyone to vote ,Since its easy to cast votes
    ,manages or reduce the cost of carrying out election as the app eliminates electoral tools like ballot paper,box,vest,transportation,etc
    ,Eliminates unaccepted vote as it is not done manually so ballot paper can not be torn,stained or thumb print ink appearing between two parties choices
    ,Eliminates/reduces rigging as vote are cast simultaneously and calculations as done online and all can monitor votes  without tampering
    and also Prevents case of double voting as users can only vote once.
    With the conclusion of the program we have been able to create this web app working together.
    </p>
            </div>
            <h6 className="tc pr4 f2 b mt2 bg-color flex flex-column center ">Meet Our Team</h6>
<div className="  mt2 container w-100 w-100 w-100-l flex jt">

<article className="fl ma4  br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={stanley}
      style={{maxHeight:'300px'}}
       alt="contestant" />
    
    </div>
          <div className="mb0">
                <legend className="tc center f4  ph2 fw6 mh0">AGU  STANLEY CHIBUIKE</legend>
                <p className="tc  lh-copy measure  f6 black-70">chibuke.stanley50@gmail.com</p>
                <div className="w-100 flex  ">  
                <a className=" dim center" href="https://www.facebook.com/chibuke.stanley.5">
                <img className="mw2" src={facebook} alt="facebook"  />
                </a>
                <a className=" dim center" href="https://github.com/Stanyke">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348102760569">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}  
              </div>
    
  </article>
 
  <article className="fl br3 ba ma4 mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={oyin}
      style={{maxHeight:'300px'}}
       alt="contestant" />
    
    </div>
          <div >
                <legend className="tc f4 center ph2 fw6 mh0">OGUNSOLA OYINDAMOLA</legend>
                <p className=" tc lh-copy measure  f6 black-70">ogunsola.irene@gmail.com</p>
                <div className="w-100 flex ">  
                <a className=" dim center" href="https://www.facebook.com/ogunsola.oyindamola">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/Honeyspring">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348092916689">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}  
              </div>
    
  </article>
 
  <article className="mv4 fl br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100  ma2"
      src="data:image/jpeg;base64,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"
      style={{maxHeight:'300px'}}
       alt="contestant" />
    
    </div>
          <div >
                <legend className="tc center f4  ph2 fw6 mh0"> JORDAN KAGMENI</legend>
                <p className="tc lh-copy measure  f6 black-70">kagmeni77@gmail.com</p>
                <div className="w-100 flex ">  
                <a className=" dim center" href="https://www.facebook.com/jordinho.kagmeni.71">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/el-torador">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+23797040511">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}  
              </div>
    
  </article>
  
  <div className="w-100 flex jt">
  <article className="fl ma4 br3 ba  mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
  <div className="f4  ph2 fw6 mh0">
    <img
    className="w-100 ma2"
      alt="contestant"
      style={{maxHeight:'300px'}}
      src="data:image/jpeg;base64,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"
              />
    </div>
  
    
      <legend className="tc f4 center ph2 fw6 mh0"> SAMUEL</legend>
      <p className=" tc lh-copy measure  f6 black-70">email adress</p> 
      <div  className="w-100 flex">
      <a className=" dim center" href="https://www.facebook.com/groups/249164319589395/">
      <img className="mw2 " src={facebook} alt="facebook" />
      </a>
      <a className=" dim center" href="https://github.com/coolsami">
      <img className="mw2 " src={github} alt="github" />
      </a>
      <a className=" dim center" href="https://wa.me/+2348066912700">
      <img className="mw2 " src={whatsapp} alt="whatsapp" />
      </a>
     </div> {/* socials */} 
    
  </article>
  <article className="fl br3 ba ma4 mw b--black-10  w-100 w-25-l w-50-m shadow-5  flex flex-column">
    <div className=" f4 fw6  ph2 mh0">
      <img className="w-100 ma2"
      src={peter}
      style={{maxHeight:'300px'}}
       alt="contestant" />
    
    </div>
          <div >
                <legend className="tc f4 center ph2 fw6 mh0"> OGBA PETER CHIMAOBI</legend>
                <p className="tc  lh-copy measure  f6 black-70">peterbozz1996@gmail.com</p>
                <div className="w-100 flex  ">  
                <a className=" dim center" href="https://www.facebook.com/pkingzee">
                <img className="mw2" src={facebook} alt="facebook" />
                </a>
                <a className=" dim center" href="https://github.com/peterchims">
                <img className="mw2" src={github} alt="github" />
                </a>
                <a className=" dim center" href="https://wa.me/+2348188346382">
                <img className="mw2" src={whatsapp} alt="whatsapp" />
                </a>
                </div> {/* socials */}  
              </div>
    
  </article>
  </div>
  </div>

 
<Footer />
</div>
);
  }

export default About;