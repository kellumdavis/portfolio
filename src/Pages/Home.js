import HomeMain from "../Components/HomeMain";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact"
import TechStack from "../Components/TechStack";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Home(){
    return(
        <div>
            <NavBar />
            <HomeMain />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )

}

export default Home;