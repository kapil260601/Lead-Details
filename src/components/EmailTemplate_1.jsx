import React from 'react';

const Header = () => {
  return (
    <table cellPadding="0" cellSpacing="0" className="es-content" align="center" role="none" style={{ margin: '0 auto', maxWidth: '600px', width: '100%' }}>
      <tr>
        <td align="left" bgcolor="#00324F" style={{ padding: '5px 20px', backgroundColor: '#00324F' }}>
          <table cellPadding="0" cellSpacing="0" width="100%" role="none">
            <tr>
              <td align="right" style={{ padding: '0' }}>
                <p style={{ margin: '0', fontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: '18px', color: '#ffffff', fontSize: '12px' }}>
                  Call: <a href="tel:(814)524-3427" style={{ textDecoration: 'underline', color: '#ffffff', fontSize: '12px' }}>(814) 524-3427</a>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td align="left" bgcolor="#007cc0" style={{ padding: '5px 20px', backgroundColor: '#007cc0' }}>
          <table cellPadding="0" cellSpacing="0" className="es-left" align="left" role="none" style={{ float: 'left' }}>
            <tr>
              <td align="center" style={{ padding: '0', width: '180px' }}>
                <img src="https://hfnyib.stripocdn.email/content/guids/CABINET_d1efa66e0e421f089f519d44b5b671dd5eb805b9fa34355a2a054dbdb2d66820/images/alhlogo.png" alt="Altoona Honda Logo" style={{ display: 'block', border: '0', outline: 'none', textDecoration: 'none', height: '72px' }} />
              </td>
            </tr>
          </table>
          <table className="es-right" cellPadding="0" cellSpacing="0" align="right" role="none" style={{ float: 'right' }}>
            <tr>
              <td align="left" style={{ padding: '0', width: '360px' }}>
                <p style={{ margin: '0', fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: '28px', color: '#ffffff', fontSize: '14px' }}>
                  201 Valley View Blvd Altoona, PA 16602
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

const MainContent = () => {
  return (
    <table cellPadding="0" cellSpacing="0" className="es-content" align="center" role="none" style={{ margin: '0 auto', maxWidth: '600px', width: '100%' }}>
      <tr>
        <td align="left" style={{ padding: '20px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '30px', lineHeight: '120%' }}>LIKE-NEW SPECIAL</h1>
          <p style={{ textAlign: 'center', fontSize: '22px', lineHeight: '33px', color: '#333333' }}>
            <strong>
              <span style={{ color: '#696969' }}>Certified 2022 Honda CR-V EX SUV&nbsp;pick and saving at</span>
              <span style={{ color: '#2198DC' }}> Altoona Honda&nbsp;</span>
            </strong>
          </p>
          <img src="https://pictures.dealer.com/a/altoonahondapa/0945/7bff5869636cd1ce601b69c0c7a830c7x.jpg" alt="2022 Honda CR-V" style={{ width: '100%', height: 'auto' }} />
          <p style={{ textAlign: 'center', fontSize: '14px', lineHeight: '21px', color: '#696969' }}>
            Odometer: 50,942 miles
          </p>
          <p style={{ textAlign: 'center', fontSize: '14px', lineHeight: '21px', color: '#000000' }}>
            Price: <strong>$24,794</strong>
          </p>
          <a href="https://www.altoonahonda.com/used/Honda/2022-Honda-CR-V-663b227eac185cbe9419aaa58b7d8d88.htm" style={{ display: 'block', textAlign: 'center', backgroundColor: '#007cc0', color: '#ffffff', padding: '10px 20px', textDecoration: 'none', borderRadius: '0', fontSize: '14px', margin: '20px auto', width: 'fit-content' }}>
            More
          </a>
        </td>
      </tr>
    </table>
  );
};

const Footer = () => {
  return (
    <table cellPadding="0" cellSpacing="0" className="es-content" align="center" role="none" style={{ margin: '0 auto', maxWidth: '600px', width: '100%' }}>
      <tr>
        <td align="left" style={{ padding: '20px' }}>
          <p style={{ fontSize: '10px', lineHeight: '15px', color: '#808080' }}>
            * See dealer for details and limitations regarding the warranty.
          </p>
          <p style={{ fontSize: '10px', lineHeight: '15px', color: '#808080' }}>
            While great effort is made to ensure the accuracy of the information in this message, errors do occur so please verify information with a customer service rep. This is easily done by calling us at (814) 524-3427 or by visiting us at the dealership.
          </p>
          <p style={{ fontSize: '10px', lineHeight: '15px', color: '#808080' }}>
            You are receiving this email because you inquired about or purchased a vehicle from Altoona Honda recently or in the past. If you prefer not to receive further emails from us, click the link below to unsubscribe. Alternatively, you can send a written request to the address below. We'll remove you from our list as quickly as possible.
          </p>
          <p style={{ fontSize: '10px', lineHeight: '15px', color: '#808080' }}>
            To contact us, please visit <a href="https://www.altoonahonda.com" style={{ color: '#808080', textDecoration: 'underline' }}>www.altoonahonda.com</a> or call (814) 524-3427.
            <br />
            This email was delivered to you by:
            <br />
            Altoona Honda
            <br />
            201 Valley View Blvd Altoona, PA 16602
          </p>
          <p style={{ fontSize: '10px', lineHeight: '15px', color: '#808080' }}>
            Powered by © myautoIQ | All Rights Reserved
          </p>
        </td>
      </tr>
    </table>
  );
};

const EmailTemplate_1 = () => {
  return (
    <div style={{ backgroundColor: '#F6F6F6', padding: '0', margin: '0', fontFamily: "Arial, 'Helvetica Neue', Helvetica, sans-serif" }}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default EmailTemplate_1;