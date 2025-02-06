import React, { useState } from 'react';
import EmailTemplate_1 from './EmailTemplate_1';
import EmailTemplate_2 from './EmailTemplate_2';

const LeadDetails = () => {
  const [selectedDetail, setSelectedDetail] = useState(false);
  const [openEmail, setOpenEmail] = useState("");

  const timelineData = [
    {
      date: "1st March 2024",
      title: "mysutoIQ nurturing starts",
      description: "Buyer profile target: Near or like-new Honda Civic Budget: $20-25k, naturally aspirated",
      source: "Sample Controls",
      leadIn: "Lead In: 25th January 2024",
      status: "Status: Lost",
      url:<EmailTemplate_1 />
    },
    {
      date: "23rd October 2024",
      title: "Lead In",
      description: "JE comes in as Marketing lead for 2024 Honda Civic EX",
      source: "Walk-in",
      leadIn: "Lead In: 23rd October 2024",
      status: "Status: Sold",
      url:<EmailTemplate_2/>
    },
    {
      date: "23rd Dec 2024",
      title: "SOLD",
      description: "All through 2024 Honda Civic EX",
      url : <EmailTemplate_1/>
    }
  ];

  const LeadDetailInfo = ({ item, onClose }) => {
    if (!item) return null;
    return (
      <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
  <div className="modal-dialog modal-dialog-centered modal-lg"> {/* Increased width */}
    <div className="modal-content" style={{ maxHeight: '80vh', overflowY: 'auto' }}> {/* Increased height with scroll */}
      <div className="modal-header">
        <h5 className="modal-title">{item.title}</h5>
        <button type="button" className="btn-close" onClick={onClose}></button>
      </div>
      <div className="modal-body">
        {openEmail}
      </div>
    </div>
  </div>
</div>

    );
  };

  return (
    <div className="container">
      <div className="card mx-auto" style={{ maxWidth: '700px' }}>
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
                  <div className="small text-muted">Sample Controls<br />Lead in: 25th January 2024<br />Status: Lost</div>
                </div>
                <div>
                  <span className="badge bg-warning text-dark mb-2">Revival</span>
                  <div className="small text-muted">Walk-in<br />Lead in: 23rd October 2024<br />Status: Sold</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body border-top">
          <h5 className="mb-4">Jill Jones Nurturing History</h5>
          <div className="position-relative">
            <div className="position-absolute" style={{ left: '10px', top: 0, bottom: 0, width: '2px', backgroundColor: '#dee2e6' }}></div>
            <div className="timeline">
              {timelineData.map((item, index) => (
                <div key={index} className="position-relative mb-4 ms-4 ps-3">
                  <div className="position-absolute" style={{ left: '-24px', top: '0', width: '20px', height: '20px', backgroundColor: 'white', border: '2px solid #dee2e6', borderRadius: '50%' }}></div>
                  <div>
                    <div className="cursor-pointer">
                      <div className="fw-bold">{item.date}</div>
                      <div>{item.title}</div>
                      <div className="text-muted small">{item.description}</div>
                      <button
                        onClick={() => {setSelectedDetail(true), setOpenEmail(item.url)}}
                        className="btn btn-link btn-sm p-0 mt-2"
                      >
                        Show more details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {selectedDetail && (
        <LeadDetailInfo 
          item={selectedDetail} 
          onClose={() => setSelectedDetail(null)} 
        />
      )}
    </div>
  );
};

export default LeadDetails;
