import React from "react";
import "./Scroll.css";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import CommentIcon from '@mui/icons-material/Comment';

function Scroll({ event }) {
  return (
    <div className="scroll">
      <div className="scroll_left">{event.date_short}</div>
      <div className="scroll_right">
        <h3>{event.title}</h3>
        <h4>{event.description}</h4>
        <div className='button_container'>
        {event.com!=null &&(
        <div className='button'>
          <CommentIcon style={{marginRight: "5px"}}/>
          {event.com}
        </div>)}
        {event.pptx!=null && (
        <div className='button'>
          <TextSnippetIcon style={{marginRight: "5px"}}/>
          {event.pptx}
        </div>)}
        {event.play!=null &&(
        <div className='button'>
          <PlayArrowOutlinedIcon style={{marginRight: "5px"}}/>
          {event.play}
        </div>)}
        </div>
      </div>
    </div>
  );
}

// function Scroll({ date, title, desc, pptx, play, com }) {
//   return (
//     <div className="scroll">
//       <div className="scroll_left">{date}</div>
//       <div className="scroll_right">
//         <h3>{title}</h3>
//         <h4>{desc}</h4>
//         <div className='button_container'>
//         {com!=null &&(
//         <div className='button'>
//           <CommentIcon style={{marginRight: "5px"}}/>
//           {com}
//         </div>)}
//         {pptx!=null && (
//         <div className='button'>
//           <TextSnippetIcon style={{marginRight: "5px"}}/>
//           {pptx}
//         </div>)}
//         {play!=null &&(
//         <div className='button'>
//           <PlayArrowOutlinedIcon style={{marginRight: "5px"}}/>
//           {play}
//         </div>)}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Scroll;
