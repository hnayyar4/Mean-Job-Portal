import { useEffect, useState } from "react"
import {toast} from "react-toastify"
import apiServices, { BASE_IMAGE_URL } from "../Apiservices/apiServices"
import { useParams } from "react-router-dom"

export function UpdateJobs(){
    const[jobName ,setJobName] =useState("")
    const[jobImg ,setJobImg] =useState({})
    const[imageName ,setImageName] =useState("")
    const[description ,setDescription] =useState("")
    const[vacancy ,setVacancy] =useState("")
    const[categoryId ,setCategoryId] =useState("")
    const[salary ,setSalary] =useState("")
    const[startDate ,setStartDate] =useState("")
    const[endDate ,setEndDate] =useState("")
    const[jobType ,setJobType] =useState("")
    const[experience ,setExperience] =useState("")
    const[qualification ,setQualification] =useState("")

    const[PreviousImage, setPreviousImage] = useState([])
    const [myData , setMyData] = useState([])
    const param = useParams();

    const id = param.id;

    useEffect(()=>{
        let data = {
            _id : id
        }
        apiServices.getSingleJob(data)
        .then((res)=>{
            setJobName(res.data.data.jobName);
            setDescription(res.data.data.description);
            setVacancy(res.data.data.vacancy);
            setCategoryId(res.data.data.categoryId);
            setSalary(res.data.data.salary);
            setStartDate(res.data.data.startDate);
            setEndDate(res.data.data.endDate);
            setJobType(res.data.data.jobType);
            setExperience(res.data.data.experience);
            setQualification(res.data.data.qualification);
            setPreviousImage(res.data.data.jobImg);
        })
    },[id])
    useEffect(()=>{
      apiServices.getCategoryData()
      .then((res)=>{
        setMyData(res.data.data)
      })
      .catch((err)=>{
        console.log(err.message)
      })
    })

    const changeImage =(e)=>{
        setJobImg(e.target.files[0])
        setImageName(e.target.value)
    }

    const updateData = (e)=>{
        e.preventDefault()
        let data = new FormData();
        data.append("jobName" , jobName)
        data.append("description" , description)
        if(!!imageName){
            data.append("jobImg", jobImg)
        }
        data.append("_id",id)
        data.append("vacancy", vacancy)
        data.append("startDate", startDate)
        data.append("endDate", endDate)
        data.append("salary", salary)
        data.append("categoryId", categoryId)
        data.append("jobType", jobType)
        data.append("experience", experience)
        data.append("qualification", qualification)

        apiServices.updateJobs(data)
        
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
      data-background="assets/img/hero/about.jpg" style={{backgroundImage:'url("/assets/img/hero/about.jpg")'}}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="hero-cap text-center">
              <h2>UPDATE JOBS</h2>
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
          <h1 className="contact-title">UPDATE A JOB</h1>
        </div>
        <div className="col-lg-12">
          <form onSubmit={updateData}
            className="form-contact contact_form"
            
          >
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                    <label htmlFor=""><h5>NAME:</h5></label>
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
                <label htmlFor=""><h5>DESCRIPTION:</h5></label>
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
                <label htmlFor=""><h5>VACANCY:</h5></label>
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
                <label htmlFor=""><h5>CATEGORY:</h5></label>
                <select name="" id="" className="form-control" value={categoryId}
                onChange={(e)=>{setCategoryId(e.target.value)}}>
                  <option>SELECT CATEGORY</option>
                  {myData.map((el)=>(
                    <>
                    <option value={el._id}>{el.categoryName}</option>
                    </>
                  ))}
                </select>
                  {/* <input
                    className="form-control valid"
                    name="categoryId"
                    id="categoryId"
                    type="text"
                    
                    placeholder="Enter Job Category ID"
                    value={categoryId} onChange={(e)=>{setCategoryId(e.target.value)}}
                  /> */}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor=""><h5>START DATE:</h5></label>
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
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor=""><h5>END DATE:</h5></label>
                  <input
                    className="form-control valid"
                    name="endDate"
                    id="endDate"
                    type="date"
                    
                    placeholder="Enter Job End Date"
                    value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor=""><h5>SALARY:</h5></label>
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
                <label htmlFor=""><h5>JOB TYPE:</h5></label>
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
                <label htmlFor=""><h5>EXPERIENCE REQUIRED:</h5></label>
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
                <label htmlFor=""><h5>QUALIFICATION REQUIRED:</h5></label>
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

              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor=""><h5>PREVIOUS IMAGE:</h5></label>
                <img src={BASE_IMAGE_URL+PreviousImage} alt="" height={200} /> <br /> <br />
                  
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                <label htmlFor=""><h5>UPDATE IMAGE:</h5></label><br />
                {/* <img src={BASE_IMAGE_URL+PreviousImage} alt=""  /> <br /> <br /> */}
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
              {/* <div className="col-sm-6">
                <div className="form-group">
                <img src={BASE_IMAGE_URL+PreviousImage} alt="" height={200} />
                </div>
             
            </div> */}
            <div className="form-group mt-3">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                SAVE
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