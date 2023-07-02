import React from "react";
import { Outlet} from "react-router-dom";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import './HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useRef} from 'react';
import pdf from './Prudhvi-Resume.pdf';
// import resumePdf from '../Pages/Prudhvi-Resume.pdf';

const HomePage = () =>{
    const myref = useRef(null);
    const myref2 = useRef(null);
    const myref3 = useRef(null);


    useEffect(() => {
        // sessionStorage.clear();
        AOS.init({duration: 3000});
        console.log("🔥🔥🔥🔥🔥🔥🔥");
      });

      const handleClick = () => {
        myref.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleResumepdf = () =>{
        window.open(pdf);
      }

      const handleClick2 = () => {
        myref2.current?.scrollIntoView({behavior: 'smooth'});
      };

      const handleClick3 = () => {
        myref3.current?.scrollIntoView({behavior: 'smooth'});
      };

      const awsRedirect = () =>{
        window.location.href = 'https://www.coursera.org/account/accomplishments/certificate/EHUGNG8ENRU8';
      }

      const mlRedirect = () =>{
        window.location.href = 'https://www.coursera.org/account/accomplishments/certificate/GGGVLH6L57FH';
      }
      const GARedirect = () =>{
        window.location.href = 'https://analytics.google.com/analytics/academy/certificate/ObBKGYYbQ5-PBTl2z5AKIg';
      }
      
    return (
    <>
    <div className="body">

      <div className="Header container">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2"></div>
          <div className="col-lg-8 menu-tabs">
            <span className="navbarTabs" onClick={handleClick}>About Me🙋‍♂️</span>
            <span className="navbarTabs" onClick={handleClick2}>Projects🏗️</span>
            <span className="navbarTabs" onClick={handleClick3}>Certificates🥇</span>
            <span className="navbarTabs" onClick={handleClick}>Contact☎️</span>
            <span className="navbarTabs" onClick={handleResumepdf}>Resume📄</span>
          </div>
        </div>
      </div>

        <div data-aos="fade-left" className="Section">
            <div className="container">

              <div className="row">
                <div className="col-lg-5">
                  <div className="xx"></div>
                </div>
                <div className="col-lg">
                      <h2>Hey Hi👋</h2>
                      <h3>Hi, I'm Prudhvi. A passionate <b>Front-end React Developer</b> based in San Jose, CA. 📍</h3>
                      <div class="move">
                        <h4 onClick={handleClick}>Know Me👇</h4>
                      </div>
                </div>
              </div>

            </div>
        </div>

        <div ref={myref} data-aos="fade-up" data-aos-delay="300" data-aos-easing="ease" className="Section">
                <div className="boxLayout">
                <div className="container">

                    <div className="row">
                      <div className="col-lg-5">
                        <div className="xx"></div>
                      </div>
                      <div className="col-lg">
                            <h1>About Me🙋‍♂️</h1>
                            <h5> I am a graduate student at <b>San Jose State University,</b> pursuing Master's in Software Engineering.
                                  I worked as a Associate Software Engineer & Data Analyst Engineer at Abjayon.Inc, Hyderabad, India from October, 2020 to June, 2022.
                                  I have graduated in 2020 as a Bachelors of Technology (B.Tech) in Computer Science and Engg. from Sreenidhi Institute of Science and Technology, Telangana.
                                  In my last professional experience, my day to day activities majorly involved in understanding user stories from clients, developing applications according to wireframe models, regressive testing, working with raw data to analyze and visualize using Google Analytics and Google Data Studio, and developing important POCs for the organization. 
                            </h5>
                            <div className="move">
                                <h4 onClick={handleClick2}>Wanna See Projects that i worked on🤔?</h4>
                            </div>

                      </div>
                    </div>

                    </div>
                </div>
        </div>


        <div ref={myref2} data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" className="Section">
          <h2>Projects 🏗️</h2>
                <div class="container">
                      <div class="row">
                        <div class="col-sm outerBox">
                          <div className="pic"></div>
                            <h4 href="https://github.com/gopinathsjsu/team-project-team-four">Airport Management System✈️</h4>
                            <p>The website is designed for airport management needs and provides a user interface that displays flight information for arrivals and departures. It has an employee login for airline and airport staff, admin management, and baggage handling capabilities. The system automatically assigns gate numbers to flights and manages baggage carousel assignments. The website is hosted on the AWS Elastic Compute Cloud platform and includes an autoscaling load balancer to handle high traffic.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                                <a href="https://github.com/gopinathsjsu/team-project-team-four"><img src="./github-mark.png" alt="Github"></img></a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm outerBox">
                        <div className="twitter"></div>
                          <h4>Twitter Data Analysis📈</h4>
                          <p>The dataset contains various attributes related to climate change tweets posted on Twitter, including the date and time of the tweet, the user's ID, longitude and latitude coordinates for geographical location, topics related to climate change, sentiment towards climate change, stance on climate change (believer, denier, neutral), gender of the user, average temperature at the location of the user, and the level of text aggression in the tweet. The dataset has some missing values and undefined or unrelated one-word hashtags, which will be handled during data preprocessing.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                                <a href="https://github.com/aman-kaur-11/cmpe255_group_gapv"><img src="./github-mark.png" alt="Github"></img></a>
                              </div>
                            </div>
                          </div>

                        </div>
                        <div class="col-sm outerBox">
                          <div className="robo"></div>
                          <h4>Security Robot🤖</h4>
                          <p>The objective of the project is to integrate Amazon Web Services (AWS) Robomaker with a web application. This integration will allow users to control the robot through the web interface, which is deployed in the AWS Elastic Compute Cloud (EC2) environment and is equipped with an autoscaling load balancer to manage high traffic demands.</p>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                                <a href="https://github.com/paavamaani/Security-Robot"><img src="./github-mark.png" alt="Github"></img></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
        </div>


        <div ref={myref3} data-aos="fade-right" data-aos-duration="3000" data-aos-easing="ease-out-cubic" className="Section">
          <h2>Certificates 🥇</h2>
                <div class="container">
                      <div class="row">
                        <div class="col-sm outerBox2">
                          <div className="aws" onClick={awsRedirect}></div>
                              <div className="col-sm">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/EHUGNG8ENRU8"><img src="./aws.png" alt="AWS"></img></a>
                              </div>
                        </div>
                        <div class="col-sm outerBox2">
                        <div className="ml" onClick={mlRedirect}></div>
                          <div className="container">
                            <div className="row ">
                              <div className="col-sm">
                                <a href="https://www.coursera.org/account/accomplishments/certificate/GGGVLH6L57FH"><img src="./ml.png" alt="ML"></img></a>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm outerBox2">
                          <div className="GA" onClick={GARedirect}></div>
                                <div className="col-sm">
                                    <a href="https://analytics.google.com/analytics/academy/certificate/ObBKGYYbQ5-PBTl2z5AKIg"><img src="./GA.png" alt="Google Analytics Cerificate"></img></a>
                                </div>     
                         </div>
                        <div class="col-sm outerBox2">
                        </div>
                      </div>
                </div>
        </div>

        

        <div data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className="Section">
          <div className="contactDiv">
            <h1>Get In Touch👇</h1>
            <div className="contactPara">
              <p>Although I’m currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
              </p>
              <a href="mailto:prudhvimokrala1@gmail.com">
                <button type="button" class="btn btn-primary btnclass">Say Hello!</button></a>

            </div>
          </div>
        </div>

    <Outlet/>
    </div>
    </>
    );
};

export default HomePage;