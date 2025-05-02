import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export function AcceptedApplications(){

    const [myData, setMyData] = useState([])

    const nav = useNavigate();

    useEffect(()=>{
        
        apiServices.getApplyJobsData()
        .then((res)=>{
            setMyData(res.data.data)
        })
        .catch((err)=>{
            toast.error(err.message)
            console.log(err)
        })
    })

    const updateStatus = (id,status)=>{
        let data = {
            _id:id,
            status:status
        }
        apiServices.updateStatus(data)

        .then((res)=>{
            toast.success(res.data.message)
        })
        .catch((err)=>{
            toast.error(err.message)
        })

        if(status=='Rejected'){
            setTimeout(()=>{
                nav('/admin/rejectedapplications')
            },2000)

        }

    }
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
              <h2>ACCEPTED APPLICATIONS</h2>
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
              <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Job Info.</th>
      <th scope="col">Application Info.</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
   {myData.map((el,index)=>(
    <>
    {el.status=='Accepted'?(<>
     <tr>
      <th scope="row">{index+1}</th>
      <td><ul>
        <li>Job Name:{el.jobId?.jobName}</li>
        <li>Start Date:{el.jobId?.startDate}</li>
        <li>End Date:{el.jobId?.endDate}</li>
        <li>Salary:{el.jobId?.salary}</li>
        <li>Location:{el.jobId?.location}</li>
        <li>Qualification:{el.jobId?.qualification}</li>
        <li>Experience:{el.jobId?.experience}</li>
        

        </ul></td>
      <td>
      <Link to={BASE_IMAGE_URL+el.resume} 
      target="_blank" 
      className="text-dark">
        Click to View</Link>

      </td>
      <td>{el.status}</td>
      <td>
        <button className="btn mt-2" 
        style={{backgroundColor:'red', width:"130px"}}
        onClick={()=>{updateStatus(el._id,"Rejected")}}>Reject</button>
      </td>
      
     
    </tr>
    </>):
    null
    }
    </>
   ))}
    
  </tbody>
</table>
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