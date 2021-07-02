import ReactDOM from "react-dom";

const footerNode = document.getElementById("footer");

const Footer = (props) => {
  return ReactDOM.createPortal(props.children, footerNode);
};

export default Footer;
