import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
export default function Header(){
  const[token , setToken] = useState(sessionStorage.getItem("token"));
  const nav = useNavigate();

  useEffect(()=>{
    const interval = setInterval(()=>{
      setToken(sessionStorage.getItem("token")); //Update token whenever it changes
    }, 1000)

    return()=> clearInterval(interval)
  },[]);
  console.log("Token in Header", token);

  const logout =()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("name")
    sessionStorage.removeItem("userId")
    toast.success("Logout Successful")

    setTimeout(()=>{
      nav("/")
    },1000);
   
  }
    return(
        <header>
  {/* Header Start */}
  <div className="header-area header-transparrent">
    <div className="headder-top header-sticky">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-2">
            {/* Logo */}
            <div className="logo">
              <Link to={""}>
                <img src="assets/img/logo/logo.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="menu-wrapper">
              {/* Main-menu */}
              <div className="main-menu">
                <nav className="d-none d-lg-block">
                  <ul id="navigation">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/categories"}>Categories</Link>
                    </li>
                    <li>
                      <Link to={"job_listing"}>Find a Job </Link>
                    </li>
                    <li>
                      <Link to={"/trackapplication"}>Track Applications</Link>
                    </li>
                    <li>
                      <Link to={"/about"}>About</Link>
                    </li>
                    
                    <li>
                      <Link to={"/contact"}>Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* Header-btn */}
              {token ? (
                <>
                <div className="header-btn d-none f-right d-lg-block">
                
                <Link onClick={logout} className="btn head-btn2">
                  Logout
                </Link>
              </div></>
              ):(
                <>
                <div className="header-btn d-none f-right d-lg-block">
                <Link to={'/userregister'} className="btn head-btn1">
                  Register
                </Link>
                <Link to={"/login"} className="btn head-btn2">
                  Login
                </Link>
              </div></>
              )
              }
            </div>
          </div>
          {/* Mobile Menu */}
          <div className="col-12">
            <div className="mobile_menu d-block d-lg-none" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Header End */}
</header>

    )
}