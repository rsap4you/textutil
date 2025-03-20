import './App.css';
import logo from './logo-1.jpg';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GoogleAdSense from "./GoogleAdSense";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  // Load advertisement script dynamically
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6901408017524149";
    script.async = true;
    script.crossOrigin = "anonymous"; // Equivalent to crossorigin="anonymous"
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <>
      <Router>
        <Navbar logo={logo} width="5%" title="RSAP4YOU" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="TextUtils" mode={mode} />
            </Route>
          </Switch>

          {/* Advertisement Container */}
          {/* <div id="container-1360ca8b864c6686ea5add0c676a6377" style={{ marginTop: "20px" }}></div> */}

          <GoogleAdSense />

        </div>
        <br />
        <Footer />
      </Router>
    </>
  );
}

export default App;




