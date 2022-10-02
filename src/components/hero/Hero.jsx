import './hero.css';

export default function Hero() {
    return (
        <div className='hero'>
            <div className="heroContents">
                <div className="heroHeading1 mx-auto">
                    <div>WELCOME TO STUDENT INCUBATION CELL</div>
                    <div>IIT DELHI</div>
                </div>
                <div className="heroHeading2 mx-auto mt-2">
                    <div>CREATING JOB CREATORS!</div>
                </div>
                <button className="heroReadMoreBtn mt-4">
                    <div className="heroReadMoreBtnText">READ MORE &raquo;</div>
                </button>
            </div>
        </div>
    )
}

