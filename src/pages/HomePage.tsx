import { FaDiscord, FaQuestionCircle } from "react-icons/fa";
import { MainButton } from "../styles";
import { HomePageStyling } from '../styles/index';

export const HomePage = () => (
<HomePageStyling>
    <div></div>

	<div>
		<MainButton>
			<FaDiscord size={45} color="#5865F2" style={{padding: '0px 20px 0px 0px'}} />
			<p style={{fontSize: "18px"}} >Login with Discord</p>
		</MainButton>

		<MainButton>
			<FaQuestionCircle size={45} style={{padding: '0px 20px 0px 0px'}}/>
			<p style={{fontSize: "18px"}}> Support Server</p>
		</MainButton>
    </div>

    <div
      style={{
        display: "flex",
        width: "450px",
        justifyContent: "space-between",
      }}
    >
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Contact Us</span>
    </div>

</ HomePageStyling>
);
