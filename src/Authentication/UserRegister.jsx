import { useState } from "react"
import apiServices from "../Apiservices/apiServices"
import {toast} from "react-toastify"

export function UserRegister(){
    const[name ,setName] =useState("")
    const[email ,setEmail] =useState("")
    const[password ,setPassword] =useState("")
    const[contact ,setContact] =useState("")


    const addData = (e)=>{
        e.preventDefault()
        let data = {
            name:name,
            email:email,
            password:password,
            contact:contact
        }
        apiServices.userRegister(data)
        
        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(err.message)
        })
    }
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
              <h2>User Register</h2>
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
        <div className="col-12">
          <h2 className="contact-title">Register Here</h2>
        </div>
        <div className="col-lg-12">
          <form onSubmit={addData}
            className="form-contact contact_form"
            
          >
            <div className="row">
              <div className="col-12">
                
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    
                    placeholder="Enter Name"
                    value={name} onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
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
              <div className="col-sm-12">
                <div className="form-group">
                  <input
                    className="form-control valid"
                    name="password"
                    id="password"
                    type="password"
                    value={password} onChange={(e)=>{setPassword(e.target.value)}}
                    
                    
                    placeholder="Enter Password"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="contact"
                    id="contact"
                    type="text"
                    value={contact} onChange={(e)=>{setContact(e.target.value)}}
                    placeholder="Enter Contact"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
</>

    )
}