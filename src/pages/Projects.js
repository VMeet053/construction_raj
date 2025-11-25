import React from "react";
import Spinner from "../components/Spinner";
//import Topbar from '../components/Topbar';
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Projects = () => {
  return (
    <>
      <Spinner />
      {/* <Topbar /> */}
      <Navbar />
      <PageHeader title="Projects" />

      <div className="container-xxl project py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h4 className="section-title">Our Projects</h4>
            <h1 className="display-5 mb-4">
              Visit Our Latest Projects And Our Innovative Works
            </h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <h3 className="m-0">01. Residental Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h3 className="m-0">02. Commercial Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h3 className="m-0">03. Industrial Projects</h3>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h3 className="m-0">04. Bunglow Projects</h3>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/reseidental.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Commercial Project
                      </h1>
                      <p className="mb-4">
                        We specialize in creating modern, comfortable, and
                        functional living spaces tailored to your lifestyle. Our
                        team focuses on aesthetic design, space optimization,
                        and long-lasting quality.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Personalized home layouts
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Modern
                        and sustainable architecture
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Efficient space planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Premium
                        materials and finishes
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/commercial.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Commercial Industry
                      </h1>
                      <p className="mb-4">
                        We deliver commercial spaces that enhance productivity,
                        customer engagement, and brand identity. Our goal is to
                        blend functionality with an appealing visual presence
                        that supports business growth.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Office
                        buildings
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Retail
                        stores & showrooms
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Corporate interiors
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        High-efficiency planning
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/industrial.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Industrial Industry
                      </h1>
                      <p className="mb-4">
                        With years of experience in industrial architecture, we
                        design facilities that prioritize safety, efficiency,
                        and scalability. From manufacturing plants to
                        warehouses, our solutions support smooth operations and
                        future expansion.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Optimized industrial layouts
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Innovative structural solutions
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        High-standard safety planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Project
                        management excellence
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute img-fluid w-100 h-100"
                          src="/img/bunglow.jpg"
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h1 className="mb-3">
                        5 Years Of Experience In Bunglow Industry
                      </h1>
                      <p className="mb-4">
                        We design elegant and spacious bungalows that combine
                        luxury with comfort. Our concepts emphasize open spaces,
                        natural lighting, and contemporary architectural
                        aesthetics.
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Luxury
                        bungalow designs
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Custom
                        interiors & landscape integration
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>
                        Ventilation and natural light planning
                      </p>
                      <p>
                        <i className="fa fa-check text-primary me-3"></i>Premium
                        architectural detailing
                      </p>

                      {/* <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Projects;
