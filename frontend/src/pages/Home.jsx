import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
import useLocalStorageValue from "../../custom-hooks/useLocalStorageValue";

function Home() {
  const userName = useLocalStorageValue("username");

  return (
    <>
      <main>
        <HeroSection userName={userName || "Guest"} />
        <MainSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
