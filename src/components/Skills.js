import markdown from "../assets/img/markdown.svg";
import github from "../assets/img/github.svg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (

    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Explore my diverse set of skills showcasing expertise, creativity, and innovation.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="Java logo"/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring logo"/>
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript logo" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo"/>
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html5 logo"/>
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css3 logo"/>
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="bootstrap logo"/>
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" alt="oracle logo"/>
                                <h5>Oracle SQL</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql logo"/>
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" alt="ruby logo"/>
                                <h5>Ruby</h5>
                            </div>
                            <div className="item">
                            <img src={markdown} alt="markdown logo"/>
                                <h5>Markdown</h5>
                            </div>
                            <div className="item">
                            <img src={github} alt="github logo"/>
                                <h5>Github</h5>
                            </div>

  
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
