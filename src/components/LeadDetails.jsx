import React, { useState } from "react";
import EmailTemplate_1 from "./EmailTemplate_1";
import EmailTemplate_2 from "./EmailTemplate_2";

const LeadDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const timelineData = [
    {
      date: "1st March 2024",
      title: "mysutoIQ nurturing starts",
      description:
        "Buyer profile target: Near or like-new Honda Civic Budget: $20-25k, naturally aspirated",
      source: "Sample Controls",
      leadIn: "Lead In: 25th January 2024",
      status: "Lost",
      emailTemplate: <EmailTemplate_1 />,
    },
    {
      date: "23rd October 2024",
      title: "Lead In",
      description: "JE comes in as Marketing lead for 2024 Honda Civic EX",
      source: "Walk-in",
      leadIn: "Lead In: 23rd October 2024",
      status: "Sold",
      emailTemplate: <EmailTemplate_2 />,
    },
    {
      date: "23rd Dec 2024",
      title: "SOLD",
      description: "All through 2024 Honda Civic EX",
      emailTemplate: <EmailTemplate_1 />,
    },
  ];

  return (
    <div className="container">
      <div className="card mx-auto" style={{ maxWidth: "700px" }}>
        <div className="card-body">
          <h5 className="text-muted mb-2">Lead Details</h5>
          <div className="row align-items-start">
            <div className="col-md-4">
              <h4 className="mb-1">Jill Jones</h4>
              <p className="text-muted small">jill@gmail.com</p>
            </div>
            <div className="col-md-8">
              <div className="d-flex gap-3">
                <div>
                  <span className="badge bg-success mb-2">Original</span>
                  <div className="small text-muted">
                    Sample Controls
                    <br />
                    Lead in: 25th January 2024
                    <br />
                    Status: Lost
                  </div>
                </div>
                <div>
                  <span className="badge bg-warning text-dark mb-2">
                    Revival
                  </span>
                  <div className="small text-muted">
                    Walk-in
                    <br />
                    Lead in: 23rd October 2024
                    <br />
                    Status: Sold
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline with Accordion */}
        <div className="card-body border-top">
          <h5 className="mb-4">Jill Jones Nurturing History</h5>
          <div className="accordion" id="timelineAccordion">
            {timelineData.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className={`accordion-button ${
                      openIndex === index ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="text-start">
                      <div className="fw-bold">{item.date}</div>
                      <div>{item.title}</div>
                      <div className="text-muted small">{item.description}</div>
                    </div>
                  </button>
                </h2>
                <div
                  className={`accordion-collapse collapse ${
                    openIndex === index ? "show" : ""
                  }`}
                >
                  <div className="accordion-body">{item.emailTemplate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetails;
