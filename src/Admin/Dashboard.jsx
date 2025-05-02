import { useEffect, useState } from "react"
import apiServices from "../Apiservices/apiServices"

export function Dashboard(){

  const [categoryData , setCategoryData] = useState([])
  const [jobData , setJobData] = useState([])
  const [queryData , setQueryData] = useState([])
  const [applicationData , setApplicationData] = useState([])

  useEffect(()=>{
    apiServices.getCategoryData()
    .then((res)=>{
      setCategoryData(res.data.data.length)
    })
    
  })
  useEffect(()=>{
    apiServices.getJobData()
    .then((res)=>{
      setJobData(res.data.data.length)
    })
    
  })
  useEffect(()=>{
    apiServices.getQueryData()
    .then((res)=>{
      setQueryData(res.data.data.length)
    })
    
  })
  useEffect(()=>{
    apiServices.getApplyJobsData()
    .then((res)=>{
      setApplicationData(res.data.data.length)
    })
    
  })


    return(
        <main>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      data-background="assets/img/hero/about.jpg" style={{ backgroundImage: "url('/assets/img/hero/about.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>Welcome Admin</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  
  {/* How  Apply Process Start*/}
  <div
    className="apply-process-area apply-bg pt-150 pb-150 mt-3"
    data-background="assets/img/gallery/how-applybg.png" style={{ backgroundImage: "url('/assets/img/gallery/how-applybg.png')" }}
  >
    <div className="container">
      {/* Section Tittle */}
      <div className="row">
        <div className="col-lg-12">
          <div className="section-tittle white-text text-center">
          </div>
        </div>
      </div>
      {/* Apply Process Caption */}
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
            <span><img src="/classification.png" alt="" height={100} /></span>
            </div><br />
            <div className="process-cap">
              <h1 style={{color:'white'}}>CATEGORIES: {categoryData}</h1>
              
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
            {/* <span className="flaticon-curriculum-vitae" /> */}
             <span><img src="/job-seeker.png" alt="" height={100} /></span>
            </div><br />
            <div className="process-cap">
              <h1 style={{color:'white'}}>JOBS: {jobData}</h1 >
              <h5></h5>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
            <span><img src="/application.png" alt="" height={100} /></span>
            </div><br />
            <div className="process-cap">
              <h1 style={{color:'white'}}>APPLICATIONS: {applicationData}</h1>
              
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="single-process text-center mb-30">
            <div className="process-ion">
            <span><img src="/questions.png" alt="" height={100} /></span>
            </div><br />
            <div className="process-cap">
              <h1 style={{color:'white'}}>QUERIES: {queryData}</h1>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* How  Apply Process End*/}
  
</main>

    )
}