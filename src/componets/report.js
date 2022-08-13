import "../styles/report.css";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import {Row,Collapse,Table }from 'react-bootstrap';
import {useState} from "react"

function Reports() {
  const [cdata , setcdata] = useState(new Date().getFullYear()+"/0"+(new Date().getMonth()+1)+"/"+new Date().getDate())

  const [show, setShow] = useState([true, false,false,false,false,false])
  const showmodal = (tab) => {
      const prevState = show;
      const state = prevState.map((x, index) => tab === index ? !x : false);
  
      setShow(state)
  }
  return (
    <div className=" container mt-4">
        
    <div class="row mb-4" >
      <div class="col-lg-2 col-md-3 col-sm-12 " >
                           <a href="javascript:void(0)" onClick={(e)=>{showmodal(0)}} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
   
                           <Button  size="sm" variant="outline-info"className="button1 reportb rbutton "> Today's Report</Button>
   
                           </a>
                       </div>
   
                       <div class="col-lg-2 col-md-3 col-sm-12 " >
                           <a href="javascript:void(0)" onClick={()=>{showmodal(1)}} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
   
                           <Button  size="sm" variant="outline-info"className="button1 reportb rbutton "> Day's Summary</Button>
   
                           </a>
                       </div>
                       <div class="col-lg-2 col-md-3 col-sm-12 " > <a href="javascript:void(0)" onClick={()=>{showmodal(2)}} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
   
                           <Button  size="sm" variant="outline-info"className="button1 reportb  ">  Cashier wise sale report</Button>
   
                           </a></div>
                           <div class="col-lg-2 col-md-3 col-sm-12 " > <a href="javascript:void(0)" onClick={()=>{showmodal(3)}} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
   
                           <Button  size="sm" variant="outline-info"className="button1 reportb  ">  POS Settelement report</Button>
   
                           </a></div>
                           <div class="col-lg-2 col-md-3 col-sm-12 " > <a href="javascript:void(0)" onClick={()=>{showmodal(4)}} data-bs-toggle="collapse" aria-expanded="false" aria-controls="collapseExample" >
   
                           <Button  size="sm" variant="outline-info"className="button1 reportb rbutton ">  Shift wisereport</Button>
   
                           </a></div>
                           </div>
                           <hr/>
   
                           <Collapse in={show[0]}>
   <Row className="report1">
       <Form className="reportform">
         <h5 align="center" className="">Today's Item Wise Sale Report</h5>
         <Row className="mb-3 mt-4">
           <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>From Date</Form.Label>
             <Form.Control type="date" />
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>To Date</Form.Label>
             <Form.Control type="date"  />
           </Form.Group>
         </Row>
   
   
   
         <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>Group</Form.Label>
             <Form.Select defaultValue="Choose...">
               <option>Choose...</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
             </Form.Select>
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>Sub Group</Form.Label>
             <Form.Select defaultValue="Choose...">
               <option>Choose...</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
             </Form.Select>
           </Form.Group>
         </Row>
   
   <Row className="m-0">
         <Button variant="info" type="submit">
           Submit
         </Button>
         </Row>
         <div className='mt-4'> <p class="">Date :&nbsp;{cdata}</p></div>
         <Row className="m-0">
         <Button variant="info" type="submit">
          Print
         </Button>
         </Row>
       </Form>
    </Row>
   </Collapse>
   
   <Collapse in={show[1]}>
   <Row className="report1">
       <Form className="reportform">
         <h5 align="center" className="">Today's Summary</h5>
         <Row className="mb-3 mt-4">
           <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>From Date</Form.Label>
             <Form.Control type="date" />
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>To Date</Form.Label>
             <Form.Control type="date"  />
           </Form.Group>
         </Row>
   
   
   
         <Row className="m-0">
         <Button variant="info" type="submit">
           Submit
         </Button>
         </Row>
   
         
         <div className='mt-1'> 
         <p>Day's Summary</p>
         
         <p class="">Date :&nbsp;{cdata}</p></div>
    
       <Table  bordered hover>
   
         
         <tbody>
           <tr>
            
             <td>Days Summary</td>
             <td>{cdata}</td>
            
           </tr>
           <tr>
            
            <td>Total Bills</td>
            <td>$ 0.00</td>
   
           
          </tr>
          <tr>
            
            <td>Cross Sales</td>
            <td>$ 0.00</td>
   
           
          </tr>
          <tr>
            
            <td>Discount</td>
            <td>$ 0.00</td>
   
           
          </tr>
          <tr>
            
            <td>Tax</td>
            <td>$ 0.00</td>
   
           
          </tr>
   
          <tr>
             <td colSpan={2}>Payment Type Report</td>
             
           </tr>
           <tr>
             <td>Net Sales</td>
             <td>$ 0.00</td>
             
           </tr>
          
         </tbody>
       </Table>
    
   
         <Row className="m-0">
         <Button variant="info" type="submit">
          Print
         </Button>
         </Row>
       </Form>
    </Row>
   </Collapse>
      
   <Collapse in={show[2]}>
   <Row className="report1">
       <Form className="reportform">
         <h5 align="center" className="">Cashier Wise Sale Report</h5>
         <Row className="mb-3 mt-4">
           <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>From Date</Form.Label>
             <Form.Control type="date" />
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>To Date</Form.Label>
             <Form.Control type="date"  />
           </Form.Group>
         </Row>
   
   
   
         
   
   <Row className="m-0">
         <Button variant="info" type="submit">
           Submit
         </Button>
         </Row>
         <div className='mt-4'> <p class="">Date :&nbsp;{cdata}</p></div>
         <div className='mt-4'> <p class="">Grand Total : $0.00</p></div>
   
         <Row className="m-0">
         <Button variant="info" type="submit">
          Print
         </Button>
         </Row>
       </Form>
    </Row>
   </Collapse>
   <Collapse in={show[3]}>
   <Row className="report1">
       <Form className="reportform">
         <h5 align="center" className="">POS Settelement Report</h5>
         <Row className="mb-3 mt-4">
           <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>From Date</Form.Label>
             <Form.Control type="date" />
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>To Date</Form.Label>
             <Form.Control type="date"  />
           </Form.Group>
         </Row>
   
   
   
   
   <Row className="m-0">
         <Button variant="info" type="submit">
           Submit
         </Button>
         </Row>
         <div className='mt-4 ' > 
         <span class="">From :&nbsp;{cdata}</span>&nbsp;&nbsp;
         <span class="">To :&nbsp;{cdata}</span>
         </div>
   
        
       <Table striped className="mt-3">
         <thead>
           <tr>
             Order Wise
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>Total Transaction</td>
             <td>1</td>
           
           </tr>
           <tr>
             <td>Net Total</td>
             <td>$0.00</td>
            
           </tr>
           <tr>
           
             <td colSpan={2}>Payment Mode Reports</td>
             
           </tr>
           <tr>
             <td>Exchange</td>
             <td>$0.00</td>
            
           </tr>
         </tbody>
       </Table>
     
         <Row className="m-0">
         <Button variant="info" type="submit">
          Print
         </Button>
         </Row>
       </Form>
    </Row>
   </Collapse> 
   <Collapse in={show[4]}>
   <Row className="report1">
       <Form className="reportform">
         <h5 align="center" className="">Shift Wise Report</h5>
         <Row className="mb-3 mt-4">
           <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>From Date</Form.Label>
             <Form.Control type="date" />
           </Form.Group>
   
           <Form.Group as={Col} controlId="formGridTodate">
             <Form.Label>To Date</Form.Label>
             <Form.Control type="date"  />
           </Form.Group>
         </Row>
   
   
   
         <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridFromdate">
             <Form.Label>Shift Time</Form.Label>
             <Form.Select defaultValue="Choose...">
               <option>ALL</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
               <option>Choose...</option>
               <option>...</option>
             </Form.Select>
           </Form.Group>
   
          
         </Row>
         <hr/>
   
   <Row className="m-0">
         <Button variant="info" type="submit">
           Submit
         </Button>
         </Row>
         <div className='mt-4'> <p class="">Date :&nbsp;{cdata}</p></div>
         <Row className="m-0">
         <Button variant="info" type="submit">
          Print
         </Button>
         </Row>
       </Form>
    </Row>
    
   </Collapse>
      
      </div>
    // <div className="Billing mt-4">
    //   <div className="reports">
    //     <h4 className="modal-title text-uppercase" id="myModalLabel">
    //       Report View Access
    //     </h4>
    //     <div className="modal-body mt-3">
    //       <div className="form-group">
    //         <label for="pass_code ">Pass Code</label>
    //         <input
    //           type="password"
    //           className="mt-1 form-control kb-pad ui-keyboard-input ui-widget-content ui-corner-all ui-keyboard-autoaccepted"
    //           id="pass_code"
    //           name="pass_code"
    //           value=""
    //           aria-haspopup="true"
    //           role="textbox"
    //         />
    //       </div>
    //     </div>
    //     <div className="modal-footer mt-5 border-top">
    //       <input
    //         type="submit"
    //         name="submit"
    //         value=" Submit"
    //         className="btn btn-primary submit mt-2"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Reports;
