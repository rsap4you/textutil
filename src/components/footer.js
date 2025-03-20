import React from "react";
import SimpleReactFooter from "simple-react-footer";
import logo from '../logo-1.jpg'
import logo1 from '../src1.png'
import logo2 from '../src2.png'
import logo3 from '../src3.png'
import logo4 from '../src4.png'
import logo5 from '../src5.png'

const Footer = () => {
  // Define the data for the footer
  const description =
    "CEO/Fonder: Kumar Amarjeet RAJ student of Government MCA College,Maninagar(East),Ahmedabad  and Currently Trainee in Hyperlink Infosytem  India's Top app Development Company.";
  const title = "RSAP4YOU";

  const columns = [
    
    {
        title: "Logo",
      resources: [
        {
          name: <img src={logo} alt="Logo" />
         
        },
      ],
    },
    {
      title: "picture 1",
      resources: [
        {
            name: <img src={logo5} width="100%" height="65%" alt="" />
          },
          
      ],
    },
    {
        title: "picture 2",
      resources: [
        {
            name: <img src={logo2} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
    {
        title: "picture 3",
      resources: [
        {
            name: <img src={logo3} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
    {
        title: "picture 4",
      resources: [
        {
            name: <img src={logo4} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
    {
        title: "picture 5",
      resources: [
        {
            name: <img src={logo1} width="100%" height="65%" alt="" />
           
          },
          
      ],
    },
  ];

  return (
    <SimpleReactFooter
      description={description}
      title= {title}
      columns={columns}
 
      facebook="profile.php?id=100041391041692&mibextid=ZbWKwL"
      twitter="kumar_amarjeet_raj_on_linkedin"
      instagram="https://twitter.com/jaketrent"
      linkedin="fluffy_cat_on_twitter="
      youtube="UCIUsuwUh5_TtpWCmwMkyXQQ"
      pinterest="lorem_ipsum_collections"
      copyright="@RSAP4YOU 2023"
      iconColor="black"
      backgroundColor="lightgrey"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
};

export default Footer;
