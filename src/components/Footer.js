import React from "react";
import "../styles/Footer.css";
import "../styles/preFooter.css";

const youtubeIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    {" "}
    <path d="M 15 4 C 10.814 4 5.3808594 5.0488281 5.3808594 5.0488281 L 5.3671875 5.0644531 C 3.4606632 5.3693645 2 7.0076245 2 9 L 2 15 L 2 15.001953 L 2 21 L 2 21.001953 A 4 4 0 0 0 5.3769531 24.945312 L 5.3808594 24.951172 C 5.3808594 24.951172 10.814 26.001953 15 26.001953 C 19.186 26.001953 24.619141 24.951172 24.619141 24.951172 L 24.621094 24.949219 A 4 4 0 0 0 28 21.001953 L 28 21 L 28 15.001953 L 28 15 L 28 9 A 4 4 0 0 0 24.623047 5.0546875 L 24.619141 5.0488281 C 24.619141 5.0488281 19.186 4 15 4 z M 12 10.398438 L 20 15 L 12 19.601562 L 12 10.398438 z" />
  </svg>
);

const facebookIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    {" "}
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
  </svg>
);

const instagramIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    {" "}
    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z" />
  </svg>
);

const twitterIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    {" "}
    <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
  </svg>
);

const repeatIcon = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z" />
  </svg>
);

const shieldIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z" />
  </svg>
);

const mapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 0 24 24"
    width="24px"
    fill="#000000"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM10 5.47l4 1.4v11.66l-4-1.4V5.47zm-5 .99l3-1.01v11.7l-3 1.16V6.46zm14 11.08l-3 1.01V6.86l3-1.16v11.84z" />
  </svg>
);

const Footer = ({ footer }) => {
  return (
    <>
      <div className="preFooter">
        <div>
          {repeatIcon}
          <p>
            {" "}
            <b>Hassle-free replacement</b> <br />
            10-day easy replacement policy on mi.com
          </p>
        </div>
        <div>
          {shieldIcon}{" "}
          <p>
            <b>100% secure payment</b> <br /> We support Cards, Wallets, EMI and
            COD
          </p>
        </div>
        <div>
          {mapIcon}{" "}
          <p>
            <b>Vast service network</b> <br />
            1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>

      <div className="preFooter2">
        <div>
          <p>LET'S STAY IN TOUCH</p>{" "}
          <span>Get updates on sales specials and more</span>{" "}
        </div>

        <div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
            />
            <button>&gt;</button>
          </div>
          <span>Thanks, You're on our email list for special offers.</span>
        </div>
        <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
        </div>

        <div>
          {facebookIcon} {youtubeIcon} {instagramIcon} {twitterIcon}
        </div>
      </div>

      <div className="footer">
        <div>
          <p>SUPPORT</p>
          {footer.support.map((item, index) => (
            <a href={item.url} key={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>SHOP AND LEARN</p>
          {footer.shopAndLearn.map((item, index) => (
            <a href={item.url} key={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>RETAIL STORE</p>
          {footer.retailStore.map((item, index) => (
            <a href={item.url} key={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>ABOUT</p>
          {footer.aboutUs.map((item, index) => (
            <a href={item.url} key={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <p>CONTACT US</p>
          {footer.contactUs.map((item, index) => (
            <a href={item.url} key={item.url}>
              {item.name}
            </a>
          ))}
        </div>

        <div>
          <div>Chat with our Virtual AI Bot (24/7 Live Agent Support)</div>
          <button>CHAT NOW</button>
        </div>
      </div>

      <div className="footerBorder">
        <div>Copyright &copy; 2010 - 2021 Xiaomi. All Rights Reserved</div>
      </div>
    </>
  );
};

export default Footer;
