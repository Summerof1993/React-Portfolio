import githubPNG from "../assets/images/github-mark-white.png"
import linkedInPNG from "../assets/images/in-White-40.png"

export default function Footer() {
    return (
      <div className="footerContainer">
        <a  href="https://www.instagram.com/alejandroneviani/" style={{margin: 8}} >
        <img src="" alt="" />
        </a>
        <a href="https://github.com/Summerof1993" style={{margin: 8}}>
            <img src={githubPNG} alt="github png" style={{width: 30, height: 30}} />
        </a>
        <a href=" https://www.linkedin.com/in/alejandro-rodriguez-897207104?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" style={{margin: 8}}>
          <img src={linkedInPNG} alt="" style={{width: 30, height: 30}} />
        </a>
      </div>
    );
  }