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
                    <h4>MISSION</h4>
                    <p>Our mission is to empower every student on campus who aims high to turn their ideas into a real-world startup in every manner feasible and assist them in making a smooth transition through each stage of the process. As they say, "It's not about ideas; it's about making ideas happen," and we are committed to paving the path for them with every step they take. Our motto is to create an ecosystem that encourages students to explore their ideas freely by fostering constructive discussions with professors, industry veterans, investors, and peers. We aspire to aid all budding entrepreneurs at IIT Delhi to become established, successful and independent entrepreneurs.</p>
                </div>
            </div>
            <div className="aboutUsTextbox2">
                <h4>VISION</h4>
                <p>We want IIT Delhi to become the flag bearer, not just in India but across the world. We will provide students with a plethora of amenities, including mentorship, incubation space(of which most startups are bereft of), and the much-needed legal expertise, which is as imperative as anything to launch a successful startup and funds. We connect students with industry experts and investors, provide incubation facilities and easy access to resources for product creation, and make them pitch-ready. We encourage individuals to engage in design thinking, planful ideation and foster the self-inculcation of new ideas.</p>
                <h4>VALUES</h4>
                <p>Well!, we construct roadmaps and keep to the deadlines we set. We never back down and always follow through on our promises. We believe in transparency; thus, our startup members and acquaintances are always updated on the latest events and happenings.</p>
            </div>
        </div>
    )
}
