import HomeMain from "../Components/HomeMain";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact"
import TechStack from "../Components/TechStack";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "../Components/About";
// import "animate.css/animate.min.css"
function Home(){
    return(
        <div>
            <NavBar />
            <HomeMain />
            <About />
            <TechStack />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )

}

export default Home;