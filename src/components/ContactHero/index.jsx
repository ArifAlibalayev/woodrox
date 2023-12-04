import React from "react";

function ContactHero() {
  return (
    <>
      <section className="ContactHero">
        <div className="ContactTitle">
          <h2>CONTACT US</h2>
          <h4>
            Home <i class="fa-solid fa-arrow-right"></i> CONTACT
          </h4>
        </div>
      </section>
      <section className="LocationSection">
        <div className="Location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.3507945209511!2d49.816713416493556!3d40.37084055419117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc3d9cbd689%3A0xad559a40d9b254af!2sIstambul%20Restaurant!5e0!3m2!1sen!2saz!4v1701648864354!5m2!1sen!2saz"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="ContactContent">
          <div className="ContactAddressWrapper">
            <div className="ContactAddress">
              <h2>
                <i class="fa-solid fa-house"></i>California, United States
              </h2>
              <p>Santa monica bullevard
</p>
            </div>
            <div className="ContactAddress">
              <h2>
              <i class="fa-solid fa-phone"></i> 00 (440) 9865 562
              </h2>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
            <div className="ContactAddress">
              <h2>
              <i class="fa-solid fa-phone"></i>support@colorlib.com
              </h2>
              <p>Send us your query anytime!
</p>
            </div>
          </div>
          <div className="ContactInputs">
            <input type="text" placeholder="Enter Your Name"/>
            <input type="text" placeholder="Enter email address"/>
            <input type="text" placeholder="Enter Subject"/>
          </div>
          <div className="sendMessage">
            <input type="text" placeholder="Send Message" />
            <button>Send Message</button>
        </div>
        </div>
        
      </section>
    </>
  );
}

export default ContactHero;
