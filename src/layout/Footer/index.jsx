import React from "react";
import "./style.scss"

function Footer() {
  return (
    <footer id="footer">
      <div className="upperFooter">
        <div className="upperFooter-img">
          <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png.webp" />
        </div>
        <div className="upperFooter-img">
          <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png.webp" />
        </div>
        <div className="upperFooter-img">
          <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png.webp" />
        </div>
        <div className="upperFooter-img">
          <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png.webp" />
        </div>
        <div className="upperFooter-img">
          <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png.webp" />
        </div>
      </div>
      <div className="lowerFooter">
        <div className="lowerFooterWrapper">
          <div className="footerAbout">
            <h2>ABOUT ME</h2>
            <p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills.</p>
            <span>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</span>
          </div>
          <div className="footerNews">
            <h2>NEWSLETTER</h2>
            <p>Stay updated with our latest trends</p>
            <div className="footerInput">
              <input type="text" placeholder="  Email Adress" />
              <button><i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
          <div className="footerSocials">
            <h2>FOLLOW ME</h2>
            <p> Let us be social</p>
            <div className="footerIcons"><i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-telegram"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-github"></i></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
