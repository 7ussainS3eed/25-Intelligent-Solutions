import logo from "./assets/photos/logo.png"
import emailIcon from "./assets/photos/sms-tracking.png"
import phoneIcon from "./assets/photos/call-calling.png"
import whatsIcon from "./assets/photos/Group 595.png"
import NavBar from "./Components/NavBar/NavBar";
import Main from "./Components/Main/Main";
import Boxes from "./Components/Boxes/Boxes";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import Rights from "./Components/Rights/Rights";

function App() {

  const email = "info@intelligentsolutionss.com";
  const phone = "+966 560 904 524"
  const whats = "+966 560 904 524"

  return (
    <div className="container">
        <NavBar logo={logo}/>
        <Main/>
        <Boxes
          emailIcon={emailIcon}
          phoneIcon={phoneIcon}
          whatsIcon={whatsIcon}
        />
        <Form/>
        <Footer 
          logo={logo}
          emailIcon={emailIcon}
          phoneIcon={phoneIcon}
          whatsIcon={whatsIcon}
          email={email}
          phone={phone}
          whats={whats}
        />
        <Rights/>
    </div>  
  );
}

export default App;