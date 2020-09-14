import React from 'react';
import './About.css'

function About(props) {
    return (
        <div className="about_container">
            <p>
                If you give an answer to your viewer, your film will simply finish in the movie theatre. But when you pose question, your film actually begins after people watch it.
            </p>
            
            <p>
                관객에게 답을 주는 영화는 극장에서 끝날 것이다. 하지만 관객에게 질문을 던지는 영화는 상영이 끝났을 때, 비로소 시작한다.
            </p>
            <span>- Asghar Farhadi (아스가르 파르하디)</span>
        </div>
    )
}

export default About;