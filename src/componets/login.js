import '../styles/login.css';
import { Link } from "react-router-dom";
import {useEffect, useRef,useState} from "react"
import Keyboard from "react-simple-keyboard";
import inputMask from "simple-keyboard-input-mask";
import "react-simple-keyboard/build/css/index.css";


function Login() {

    const [layoutName,setlayoutname] = useState("default")
    const [input,setinput] = useState("")
    const wrapperRef = useRef(null);
    const [cdata , setcdata] = useState(new Date().getDate()+"/0"+(new Date().getMonth()+1)+"/"+new Date().getFullYear())
    const [konfocus,setkonf] = useState("d-none")
    
     const onChange = (input) => {
        setinput(input)
      };
    
     const onKeyPress = (button) => {
        if (button ==="{enter}"){
            setkonf("d-none")
        }
        /**
         * If you want to handle the shift and caps lock buttons
         */
        //if (button === "{shift}" || button === "{lock}") this.handleShift();
      };
    
 
    
useEffect(()=>{
        document.title = "POS Login Srampos"
        document.addEventListener("click", handleClickOutside, false);
        return () => {
        document.removeEventListener("click", handleClickOutside, false);
        };
    },[])
    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setkonf("d-none");
        }
      };
    return (
        <div className="container login" >
          
     
            <div className="row h-100">
                <div className="col-md-6 col-sm-12 image"  >
                </div>
                <div className="col-md-5 col-sm-12 image2 m-auto" >
                        <h2 className='loginform text-center'>Enter Your Password</h2>
                        <div className='text-end'><button className="btn btn-success btn-sm pull-right">{cdata}</button></div>
                        <form>
                            <div className="form-group" ref={wrapperRef}> <input onFocus={()=>{setkonf("")}} onChange={(e)=>{setinput(e.target.value)}} value={input}  type="text" className="form-control" id="formGroupExampleInput" placeholder="Password" />
                            
                            <div className={'vkeyboard ' +konfocus}   >
            <input
          value={input}
          placeholder={"(99) 9999-9999"}
          className="d-none"
        />
             <Keyboard 
        
          theme={"hg-theme-default hg-layout-numeric numeric-theme"}
          layoutName={layoutName}
          onChange={input => onChange(input)}
          onKeyPress={button => onKeyPress(button)}
          disableCaretPositioning={true}
          layout={{
            default: ["1 2 3", "4 5 6", "7 8 9", "{//} 0 {//}", "{bksp}","{enter}"],
            shift: ["! / #", "$ % ^", "& * (", "{shift} ) +", "{bksp}"]
          }}
          inputMask={"(99) 9999-9999"}
          modules={[inputMask]}
        />
            </div>
                            </div>
                            <div className="form-group mt-4">
                                <select className="form-select form-control selectbox " aria-label="Default select example">
                                    <option selected>Select Group</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select> </div>
                            <div className="form-group mt-4">
                                <select className="form-select form-control selectbox " aria-label="Default select example">
                                    <option selected>Select Group</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select></div>
                            <div className='from-group mt-4'>
                                <button type="reset" className="btn  btn-danger pull-left"> Reset <i className="bi bi-arrow-clockwise resrticon"></i></button>
                                <Link className='float-right' to="/dashboard"><button type="submit" className="btn btn-success float-right pull-right"> Login <i className="bi bi-box-arrow-in-right"></i></button></Link>

                            </div>
                        </form>

                    
                </div>
            </div>
        </div>
    );
}

export default Login;
