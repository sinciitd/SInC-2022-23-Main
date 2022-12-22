import React from 'react'
import './TeamPage.css'
import bar from './bar.svg'
import barMobile from './bar_mobile.svg'
import oc from '../assets/oc/oc.jpg'
import ctm1 from '../assets/ctm/ctm-amit-kumar.jpg'
import ctm2 from '../assets/ctm/ctm-rahul-chhabra.jpg'
import coordiTech1 from '../assets/technical/coordi-satyapragnya.jpg'
import coordiTech2 from '../assets/technical/coordi-harsh.jpeg'
import coordiTech3 from '../assets/technical/coordi-dev.jpg'
import exeTech1 from '../assets/technical/exe-ark.jpg'
import exeTech2 from '../assets/technical/exe-gopal.jpg'
import exeTech3 from '../assets/technical/exe-jaskaran.jpg'
import exeTech4 from '../assets/technical/exe-nancy.jpg'
import exeTech5 from '../assets/technical/exe-vatsal.jpg'
import coordiCr1 from '../assets/cr/coordi-aryan.jpg'
import coordiCr2 from '../assets/cr/coordi-hriday.jpeg'
import coordiCr3 from '../assets/cr/coordi-rohit.jpg'
import coordiCr4 from '../assets/cr/coordi-vidhi.jpg'
import exeCr1 from '../assets/cr/exe-akshay.jpg'
import exeCr2 from '../assets/cr/exe-chandan.jpg'
import exeCr3 from '../assets/cr/exe-krishna.jpg'
import exeCr4 from '../assets/cr/exe-vansh.jpg'
import exeCr5 from '../assets/cr/exe-yash.jpeg'
import CoordiDesign1 from '../assets/design/coordi-avanti.jpg'
import CoordiDesign2 from '../assets/design/coordi-soumya.jpeg'
import CoordiDesign3 from '../assets/design/coordi-velugonda.jpg'
import exeDesign1 from '../assets/design/exe-parth.jpg'
import CoordiEvents1 from '../assets/events/coordi-lakshya.jpg'
import CoordiEvents2 from '../assets/events/coordi-lakshya-chaudhary.jpg'
import CoordiEvents3 from '../assets/events/coordi-shlokh.jpg'
import exeEvents1 from '../assets/events/exe-anchal.jpg'
import exeEvents2 from '../assets/events/exe-sanchit.jpg'
import exeEvents3 from '../assets/events/exe-tanishq.jpg'
import CoordiKO1 from '../assets/ko/coordi-pratik.jpg'
import CoordiKO2 from '../assets/ko/coordi-prajwal.jpg'
import CoordiKO3 from '../assets/ko/coordi-yashika.jpg'
import exeKO1 from '../assets/ko/exe-ayush.jpg'
import exeKO2 from '../assets/ko/exe-chaitanay.jpg'
import exeKO3 from '../assets/ko/exe-kahlan.jpg'
import exeKO4 from '../assets/ko/exe-priyash.jpg'
import exeKO5 from '../assets/ko/exe-shikhar.jpg'
import exeKO6 from '../assets/ko/exe-yogita.jpg'
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
import AboutUs from '../about-us/AboutUs'










const TeamPage = () => {
    return (
        <div>
            <AboutUs/>
            {/* <Header /> */}
            <div className="teamPageBase">
                {/* Section Break */}

                <div className="teamHeading">
                    TEAM
                </div>

                <img className="bar" src={bar} alt="bar" />
                <img className="bar-mobile" src={barMobile} alt="bar-mobile" />

               

                {/* Section Break */}

                <div className="teamsHeading">
                    Core Team Members
                </div>

                <div className='div-Coordi'>

                <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="p-2 bd-highlight">
                            <div className="cardCoordi">
                                <img className="card-img-topCTM" src={oc} alt=""></img>
                                <div className="cardNameCoordi">
                                <h5>Madhav Malani</h5>
                                        Overall Coordinator
                                </div>
                            </div>
                        </div>
                    </div>

                <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="p-2 bd-highlight">
                            <div className="cardCoordi">
                                <img className="card-img-topCTM" src={ctm1} alt=""></img>
                                <div className="cardNameCoordi">
                                <h5>Amit Kumar</h5>
                                        CTM
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex flex-row justify-content-around align-items-center">
                        <div className="p-2 bd-highlight">
                            <div className="cardCoordi">
                                <img className="card-img-topCTM" src={ctm2} alt=""></img>
                                <div className="cardNameCoordi">
                                <h5>Rahul Chhabra</h5>
                                        CTM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section Break */}

                <div className="teamsHeading">
                    Technical & UI/UX
                </div>

                <div className='div-section'>
                    <div className='div-Coordi'>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={coordiTech1} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Satyapragnya</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={coordiTech2} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Harsh</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={coordiTech3} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Dev</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='div-exe'>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeTech1} alt=""></img>
                                <div className="circleName">
                                    <h5 >Ark</h5>
                                    Executive
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeTech3} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Jaskaran</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeTech5} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Vatsal</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeTech2} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Gopal</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeTech4} alt=""></img>
                                <div className="circleName">
                                    <div className='exeName'><h5 >Nancy</h5></div>
                                    <div className=''>Executive</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Section Break */}
                <div className="teamsHeading">
                    Corporate & Alumni Relation
                </div>

                <div className='div-section'>
                    <div className='CAR-mobile'><div></div>
                        <div className='div-Coordi'>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr1} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Aryan</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr2} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Hriday</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='div-Coordi'>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr3} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Rohit</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr4} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Vidhi</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='CAR-web'>
                        <div className='div-Coordi'>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr1} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Aryan</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr2} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Hriday</h5>
                                            Coordinator
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr3} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Rohit</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex flex-row justify-content-around align-items-center">
                                <div className="p-2 bd-highlight">
                                    <div className="cardCoordi">
                                        <img className="card-img-topCoordi" src={coordiCr4} alt=""></img>
                                        <div className="cardNameCoordi">
                                            <h5>Vidhi</h5>
                                            Coordinator
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='div-exe'>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeCr1} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Akshay</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeCr2} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Chandan</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeCr3} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Krishna</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeCr4} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Vansh</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeCr5} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Yash</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                {/* Section Break */}

                {/* Section Break */}
                <div className="teamsHeading">
                    Design and Creative
                </div>

                <div className='div-section'>
                    <div className='div-Coordi'>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiDesign1} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Avanti</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiDesign2} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Soumya</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiDesign3} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Velugonda</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='div-exe'>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeDesign1} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Parth</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        {/*  */}


                    </div>

                </div>
                {/* Section Break */}

                {/* Section Break */}
                <div className="teamsHeading">
                    Events & Administration
                </div>

                <div className='div-section'>
                    <div className='div-Coordi'>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiEvents1} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Lakshya</h5>
                                        Coordinator
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiEvents2} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Lakshya</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiEvents3} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Shlok</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='div-exe'>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeEvents1} alt=""></img>
                                <div className="circleName">
                                    <div><h5 >Anchal</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeEvents2} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Sanchit</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeEvents3} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Tanishq</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                {/* Section Break */}

                {/* Section Break */}
                <div className="teamsHeading">
                    Knowledge & Outreach
                </div>

                <div className='div-section'>
                    <div className='div-Coordi'>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiKO1} alt=""></img>
                                    <div className="cardNameCoordi">

                                        <h5>Pratik</h5>

                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiKO2} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Prajwal</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row justify-content-around align-items-center">
                            <div className="p-2 bd-highlight">
                                <div className="cardCoordi">
                                    <img className="card-img-topCoordi" src={CoordiKO3} alt=""></img>
                                    <div className="cardNameCoordi">
                                        <h5>Yashika</h5>
                                        Coordinator
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='div-exe'>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO1} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Ayush</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO2} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Chaitanya</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO3} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Kahlan</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO4} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Priyash</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO5} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Shikhar</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-row">
                            <div className="bd-highlight circle-container">
                                <img className="card-img-top rounded-circle" src={exeKO6} alt=""></img>
                                <div className="circleName">
                                    <div><h5>Yogita</h5></div>
                                    <div>Executive</div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                {/* Section Break */}

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default TeamPage