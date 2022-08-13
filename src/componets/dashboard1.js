import "../styles/dashboard.css";
import BBQ from "../images/3.png";
import Din from "../images/1.png";
import Take from "../images/8.png";
import Door from "../images/5.png";
import Order from "../images/4.png";
import Kitchen from "../images/7.png";
import Bill from "../images/6.png";
import Report from "../images/Report.png";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Logo from "../images/logo.jpg";
import Image1 from "../images/Group 207.png"

import BBQ1 from"../images/wbbq1.png";
import Din1 from "../images/wdine.png";
import Take1 from "../images/wtake.png";
import Door1 from "../images/wdoor2.png";
import Order1 from "../images/worder.png";
import Kitchen1 from "../images/wkit1.png";
import Bill1 from "../images/wbill.png";
import Report1 from "../images/wreport.png";



function Dashboard() {
  const [show, setShow] = useState(false);
  const [ccart,setccard] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    document.title = "POS Module | Srampos";
  }, []);
  return (
    <div className="Dashboard">
      <div className="container">
        <div className=" " align="center">
          <img src={Logo} class="logo" alt="" />
        </div>
        <div className="row">
          <div className="col-md-7" align="right">
            <a class="navbar-brand " id="title" href="#">
              FooDie Hub
            </a>
          </div>
          <div className="col-md-5" align="right">
            <button class="logout " type="submit">
              <Link to="/login">
                Logout{" "}
                
                {/* <i class=" pl-2 bi bi-box-arrow-in-right header-logout" /> */}
              </Link>
            </button>
          </div>
        </div>

        <div className="row cursore-point">
          <div
            className="col-md-4 col-sm-12 col-lg-3  mt-2 "
            align="center"
            role="button"
            onClick={handleShow}
          >
            
            <Link to="/bbq">
            <div  className={"cardbg " + (ccart=="bbq"?"cround":"")} onMouseOver={()=>{setccard("")}} >
              
                <img src={Image1}/>
              </div>
              <div
                onMouseOver={()=>{setccard("bbq")}}
                class="card cardshadow bbq"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                
                <div class="card-body ">
                  <div align="center">
                    <img src={BBQ} alt="" className="front" style={{height:"70px"}}/>
                    <img src={BBQ1} className="back" alt="" />

                    <h6 class="text-center">BBQ</h6>
                  </div>
                </div>
              </div>
             
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3  mt-2 " align="center">
            <Link to="/dinein">
            <div className={"cardbg " + (ccart=="bbq1"?"cround":"")} onMouseOver={()=>{setccard("")}}>
                <img src={Image1}/>
              </div>
              <div
                onMouseOver={()=>{setccard("bbq1")}}
                class="card cardshadow bbq1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Din} alt=""className="front" />
                    <img src={Din1} className="back" alt="" />

                    <h6 class="text-center">Dine In</h6>
                  </div>

                  {/* <h6 class="card-title  mt-2">Dine In</h6> */}
                </div>

                {/* <div className='card-footer text-center'><h6 class="">Dine In</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className=" col-md-4 col-sm-12 col-lg-3   mt-2 " align="center">
            <Link to="/menu/takeaway">
            <div  className={"cardbg " + (ccart=="bbq2"?"cround":"")} onMouseOver={()=>{setccard("")}}>
                <img src={Image1}/>
              </div>
              <div
              onMouseOver={()=>{setccard("bbq2")}}
                class="card cardshadow bbq2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Take} alt="" className="front" />
                    <img src={Take1} className="back" alt="" />

                    <h6 class="">Take Away</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2">Take Away</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Take Away</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3  mt-2" align="center">
            <Link to="/menu/doordelivery">
            <div  className={"cardbg " + (ccart=="bbq3"?"cround":"")} onMouseOver={()=>{setccard("")}}>
                <img src={Image1}/>
              </div>
              <div
              onMouseOver={()=>{setccard("bbq3")}}
                class="card cardshadow bbq3"
                role="button"
                onClick={handleShow}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Door} alt="" className="front"/>
                    <img src={Door1} className="back" alt="" />

                    <h6 class="">Door Delivery</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2"></h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Door Delivery</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12  col-lg-3  mt-2 " align="center">
            <Link to="/order">
            <div  className={"cardbg " + (ccart=="bbq4"?"cround":"")} onMouseOver={()=>{setccard("")}} style={{color:"black"}}>
          
                <img src={Image1}/>
               
              </div>
              <div
              onMouseOver={()=>{setccard("bbq4")}}
                class="card cardshadow bbq4"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Order} alt="" className="front"/>
                    <img src={Order1} className="back" alt="" />

                    <h6 class="">Order</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2">Order</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Order</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3  mt-2" align="center">
            <Link to="/kitchen">
            <div className={"cardbg " + (ccart=="bbq5"?"cround":"")} onMouseOver={()=>{setccard("")}}>
                <img src={Image1}/>
              </div>
              <div
              onMouseOver={()=>{setccard("bbq5")}}
                class="card cardshadow bbq5"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Kitchen} alt="" className="front"/>
                    <img src={Kitchen1} className="back" alt="" />

                    <h6 class="">Kitchen</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2">Kitchen</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Kitchen</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3   mt-2" align="center">
            <Link to="/billing">
            <div  className={"cardbg " + (ccart=="bbq6"?"cround":"")} onMouseOver={()=>{setccard("")}}>
                <img src={Image1}/>
              </div>
              <div
              onMouseOver={()=>{setccard("bbq6")}}
                class="card cardshadow bbq6"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Bill} alt="" className="front"/>
                    <img src={Bill1} className="back" alt="" />

                    <h6 class="">Billing</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2">Billing</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Billing</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-12 col-lg-3  mt-2" align="center">
            <Link to="/report">
            <div  className={"cardbg " + (ccart=="bbq7"?"cround":"")} onMouseOver={()=>{setccard("")}}>

                <img src={Image1} className="imgg"/>
              </div>
              <div
              onMouseOver={()=>{setccard("bbq7")}}
                class="card cardshadow bbq7"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Report} alt="" className="front"/>
                    <img src={Report1} className="back" alt="" />
                    <h6 class="">Reports</h6>
                  </div>
                  {/* <h6 class="card-title  mt-2">Reports</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Reports</h6> </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="">
            <form class="row g-1">
              <div class="col-md-12">
                <label for="inputEmail4" class="form-label ">
                  <span className="text-danger">*</span>&nbsp;Name
                </label>

                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-12">
                <label for="inputPassword4" class="form-label">
                  <span className="text-danger">*</span>&nbsp;Phone
                </label>

                <input type="number" class="form-control" id="inputPassword4" />
              </div>

              <div class="col-md-6">
                <label for="inputState" class="form-label">
                  <span className="text-danger">*</span>&nbsp;Customer
                </label>

                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>

                  <option>Regular</option>
                  <option>Regular</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="inputState" class="form-label">
                  <span className="text-danger">*</span>&nbsp;Customer Type
                </label>

                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>

                  <option>...</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  Adults
                </label>

                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>

                  <option>...</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  Childs
                </label>

                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>

                  <option>...</option>
                </select>
              </div>

              <div class="col-md-4">
                <label for="inputState" class="form-label">
                  Kids
                </label>

                <select id="inputState" class="form-select">
                  <option selected="">Choose...</option>

                  <option>...</option>
                </select>
              </div>
              <div class="col-md-4">
                <label for="inputEmail4" class="form-label">
                  Adults Price
                </label>

                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-4">
                <label for="inputEmail4" class="form-label">
                  Childs Price
                </label>

                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-4">
                <label for="inputEmail4" class="form-label">
                  Kids Price
                </label>

                <input type="text" class="form-control" id="inputEmail4" />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Dashboard;
