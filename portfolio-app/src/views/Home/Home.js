import AboutMe from '../AboutMe/AboutMe'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'
import Resume from '../Resume/Resume'



import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function Home() {
    return (
      <Router>
        <main className="center-div">

        <div>
            <h1 class="landing-page-header">Jacob Studer, Full Stack Web Developer</h1>
        </div>
  
  
        <div className="headshot">
            <img src="images/headshot.jpg" alt="headshot" className="headshot-img"></img>
        </div>
  
          
          <div className="links">
            <Link to='/aboutme' className="link-margin-small btn">About me</Link>
            <Link to='/portfolio' className="link-margin-small btn">Portfolio</Link>
            <Link to='/contact' className="link-margin-small btn">Contact Me</Link>
            <Link to='/resume' className="link-margin-small btn">Resume</Link>
          </div>
  
          
          <Switch>
          <Route path='/' component={Home} />
          <Route path='/aboutme' component={AboutMe} />  
          <Route path='/portfolio' component={Portfolio} />  
          <Route path='/contact' component={Contact} />  
          <Route path='/resume' component={Resume} />
          </Switch>
          
  
          </main>
      </Router>
    );
  }