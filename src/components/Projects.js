import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import markdown from "../assets/img/markdown.svg";
import github from "../assets/img/github.svg"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Swiping Movie Feature",
      description: "The functionality was executed using React, enabling users to indicate disinterest by swiping left and express curiosity by swiping right on a movie.",
      imgUrl: projImg1,
    },
    {
      title: "Enhanced User Interactions",
      description: "Leveraging intuitive UI elements, the project enhances user interactions, ensuring a seamless and engaging experience. The design incorporates familiar menus and gestures for a user-friendly experience.",
      imgUrl: projImg2,
    },
    {
      title: "Personalized Movie Recommendations",
      description: "The project offers personalized movie recommendations based on user preferences, ensuring tailored suggestions for an enjoyable movie night.",
      imgUrl: projImg3,
    },   

  ];
  
  const projects2 = [
    {
      title: "Main Blog Page",
      description: "The main landing page of the blog showcases a user-friendly interface with a list of featured blogs, offering a comprehensive view of available content. Users can easily navigate through various articles and categories.",
      imgUrl: projImg4,
    },   
    {
      title: "Individual Blog Post",
      description: "Viewing an individual blog post presents a clean and structured layout, allowing readers to delve into detailed content, including text, images, and possibly multimedia elements. Users can engage with comments and interact with the presented content.",
      imgUrl: projImg6,
    },
    {
      title: "In-depth Blog Content",
      description: "Further down within a blog post, users experience an immersive and informative reading experience. This section may include additional content, such as images, embedded media, related posts, or interactive elements, enhancing the overall reading journey.",
      imgUrl: projImg5,
    },
  ];
  
  
  const projects3 = [
    {
      title: "Attractive Design",
      description: "The login/main page of 'Bow Wow' showcases a visually appealing and cohesive design. Its well-thought-out layout and aesthetic elements contribute to an engaging user experience, setting the tone for the app's overall design language.",
      imgUrl: projImg7, // Image representing the Bow Wow login/main page
    },   
    {
      title: "User-Friendly Interface",
      description: "The second image presents an easy-to-use interface within 'Bow Wow'. This design prioritizes usability, ensuring a seamless and intuitive experience for users navigating through the app's functionalities and features.",
      imgUrl: projImg8, // Image representing the user-friendly interface of Bow Wow
    },
    {
      title: "Messaging Feature",
      description: "The third image highlights 'Bow Wow's' messaging feature specifically tailored for adoption inquiries. This functionality enables users to engage in meaningful conversations related to pet adoption, fostering communication between potential pet owners and shelters/rescuers.",
      imgUrl: projImg9, // Image showcasing the adoption messaging feature in Bow Wow
    },
  ];
  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Discover a collection of my diverse projects, each a testament to creativity, expertise, and innovative solutions.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Cinematch</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Jekyll Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Bow Wow</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>Cinematch</h2>
                    
                    <p> 'CineMatch' revolutionizes movie selection by gamifying the process, presenting curated movie lists in an interactive, 'Tinder-like' interface. This approach enhances the user experience, making movie planning enjoyable for individuals and partners alike.</p>
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>

                    <p><strong>Technologies Used:</strong></p>

                    <div className="icon-col">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="Java Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html5 logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css3 logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql logo" className="icon"/>
                      <img src={github} alt="github logo" className="icon"/>
                    </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                    <h2>Jekyll Blog</h2>

                    <p>A dynamic and versatile static website powered by Ruby on Rails. This personal blog is a dedicated space where I share comprehensive tutorials, insights, and engaging content. Explore a platform designed to deliver informative and engaging articles, providing valuable resources and knowledge on various subjects.</p>

                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>      
                      <p><strong>Technologies Used:</strong></p>

                      <div className="icon-col">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain.svg" alt="ruby logo" className="icon"/>
                      <img src={markdown} alt="markdown logo" className="icon"/>
                      <img src={github} alt="github logo" className="icon"/>

                    </div>  
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                    <h2>Bow Wow</h2>
                    <p>The 'Bow Wow' web application is a dedicated platform designed to streamline the pet adoption process. This intuitive and user-friendly platform facilitates connections between potential pet adopters and animals seeking loving homes, fostering a seamless adoption experience.</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>   

                      <p><strong>Technologies Used:</strong></p>


                      <div className="icon-col">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg" alt="Java Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" alt="Spring Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="html5 logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="css3 logo" className="icon"/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql logo" className="icon"/>
                      <img src={github} alt="github logo" className="icon"/>
                    </div>                
                       </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
