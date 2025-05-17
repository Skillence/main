import React from 'react'
import { useNavigate } from 'react-router-dom';

const Career = () => {
  const interviewLink="https://forms.gle/gQniFX8h7fiCMdXB6"
  const navigate=useNavigate();
  return (
    <div className="home-pricing">
            <div className="pricing-pricing23 thq-section-padding">
              <div className="pricing-max-width thq-section-max-width">
                <div className="pricing-section-title">
                  <span className="pricing-text thq-body-small">
                    Choose the perfect{' '} 
                    <b>
                       CAREER {' '}
                      </b>
                       for you
                  </span>
                  <div className="pricing-content">
                    <h2 className="pricing-text01 thq-heading-2">
                      We've got you covered!
                    </h2>
                    <p className="pricing-text02 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="pricing-tabs">
                  <button className="pricing-button thq-button-animated thq-button-filled">
                    <span className="thq-body-small">Choose</span>
                  </button>
                  <button className="pricing-button03 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">From below</span>
                  </button>
                </div>
                <div
                
                className="pricing-content1">
                  <div
                  onClick={()=>navigate("/internship")}
                  className="pricing-column thq-card">
                    <div className="pricing-price">
                      <div className="pricing-price01">
                        <p className="pricing-text07 thq-body-large">
                        🧑‍💻 Internship
                        </p>
                        <h3 className="pricing-text08 thq-heading-3">Get your slot</h3>
                        <p className="thq-body-large">*with/without full time opportunity</p>
                      </div>
                      <div className="pricing-list">
                        <div className="pricing-list-item">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Access to internship opportunities
                          </span>
                        </div>
                        <div className="pricing-list-item01">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Access to real projects


                          </span>
                        </div>
                        <div className="pricing-list-item02">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Industry-level experience
                          </span>
                        </div>
                        <div className="pricing-list-item02">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Professional certification
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="pricing-button04 thq-button-outline thq-button-animated">
                      <span className="thq-body-small">Apply</span>
                    </button>
                  </div>
                  <div
                  onClick={()=>navigate("/hackathon")}
                  className="pricing-column1 thq-card">
                    <div className="pricing-price02">
                      <div className="pricing-price03">
                        <p className="pricing-text14 thq-body-large">
                        🚀 Hackathon
                        </p>
                        <h3 className="pricing-text15 thq-heading-3">Lets Compete </h3>
                        <p className="thq-body-large">Enhances your resume score</p>
                      </div>
                      <div className="pricing-list1">
                        <div className="pricing-list-item03">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Win cash prizes


                          </span>
                        </div>
                        <div className="pricing-list-item04">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Exclusive networking events
                          </span>
                        </div>
                        <div className="pricing-list-item05">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Team collaboration
                          </span>
                        </div>
                        <div className="pricing-list-item06">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Show off skills
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className="pricing-button05 thq-button-animated thq-button-filled">
                      <span className="thq-body-small">Apply</span>
                    </button>
                  </div>
                  <div className="pricing-column2 thq-card">
                    <div className="pricing-price04">
                      <div className="pricing-price05">
                        <p className="pricing-text22 thq-body-large">
                          🎯 Interview Practice (1:1 with Experts)
                        </p>
                        <h3 className="pricing-text23 thq-heading-3">₹19</h3>
                        <p className="thq-body-large">Practice real time interviews</p>
                      </div>
                      <div className="pricing-list2">
                        <div className="pricing-list-item07">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                           Real-time mock interviews
                          </span>
                        </div>
                        <div className="pricing-list-item08">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                           Personalized feedback
                          </span>
                        </div>
                        <div className="pricing-list-item09">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Resume-based questions
                          </span>
                        </div>
                        <div className="pricing-list-item10">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Boost communication skills
                          </span>
                        </div>
                        <div className="pricing-list-item11">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="thq-icon-small"
                          >
                            <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                          </svg>
                          <span className="thq-body-small">
                            Full time opportunity
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                    onClick={()=>window.open(interviewLink,"_blank")}
                    className="pricing-button06 thq-button-animated thq-button-filled">
                      <span className="thq-body-small">Apply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Career