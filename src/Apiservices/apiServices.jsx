import axios from "axios";
import qs from "qs";
const BASE_URL = "http://localhost:3005/api/"
export const BASE_IMAGE_URL ="http://localhost:3005/"

class apiServices{
    addCategories (data){
       return axios.post(BASE_URL+"/category/add" ,data , {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })

    }
    getCategoryData(data){
        return axios.post(BASE_URL+"category/getallData",qs.stringify(data));
    }

    deleteCategoryData(data){
        return axios.post(BASE_URL+"category/deleteData",qs.stringify(data));
    }

    getSingleCategory(data){
        return axios.post(BASE_URL+"category/getOneData",qs.stringify(data));
    }

    updateCategories (data){
        return axios.post(BASE_URL+"/category/updateData" ,data , {
             headers:{
                 "Content-Type":"multipart/form-data"
             }
         })
 
     }

    //FOR JOBS

    addJobs (data){
        return axios.post(BASE_URL+"/job/add", data, {
             headers:{
                 "Content-Type":"multipart/form-data"
             }
         })
 
     }

     getJobData(data){
        return axios.post(BASE_URL+"job/getallData",qs.stringify(data));
    }

    getSingleJob(data){
        return axios.post(BASE_URL+"job/getOneData",qs.stringify(data));
    }

    deleteJobData(data){
        return axios.post(BASE_URL+"job/deleteData",qs.stringify(data));
    }

    updateJobs (data){
        return axios.post(BASE_URL+"/job/updateData", data, {
             headers:{
                 "Content-Type":"multipart/form-data"
             }
         })
 
     }

//USER REGISTER
    userRegister (data){
        return axios.post(BASE_URL+"/customers/register" ,data
             
         )
 
     }


    //QUERIES
    addQueries (data){
        return axios.post(BASE_URL+"/queries/add" ,data
             
         )
 
     }
     getQueryData(data){
        return axios.post(BASE_URL+"queries/getallData",qs.stringify(data));
    }

    //APPLY JOBS

    applyJobs(data){
        return axios.post(BASE_URL+"/applyJob/add", data, {
            headers:{
                "Content-Type":"multipart/form-data"
            }
        })
    }
    getApplyJobsData(data){
        return axios.post(BASE_URL+"applyJob/getallData",qs.stringify(data));
    }

    updateStatus(data){
        return axios.post(BASE_URL+"/applyJob/changeStatus", data)
    }



}

export default new apiServices;