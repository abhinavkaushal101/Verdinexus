import React from 'react';
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from '../assets/logonew.png';
import logow from "../assets/logownew.png";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faGlobe, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from '../Context/Context';
import { useEffect, useState } from 'react';
import TemporaryDrawer from './Drawer';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Serviceitems = [
  {
    id: '0', name: 'ESG Snapshot Report',
    description: 'A fast, 5-day assessment of your company’s environmental, social, and governance readiness. This includes gap identification and high-level action points to align with CSRD.',
    key: {
      list1: 'Delivery: PDF report via email (up to 15 pages)',
      list2: 'Price: €149',
      list3: 'Best for: First-time ESG reporters'
    },
    btn: 'Get Snapshot'
  },
  {
    id: '1', name: 'Carbon Footprint Estimator',
    description: 'Estimate your Scope 1 & 2 emissions (and optionally Scope 3) based on basic company input. Perfect for internal audits, client transparency, or investor decks.',
    key: {
      list1: 'Delivery: Spreadsheet + visual summary (PDF)',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: `Price:
                        Scope 1 & 2: €129
                        Scope 1–3: €199`
    },
    btn: 'Estimate My Carbon Footprint'
  },
  {
    id: '2', name: 'Sustainability Policy Gap Detector',
    description: 'Check your company’s existing documents (HR, procurement, etc.) for alignment with EU Green Policies and social expectations. You’ll get a customized checklist of whats missing.',
    key: {
      list1: 'Delivery: PDF checklist + recommendations',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: "Price: €159"
    },
    btn: 'Audit My Policies'
  },
  {
    id: '3', name: 'EU ESG Reporting Format Converter (XBRL Ready)',
    description: 'Send us your raw sustainability data — we’ll convert it into EU CSRD-compliant digital format (XBRL-compatible). No manual formatting required.',
    key: {
      list1: 'Delivery: Structured digital file + printable version',
      list2: 'Includes: CO₂e metric tons for each scope, key reduction tips',
      list3: "Price: €399"
    },
    btn: 'Convert My Data'
  },
  {
    id: '4', name: 'EEU Green Claim Verifier',
    description: 'Planning to make an eco-friendly product claim? This tool checks whether your claim complies with EU’s Green Claims Directive and backs it with scientific evidence or sourcing validation.',
    key: {
      list1: 'Delivery: Claim review + proof request + compliance verdict',
      list2: "Price: €59"
    },
    btn: 'Verify My Claim'
  },
  {
    id: '5', name: 'Sustainability Content Rewriter',
    description: 'Send us your policy, website, or presentation content (up to 500 words), and we’ll rewrite it to be ESG-focused, professional, and aligned with EU tone and keywords.',
    key: {
      list1: 'Delivery: Word doc + clean PDF',
      list2: 'Price: €69',
    },
    btn: 'Rewrite My Content'
  },
  {
    id: '6', name: 'EU ESG Trends Monthly Brief (Subscription)',
    description: 'Get the latest EU ESG regulation updates, sector-specific alerts, and sustainability insights each month directly in your inbox.',
    key: {
      list1: 'Delivery: Email newsletter',
      list2: 'Price: General: €19/month',
      list3: "Industry-specific: €39/month"
    },
    btn: 'Subscribe Now'
  },
  {
    id: '7', name: 'Employee ESG Awareness Quiz + Certificate Tool',
    description: 'Give your team an online quiz to test their ESG knowledge. Upon passing, they receive a customized VerdiNexus ESG certificate.',
    key: {
      list1: 'Delivery: Web link + downloadable certificate',
      list2: 'Price:<50 employees: €99',
      list3: "50–200 employees: €179",
      list4: " Unlimited: €299"
    },
    btn: 'Launch Quiz for Team'
  },
  {
    id: '8', name: 'Green HR Policy Pack',
    description: 'Get ready-to-use HR policies that support sustainability goals — including remote work, inclusive hiring, and ethical labor statements.',
    key: {
      list1: 'Delivery: Word + PDF editable templates',
      list2: 'Price: €89',
      list3: "50–200 employees: €179",
    },
    btn: 'Download Now'
  },
  {
    id: '9', name: 'Eco-Conscious Procurement Guide',
    description: 'This toolkit helps you redesign your procurement process to prioritize local, ethical, and low-carbon suppliers.',
    key: {
      list1: 'Delivery: Toolkit PDF + Editable Checklist',
      list2: 'Price: €79',
    },
    btn: 'Start Greener Buying'
  },
  {
    id: '10', name: 'EU Regulation Tracker Tool',
    description: 'Track relevant ESG regulations for your industry and location. Updated quarterly to stay current with EU rules.',
    key: {
      list1: 'Delivery: Interactive spreadsheet + PDF overview',
      list2: 'Price:Free version (basic)',
      list3: "€29 Premium",
    },
    btn: 'Download Regulation Tracker'
  },
  {
    id: '11', name: "Visual ESG Impact Report Template",
    description: 'Make your ESG report visually stunning with a plug-and-play template for PowerPoint or Canva, already aligned to CSRD design principles.',
    key: {
      list1: 'Delivery: PPTX + Canva link',
      list2: 'Price: €109',
    },
    btn: "Get the Template"
  },

]

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const { theme, ToggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`transition-all duration-300 fixed left-[0%] z-[150] text-center top-3 right-[0%] w-full md:w-[80%] rounded-full md:px-5 mx-auto  ${scrolled ? "bg-white/50 backdrop-blur-md text-green-950" : "bg-transparent text-white"
      }`}>
      <div className="container mx-auto h-[50px] md:h-[80px] px-4  flex items-center align-middle justify-between">
        <div className=" font-bold md:w-[50%] w-[50%] items-start flex md:mx-auto xl:px-10 overflow-x-hidden">
          <Link to='/'>{scrolled ? <img className='w-[60%] object-cover' src={logo} /> : <img className='w-[60%] object-cover' src={logow} />}</Link></div>
        <nav className="hidden md:flex items-center  align-middle justify-center space-x-6 md:w-[60%] w-100% text-md font-medium">
          <div class="dropdown ">
            <Link to='/'>
              <button class="dropbtn textHover">
                <h3> {t('home')}</h3>
                <h3>{t('home')}</h3>
              </button>
            </Link>
            {/* <Link to='/'><button class="dropbtn">{t('home')}</button> </Link> */}

          </div>
          <div class="dropdown">
            <Link to='/blog'>
              <button class="dropbtn textHover">
                <h3> {t('blog')}</h3>
                <h3>{t('blog')}</h3>
              </button>
            </Link>
          </div>

          <div class="dropdown">
              <button class="dropbtn textHover">
                <h3> {t('services')}</h3>
                <h3>{t('services')}</h3>
              
              {scrolled ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretDown} style={{ color: "#00000", }} />}
            </button>
            {/* <div className="dropdown-content">
              <div>
              {Serviceitems.map((service)=>{
                <Link to={`/services/${service.id}`} >{service.id}</Link>
              })}
              </div>
            </div> */}
            <div class="dropdown-content">
              {Serviceitems.map((service) => (
                <div key={service.id}>
                  <Link to={`/services/${service.id}`}>{service.name}</Link>
                </div>
              ))}
            </div>
          </div>
          <div class="dropdown">
            <Link to='/'> <button class="dropbtn textHover">
                <h3> {t('About')}</h3>
                <h3>{t('About')}</h3>
              </button></Link>
          </div>
          <div class="dropdown">
            <Link to='/contactus'> <button class="dropbtn textHover">
                <h3> {t('Contact')}</h3>
                <h3>{t('Contact')}</h3>
              </button></Link>
          </div>


        </nav>

        <div className='hidden gap-4 w-[30%] md:flex justify-center items-center'>


          {/* <div className=" hidden md:flex bg-white w-[40px] h-[40px] text-xl  justify-center rounded-[50%] font-semibold object-center items-center ">
            <Link><FontAwesomeIcon icon={faUser} style={{ color: "#24314c", }} /></Link>
          </div> */}
          <div className='signupbtn'>
            <Link to='/signup'><h3>signup</h3></Link>
          </div>
            <div className="dropdown hidden md:block text-white">
          <button onClick={ToggleTheme} className='text-xl'>{theme === 'light' ? 'dark' && <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B", }} /> : 'light' && <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B", }} />}
          </button>
        </div>
        {/* three dots feature */}
        <div className='md:block hidden' >
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <div className={` md:text-[20px] ${scrolled ? 'text-black' : 'text-white'}`}>
              <BsThreeDotsVertical />
            </div>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                'aria-labelledby': 'basic-button',
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <div class="dropdown">
                <Link to='/FaQ'><button class="dropbtn">{t('fQ')}</button></Link>
              </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <div className="dropdown w-[80px] ">
                <div className='text-md items-center flex'>{
                  scrolled ? <FontAwesomeIcon icon={faGlobe} style={{ color: '#00000' }} /> : <FontAwesomeIcon icon={faGlobe} />} <p className='px-1'>{t('Language')}</p>
                  {scrolled ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretDown} />}
                </div>
                <div class="dropdown-contents flex-col items-start">
                  <button onClick={() => changeLanguage('en')}>English</button>
                  <button onClick={() => changeLanguage('hi')}>hindi</button>
                </div>
              </div>
            </MenuItem>
            <MenuItem onClick={handleClose}>

            </MenuItem>
          </Menu>
        </div>
        </div>
      

        <div className="md:hidden flex justify-center items-center">
          <button onClick={ToggleTheme} className='text-xl'>{theme === 'light' ? 'dark' && <FontAwesomeIcon icon={faMoon} style={{ color: "#FFD43B", }} /> : 'light' && <FontAwesomeIcon icon={faSun} style={{ color: "#FFD43B", }} />}
          </button>
          <div className="text-gray-700 focus:outline-none">
            <TemporaryDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header