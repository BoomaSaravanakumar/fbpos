import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import "../styles/kitchen.css";
import { Button, Breadcrumb } from "react-bootstrap";
import Table1 from "../images/cloche.png";

import one from "../images/1.jpg";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function Kitchen() {
  const [show1, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [show, setShow] = useState([true, false, false, false]);
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

          <Breadcrumb.Item active>Kitchen</Breadcrumb.Item>
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
              <Button size="sm" variant="outline-info" className="button1 kbutton ">
                {" "}
                Suki Area{" "}
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
              <Button size="sm" variant="outline-info" className="button1 kbutton ">
                {" "}
                Chef Area
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
                <Button size="sm" variant="outline-info" className="button1 kbutton">
                  {" "}
                  Bar Area
                </Button>
              </a>
            </div>
          </div>
        </div>

        <Collapse in={show[0]}>
          <div class="collapse" id="collapseExample">
            
            <div class="row mb-3 mt-5">
              <div class="col-md-4 col-sm-12 col-lg-3">
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 1
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 2
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 1
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>

            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 2
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>
            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 1
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>
            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>

                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
                <div class="table_head">
                  <img src={Table1} alt="" className="table_image1" />
                  <span class="odr_name">ORDER12352545</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-12 col-lg-3">
                <Button variant="warning" size="sm" className=" table-button">
                  Table 2
                </Button>
              </div>
              <div class=" col-sm-12 col-md-6 col-lg-6 kotprint" align="right">
                <Button
                  variant="danger"
                  size="sm"
                  className=" table-button"
                  onClick={handleShow}
                >
                  Kot Print
                </Button>
              </div>
            </div>
            <div class="row coid ">
              <div class="col-sm-12 col-md-6 col-lg-6">
                <input type="checkbox" />
                &nbsp;
                <span class="span_color">Superadmin</span>
              </div>
              <div class="d-flex justify-content-end  col-sm-12 col-md-6 col-lg-6 kotprint">
                <span class="span_color">
                  Status:
                  <a href="http:/">Open</a>
                </span>
                <Button
                  size="sm"
                  variant="outline-warning"
                  className=" table-button"
                >
                  Print
                </Button>
              </div>
            </div>
            <div class="row coid mb-3">
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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

              <div class="col-sm-12 col-md-6 col-lg-6 mb-3">
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
          show={show1}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body align="center">
            <p> Select Order Item</p>
            <Button variant="info" size="sm" onClick={handleClose}>
              OK
            </Button>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Kitchen;
