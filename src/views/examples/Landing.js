/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
// import classnames from "classnames";
// import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/img-1-1200x1000.jpg";
// import ill2 from "assets/img/ill/ill-2.svg";
// import team1 from "assets/img/theme/team-1-800x800.jpg";
// import team2 from "assets/img/theme/team-2-800x800.jpg";
// import team3 from "assets/img/theme/team-3-800x800.jpg";
// import team4 from "assets/img/theme/team-4-800x800.jpg";
// 
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-smoke">
                        Why I'm excited about Tech?{" "}
                        <span>AI and Brain Computer Interface</span>
                      </h1>
                      <p className="lead text-white">
                        I'm always excited for something new. Something that was once thought impossible or something that improves an already great piece of Technology. I'm especially excited for the Brain Computer interface (BCI). Neuralink is going to be a gaming-changer.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="success"
                          href="https://www.topmba.com/jobs/career-trends/top-10-reasons-specialize-career-technology"               >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-spaceship"/>
                          </span>
                          <span className="btn-inner--text">Top 10 Reasons</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://neuralink.com/" 
                          target="_blank"                  >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-planet" />
                          </span>
                          <span className="btn-inner--text">
                            Neuralink
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                            <i className="ni ni-book-bookmark" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Become a Full-Stack Dev at Code Fellows
                          </h6>
                          <p className="description mt-3">
                          Dive into a challenging curriculum including JavaScript, HTML, Bootstrap, jQuery and more.
                          </p>
                          <div>
                            <Badge color="secondary" badge className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="secondary" badge className="mr-1">
                              CSS
                            </Badge>
                            <Badge color="secondary" badge className="mr-1">
                              JavaScript
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="secondary"
                            href="https://www.codefellows.org/"
                            target="_blank"
                          >
                            Sign Up at Code Fellows!
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-dark rounded-circle mb-4">
                            <i className="ni ni-app" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Projects
                          </h6>
                          <p className="description mt-3">
                            Here is a collection of projects I've completed while attending Code Fellows.
                          </p>
                          <div>
                            <Badge color="dark" badge className="mr-1">
                              Salom Cookies
                            </Badge>
                            <Badge color="dark" badge className="mr-1">
                              Horned Beasts
                            </Badge>
                            <Badge color="dark" badge className="mr-1">
                              City Explorer
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="dark"
                            href="https://github.com/Edward-Regalado"
                            target="_blank"
                          >
                            Link to Github
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-building" />
                          </div>
                          <h6 className="text-dark text-uppercase">
                            Targeted Companies
                          </h6>
                          <p className="description mt-3">
                            Here is a collection of Companies that I'd like to work for.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Tesla
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Apple
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Google
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://docs.google.com/spreadsheets/d/1EY9ViFqs1sBUJARn1Pna7__Fk5wb6quwIfsc0EJvYSo/edit?usp=sharing"
                            target="_blank"
                          >
                            Tracking List
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={cardImg}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Future Projects
                      </h4>
                      <p className="lead text-italic text-white">
                        I'd like to build a Poker Application or a Crypto trading Application in the near future.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-circle-08" />
                    </div>
                    <h3>My Background</h3>
                    <p className="lead">
                      Born and rasied in Chicago for half of my life and have spent the remainder of my years living in Seattle.
                    </p>
                    <p>
                      I enjoy technology, gaming, modifying cars and dogs.
                    </p>
                    <p>
                      I'm currently studying at Code Fellows to become a Full-Stack developer in JavaScript, CSS and HTML5.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        We made website building easier for you.
                      </h3>
                      <p className="lead text-white mt-3">
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
