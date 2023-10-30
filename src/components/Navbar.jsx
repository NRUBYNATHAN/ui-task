import search from "../images/icons/search.png";
import filter from "../images/icons/filter.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main_navbar">
      <div className="logo1">
        <p className="logoname">LOGO</p>
      </div>

      <div className="search">
        <div className="search_content">
          <img className="search_icon" src={search} />
          <p className="search_placeholder">Search here...</p>
        </div>
        <div className="search_content">
          <img className="search_icon" src={filter} />
          <p>Filters</p>
        </div>
      </div>

      <div className="side-btn">
        <p className="side-btn-text">Become a Seller</p>
      </div>
    </div>
  );
}

export default Navbar;
