import weatherApi from "../assets/images/WeatherAPI.png"
import noteTaker from "../assets/images/noteTaker.png"
import DynamicQuiz from "../assets/images/DynamicQuiz.png"


export default function Project() {
    return (
      <section id="projects">
      <h2>
          Projects
      </h2>
      <div class="projects-container">
          <div className="project-divs">
              <h3>
                  Project 1
              </h3>
              <a href="https://summerof1993.github.io/week-1-challenge/">
              <img src={weatherApi} alt="Image of first project"/>
              </a>
          </div>
          <div className="project-divs">
              <h3>
                  Dynamic Quiz
              </h3>
              <a href="https://summerof1993.github.io/Week-3-challenge-password-generator/">
              <img src={DynamicQuiz} alt="Dynamic Quiz"/>
              </a>
          </div>
          <div className="project-divs">
              <h3>
                  Weather API 
              </h3>
              <a href="https://summerof1993.github.io/Week-3-challenge-password-generator/">
              <img src={noteTaker} alt=" Weather API APP"/>
              </a>
          </div>
          <div className="project-divs">
              <h3>
              Note Taker App
              </h3>
              <a href="https://summerof1993.github.io/Week-3-challenge-password-generator/">
              <img src="./images/noteTaker.png" alt="Note Taker App"/>
              </a>
          </div>
      </div>
  </section>
    );
  }