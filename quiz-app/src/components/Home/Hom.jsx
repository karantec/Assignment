
import Sidebar from "../Sidebar/Sidebar"
import "./Hom.css"
const Hom = () => {
  return (
    <div> 
    {/* Sidebar  */}
        <div className="row">
        <div className="col-md-2">
            <Sidebar/>
        </div>
        {/* Main */}
    <div className="col-md-7 mt-5">
    <div className="container my-">
    <div className="d-flex">
        <h3 className="p-2 flex-fill">Create User</h3>
        <img src="Vector.png" width="60" className="p-2 img-fluid rounded-circle border border-primary"/>
        <img src="picture.png" className="p-2 img-fluid rounded-circle"/>
        </div>
<div className="container mt-6">
<div className=" mt-5 py-5  border-none">
<form>
  <div className="form-group mt-4">
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Language</option>
    </select>
  </div>
  <div className="form-group mt-4">
    <select className="form-control" id="exampleFormControlSelect1" placeholder="Class">
      <option>Class</option>
    </select>
  </div>
  <div className="form-group mt-4">
    <select className="form-control" id="exampleFormControlSelect1" placeholder="Subject">
      <option>Subject</option>
    </select>
  </div>
  <div className="form-group mt-4">
    <select className="form-control" id="exampleFormControlSelect1" placeholder="Select Topic">
      <option> Topic</option>
    </select>
  </div>
  <div className="form-group mt-4">
    <select className="form-control" id="exampleFormControlSelect1" placeholder="Select User">
      <option>Select User</option>
    </select>
  </div>
  <div className="text-center">
  <button  type="button" className=" btn btn-primary btn-lg mt-5 color ">Assign User</button>
  </div>
</form>
</div>
 </div>
</div>
 </div>
 {/* Rightbar */}
 <div className="col-md-3 mr-5 widt ">
<div className="d-flex flex-column mb-3 mt-4 size2 ">
<div className="p-2 set">Total Users</div>
<div className="p-2 set">1,0000</div>
        </div>

        <div className="d-flex">
        <div className="p-4 w-100">Users</div>
        <button className="mb-3 btn btn-white color3 flex-shrink-1" data-toggle="modal" data-target="#exampleModal" >+</button>
        </div>
        <div className="d-flex mb-3 border">
        <img src="picture2.png" width="60" className="p-2 img-fluid rounded-circle"/>
        <div className="p-3 bold">Name</div>
  
        </div>
        <div className="d-flex mb-3 border">
        <img src="picture2.png" width="60" className="p-2 img-fluid rounded-circle"/>
        <div className="p-3 bold" >Name</div>
  
        </div>
        <div className="d-flex mb-3 border">
        <img src="picture2.png" width="60" className="p-2 img-fluid rounded-circle"/>
        <div className="p-3 bold">Name</div>
  
        </div>


      </div>
    </div>
    </div>
  )
}

export default Hom