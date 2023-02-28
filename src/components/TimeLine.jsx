import React from 'react'
import data from "../assets/data.json"
const TimeLine = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item,index) => {
            return (
                <TimeLineItem 
                heading={item.title} 
                text={item.date} 
                index={index} 
                key={item.title}/>
            )
        })}
      </div>
    </div>
  )
}

const  TimeLineItem = ({heading,text,index}) =>{
    return (
        <div className={`timelineItem ${index%2===0?"leftTimeline":"rightTimeline"}`}>
            <div>
                <h2>{heading}</h2>
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default TimeLine
