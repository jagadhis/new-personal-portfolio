import React from 'react'
import proImg1 from "../assets/img/project-img1.png"
import proImg2 from "../assets/img/project-img2.png"
import proImg3 from "../assets/img/project-img3.png"
import ProjectCard from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png"
import { Container, Row,Col,Nav, Tab } from 'react-bootstrap'

const Projects = () => {
    const projects =[
        {
            title:"Lifedemy",
            description:"Development",
            imgUrl:proImg1,
        },
        {
            title:"HecGroup",
            description:"Development",
            imgUrl:proImg2,
        },  
        {
            title:"Digital meister Technologies",
            description:"Design & Development",
            imgUrl:proImg3,
        }

    ]
  return (
   <section className='project' id='project'>
<Container>
<Row>
    <Col>
    <h2>projects</h2>
    <p>About projects</p>
    <Tab.Container id='project-tabs' defaultActiveKey='first'>
    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
      <Nav.Item>
        <Nav.Link eventKey="first" href="/home">Tab One</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab Two</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" >
          Tab three
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey='first'>
            <Row>
                {projects.map((project,index) => {
                    return(
                     <ProjectCard key={index} {...project}/>
                    )
                })}
            </Row>
        </Tab.Pane>
        <Tab.Pane eventKey='second'></Tab.Pane>
        <Tab.Pane eventKey='third'></Tab.Pane>
    </Tab.Content>
    </Tab.Container>

    </Col>
</Row>
</Container>
<img className='background-image-right' src={colorSharp2} alt="sharp2"/>
   </section>
  )
}

export default Projects