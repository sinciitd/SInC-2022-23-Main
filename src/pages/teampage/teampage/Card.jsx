import React from 'react'

const Card = (props) => {
    return (
        <div className="d-flex flex-row justify-content-around align-items-center">
            <div className="p-2 bd-highlight">
                <div className="cardCoordi">
                    <img className="card-img-topCoordi" src={props.img} alt=""></img>
                    <div className="cardNameCoordi">
                        <h5>{props.name}</h5>
                        {props.position}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Card