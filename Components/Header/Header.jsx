import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import { FaGlobeAsia, FaSearch, FaShoppingBag,FaUser,FaBriefcaseMedical,FaTshirt,FaBars, FaHeart, FaBoxOpen, FaTag, FaHeadset, FaInfoCircle, FaTruck, FaFemale, FaBaby, FaHome, FaMobileAlt, FaHeadphones, FaTv, FaDumbbell, FaStopwatch, FaCar, } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import PropTypes from 'prop-types';

const DroplistCategories = ({ dropdowns, toggleDropdown }) => {
  const categories = [
    {
      key: 'groceriesPets',
      icon: FaShoppingBag,
      label: 'Groceries & Pets',
      options: [
        "Fresh Produce",
        "Breakfast, Choco & Snacks",
        "Beverages",
        "Food Staples",
        "Laundry & Household",
        "Frozen Food",
        "Cat",
        "Dog",
        "Fish"
      ]
    },
    {
      key: 'healthBeauty',
      icon: FaBriefcaseMedical,
      label: 'Health & Beauty',
      options: [
        "Makeup",
        "Beauty Tools",
        "Skin Care",
        "Hair Care",
        "Bath & Body",
        "Men's Care",
        "Personal Care",
        "Fragrances",
        "Sexual Wellness",
        "Medical Supplies"
      ]
    },
    {
      key: 'mensFashion',
      icon: FaTshirt,
      label: "Men's Fashion",
      options: [
        "T-Shirts & Tanks",
        "Shirts & Polo",
        "Pants & Jeans",
        "Shorts, Joggers & Sweats",
        "Kurtas & Shalwar Kameez",
        "Winter Clothing",
        "Inner Wear",
        "Shoes",
        "Accessories",
        "Boy's Clothing",
        "Boy's Shoes",
        "Boy's Accessories"
      ]
    },
    {
      key: 'womensFashion',
      icon: FaFemale,
      label: "Women's Fashion",
      options: [
        "Unstitched Fabric",
        "Kurtas & Shalwar Kameez",
        "Muslim Wear",
        "Tops",
        "Bras, Panties & Lingerie",
        "Sleepwear & Innerwear",
        "Pants, Jeans & Leggings",
        "Dresses & Skirts",
        "Winter Clothing",
        "Shoes",
        "Girls Clothing",
        "Girls Shoes"
      ]
    },
    {
      key: 'motherBaby',
      icon: FaBaby,
      label: 'Mother & Baby',
      options: [
        "Milk Formula & Baby Food",
        "Diapering & Potty",
        "Feeding",
        "Maternity Care",
        "Baby Gear",
        "Nursery",
        "Baby Personal Care",
        "Clothing & Accessories",
        "Baby & Toddler Toys",
        "Remote Control & Vehicles",
        "Sports & Outdoor Play",
        "Toys & Games"
      ]
    },
    {
      key: 'homeLifestyle',
      icon: FaHome,
      label: 'Home & Lifestyle',
      options: [
        "Bath",
        "Bedding",
        "Decor",
        "Furniture",
        "Kitchen & Dining",
        "Lighting",
        "Laundry & Cleaning",
        "Tools, DIY & Outdoor",
        "Stationery & Craft",
        "Media, Music & Books"
      ]
    },
    {
      key: 'electronicDevices',
      icon: FaMobileAlt,
      label: 'Electronic Devices',
      options: [
        "Smart Phones",
        "Feature Phones",
        "Tablets",
        "Monitors",
        "Laptops",
        "Desktops",
        "Smart Watches",
        "Gaming Consoles",
        "Cameras & Drones",
        "Security Cameras",
        "Daraz Like New",
        "Landline Phones"
      ]
    },
    {
      key: 'electronicAccessories',
      icon: FaHeadphones,
      label: 'Electronic Accessories',
      options: [
        "Mobile Accessories",
        "Headphones & Headsets",
        "Wearable",
        "Camera Accessories",
        "Computer Accessories",
        "Storage",
        "Printers",
        "Computer Components",
        "Portable Speakers",
        "Network Components",
        "Gaming Accessories",
        "Monitors & Accessories"
      ]
    },
    {
      key: 'tvHomeAppliances',
      icon: FaTv,
      label: 'TV & Home Appliances',
      options: [
        "Air Conditioner",
        "Televisions",
        "Refrigerators & Freezers",
        "Home Audio & Theater",
        "Washing Machine",
        "Kitchen Appliances",
        "Cooling & Heating",
        "Irons & Garment Care",
        "Generator, UPS & Solar",
        "Projectors & Players",
        "TV Accessories",
        "Vacuums & Floor Care"
      ]
    },
    {
      key: 'sportsOutdoor',
      icon: FaDumbbell,
      label: 'Sports & Outdoor',
      options: [
        "Exercise & Fitness",
        "Supplements",
        "Shoes & Clothing",
        "Team Sports",
        "Racket Sports",
        "Outdoor Recreation",
        "Fitness Gadgets",
        "Sports Accessories"
      ]
    },
    {
      key: 'watchesBagsJewellery',
      icon: FaStopwatch,
      label: 'Watches, Bags & Jewellery',
      options: [
        "Men's Watches",
        "Women's Watches",
        "Kid's Watches",
        "Women's Bags",
        "Men's Bags",
        "Luggage & Suitcase",
        "Women's Jewellery",
        "Men's Jewellery",
        "Men's Accessories",
        "Women's Accessories",
        "Sunglasses & Eyewear"
      ]
    },
    {
      key: 'automotiveMotorbike',
      icon: FaCar,
      label: 'Automotive & Motorbike',
      options: [
        "Automotive",
        "Motorcycle",
        "Loaders & Rickshaw"
      ]
    }
  ];

  return (
    <div className="categories-droplist">
      <ul>
        {categories.map(({ key, icon: Icon, label, options }) => (
          <li
            key={key}
            onMouseEnter={() => toggleDropdown(key)}
            onMouseLeave={() => toggleDropdown(key)}
            className="category-item"
          >
            <span className="categories-icon">
              <Icon />
            </span>
            <span className="category-label">{label}</span>
            {dropdowns[key] && (
              <div className="categories-droplist-options">
                <ul>
                  {options.map((option, index) => (
                    <li key={index}>
                      <span className="category-option">{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes for validation
DroplistCategories.propTypes = {
  dropdowns: PropTypes.shape({
    groceriesPets: PropTypes.bool,
    healthBeauty: PropTypes.bool,
    mensFashion: PropTypes.bool,
    womensFashion: PropTypes.bool,
    motherBaby: PropTypes.bool,
    homeLifestyle: PropTypes.bool,
    electronicDevices: PropTypes.bool,
    electronicAccessories: PropTypes.bool,
    tvHomeAppliances: PropTypes.bool,
    sportsOutdoor: PropTypes.bool,
    watchesBagsJewellery: PropTypes.bool,
    automotiveMotorbike: PropTypes.bool,
  }).isRequired, // Ensures that dropdowns is an object with these keys as booleans
  toggleDropdown: PropTypes.func.isRequired, // Ensures toggleDropdown is a function
};


const SideMenu = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsSideMenuOpen((prev) => !prev);
  };

  return (
    <div className="side-menu-container">
      <FaBars 
        onClick={toggleMenu} 
        className="side-menu-icon" 
        tabIndex="0" 
        role="button"
        onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} 
        aria-label="Toggle Side Menu" 
      />

      <div className={`side-menu-slide ${isSideMenuOpen ? 'open' : 'closed-side-menu'}`}>
        <div className="side-menu-top">
          <div className="side-menu-header">
            <div className="side-menu-header-close">
              <IoClose
                onClick={toggleMenu} 
                tabIndex="0"
                role="button"
                onKeyPress={(e) => e.key === 'Enter' && toggleMenu()} 
                aria-label="Close Side Menu" 
              />
            </div>
            
            {/* Profile Section */}
            <div className="side-menu-profile-section">
              <div className="side-menu-profile-image" />
              <div className="side-menu-profile-info">
                <h3>John Doe</h3>
                <a href="/manage-account" className="side-menu-manage-link">Manage Account</a>
              </div>
            </div>
          </div>

          <ul className="side-menu-links">
            <li><FaHeart className="menu-icon" /> Favorites</li>
            <li><FaBoxOpen className="menu-icon" /> Orders</li>
            <li><FaTag className="menu-icon" /> Deals</li>
            <li><FaHeadset className="menu-icon" /> Support | Help</li>
            <li><FaInfoCircle className="menu-icon" /> About Us</li>
            <li><FaTruck className="menu-icon" /> Delivery</li>
          </ul>
        </div>

        <div className="side-menu-signout">
          <span><HiOutlineArrowNarrowLeft /> Sign Out</span>
        </div>
      </div>
    </div>
  );
};


const Header = () => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    groceriesPets: false,
    healthBeauty: false,
    mensFashion: false,
    womensFashion: false,
    motherBaby: false,
    homeLifestyle: false,
    electronicDevices: false,
    electronicAccessories: false,
    tvHomeAppliances: false,
    sportsOutdoor: false,
    watchesBagsJewellery: false,
    automotiveMotorbike: false
  });

  

  const isLoggedIn = true;

  const profile = {
    name: 'Faisal Ur Rahman Rajpoot'
  }
  const profile_name = profile.name.length > 15 ? profile.name.slice(0, 15) + ' ...' : profile.name;
  const toggleLanguageDropdown = () => setLanguageDropdownOpen(prev => !prev);
  
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  const toggleDropdown = (key) => {
    setDropdowns(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <div className="header">
      <header className="header-container">

        <div className="header-menu-btn-logo">

          <div className="header-menu-logo">

        <SideMenu/>

        {/* Logo */}
        <div className="header-logo">
          <Link to="/">
            <h1>MERN Store</h1>
          </Link>
        </div>
        </div>

        <div className="header-login-cart">

        {/* Login & Signup And User Details */}

        {isLoggedIn ? (
        <div className="header-user">
          <div className="header-user-image">
            {/* will be image here */}
          </div>
          <div className="header-user-info">
            <h3>{profile_name}</h3>
            <span >Manage Account</span>
          </div>
        </div>
      ) : (
        <div className="login-signup">
          <FaUser className="login-icon" />
          <span>Login | Sign up</span>
        </div>
      )}

        {/* Cart */}
        <div className="header-cart">
          <Link to="/cart">
            <FaShoppingBag className="header-cart-icon" />
            <span className="header-cart-badge">9+</span>
          </Link>
        </div>
        </div>

</div>

        {/* Search Bar */}
        <div className="header-search-bar">
          <form>
            <input type="text" name="search" placeholder="Search" />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>


        {/* Language Dropdown */}
        <div
          className="header-language-dropdown"
          onMouseEnter={toggleLanguageDropdown}
          onMouseLeave={toggleLanguageDropdown}
        >
          <button className="header-language-dropdown-btn">
            <FaGlobeAsia />
            {selectedLanguage}
            {languageDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {languageDropdownOpen && (
            <div className="header-language-dropdown-content">
              {['English', 'Urdu', 'Spanish', 'French'].map((language, index) => (
                <button
                  className="header-language-dropdown-item"
                  key={index}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="header-location">
          <FaLocationDot />                                       
          <span>Pakistan</span>
        </div>

        

       {/* Login & Signup And User Details */}

       {isLoggedIn ? (
        <div className="header-user">
          <div className="header-user-image">
            {/* will be image here */}
          </div>
          <div className="header-user-info">
            <h3>{profile_name}</h3>
            <span >Manage Account</span>
          </div>
        </div>
      ) : (
        <div className="login-signup">
          <FaUser className="login-icon" />
          <span>Login | Sign up</span>
        </div>
      )}

        {/* Cart */}
        <div className="header-cart">
          <Link to="/cart">
            <FaShoppingBag className="header-cart-icon" />
            <span className="header-cart-badge">9+</span>
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <div className="header-nav">
        <ul>
          <li
            onMouseEnter={() => toggleDropdown('categories')}
            onMouseLeave={() => toggleDropdown('categories')}
          >
            Categories {dropdowns.categories && (
              <DroplistCategories dropdowns={dropdowns} toggleDropdown={toggleDropdown} />
            )}
          </li>
          <li>Deals</li>
          <li>Support | Help</li>
          <li>About Us</li>
          <li>Delivery</li>
        </ul>
        <div className="nav-btns">
          
        {/* Language Dropdown */}
        <div
          className="header-language-dropdown"
          onMouseEnter={toggleLanguageDropdown}
          onMouseLeave={toggleLanguageDropdown}
        >
          <button className="header-language-dropdown-btn">
            <FaGlobeAsia />
            {selectedLanguage}
            {languageDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {languageDropdownOpen && (
            <div className="header-language-dropdown-content">
              {['English', 'Urdu', 'Spanish', 'French'].map((language, index) => (
                <button
                  className="header-language-dropdown-item"
                  key={index}
                  onClick={() => handleLanguageChange(language)}
                >
                  {language}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Location */}
        <div className="header-location">
          <FaLocationDot />                                       
          <span>Pakistan</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
