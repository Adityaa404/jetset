import Featured from "../../components/featured/Featured";
import FeaturedDestiations from "../../components/featuredDestiations/featuredDestiations";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import DestinationList from "../../components/destinationList/DestinationList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by Location types</h1>
        <DestinationList/>
        <h1 className="homeTitle">Get Biggest Deals</h1>
        {/* <FeaturedDestiations/> */}
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
