import About from "../experimental/About";
import Banner from "../experimental/Banner";
import Footer from "../experimental/Footer";
import Navbar from "../experimental/Navbar";
import Projects from "../experimental/Projects";
import TimeLine from "../experimental/TimeLine";


export default function IndexPage(){
    
    return (<main>
        <Navbar />
        <Banner />
        <TimeLine />
        <Projects />
        <About />
        <Footer />
    </main>)
}