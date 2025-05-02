import { useState } from "react"
import { useParams } from "react-router-dom"
import apiServices from "../Apiservices/apiServices"
import{toast} from "react-toastify"

export function ApplyJobs(){
 
    const[description, setDescription] = useState("")
    const[resume, setResume] = useState({})
    const[resumeName, setResumeName] = useState("")
    const[jobId, setJobId] = useState("")
    const[customerId, setCustomerId] = useState("")

    const param = useParams()
    const id = param.id
    

    const changeResume =(e)=>{
        setResume(e.target.files[0])
        setResumeName(e.target.value)
    }

   const addData = (e) =>{

    e.preventDefault();
    let data = new FormData();
    data.append("jobId" , id)
    data.append("customerId" , sessionStorage.getItem("customerId"))
    data.append("resume" , resume)
    data.append("description" , description)

    apiServices.applyJobs(data)

    .then((res)=>{
        toast.success(res.data.message)
        console.log(res.data.errors)
        console.log(res.data.message)
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
            data-background="assets/img/hero/about.jpg" style={{backgroundImage:"url('/assets/img/hero/about.jpg')"}}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center">
                    <h2>APPLY JOBS</h2>
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
                <h2 className="contact-title">APPLY HERE</h2>
              </div>
              <div className="col-lg-8">
                <form
                onSubmit={addData}
                  className="form-contact contact_form"
                 
                >
                  <div className="row">
                    
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="">RESUME:</label>
                        <input
                          className="form-control valid"
                          name="resume"
                          id="resume"
                          type="file"
                         onChange={changeResume}
                          placeholder="Add Your Resume"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group">
                        
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="">DESCRIPTION:</label>
                        <textarea
                          className="form-control w-100"
                          name="description"
                          id="description"
                          cols={30}
                          rows={9}
                          value={description} onChange={(e)=>{setDescription(e.target.value)}}
                          placeholder="Enter Description"
                          
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <button
                      type="submit"
                      className="button button-contactForm boxed-btn"
                    >
                      APPLY
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