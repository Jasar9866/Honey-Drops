import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 auto",
  };

  const cakeImages = [
    "https://i.pinimg.com/736x/a2/c3/6b/a2c36b4c981a99a1c15c74ed8b9e1ef7.jpg",
    "https://send-gifts-to-nepal.ugcakes.com/products/large/chocolate-birthday-cake-18741642160435-Ay6k2.jpg",
    "https://sugarspunrun.com/wp-content/uploads/2022/04/Best-Chocolate-Cupcakes-1-of-1.jpg",
    "https://butternutbakeryblog.com/wp-content/uploads/2018/12/gingerbread-cupcakes-1.jpg",
    "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/colorful-glazed-donuts.jpg",
    "https://cookingwithayeh.com/wp-content/uploads/2021/05/Healthy-Donuts.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const styles = {
    sliderContainer: {
      position: "relative",
      marginBottom: "20px",
    },
    blurredImage: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%",
      height: "100%",
      filter: "blur(10px)",
      zIndex: -1,
    },
  };

  return (
    <div style={containerStyles} className="container">
      <header className="header">
        <h1 className="title">
          Indulge in the Sweetness of Honey Drops Bakery
        </h1>
        <p
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#555",
            backgroundColor: "#F8F1F1",
            textAlign: "center",
            borderRadius: "8px",
            margin: "5px 0",
          }}
        >
          Your premier destination for artisanal honey-infused delights
        </p>
      </header>

      <div style={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {cakeImages.map((imageUrl, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={imageUrl}
                alt={`Cake ${index + 1}`}
                style={{ width: "300px", height: "300px" }}
              />
              {index < cakeImages.length - 1 && (
                <img
                  src={cakeImages[index + 1]}
                  alt={`Blurred Cake ${index + 2}`}
                  style={{
                    ...styles.blurredImage,
                    filter: "blur(10px)",
                  }}
                />
              )}
            </div>
          ))}
        </Slider>
      </div>

      <section className="section">
        <h2
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "30px, auto",
            lineHeight: "1.6 auto",
            color: "#24086b",
            backgroundColor: "#F8F1F1",
            textAlign: "center",
            borderRadius: "8px",
            margin: "5px auto",
          }}
        >
          Discover the World of Honey
        </h2>

        <p
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "23px",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",
            margin: "5px 0",
          }}
        >
          Welcome to Honey Drops!
        </p>

        <p
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#555",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",

            margin: "5px 0",
          }}
        >
          where each creation is crafted with love and sweetened with the finest
          honey. Explore a world of flavors that celebrate the natural sweetness
          of honey in every bite..
        </p>
      </section>

      <section className="section variety-section">
        <h2
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "30px",
            lineHeight: "1.6",
            color: "#24086b",
            backgroundColor: "#F8F1F1",
            textAlign: "center",
            borderRadius: "8px",
            margin: "5px 0",
          }}
        >
          Indulge in Delightful Varieties
        </h2>

        <p className="para">
          Immerse yourself in a delightful array of cakes, cupcakes, and donuts.
          Each treat is a masterpiece of flavor and sweetness. Explore our
          offerings below:
        </p>

        <div className="variety-grid">
          <div className="variety-item-1">
            <img src="/cakes/commoncake.jpg" alt="Special Honey Cake" />

            <br />
            <br />
          </div>
          <p
            style={{
              fontFamily: "Times New Roman, Serif",
              fontSize: "18px",
              lineHeight: "1.6",
              color: "#24086b",
              textAlign: "justify",
              padding: "20px",
              borderRadius: "8px",

              margin: "20px 0",
            }}
          >
            Immerse your senses in the delectable world of our cakes. From the
            rich and honey-infused layers of the "Special Honey Cake" to the
            indulgent delight of the "Chocolate Cupcake," and the timeless
            simplicity of the "Glazed Donut," our offerings cater to every
            palate. Each creation is a masterpiece, crafted with passion and
            precision. Explore our diverse range, where every bite tells a
            unique story of flavor and quality. Elevate your taste experience
            with our exquisite cakes that promise moments of sheer bliss.
          </p>

          <div className="container-variety">
            <div className="variety-item">
              <img src="/cakes/honeycake2.jpg" alt="Special Honey Cake" />
              <div className="inner-box">
                <h3>Special Honey Cake</h3>
                <p className="para">
                  Indulge in the rich flavor of our Special Honey Cake. Made
                  with the finest honey, this cake is a perfect blend of
                  sweetness and decadence.
                </p>
              </div>
            </div>

            <div className="variety-item">
              <img src="/cakes/cupcake1.jpg" alt="Chocolate Cupcake" />
              <div className="inner-box">
                <h3>Chocolate Cupcake</h3>
                <p className="para">
                  Satisfy your chocolate cravings with our delectable Chocolate
                  Cupcake. Each bite is a heavenly experience of cocoa goodness.
                </p>
              </div>
            </div>

            <div className="variety-item">
              <img src="/cakes/donut1.jpg" alt="Glazed Donut" />
              <div className="inner-box">
                <h3>Glazed Donut</h3>
                <p className="para">
                  Enjoy the simplicity of our Glazed Donut. Light, fluffy, and
                  coated with a sweet glaze, it's a classic treat for any
                  occasion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />
        <a href="/products" className="btnSecondary">
          Explore More
        </a>
      </section>
      <section className="section">
        <h2
          style={{
            fontFamily: "Times New Roman, Serif",
            fontSize: "30px",
            lineHeight: "1.6",
            color: "#555",
            backgroundColor: "#F8F1F1",
            textAlign: "center",
            borderRadius: "8px",
            margin: "5px 0",
          }}
        >
          Our Facilities
        </h2>

        <div className="facilityGrid">
          <div className="facilityItem">
            <img src="/cakes/cake1.jpg" alt="Online Ordering" />
            <div className="facilityContent">
              <p>Convenient Online Ordering</p>
            </div>
          </div>

          <div className="facilityItem">
            <img src="/cakes/promo3.png" alt="Special Promotions" />
            <div className="facilityContent">
              <p>Exclusive Special Promotions</p>
            </div>
          </div>

          <div className="facilityItem">
            <img src="/cakes/promo2.png" alt="Honey Loyalty Program" />
            <div className="facilityContent">
              <p>Honey-themed Loyalty Program</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Customize Your Sweet Experience</h2>
        <p className="para">
          Create a personalized sweet experience by customizing your
          honey-infused cakes for special occasions. From birthdays to weddings,
          we turn your moments into delicious memories.
        </p>
        <a href="/custom-cakes" className="btnSecondary">
          Customize Your Cake
        </a>
      </section>

      <section className="section">
        <h2>Contactless Sweetness</h2>
        <p className="para">
          In our commitment to your safety, we offer contactless delivery
          options for all our treats. Enjoy the sweetness of Honey Drops Bakery
          from the comfort of your home.
        </p>
        <a href="/delivery" className="btnSecondary">
          Explore Delivery Options
        </a>
      </section>

      <section className="section">
        <h2>Contact Us</h2>
        <p className="para">
          Have questions or need assistance? Our team is ready to assist you.
          Contact us via phone or email, and experience the sweetest customer
          service at Honey Drops.
        </p>
        <a href="/contact" className="btnSecondary">
          Get in Touch
        </a>
      </section>
      <Footer />
    </div>
  );
};

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#333",
      color: "#fff",
      padding: "30px 20px",
      marginTop: "20px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    section: {
      marginBottom: "20px",
      flex: "1",
      minWidth: "200px",
    },
    icon: {
      marginRight: "10px",
    },
  };

  return (
    <div style={styles.footer}>
      <div style={styles.section}>
        <h4>Contact Us</h4>
        <p>
          <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />{" "}
          muhamedaljasar@gmail.com
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} style={styles.icon} /> 0766445386
        </p>
        <p>
          <FontAwesomeIcon icon={faMapMarker} style={styles.icon} /> Kundumadu,
          Pottuvil-08
        </p>
      </div>

      <div style={styles.section}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/sendemail">Contact</a>
          </li>
        </ul>
      </div>

      <div style={styles.section}>
        <h4>Follow Us</h4>
        <div>
          <a
            href="https://web.facebook.com/profile.php?id=61555952199751/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" style={styles.icon} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" style={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" style={styles.icon} />
          </a>
        </div>
      </div>

      <div style={styles.section}>
        <p>&copy; 2024 Honey Drops. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LandingPage;
