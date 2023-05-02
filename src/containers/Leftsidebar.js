import React from "react";
import videosrc from "../assets/videos/v360.mp4";

const Leftsidebar = () => {
    return(
        <React.Fragment>
        <div>
            <video src={videosrc} style={{ width: "100%" }} ></video>
        </div>
        <div>
            <p>Advertise with Us | Terms & Conditions and Grievance Redressal Policy | Contact Us | RSS | Cookie Policy | Privacy Policy</p>
            <p>Copyright © 2022-23 DB Corp ltd., All Rights Reserved</p>
        </div>
        </React.Fragment>
    )
} 

export default Leftsidebar;