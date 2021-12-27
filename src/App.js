import "./App.css";
import logo from "./assets/logo.svg";
import top from "./assets/top.svg";
import left from "./assets/left.svg";
import bottom from "./assets/bottom.svg";
import token from "./assets/token.svg";
import about from "./assets/about_icon.svg";
import smaller_logo from "./assets/smaller_logo.svg";
import teddy_bear from "./assets/teddy_bear.svg";
import planet from "./assets/planet.svg";
import tower from "./assets/tower.svg";
import glasses from "./assets/glasses.svg";
import ship from "./assets/ship.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
function App ()
{
  const navRef = useRef();
  const [url, setURL] = useState("https://this is a mock url.com");
  useEffect(() => {
    axios("https://run.mocky.io/v3/8321cc85-81e6-45c6-bd23-33e85c504c7d").then(
      ( res ) =>
      {
        const formattedResult = res.data
          .replace("{", "")
          .replace("}", "")
          .replace("url", "")
          .replace(":","")
        
        console.log( formattedResult.length )
        
        // console.log(res.data.replace("{","").replace("}","").replace("url","").replace(' "" ',""));
        setURL(formattedResult.substr(4,formattedResult.length-6))
      }
    );
    
    
  }, [] );
   window.onscroll = () => {
     if (window.scrollY > 30) {
       navRef.current.classList.add("active");
     } else {
       navRef.current.classList.remove("active");
     }
   };
  return (
    <div className="App">
      <img src={top} id="top" alt="" />
      <img src={left} id="left" alt="" />
      <img src={bottom} id="bottom" alt="" />
      <div id="side-panel">
        <span id='navbar' ref={navRef}>
          <img src={ logo } id="logo" alt="" />
          <button id="share">share</button>
        </span>
        <br />
        <img src={token} id="eth-token" alt="" />
        <h2>Shards of ETH</h2>
        <h1>Level Up</h1>
        <h3>#007</h3>
        <button id="about-button">
          {" "}
          <img src={about} alt="" /> About
        </button>
        <button id="ship-button">
          {" "}
          <img src={ship} alt="" /> View on OpenSea
        </button>
        <img src={smaller_logo} id="smaller-logo" alt="" />
      </div>

      <div id="main-section">
        <div id="copy-url">
          <p>{url}</p>
          <button
            id="copy-button"
            onClick={() => {
              navigator.clipboard.writeText(url);
            }}
          >
            Copy
          </button>
        </div>
        <div
          className="feature"
          style={{
            marginTop: "40px",
          }}
        >
          <div className="feature-image">
            <img src={tower} alt="" />
          </div>
          <div className="text">
            <h2>View On IPFS/ARWEAVE</h2>
            <p>See Unlockables for this NFT on the link provided</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-image">
            <img src={glasses} alt="" />
          </div>
          <div className="text">
            <h2>View AR experience</h2>
            <p>See how you NFT's look in augmented reality</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-image">
            <img src={teddy_bear} alt="" />
          </div>
          <div className="text">
            <h2>Download 3D Model</h2>
            <p>Instantly get access to blend file</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-image">
            <img src={planet} alt="" />
          </div>
          <div className="text">
            <h2>Join the communnity</h2>
            <p>Customize your NFT's specification</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
