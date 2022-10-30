import './about-us.css'
import ul from './heading-underline-vector.svg'
import il from './stairs-illustration.svg'

export default function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="aboutUsHeading">
                ABOUT US
                <img src={ul} className="aboutUsHeadingUl" alt=''/>
            </div>
            <div className="aboutUsContents">
                <div className="aboutUsIllustration">
                    <img src={il} alt=''/>
                </div>
                <div className="aboutUsTextbox">
                    The Student Incubation Cell, IIT Delhi is formed with an intent to promote design thinking, planful ideation and support budding Entrepreneurs at IIT DELHI who can make a mark on the world map through their vision, next-generation technology, and services by leading from the front. Our mission is to empower every student in the campus in every way possible who aim high to translate their ideas into real-world Startup and to help in a smooth transition in every phase of this journey. As they say “It’s not about ideas, it’s about making ideas happen and we are committed to pave the way with every step one takes.
                </div>
            </div>
        </div>
    )
}
