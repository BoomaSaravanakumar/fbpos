import Table from "../images/chair.png";
import '../styles/bbq.css';
import {Row,Col} from "react-bootstrap"
import {Link} from "react-router-dom"

function BBQ() {
  return (
    <div className="container-fluid mt-3">
    
        <div className="colum well" >
            <label className="">GROUND FLOOR &nbsp;&nbsp;
            <i class="text-success check bi bi-circle-fill"></i>
            <span className="check text-success"> AVAILABLE</span>&nbsp;&nbsp;
            <i class="text-danger check bi bi-circle-fill"></i>
            <span className="check1 text-danger"> NOT AVAILABLE</span>
            </label>
        </div>
        <Row className="mt-1 ">
        <Col lg={1} md={2} sm={3} className="tablelist ">
            <Link to="/menu/bbq" state={{table:"Table 1"}} >
            <div className='not-available card bbq_tablelist '>
                <img src={Table}></img>
                <p>Table 1</p>
                <span className="text-danger">Not Available</span>
            </div></Link>
          
            </Col>
         <Col lg={1} md={2} sm={3} className="tablelist">
            
         <Link to="/menu/bbq" state={{table:"Table 2"}} >
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 2</p>
                <span className="text-success"> Available</span>

                
            </div>
            </Link>
            </Col> 
         <Col lg={1} md={2} sm={3} className="tablelist">
            
         <Link to="/menu/bbq" state={{table:"Table 3"}} >
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 3</p>
                <span className="text-success"> Available</span>


            </div>
            </Link>
            </Col>
          <Col lg={1} md={2} sm={3} className="tablelist">
            
          <Link to="/menu/bbq" state={{table:"Table 4"}} >
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 4</p>
                <span className="text-danger">Not Available</span>


            </div>
            </Link>
            </Col>
 </Row>
 <div className="mt-4 colum well">
 <label className="">FIRST FLOOR &nbsp;&nbsp;
            {/* <i class="text-success check bi bi-circle-fill"></i>
            <span className="check text-success">Available</span>&nbsp;&nbsp;
            <i class="text-danger check bi bi-circle-fill"></i>
            <span className="check1 text-danger">Not Available</span> */}
            </label>
        </div>
        <Row className="mt-1">
        <Col lg={1} md={2} sm={3} className="tablelist">
        <Link to="/menu/bbq" state={{table:"Table 1"}} >
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 1</p>
                <span className="text-danger">Not Available</span>
            </div>
            </Link>
            </Col>
         <Col lg={1} md={2} sm={3} className="tablelist">
         <Link to="/menu/bbq" state={{table:"Table 2"}} >
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 2</p>
                <span className="text-success"> Available</span>

                
            </div>
            </Link>
            </Col> 
         <Col lg={1} md={2} sm={3} className="tablelist">
         <Link to="/menu/bbq" state={{table:"Table 3"}} >
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 3</p>
                <span className="text-danger">Not Available</span>

            </div>
            </Link>
            </Col>
            <Col lg={1} md={2} sm={3} className="tablelist">
            <Link to="/menu/bbq" state={{table:"Table 4"}} >
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 4</p>
                <span className="text-danger">Not Available</span>

            </div>
            </Link>
            </Col>
 </Row>
 <div className="mt-4 colum well">
 <label className="">SECOND FLOOR &nbsp;&nbsp;
            {/* <i class="text-success check bi bi-circle-fill"></i>
            <span className="check text-success">Available</span>&nbsp;&nbsp;
            <i class="text-danger check bi bi-circle-fill"></i>
            <span className="check1 text-danger">Not Available</span> */}
            </label>
        </div>
        <Row className="mt-1">
        <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 1</p>
                <span className="text-danger">Not Available</span>
            </div>
            </Col>
         <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 2</p>
                <span className="text-success"> Available</span>

                
            </div>
            </Col> 
         <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 3</p>
                <span className="text-danger">Not Available</span>

            </div>
            </Col>
          <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 3</p>
                <span className="text-success"> Available</span>

            </div>
            </Col>
          <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist bavailable '>
                <img src={Table}></img>
                <p>Table 4</p>
                <span className="text-success"> Available</span>

            </div>
            </Col> 
            <Col lg={1} md={2} sm={3} className="tablelist">
            <div className=' card bbq_tablelist not-available '>
                <img src={Table}></img>
                <p>Table 5</p>
                <span className="text-danger">Not Available</span>

            </div>
            </Col>
          
 </Row>
 </div>
  );
}

export default BBQ;
