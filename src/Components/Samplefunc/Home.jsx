import "../../assets/css/Home.css";

var Home = () => {
  var titleStyle = {
    fontSize: "50px",
    textAlign: "center",
    color: "#FF6347",  // Tomato color for a vibrant look
    textDecoration: "underline",
    fontWeight: "bold",
  };

  var aboutStyle = {
    fontSize: "25px",
    textAlign: "center",
    color: "#2F4F4F",  // DarkSlateGray for readability
    marginTop: "20px",
  };

  return (
    <div className="home-container">
      <h1 style={titleStyle} id="home-title">
        Welcome to SANJAI's Website
      </h1>
      <p style={aboutStyle}>
        Welcome to my web page
      </p>
    </div>
  );
};

export default Home;
