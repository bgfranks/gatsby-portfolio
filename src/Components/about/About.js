import React from "react"
import brandon from "../../images/brandon.jpg"

const About = () => {
  return (
    <div>
      <div>
        <img src={brandon} alt="Brandon Franks" />
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          The first webpage I ever made was in high school for a computer
          applications class. I made a super basic web page using Notepad for a
          hardcore band called Chelsea Grin. Even dealing with a less than
          favorable text editor, I fell in love with making websites.
        </p>
        <p>
          I intially attended Johnston Community College to get a computer
          science degree but left to pursue my dream of becoming a musician. I
          was lucky enough to play with multiple national and international
          touring bands and live out some of my wildest dreams. I became a line
          cook to support myself while I was not playing shows and eventually
          worked my way up to a Sous Chef role. This lead me to work for North
          Carolina's only 5 star restaurant and learn to focus on the tiniest
          details.
        </p>
        <p>
          After about 9 years of cooking, I knew that cooking was not my dream.
          There was something more out there for me to experience. I remember an
          old love I have for web development. I thought it was a silly dream
          without a college degree, but after some research, I found that many
          developers are self taught or went to bootcamps. So with that, I dove
          right in. While not working at my tech support job, almost every night
          coding and expanding my knowledge to chase this "silly dream". I am
          currrent in Lambda School's Full Stack Web Development program and I
          have taught myself HTML, CSS, JavaScript, Node, and React.
        </p>
      </div>
    </div>
  )
}

export default About
