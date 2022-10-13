import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import project1 from './imgs/project1.png'
import project2 from './imgs/project2.png'
import project3 from './imgs/project3.png'
function Portfolio () {  

    return (
        <section className="container">
          <div className="title ">
            <h2 className="top-title">Bootcamp Portfolio</h2>
            <hr className='split'></hr>
            <div className='outer'>
            <div className='project'>
            <div>
            <a href="https://gp-2.herokuapp.com"><img className="mb-5 img-thumbnail"src={project1} alt="You In The Lou"></img></a>
            </div>
            <div className='projectcontent'>
            <p className='p'>You In the Lou</p>
              <p className='p'> 
                Github Repo Link:<br></br> <a href="https://github.com/olliedirker/You-in-the-Lou">https://github.com/olliedirker/You-in-the-Lou</a>
              </p>

              <p className='p'>Live URL: <br></br> <a href="https://gp-2.herokuapp.com">https://gp-2.herokuapp.com</a></p>
              <p className='p'>Worked in a team of 3 using Node.js, express.js,handlebars.js, mySql, Javascript, Css, Html</p>
              <p className='p'>A website for meeting up in the Saint Louis Area!</p>
            </div>
            </div>
            <hr className='split'></hr>
            <div className='project'>
            <div>
            <a href="https://gp-2.herokuapp.com"><img className="mb-5 img-thumbnail"src={project2} alt="You In The Lou"></img></a>
            </div>
            <div className='projectcontent'>
              <p className='p'>Github-Lite</p>
              <p className='p'> 
                Github Repo Link:<br></br> <a href="https://github.com/cjpritch/github-lite">https://github.com/cjpritch/github-lite</a>
              </p>
              <p className='p'>Live URL: <br></br> <a href="">Filler Text</a></p>
              <p className='p'>Worked in a group of 5 to create a full stack MERN application, using mongoose and node for the backend, and react, bootstrap, and css for the front end.</p>
              <p className='p'>An application that allows users to sign in and post their git projects and further look for git projects by isolating the posted projects down based on software used.</p>
            </div>
            </div>
            <hr className='split'></hr>
            <div className='project'>
            <div>
            <a href="https://samsiebert.github.io/group-project-1/"><img className="mb-5 img-thumbnail"src={project3} alt="You In The Lou"></img></a>
            </div>
            <div className='projectcontent'>
              <p className='p'>Tourish</p>
              <p className='p'> 
                Github Repo Link:<br></br> <a href="https://github.com/samsiebert/group-project-1">https://github.com/samsiebert/group-project-1</a>
              </p>
              <p className='p'>Live URL: <br></br> <a href="https://samsiebert.github.io/group-project-1/">https://samsiebert.github.io/group-project-1/</a></p>
              <p className='p'>Worked in a team of 3 to create a full stack MERN application, using mongoose and node for the backend, and react, bootstrap, and css for the front end.</p>
              <p className='p'>An application that allows users to sign in and post their git projects and further look for git projects by isolating the posted projects down based on software used.</p>
            </div>
            </div>
            
            </div>
            
            </div>
        </section>
    
    );
  }

export default Portfolio;