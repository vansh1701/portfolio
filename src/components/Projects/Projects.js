import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rbac from "../../Assets/Projects/rbac.png";
import ods from "../../Assets/Projects/ods.png";
import marmin from "../../Assets/Projects/marmin.png";
import raktdaan from "../../Assets/Projects/raktdaan.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={marmin}
                isBlog={false}
                title="Malaysia E-Invoicing Platform"
                description="Developed scalable backend microservices using Node.js, TypeScript, Express.js and React.js for Malaysia's e-Invoicing platform. Built secure REST APIs, optimized performance, improved throughput, and contributed to production deployments using Docker and CI/CD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={marmin}
                isBlog={false}
                title="Oman E-Invoicing Platform"
                description="Developed scalable backend microservices using Java, Springboot, Express.js and React.js for Oman's e-Invoicing platform. Built secure REST APIs, optimized performance, improved throughput, and contributed to production deployments using Docker and CI/CD."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={raktdaan}
                isBlog={false}
                title="RaktDaan"
                description="Built a full-stack blood donation platform with React, Node.js, Express.js and MongoDB. Developed REST APIs, responsive user interfaces, secure data management, and search/filter functionality."
                ghLink={"https://github.com/vansh1701/RaktDaan"}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={rbac}
                isBlog={false}
                title="Role-Based Access Platform"
                description="Developed a full-stack RBAC system using React, Node.js, Express.js, MongoDB and JWT. Implemented secure authentication, authorization, and a modular frontend architecture using reusable React components."
                ghLink={"https://github.com/vansh1701/rbac"}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={ods}
                isBlog={false}
                title="Online Duty Scheduler"
                description="Developed a full-stack duty scheduling and role-based access management platform using React, Node.js, Express.js, and MongoDB. Implemented JWT-based authentication, role-based authorization (RBAC), shift scheduling, and a modular dashboard with reusable React components for efficient workforce management."
                ghLink={"https://github.com/vansh1701/ODS"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
