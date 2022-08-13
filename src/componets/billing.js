import { useState, useEffect } from "react"
import Table from 'react-bootstrap/Table';
import { Link, useParams } from "react-router-dom";
import '../styles/biling.css';
import { Button, Collapse } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
// import { MDBDataTable } from 'mdbreact';
// import Takeaway from "./takeaway";

function Billing() {
  const [show1, setShowModal] = useState(false);
  const [dine_in, setdinein] = useState("active")
  const [talewayes, settakeaway] = useState("")
  const [doordeli, setdoor] = useState("")
  const [bbq, setbbq] = useState("")
  const [bbqd, setbbqd] = useState("")
  const [billr, setbillq] = useState("")
  const [bbqbr, setbbqbr] = useState("")
  const [bbqwdbq, setbbqwdbq] = useState("")
  const [bbqitemreport, setreport] = useState("")

  const { id } = useParams();
  useEffect(() => {
    if (id == "dinein") {
      showmodal(0)
    } else if (id == "takeaway") {
      showmodal(1)
    } else if (id == "doordelivery") {
      showmodal(2)
    } else if (id == "bbq") {
      showmodal(3)
    } else if (id == "bbqdinein") {
      showmodal(4)
    } else if (id == "billreprint") {
      showmodal(5)
    } else if (id == "bbqbillr") {
      showmodal(6)
    } else if (id == "bbqwdineinr") {
      showmodal(7)
    } else if (id == "bbqitemreport") {
      showmodal(8)
    } else {
      showmodal(0)
    }
  }, [])

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [show, setShow] = useState([false, false, false, false,false,false,false,false,false])
  const showmodal = (tab) => {
    if (tab == 0) {
      setdinein("active")
      settakeaway("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("")


    } else if (tab == 1) {
      settakeaway("active")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("")
    }
    else if (tab == 2) {
      settakeaway("")
      setdinein("")
      setdoor("active")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("")

    } else if (tab == 3) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("active")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("")

    } else if (tab == 4) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("active")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("")

    } else if (tab == 5) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("active")
      setreport("")

    } else if (tab == 6) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("active")
      setbbqwdbq("")
      setbillq("")
      setreport("")

    } else if (tab == 7) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("active")
      setbillq("")
      setreport("")

    } else if (tab == 8) {
      settakeaway("")
      setdinein("")
      setdoor("")
      setbbq("")
      setbbqd("")
      setbbqbr("")
      setbbqwdbq("")
      setbillq("")
      setreport("active")

    }
    const prevState = show;
    const state = prevState.map((x, index) => tab === index ? !x : false);
    setShow(state)
  }

  return (
    <div className="Billing container">

      <div class="row mt-3" >

        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(0) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + dine_in}> DineIn </Button>
          </a>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={() => { showmodal(1) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + talewayes}> Takeaway</Button>
          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <div>
            <a href="javascript:void(0)" onClick={(e) => { showmodal(2) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >

              <Button size="sm" variant="outline-info" className={" button1 billngbutton " + doordeli}> Door Delivery</Button>

            </a>
          </div>
        </div>

        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(3) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + bbq}> BBQ</Button>

          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(4) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + bbqd}> BBQ with Dinein</Button>

          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(5) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + billr}> Bill Reprint</Button>

          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(6) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton bbutton " + bbqbr}> BBQ Bill Reprint</Button>

          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(7) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton " + bbqwdbq}> BBQ with Dinein Reprint</Button>

          </a>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-12 mb-2" >
          <a href="javascript:void(0)" onClick={(e) => { showmodal(8) }} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
            <Button size="sm" variant="outline-info" className={" button1 billngbutton bbutton " + bbqitemreport}> BBQ Item Report</Button>

          </a>
        </div>


      </div>

      <Collapse in={show[0]}>
        <div class="collapse" id="collapseExample" >
          <div class="row mt-4 ">

            <div class="col-md-6 col-sm-12 col-lg-3" align="center" >
              <div class="card sale">
                <div class="card-body">
                  <Button variant="success" size="sm">GROUND FLOOR/TABLE1</Button>
                  <p class="card-text mt-3">SALES-5354NJHG678</p>




                  <Button variant="danger" size="sm">
                    <i class="bi bi-x-square"></i> Cancel Bill
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>

                </div>

              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" className="payment" onClick={handleShow}>
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>

                </div>

              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>

          </div>
        </div>
      </Collapse>

      <Collapse in={show[1]}>
        <div class="collapse" id="collapseExample" >
          <div class="row mt-4 ">

            <div class="col-md-6 col-sm-12 col-lg-3" align="center" >
              <div class="card sale">
                <div class="card-body">
                  <Button variant="success" size="sm">GROUND FLOOR/TABLE1</Button>
                  <p class="card-text mt-3">SALES-5354NJHG678</p>

                  <Button variant="danger" size="sm">
                    <i class="bi bi-x-square"></i> Cancel Bill
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>

                </div>

              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>

            </div>

          </div>
        </div>
      </Collapse>
      <Collapse in={show[2]}>
        <div class="collapse" id="collapseExample" >
          <div class="row mt-4 ">

            <div class="col-md-6 col-sm-12 col-lg-3" align="center" >
              <div class="card sale">
                <div class="card-body">
                  <Button variant="success" size="sm">GROUND FLOOR/TABLE1</Button>
                  <p class="card-text mt-3">SALES-5354NJHG678</p>

                  <Button variant="danger" size="sm">
                    <i class="bi bi-x-square"></i> Cancel Bill
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>

                </div>

              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      <Collapse in={show[3]}>
        <div class="collapse" id="collapseExample" >
          <div class="row mt-4 ">

            <div class="col-md-6 col-sm-12 col-lg-3" align="center" >
              <div class="card sale">
                <div class="card-body">
                  <Button variant="success" size="sm">GROUND FLOOR/TABLE1</Button>
                  <p class="card-text mt-3">SALES-5354NJHG678</p>
                  <Button variant="danger" size="sm">
                    <i class="bi bi-x-square"></i> Cancel Bill
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>

          </div>
        </div>
      </Collapse>
      <Collapse in={show[4]}>
        <div class="collapse" id="collapseExample" >
          <div class="row mt-4 ">

            <div class="col-md-6 col-sm-12 col-lg-3" align="center" >
              <div class="card sale">
                <div class="card-body">
                  <Button variant="success" size="sm">GROUND FLOOR/TABLE1</Button>
                  <p class="card-text mt-3">SALES-5354NJHG678</p>
                  <Button variant="danger" size="sm">
                    <i class="bi bi-x-square"></i> Cancel Bill
                  </Button>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 col-lg-3 refno mt-4">
              <p>Sales Ref.No:12297</p>
              <div class="row mb-3">
                <div class="col-md-6 col-lg-6 col-sm-12">

                  <Button variant="success " onClick={handleShow} size="sm" className="payment">
                    <i class="bi bi-cash"></i>&nbsp;Payment
                  </Button>
                </div>
                <div class="col-md-6 col-lg-6 col-sm-12">
                  <Button variant="warning" size="sm" className="payment p-1">
                    <i class="bi bi-cash"></i>&nbsp;Rough Tender
                  </Button>
                </div>
              </div>
              <div class="col-12">
                <Link to="/billprint">
                  <Button variant="info" size="sm" onClick={handleClose} className="payment">
                    <i class="bi bi-printer"></i>&nbsp;Bill Print
                  </Button>

                </Link>
              </div>
            </div>

          </div>
        </div>
      </Collapse>
   
      <Collapse in={show[5]}>
      <div className="row">
        <div className="col-3 ">From Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3">To Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3 mt-4">
        <select class="form-select" aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Print</option>
  <option value="2">DntPrint</option>
</select>
        </div>
        <div className="col-3 mt-4">
        <button className="btn btn-warning">Submit</button>
        </div>
       


      </div>
      </Collapse>
      <Collapse in={show[6]}>
      <div className="row">
        <div className="col-3">From Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3">To Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3 mt-4">
        <select class="form-select" aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Print</option>
  <option value="2">DntPrint</option>
</select>
        </div>
        <div className="col-3 mt-4">
        <button className="btn btn-warning">Submit</button>
        </div>
       


      </div>
      </Collapse>
      <Collapse in={show[7]}>
      <div className="row">
        <div className="col-3">From Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3">To Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3 mt-4">
        <select class="form-select" aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Print</option>
  <option value="2">DntPrint</option>
</select>
        </div>
        <div className="col-3 mt-4">
        <button className="btn btn-warning">Submit</button>
        </div>
       


      </div>
      </Collapse>
      <Collapse in={show[8]}>
      <div className="row">
        <div className="col-3">From Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3">To Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3 mt-4">
        <select class="form-select" aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Print</option>
  <option value="2">DntPrint</option>
</select>
        </div>
        <div className="col-3 mt-4">
        <button className="btn btn-warning">Submit</button>
        </div>
       


      </div>
      </Collapse>
      <Collapse in={show[9]}>
      <div className="row">
        <div className="col-3">From Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3">To Date : <input type="date" class="form-control" ></input></div>
        <div className="col-3 mt-4">
        <select class="form-select" aria-label="Default select example">
  <option selected>All</option>
  <option value="1">Print</option>
  <option value="2">DntPrint</option>
</select>
        </div>
        <div className="col-3 mt-4">
        <button className="btn btn-warning">Submit</button>
        </div>
       


      </div>
      </Collapse>
      <Modal
        show={show1}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button >Understood</Button>
        </Modal.Footer>
      </Modal>
    </div>



  );
}

export default Billing;
