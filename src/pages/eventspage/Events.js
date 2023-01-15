import React, { useState, useRef } from "react";
import "./Events.css";
import Scroll from "./Scroll";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Detail from "./Detail";
import data from "../../data/events.json";

function Events() {
  let scrl = useRef(null);
  const [scrollY, setscrollY] = useState(0);
  const [scrollEnd, setscrollEnd] = useState(false);
  const slide = (shift) => {
    scrl.current.scrollTop += shift;
    setscrollY(scrollY + shift);

    if (
      Math.floor(scrl.current.scrollHeight - scrl.current.scrollTop) <=
      scrl.current.offsetHeight
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };
  const scrollCheck = () => {
    setscrollY(scrl.current.scrollTop);
    if (
      Math.floor(scrl.current.scrollHeight - scrl.current.scrollTop) <=
      scrl.current.offsetHeight
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  const [activeItem, setActiveItem] = useState(1);

  return (
    <div className="eventspage">
      <div className="eventsLeft">
        {scrollY !== 0 && (
          <div className="upArrow" onClick={() => slide(-50)}>
            <ArrowUpwardIcon
              style={{ marginTop: "-7px", marginRight: "10px" }}
            />
            <span>Upcoming Events</span>
          </div>
        )}
        <div className="scrollContainer" ref={scrl} onScroll={scrollCheck}>
          {data.map((item) => (
            <div key={item.id} onClick={() => setActiveItem(item.id)}>
              <Scroll event={item} />
            </div>
          ))}

          {/* <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
            pptx="FanTechProp.."
          />
          <Scroll
            date="Dec 12"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
            com="5 Comments"
          />
          <Scroll
            date="Nov 18"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
            play="Clip"
          />
          <Scroll
            date="Nov 4"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
            pptx="Story.pptx"
          />
          <Scroll
            date="Oct 28"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
            com="3 Comments"
            pptx="FanTechProp.."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          />
          <Scroll
            date="Jan 22"
            title="Event Name"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit arcu aliquet ut dui egestas."
          /> */}

        </div>
        {!scrollEnd && (
          <div className="downArrow" onClick={() => slide(+50)}>
            <ArrowDownwardIcon
              style={{ marginTop: "-7px", marginRight: "10px" }}
            />
            <span>Past Events</span>
          </div>
        )}
      </div>
      <div className="eventsRight">
        <Detail event={data[activeItem - 1]}/>
        {/* <Detail
          title="Event name"
          descr="description about the event conducted"
          name="Dev Kataria"
          time="2"
          com_name="Gopal"
          // caros={[
          //   "https://images6.alphacoders.com/679/thumb-1920-679459.jpg",
          //   "https://images2.alphacoders.com/851/thumb-1920-85182.jpg",
          //   "https://images2.alphacoders.com/631/thumb-1920-631095.jpg",
          // ]}
        /> */}
      </div>
    </div>
  );
}

export default Events;
