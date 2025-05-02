import { useEffect, useState } from "react"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export function ManageJobs(){
    const [myData , setMydata] = useState([]);
    const [isDelete , setIsDelete] = useState(false);
    useEffect(()=>{
        apiServices.getJobData()
        .then((res)=>{
          console.log(res.data.data)
          setMydata(res.data.data)
    
        })
        .catch((err)=>{
          console.log(err.message)
        })
      },[isDelete])

      const deleteData = (id)=>{
        setIsDelete(true)
        let data = {

            _id : id ,

            
        }
        apiServices.deleteJobData(data)
        .then((res)=>{
            toast.success(res.data.message)
      
          })
          .catch((err)=>{
            console.log(err)
          })
      }

    return(
        <>
  {/* Hero Area Start*/}
  <div className="slider-area ">
    <div
      className="single-slider section-overly slider-height2 d-flex align-items-center"
      data-background="assets/img/hero/about.jpg" style={{backgroundImage:'url("/assets/img/hero/about.jpg")'}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>JOBS</h2>
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
          <h2 className="contact-title">JOBS</h2>
        </div>
        <div className="col-lg-12 table-responsive">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Sr No.</th>
      <th scope="col">Job Name</th>
      <th scope="col">Image</th>
      <th scope="col">Description</th>
      <th scope="col">Category Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Vacancy</th>
      <th scope="col">Location</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Job Type</th>
      <th scope="col">Qualification</th>
      <th scope="col">Experience</th>
      <th>Delete</th>
      <th>Update</th>
    </tr>
  </thead>
  <tbody>
   {myData.map((el,index)=>(
    <>
     <tr>
      <th scope="row">{index+1}</th>
      <td>{el.jobName}</td>
      <td>
      <img src={BASE_IMAGE_URL+el.jobImg} height={200}  alt="" />
      </td>
      <td>{el.description}</td>
      <td>{el.categoryId?.categoryName}</td>
      <td>{el.salary}</td>
      <td>{el.vacancy}</td>
      <td>{el.location}</td>
      <td>{el.startDate}</td>
      <td>{el.endDate}</td>
      <td>{el.jobType}</td>
      <td>{el.qualification}</td>
      <td>{el.experience}</td>
      <td>
        <button style={{backgroundColor:"red"}} onClick={()=> deleteData(el._id)}>Delete</button>
      </td>
      <td>
        <Link to={"/admin/updatejobs/"+ el._id}>
        <button style={{backgroundColor:"blue"}}>Update</button>
        </Link>
      </td>
    </tr></>
   ))}
    
  </tbody>
</table>
        </div>
        
      </div>
    </div>
  </section>
  {/* ================ contact section end ================= */}
</>

    )
}