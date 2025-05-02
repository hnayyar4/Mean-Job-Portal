import { useEffect, useState } from "react";
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices";
import { Link, useParams } from "react-router-dom";

export function ShowJobs(){
  const [myData , setMydata] = useState([]);

  const param = useParams()
  const id = param.id;
  
    useEffect(()=>{
        let data ={
            categoryId : id
        }
        apiServices.getJobData(data)
        .then((res)=>{
          console.log(res.data.data)
          setMydata(res.data.data)
    
        })
        .catch((err)=>{
          console.log(err.message)
        })
      },[id])
    return(
        <main>
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
              <h2>Get your job</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero Area End */}
  {/* Job List Area Start */}
  <div className="job-listing-area pt-120 pb-120">
    <div className="container-fluid">
      <div className="row">
        {/* Left content */}
        
        {/* Right content */}
        <div className="col-xl-12 col-lg-12 col-md-12">
          {/* Featured_job_start */}
          <section className="featured-job-area">
            <div className="container">
              {/* Count of Job list Start */}
              
              {/* Count of Job list End */}
              {/* single-job-content */}
              <div className="single-job-items mb-30">
                {myData.map((el, index)=>(
                  <>
                  <div className="job-items mt-5">
                  <div className="company-img">
                    <a href="#">
                    <img src={BASE_IMAGE_URL+el.jobImg} height={150}  alt="" />
                    </a>
                  </div>
                  <div className="job-tittle job-tittle2">
                    <a href="#">
                      <h4>{el.jobName}</h4>
                    </a>
                    <ul>
                      <li>{el.description}</li>
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        Experience Required: {el.experience}
                      </li> <br />
                      <li>
                        <i className="fas fa-map-marker-alt" />
                        Qualification Required: {el.qualification}
                      </li>
                      <li>Salary: {el.salary}</li>
                      <li>Location: {el.location}</li>
                      <li>Posted At: {el.createdAt}</li>
                    </ul>
                  </div>
                </div>
                <div className="items-link items-link2 f-right mt-5">
                <Link to={"/applyjobs/"+ el._id}>Apply Now!</Link>
                  <span>Start Date: {el.startDate}</span>
                  <span>End Date: {el.endDate}</span>
                  <span> {el.jobType} </span>
                  
                </div>
                
                
                  </>
                 
                ))}
                </div>
                
              
              
              
              
              
              
            </div>
          </section>
          {/* Featured_job_end */}
        </div>
      </div>
    </div>
  </div>
  {/* Job List Area End */}
  {/*Pagination Start  */}
  <div className="pagination-area pb-115 text-center">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <div className="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-start">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    01
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    02
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    03
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <span className="ti-angle-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Pagination End  */}
</main>

    )
}