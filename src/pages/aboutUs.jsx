import React from "react";
import NavMenu from "../components/nav-menu/nav-menu";
import Footer from "../components/footer/footer";
const AboutUs = () => {
  return (
    <>
      
      <NavMenu/>
      <main id="abt-us">
        <article id="article-about-us">
          <h1>Social mission is not just words</h1>
          <div id="div-paragraphs">
            <p className="abt-us-text">
              Our mission is to support the development of an active community in Ukraine. We encourage activists to share their ideas and provide support in collecting funds for their social initiatives. Our work is also aimed at helping large organizations implement their projects through effective research and obtaining funding.
            </p>
            <p className="abt-us-text">
              We explore social and humanitarian problems of Ukrainians and their homelands, giving priority to human dignity, rights and consumption. On the basis of European values ​​and the principles of solidarity and mutual assistance, we strive to create small, self-sufficient communities, capable of effective self-organization and vigorous action against all causes. members of the community.
            </p>
            <p className="abt-us-text">
              Ukraine is a country where every community is active, united, and able to advocate and implement its ideas on the path to a just and prosperous society.
            </p>
          </div>
        </article>
      </main>

      <Footer/>
    </>
  );
};

export default AboutUs;
