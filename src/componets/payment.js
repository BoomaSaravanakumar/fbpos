import React from "react";
import Table from 'react-bootstrap/Table';
import "../styles/payment.css";
// import FontAwesomeIcon from "react-fontawesome";
// import 'font-awesome/css/font-awesome.min.css';
import User from'../images/user.jpg'
function Payment() {
  return (
    <div className="pay container">
        
      <div className="row pt-4">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="card">
            <div className="orderid">
                <h5>ORDER ID #0986444</h5>
               <div className="row">
               <div  className="col-md-6 small">Vingent Lobo</div>
               <div  className=" col-md-6 small" align="right">DineIn T-43</div>
               </div>
            </div>
            <div className="card-body">
            <Table striped>
    
      <tbody>
        <tr>
          <td>1</td>
          <td>Shezwan Egg Noodles</td>
          <td align="right">$23.05</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td >Jacob<br></br>
            <small  className="smalltext">Medium- Half Girilled</small>
          </td>
          <td align="right">$12.04<br></br>
            <small className="smalltext">5% Disc</small></td>
         
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td align="right">$22.00</td>
        </tr>
      </tbody>
    </Table>
            </div>
            <div className="row    stotal" >
                <div className="col-md-6 pt-0 pb-0" style={{padding:"35px"}}>
                    <p>Subtotal</p>
                    <p>Tax</p>
                    <p>Discount</p>
                    <h6>Grand Total</h6>
                    

                </div>
                <div className="col-md-6 pt-0 pb-0" align="right"style={{padding:"35px"}}>
                     <p>$200.00</p>
                    <p>$23.09</p>
                    <p>-$10.00</p>
                    <h6>$195.00</h6>
                    </div>
            </div>
            <div className="row m-3  pt-2 mt-0 pb-0 credit" style={{background:"#f2f2f2"}}>
            <div className=" col-md-6 ">
              <p className="">Credit</p>
              <p>Balance</p>
            </div>
            <div className=" col-md-6" align="right">
               <p>$230.00</p>
              <p>-$5.00</p>
              </div>
       
          </div>
          <div className="row  p-4 pt-1">
            <button className="btn  p-2 btn_bg" >
              {/* <FontAwesomeIcon icon="fa-solid fa-credit-card" /> */}
              Confirm Payment</button>
          </div>
          </div>
      
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="card ">
            <div className="row">
            <div className="col-md-5 p-4"><h5>Payable Amount</h5>
            <span>$435.00</span>
            </div>
            <div className="col-md-2 p-4">
            <img src={User} style={{width:"55px"}}/>
            </div>
            <div className="col-md-5 pt-4">
              <h5>Vingent Lobo</h5>
            <span>#5656GT5</span>
            </div>
            </div>
          </div>
          <div className="card p-4 mt-4">
           <h5>Cash</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
