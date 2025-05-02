const router = require('express').Router();
const multer = require('multer')

const categoryController = require("../server/category/categoryController");
const jobsController = require("../server/jobs/jobsController")
const queryController = require("../server/queries/queryController")
const customerController = require("../server/customers/customerController");
const userController = require("../server/users/userController");
const applyJobController = require("../server/applyJobs/applyJobController")

//CATEGORY IMAGES
const categoryStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const categoryUpload = multer({ storage: categoryStorage })

//JOB IMAGES
const jobStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/job')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const jobUpload = multer({ storage: jobStorage })


//ApplyJobs multer exports for resume
const applyJobStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/jobApplications')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const applyJobsUpload = multer({ storage: applyJobStorage })


//category
router.post('/category/add', categoryUpload.single("categoryImg") ,categoryController.add);
router.post("/category/getallData" , categoryController.getallCategory)
router.post("/category/getOneData" , categoryController.getOneCategory)
router.post("/category/deleteData" , categoryController.deleteCategory)
router.post("/category/updateData" , categoryUpload.single("categoryImg"), categoryController.updateCategory)

//jobs
router.post('/job/add' ,jobUpload.single("jobImg") ,jobsController.addJobs);
router.post("/job/getallData" , jobsController.getallJobs)
router.post("/job/getOneData" , jobsController.getOneJob)
router.post("/job/deleteData" , jobsController.deleteJob)
router.post("/job/updateData",jobUpload.single("jobImg") , jobsController.updateJob)

//Apply jobs
router.post('/applyJob/add', applyJobsUpload.single('resume'),  applyJobController.add);
router.post('/applyJob/getallData', applyJobController.getAllApplications);
router.post('/applyJob/getOneData', applyJobController.getOneApplication);
router.post('/applyJob/changeStatus', applyJobController.changeApplicationStatus);


//queries
router.post('/queries/add', queryController.addQuery)
router.post("/queries/getallData" , queryController.getallQueries)

//customers register
router.post("/customers/register" , customerController.register)
router.post("/customers/getallData" , customerController.getAllCustomers)
router.post("/customers/getOneData" , customerController.getOneCustomer)

//login
router.post("/user/login" , userController.login)

//change status
router.post("/customers/changeStatus" , customerController.changeStatus)

//admin_login
router.post("/admin/login" , userController.login)

//MIDDLEWARE
router.use(require("../config/middleware"))


module.exports = router;