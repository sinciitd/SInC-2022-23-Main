import React from 'react'

const Exe = (props) => {
    return (
        <div className="d-flex flex-row">
            <div className="bd-highlight circle-container">
                <img className="card-img-top rounded-circle" src={props.img} alt=""></img>
                <div className="circleName">
                    <div><b>{props.name}</b></div>
                    Executive
                </div>
            </div>
        </div>
    )
}

export default Exe