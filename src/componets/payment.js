import React from "react";
import Table from 'react-bootstrap/Table';
import "../styles/payment.css";
import User from'../images/user.jpg';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Keyboard from "react-simple-keyboard";
import inputMask from "simple-keyboard-input-mask";
import "react-simple-keyboard/build/css/index.css";
import {useEffect, useRef,useState} from "react";

function Payment() {
  
  const [layoutName,setlayoutname] = useState("default")
  const [input,setinput] = useState("")
  const wrapperRef = useRef(null);
  const [cdata , setcdata] = useState(new Date().getDate()+"/0"+(new Date().getMonth()+1)+"/"+new Date().getFullYear())
  const [konfocus,setkonf] = useState("d-none")
  const onChange = (inputs) => {
    console.log(inputs)
      if(inputs=="Cancel"){
        setinput("")
      }else{
        setinput(inputs)
      }
      

  };

 const onKeyPress = (button) => {
    if (button ==="{enter}"){
        setkonf("d-none")
    }else if(button == "Cancel"){
      setinput("")
    }else if(button=="{bksp}"){
      setinput(input.slice(0,input.length-1))
    }else{
      setinput(input+""+button)
    }
  }
  return (
    <div className="pay container-fluid">
        
      <div className="row p-4">
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
            <i class="bi bi-credit-card-2-back"></i>  Confirm Payment</button>
          </div>
          </div>
      
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 cash">
          <div className="card ">
            <div className="row ">
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
          <div className="card p-4 mt-4 pt-1 pb-1">
           

    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Cash">
        <div className="row m-1 ">
          <div className="p-0 mb-3" ref={wrapperRef}>
             <input onFocus={()=>{setkonf("")}} onChange={(e)=>{setinput(e.target.value)}} value={input}  type="text" className="billscreen  col-md-12 " id="formGroupExampleInput" />

          </div>
          <Keyboard 
            
            theme={"hg-theme-default hg-layout-numeric numeric-theme"}
            layoutName={layoutName}
            
            onKeyPress={button => onKeyPress(button)}
            disableCaretPositioning={true}
            
            layout={{
              default: ["1 2 3", "4 5 6", "7 8 9", "00 0 {bksp}", ". Cancel",],
              // shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
            }}
            inputMask={"(99) 9999-9999"}
            modules={[inputMask]}
            keyboardRef={r => (console.log(r))}
            display={{
              '{bksp}': 'X'
             
            }}
          />
        </div>
      </Tab>     
      <Tab eventKey="contact" title="Other Modes" >
       Card
      </Tab>
    </Tabs>
 
  
          </div>
        </div>
      </div>
    </div>
  );
}
export default Payment;
