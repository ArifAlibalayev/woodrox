import React from 'react'

function Hero() {
  return (
    <section id='heroSection'>
<div className="hero">
        <div className="heroContent">
          <h1>PRECISE CONCEPT DESIGN FOR STYLISH LIVING</h1>
          <p>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </p>
          {/* <div className="heroContentBtn"> */}
            <button>Get Started</button>
          {/* </div> */}
        </div>
        <div className="heroGrid">
        <i class="fa-solid fa-couch"></i>
        <i class="fa-solid fa-bed"></i>
        <i class="fa-solid fa-toilets-portable"></i>
        <i class="fa-solid fa-business-time"></i>
        <i class="fa-solid fa-glasses"></i>
        <i class="fa-solid fa-socks"></i>
        </div>
      </div>
    </section>
    

  )
}

export default Hero