import { useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"
import { toast } from "react-toastify";
export default function AdminHeader(){
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
      <div className="container">
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
                      <Link to={"/admin"}>Dashboard</Link>
                    </li>
                  <li>
                      <Link to="#">Categories</Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/admin/addcategories"}>Add Category</Link>
                        </li>
                        <li>
                          <Link to={"/admin/managecategories"}>Manage Categories</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Jobs</Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/admin/addjobs"}>Add Job</Link>
                        </li>
                        <li>
                          <Link to={"/admin/managejobs"}>Manage Jobs</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Applications</Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/admin/pendingapplications"}>Pending Applications</Link>
                        </li>
                        <li>
                          <Link to={"/admin/acceptedapplications"}>Accepted Applications</Link>
                        </li>
                        <li>
                          <Link to={"/admin/rejectedapplications"}>Rejected Applications</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">Queries</Link>
                      <ul className="submenu">
                        <li>
                          <Link to={"/admin/managequeries"}>Manage Queries</Link>
                        </li>
                      </ul>
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