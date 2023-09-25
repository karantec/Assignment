import "./Sidebar.css";
const Sidebar = () => {
  return (
<>
<div className="d-flex flex-column flex-shrink-0 p-3 fixed-top height">
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"></svg>
      <span className="fs-4">Sidebar</span>
    </a>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <a href="#" className="nav-link active color">
        <div className="flex-column d-flex justify-content-center center">
         <p>Quiz</p>
         </div>
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Exams
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
         Create
        </a>
      </li>
      <li>
        <a href="#" className="nav-link link-body-emphasis">
          <svg className="bi pe-none me-2" width="16" height="16"></svg>
          Assign User
        </a>
      </li>
      
    </ul>
    
     
    </div>
  </>

  )
}

export default Sidebar