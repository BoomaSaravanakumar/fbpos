import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "../styles/order.css";
import { Button, Breadcrumb, Dropdown, Form } from "react-bootstrap";
import Table from "../images/chair.png";
import secount from "../images/2.jpg";
import one from "../images/1.jpg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Order() {
  const [show3, setShowModal2] = useState(false);

  const handleClose2 = () => setShowModal2(false);
  const handleShow2 = () => setShowModal2(true);

  const [show1, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [show2, setShowModal1] = useState(false);

  const handleClose1 = () => setShowModal1(false);
  const handleShow1 = () => setShowModal1(true);

  const [show, setShow] = useState([true, false, false, false]);
  // const [bbqshow , setbbqshow] = useState(false)
  const showmodal = (tab) => {
    const prevState = show;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    setShow(state);
  };

  return (
    <div className="mt-3">
      <div class="container">
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            {" "}
            <Link to="/dashboard">Dashboard</Link>
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Orders</Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <div class="row mb-3">
          <div class="col-lg-2 col-md-3 col-sm-12 ">
            <a
              href="javascript:void(0)"
              onClick={(e) => {
                showmodal(0);
              }}
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <Button size="sm" variant="outline-info" className="button1 orderbutten ">
                {" "}
                DineIn{" "}
              </Button>
            </a>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-12 ">
            <a
              href="javascript:void(0)"
              onClick={() => {
                showmodal(1);
              }}
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <Button size="sm" variant="outline-info" className=" button1 orderbutten">
                {" "}
                Takeaway
              </Button>
            </a>
          </div>
          <div class="col-lg-2 col-md-3 col-sm-12 ">
            <div>
              <a
                href="javascript:void(0)"
                onClick={(e) => {
                  showmodal(2);
                }}
                data-bs-toggle="collapse"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <Button size="sm" variant="outline-info" className="button1 orderbutten">
                  {" "}
                  Door Delivery
                </Button>
              </a>
            </div>
          </div>

          <div class="col-lg-2 col-md-3 col-sm-12 ">
            <a
              href="javascript:void(0)"
              onClick={(e) => {
                showmodal(3);
              }}
              data-bs-toggle="collapse"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <Button size="sm" variant="outline-info" className="button1 orderbutten ">
                {" "}
                BBQ
              </Button>
            </a>
          </div>
        </div>

        <Collapse in={show[0]}>
          <div class="collapse" id="collapseExample">
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 01</span>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>

                <Link to="/menu">
                  <Link to="/menu">
                    {" "}
                    <Button
                      size="sm"
                      variant="outline-info"
                      className=" table-button"
                    >
                      {" "}
                      New Order Item
                    </Button>
                  </Link>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 02 BBQ</span>

                  {/* <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon"
                                    >TABLE 1</lable>
                                </div> */}
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={show[1]}>
          <div class="collapse" id="collapseExample">
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 01 BBQ</span>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 02 BBQ</span>

                  {/* <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon"
                                    >TABLE 1</lable>
                                </div> */}
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={show[2]}>
          <div class="collapse" id="collapseExample">
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 01 BBQ</span>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 02 BBQ</span>

                  {/* <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon"
                                    >TABLE 1</lable>
                                </div> */}
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Collapse>
        <Collapse in={show[3]}>
          <div class="collapse" id="collapseExample">
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 04 BBQ</span>
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head" align="center">
                  <img src={Table} alt="" className="table_image" />
                  <span class="odr_name">TABLE 02 BBQ</span>

                  {/* <div class="input-group p-0">
                                    <div class="input-group-text" id="btnGroupAddon" >
                                        <img src="images/table1.png" alt="" />
                                    </div>
                                    <lable type="text" class="table-name" aria-describedby="btnGroupAddon"
                                    >TABLE 1</lable>
                                </div> */}
                </div>
              </div>
            </div>

            <div class="row mb-3">
              <div class="col-md-6 col-sm-12">
                <input type="checkbox" />
                <span class="span_color">
                  SPl0974564657445(Walkin Customer)
                </span>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end">
                <Button variant="success" size="sm" className=" ">
                  {" "}
                  New Split
                </Button>
              </div>
            </div>

            <div class="row mb-3 p-0">
              <div className="col-lg-6 col-md-6 col-sm-12  ">
                <Button size="sm" variant="outline-info" onClick={handleShow}>
                  Change Table
                </Button>
                <Button
                  size="sm"
                  variant="outline-info"
                  className=" table-button"
                  onClick={handleShow1}
                >
                  Change Customer
                </Button>
                <Link to="/menu">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline-info"
                    className=" table-button"
                  >
                    {" "}
                    New Order Item
                  </Button>
                </Link>
              </div>

              <div class="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end d-grid ">
                {/* <button class="change_button" data-bs-toggle="modal" data-bs-target="#exampleModal">Bill Generator</button> */}

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" "
                  onClick={handleShow2}
                >
                  {" "}
                  Bill Generator
                </Button>

                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  {" "}
                  Cancel All
                </Button>
                <Button
                  size="sm"
                  variant="outline-danger"
                  className=" table-button"
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <span class="span_color">ORDER2908908809</span>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-6">
                <img src={one} alt="" className="table_image2" />
                <label>Aballon Slice</label>
                <span class="dollar">$2.0</span>

                <Button
                  variant="outline-success"
                  size="sm"
                  className="inprocess"
                >
                  Inprocess
                </Button>

                <span className="inprocess">
                  <input type="checkbox" />
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="inprocess"
                  >
                    Cancel
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Collapse>

        <Modal
          show={show2}
          onHide={handleClose1}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Change Customer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select aria-label="">
              <option>Customer</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Submit</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={show1}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Table Change</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Select aria-label="Select Table">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose}>Submit</Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={show3}
          onHide={handleClose2}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>BILL TYPES</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Single Bill
              </label>
            </div>
            <div>
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Split Bill
              </label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose2}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Order;
