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

function Dashboard() {
  const [show, setShow] = useState(false);

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
            className="col-md-4 col-sm-4 col-lg-3 mt-4 "
            align="center"
            role="button"
            onClick={handleShow}
          >
            <Link to="/bbq">
              <div
                class="card cardshadow "
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={BBQ} alt="" style={{height:"70px"}} />
                    <h6 class="text-center">BBQ</h6>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3 mt-4 " align="center">
            <Link to="/dinein">
              <div
                class="card cardshadow "
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Din} alt="" />
                    <h6 class="text-center">Dine In</h6>
                  </div>

                  {/* <h6 class="card-title mt-4">Dine In</h6> */}
                </div>

                {/* <div className='card-footer text-center'><h6 class="">Dine In</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className=" col-md-4 col-sm-4 col-lg-3  mt-4 " align="center">
            <Link to="/menu/takeaway">
              <div
                class="card cardshadow"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Take} alt="" />
                    <h6 class="">Take Away</h6>
                  </div>
                  {/* <h6 class="card-title mt-4">Take Away</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Take Away</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3 mt-4" align="center">
            <Link to="/menu/doordelivery">
              <div
                class="card cardshadow"
                role="button"
                onClick={handleShow}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Door} alt="" />
                    <h6 class="">Door Delivery</h6>
                  </div>
                  {/* <h6 class="card-title mt-4"></h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Door Delivery</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4  col-lg-3 mt-4" align="center">
            <Link to="/order">
              <div
                class="card cardshadow"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Order} alt="" />
                    <h6 class="">Order</h6>
                  </div>
                  {/* <h6 class="card-title mt-4">Order</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Order</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3 mt-4" align="center">
            <Link to="/kitchen">
              <div
                class="card cardshadow"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Kitchen} alt="" />
                    <h6 class="">Kitchen</h6>
                  </div>
                  {/* <h6 class="card-title mt-4">Kitchen</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Kitchen</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3  mt-4" align="center">
            <Link to="/billing">
              <div
                class="card cardshadow"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Bill} alt="" />
                    <h6 class="">Billing</h6>
                  </div>
                  {/* <h6 class="card-title mt-4">Billing</h6> */}
                </div>
                {/* <div className='card-footer text-center'><h6 class="">Billing</h6> </div> */}
              </div>
            </Link>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-3 mt-4" align="center">
            <Link to="/report">
              <div
                class="card cardshadow"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalLabel"
              >
                <div class="card-body">
                  <div align="center">
                    <img src={Report} alt="" />
                    <h6 class="">Reports</h6>
                  </div>
                  {/* <h6 class="card-title mt-4">Reports</h6> */}
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
