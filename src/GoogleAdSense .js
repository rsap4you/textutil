import { useEffect } from "react";

const GoogleAdSense = () => {
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

  return null; // No UI needed for script injection
};

export default GoogleAdSense;
