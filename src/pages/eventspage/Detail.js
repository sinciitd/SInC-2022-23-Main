import React from "react";
import "./Detail.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Comment from "./Comment";

function Detail({ event }) {
  return (
    <div className="details">
      <div className="details_title">{event.title}</div>
      <div className="details_descr">{event.description}</div>
      <div className="details_caro">
        <Carousel autoPlay infiniteLoop showThumbs={false} interval="5000">
          {/* showThumbs property decides whether the list of small images below the carousel will be visible or not
          interval determines after how long the next transition starts and transitionTime denotes how long the transition takes to occur */}
          {/* {caros.map((caro) => {
            <div key={caro}>{caro=`"${caro}"`}
              <img alt="" src={caro} />
            </div>;
            console.log(caro);
          })} */}
          {/* <div>
              <img alt="" src="https://images6.alphacoders.com/679/thumb-1920-679459.jpg"/>
          </div>
          <div>
              <img alt="" src="https://images2.alphacoders.com/851/thumb-1920-85182.jpg"/>
          </div>
          <div>
              <img alt="" src="https://images2.alphacoders.com/631/thumb-1920-631095.jpg"/>
          </div> */}
          <div>
            <img alt="" src={require(`../../data/${event.images[0]}`)} />
          </div>
        </Carousel>
      </div>
      {/* <div className="comment_by">
        <div className="by_pic">
          <img
            src={
              "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnQlMjBtaXglMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Nice Background"
          />
        </div>
        <div className="by_desc">
          <span style={{ fontSize: "16px", fontWeight: "600" }}>
            Posted By {name}
          </span>
          <br />
          <span style={{ fontSize: "14px", fontWeight: "400" }}>
            {time} Hours ago
          </span>
        </div>
      </div>
      <div className="comm">Comments</div>
      <div className="comm_list">
        <div className="comm_pic">
          <img
            src={
              "https://images.unsplash.com/photo-1557682250-33bd709cbe85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhZGllbnQlMjBtaXglMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Nice Background"
          />
        </div>
        <div className="comm_desc">
          {com_name}
          <Comment />
        </div>
      </div> */}
    </div>
  );
}

export default Detail;
