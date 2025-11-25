import React, { useEffect } from 'react';
import Spinner from '../components/Spinner';
// import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import PageHeader from '../components/PageHeader';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Testimonial = () => {
  useEffect(() => {
    if (window.jQuery && window.jQuery.fn.owlCarousel) {
      window.jQuery('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
      });
    }
  }, []);

  return (
    <>
      <Spinner />
      {/* <Topbar /> */}
      <Navbar />
      <PageHeader title="Testimonial" />
      
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h4 className="section-title">Testimonial</h4>
            <h1 className="display-5 mb-4">Thousands Of Customers Who Trust Us And Our Services</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='/img/p1.jpg' alt=''>">
              <p className="fs-5">“The team delivered exactly what I was looking for. The design quality, professionalism, and on-time delivery truly exceeded my expectations.”</p>
              <h3>Arun Mehta</h3>
              <span className="text-primary">Software Engineer</span>
            </div>
            <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='/img/p2.jpg' alt=''>">
              <p className="fs-5">“Amazing service! The attention to detail and the way they understood my requirements made the whole experience smooth and stress-free.”</p>
              <h3>Rajesh Kumar</h3>
              <span className="text-primary">Business Owner</span>
            </div>
            <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='/img/p3.jpg' alt=''>">
              <p className="fs-5">“Very reliable and creative team. Their work added great value to my project. Highly recommended for anyone looking for quality work.”</p>
              <h3>Mohit Verma</h3>
              <span className="text-primary">Marketing Manager</span>
            </div>
             <div className="testimonial-item text-center" data-dot="<img class='img-fluid' src='/img/p4.jpg' alt=''>">
              <p className="fs-5">“Their professionalism and design sense are fantastic. I’m extremely happy with the final output and the overall experience.”</p>
              <h3>Sneha Patel</h3>
              <span className="text-primary">Interior Consultant</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <BackToTop />
    </>
  );
};

export default Testimonial;
