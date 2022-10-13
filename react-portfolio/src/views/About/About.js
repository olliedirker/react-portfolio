import React from 'react';
const About = props => {
    return(
        <div>
        <section className="container">
            <hr></hr>
            <div>
                <img 
                class="mb-5 img-thumbnail" 
                id="profilepic"
                src='https://raw.githubusercontent.com/olliedirker/portfolio/main/assets/media/48F11812-102D-4EC0-984B-C0131EE72974_1_201_a.jpeg' 
                alt="Oliver Dirker" 
                />

                <p>
                Junior Web Developer, full stack enthusiest, and overall creative software developer, weilder of the MERN.
                </p>
                <p>
                I have a profficient understanding of HTML, CSS, Javascript, both web and server-side APIs, Node.js, Express.js, Mysql, NoSQL, React, and am always looking learn more and apply it to the repitoir.
                </p>
                <p>
                Avid listener and learner, if I do not have a solution, I know how to find it.
                </p>
            </div>
        </section>
        </div>
    )
}
export default About;