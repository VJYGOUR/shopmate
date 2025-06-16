import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import ProductList from "../components/ProductCard";

function Home() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const storeName = localStorage.getItem("username");
    if (storeName) {
      setUserName(storeName);
    }
  }, []);

  return (
    <div>
      <HeroSection userName={userName} />
      <MainSection />
      <Footer />
    </div>
  );
}

export default Home;
