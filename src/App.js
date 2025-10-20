import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Container from '@mui/material/Container';

function App() {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container
        sx={{
        direction:"column",
        alignItems:"center",
        justifyContent:"center",
        }}
      >

        <Grid direction="row" id="welcome" 
          sx={{ display:"flex", flexDirection:"column", textAlign:"center", height:"100vh", justifyContent:"space-around"}}>
          <h2>👋 Hello, I'm Jess!</h2>
          <p>I write code, teach, and overall enthuse about music.</p>
          <Box sx={{marginTop: "5vh"}}>
            Sections: <a href="#about-me">About Me</a> | <a href="motivation-and-background">Motivation and Background</a>
          </Box>
          <hr/>
        </Grid>
        <Grid id="about-me" sx={{textAlign:"center"}}>
          <h2>About Me</h2>
          <p>
            I am a software engineer, recently graduated from the&nbsp;
            <a href="umbc.edu" >University of Maryland, Baltimore County (UMBC)</a>, where I was a <a href="https://meyerhoff.umbc.edu/scholar-experience/our-scholars/">Meyerhoff Scholar</a> (32nd cohort), 
            Phi Kappa Phi Scholar, 
            and Alumni Endowed Scholar at UMBC.</p>
          <figure className="figure">
            <img src="images/meyerhoff_retreat.jpg" width="300px" className="figure-img img-fluid rounded" alt="Meyerhoff Scholars at a retreat."/>
            <figcaption className="figure-caption">Meyerhoff Scholars at the Family Retreat (2023). My cohort is in the Red! </figcaption>
          </figure>
          <p>You can find my <b>Resume</b> linked<br/>
            <a href="https://www.linkedin.com/in/jturnerumbc/overlay/1707495708789/single-media-viewer/?profileId=ACoAADFZ81kBxJgjiK-rkE3HldHbuj2F-I5xfe4"> here</a> (on my LinkedIn).
          </p>
          <hr/>
        </Grid>
        <Grid id="motivation-and-background" sx={{textAlign:"center"}}>
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
  );
}

export default App;
