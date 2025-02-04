import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">

    {/* Found out to use p-0 to get rid of left margin from this source: https://stackoverflow.com/a/54589229 */}
    <Box>
      <Grid container>
        <Grid size={3} style={{"position":"sticky", "background-color":"black", "color": "white"}}>
          {/* <div class="block d-flex justify-content-center text-center"> */}
          <h1 className="text-center">Jessica Turner</h1>
          <img width="200px" height="200px" className="rounded-circle center" alt="Jess' Headshot" src="images/jess_headshot.jpg" />
          <h2 className="text-center" style={{"marginTop":"10px"}}>Computer Scientist</h2>
          {/* </div> 
          
          <hr>
          <ul class="nav nav-pills flex-column mb-auto">
            <li class="nav-item">
              <a href="index.html" class="nav-link" aria-current="page">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"></use></svg>
                Home
              </a>
            </li>
            <li>
              <a href="about-me.html" class="nav-link active text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
                About Me
              </a>
            </li>
            {/* <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                Research Experience
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-white">
                <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
                Project Experience
              </a>
            </li>
          </ul> */}
        </Grid>
        <Grid className="d-flex flex-column flex-shrink-9 body" style={{"flex": "1", "marginTop":"25px"}}>
          <div className="text-center justify-content-center block">
            <h1>About Me</h1>
            <p>
              I am a <a href="https://meyerhoff.umbc.edu/scholar-experience/our-scholars/">Meyerhoff Scholar</a> (32nd cohort), 
              Phi Kappa Phi Scholar, 
              and Alumni Endowed Scholar at UMBC.</p>
            <figure className="figure">
              <img src="images/meyerhoff_retreat.jpg" width="300px"className="figure-img img-fluid rounded" alt="Meyerhoff Scholars at a retreat."/>
              <figcaption className="figure-caption">Meyerhoff Scholars at the Family Retreat (2023). My cohort is in the Red! </figcaption>
            </figure>
            <p>You can find my <b>Resume</b> linked  
              <a href="https://www.linkedin.com/in/jturnerumbc/overlay/1707495708789/single-media-viewer/?profileId=ACoAADFZ81kBxJgjiK-rkE3HldHbuj2F-I5xfe4">here</a> (on my LinkedIn).
            </p>
          </div>
          <hr/>
          <h2>Motivation and Background</h2>
          <ul>
          <li>I am passionate about uplifting marginalized communities such as people with disabilities and underrepresented students in STEM.</li>
          <li>I have been an educator, leader and student-success advocate for the past 3 years, with 1.5 years as TA for CMSC201, and 1.5 years as Head TA for the same course.</li>
          </ul>
          <h2>Fun Facts</h2>
          <p>I like to play guitar and piano.</p>
        </Grid>
      </Grid>
    </Box>
  
    </div>
  );
}

export default App;
