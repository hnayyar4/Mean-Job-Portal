import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import apiServices from "../Apiservices/apiServices"

export function AddJobs(){
    const[jobName ,setJobName] =useState("")
    const[jobImg ,setJobImg] =useState({})
    const[imageName ,setImageName] =useState("")
    const[description ,setDescription] =useState("")
    const[vacancy ,setVacancy] =useState("")
    const[categoryId ,setCategoryId] =useState("")
    const[salary ,setSalary] =useState("")
    const[location ,setLocation] =useState("")
    const[startDate ,setStartDate] =useState("")
    const[endDate ,setEndDate] =useState("")
    const[jobType ,setJobType] =useState("")
    const[experience ,setExperience] =useState("")
    const[qualification ,setQualification] =useState("")
    const[categoryData, setCategoryData] = useState([])

    useEffect(()=>{

      apiServices.getCategoryData()
      .then((res)=>{
        setCategoryData(res.data.data)
        console.log(res.data.data)

      })
      .catch((err)=>{
        console.log(err.message)
      })

    },[])

    const changeImage =(e)=>{
        setJobImg(e.target.files[0])
        setImageName(e.target.value)
    }

    const addData = (e)=>{
        e.preventDefault()
        let data = new FormData();
        data.append("jobName" , jobName)
        data.append("description" , description)
        data.append("jobImg", jobImg)
        data.append("vacancy", vacancy)
        data.append("startDate", startDate)
        data.append("endDate", endDate)
        data.append("salary", salary)
        data.append("categoryId", categoryId)
        data.append("jobType", jobType)
        data.append("experience", experience)
        data.append("qualification", qualification)
        data.append("location", location)

        apiServices.addJobs(data)
        
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
      data-background="assets/img/hero/about.jpg" style={{ backgroundImage: "url('/assets/img/hero/about.jpg')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>ADD JOBS</h2>
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
          <h2 className="contact-title">ADD A JOB</h2>
        </div>
        <div className="col-lg-12">
          <form onSubmit={addData}
            className="form-contact contact_form"
            
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor="">NAME:</label>
                  <input
                    className="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    
                    placeholder="Enter Job Name"
                    value={jobName} onChange={(e)=>{setJobName(e.target.value)}}
                  />
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
                    placeholder=" Enter Job Description"
                    value={description} onChange={(e)=>{setDescription(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">VACANCY:</label>
                  <input
                    className="form-control valid"
                    name="vacancy"
                    id="vacancy"
                    type="number"
                    
                    placeholder="Enter Job Vacancy"
                    value={vacancy} onChange={(e)=>{setVacancy(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">VACANCY:</label>
                  <input
                    className="form-control valid"
                    name="location"
                    id="location"
                    type="text"
                    
                    placeholder="Enter Job Location"
                    value={location} onChange={(e)=>{setLocation(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">CATEGORY:</label>
                  <select name="" id="" className="form-control" 
                  onChange={(e)=>{setCategoryId(e.target.value)}}>
                    <option value="">Select Category</option>
                    {categoryData?.map((el,index)=>(
                      <>
                      <option value={el._id}>{el.categoryName}</option>
                      </>
                    ))}
                    </select>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <div className="form-floating">
                    <label htmlFor="">START DATE:</label>
                    <input
                    className="form-control valid"
                    name="startDate"
                    id="startDate"
                    type="date"
                    
                    placeholder="Enter Job Start Date"
                    value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}
                  />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <div className="form-floating">
                    <label htmlFor="">END DATE:</label>
                    <input
                    className="form-control valid"
                    name="endDate"
                    id="endDate"
                    type="date"
                    
                    placeholder="Enter Job Start Date"
                    value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}
                  />
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">SALARY:</label>
                  <input
                    className="form-control valid"
                    name="salary"
                    id="salary"
                    type="text"
                    
                    placeholder="Enter Job Salary"
                    value={salary} onChange={(e)=>{setSalary(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">JOB TYPE:</label>
                  <input
                    className="form-control valid"
                    name="jobType"
                    id="jobType"
                    type="text"
                    
                    placeholder="Enter Job Type"
                    value={jobType} onChange={(e)=>{setJobType(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">EXPERIENCE REQUIRED:</label>
                  <input
                    className="form-control valid"
                    name="experience"
                    id="experience"
                    type="text"
                    
                    placeholder="Enter Experience Required"
                    value={experience} onChange={(e)=>{setExperience(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">QUALIFICATION REQUIRED::</label>
                  <input
                    className="form-control valid"
                    name="qualification"
                    id="qualification"
                    type="text"
                    
                    placeholder="Enter Qualification Required"
                    value={qualification} onChange={(e)=>{setQualification(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor="">IMAGE:</label>
                  <input
                    className="form-control valid"
                    name="jobImage"
                    id="image"
                    type="file"
                    
                    placeholder="Enter Job Image"
                    onChange={changeImage}
                  />
                </div>
              </div>
             
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                ADD JOB
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