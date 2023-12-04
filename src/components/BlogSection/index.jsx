import React from "react";

function Blog() {
  return (
    <section className="Blog">
      <div className="blogTitle">
        <h2>RECENT POSTS FROM OUR BLOG</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
      </div>
      <div className="blogCardWrapper">
      <div className="blogCard">
          <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp" />
          <div className="tlbtns">
            <div className="travel"><p>Travel</p></div>
            <div className="lifestyle"><p>Lifestyle</p></div>
          </div>
          <h2>LOW COST ADVERTISING</h2>
          <p>
          Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.
          </p>
        </div>
        <div className="blogCard">
          <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg.webp" />
          <div className="tlbtns">
            <div className="travel"><p>Travel</p></div>
            <div className="lifestyle"><p>Lifestyle</p></div>
          </div>
          <h2>LOW COST ADVERTISING</h2>
          <p>
          Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.
          </p>
        </div>
        <div className="blogCard">
          <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg.webp" />
          <div className="tlbtns">
            <div className="travel"><p>Travel</p></div>
            <div className="lifestyle"><p>Lifestyle</p></div>
          </div>
          <h2>LOW COST ADVERTISING</h2>
          <p>
          Acres of Diamonds… you’ve read the famous story, or at least had it related to you A farmer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Blog;
