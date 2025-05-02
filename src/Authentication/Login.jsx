import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = {
      email: email,
      password: password,
    };

    axios.post("http://localhost:3005/api/user/login", data) // Can also do it by making a function in apiServices and calling it here. 
      .then((res) => {
        if (res.data.success) {
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("name", res.data.data.name);
          sessionStorage.setItem("userId", res.data.data._id);
          sessionStorage.setItem("userType", res.data.data.userType);

          if (res.data.data.userType === 1) {
            toast.success(res.data.message, { position: 'top-center' });
            setTimeout(() => {
              setLoading(false);
              nav("/admin");
            }, 2000);
          } else if (res.data.data.userType === 2) {
            if (res.data.data.status===2) {
              sessionStorage.setItem("advisorId", res.data.data.advisorId);
              localStorage.setItem("advisorId", res.data.data.advisorId);
              toast.success(res.data.message, { position: 'top-center' });
              setTimeout(() => {
                setLoading(false);
                nav("/advisor");
              }, 2000);
            } else {
              toast.error("You need admin approval! Please wait for approval", { position: 'top-center' });
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }
          } else if (res.data.data.userType === 3) {
            sessionStorage.setItem("customerId", res.data.data.customerId);
            localStorage.setItem("customerId", res.data.data.customerId);
            toast.success(res.data.message, { position: 'top-center' });
            setTimeout(() => {
              setLoading(false);
              nav("/");
            }, 2000);
          }
        } else {
          toast.error(res.data.message, { position: 'top-center' });
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message, { position: 'top-center' });
        setLoading(false);
      });
  };
  

  
    return(
        <>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      data-background="assets/img/hero/about.jpg" style={{ backgroundImage: "url('/assets/img/gallery/cv_bg.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>LOGIN</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  {/* ================ contact section start ================= */}
  <section className="contact-section">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        
      </div>
      <div className="row">
        <div className="col-8">
          <h2 className="contact-title">LOGIN HERE!</h2>
        </div>
        <div className="col-lg-8">
          <form onSubmit={handleForm}
          
            className="form-contact contact_form"
           
          >
            <div className="row">
              
              
              <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="">Email:</label>
                  <input
                    className="form-control valid"
                    name="email"
                    id="email"
                    type="email"
                    value={email} onChange={(e)=>{setEmail(e.target.value)}}
                    
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                    <label htmlFor="">Password:</label>
                  <input
                    className="form-control"
                    name="subject"
                    id="subject"
                    type="password"
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-home" />
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet" />
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon">
              <i className="ti-email" />
            </span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>You can also send us your query  at this email anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
</>

    )
}