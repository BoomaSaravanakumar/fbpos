import '../styles/dinein.css';
import Chair from "../images/chair.png"
import { Link } from "react-router-dom";

function Dinein() {
    return (
        <div className="Dinein mt-3">
            <div class="container-fluid">
                <div className="colom">
                    <div className="col-12">
                        <div class="mb-1 dinefloors">
                            <label type="text" id="disabledTextInput" class="form-control bg-light" placeholder="Disabled input">
                                GROUD FLOOR&nbsp;

                                <i class="text-success check bi bi-circle-fill"></i>
            <span className="check text-success"> AVAILABLE</span>&nbsp;&nbsp;
            <i class="text-danger check bi bi-circle-fill"></i>
            <span className="check1 text-danger"> NOT AVAILABLE</span>
                            </label>
                        </div>
                    </div>
                    <div className="col-12">

                        <div className="row" >
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to='/menu/dinein' state={{table:"Table 1"}}>
                                    <div class="card  dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 1</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 2"}}>
                                    <div class="card dine_table not-avilable">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center text-dark'>Table 2</small>
                                        <p className='text-center text-danger mb-0'>Not Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 3"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 3</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/dashboard" state={{table:"Table 4"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 4</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                       

                        </div>
                    </div>
                </div>
                <div className="colom mt-3 mb-2">
                    <div className="col-12">
                        <div class="mb-1 dinefloors">
                            <label type="text" id="disabledTextInput" class="form-control bg-light" placeholder="Disabled input">
                                FIRST FLOOR&nbsp;
                                {/* <i class="bi bi-check-circle check text-success"></i>&nbsp;&nbsp;
            <span className="check text-success">Available</span>&nbsp;&nbsp;
            <i class="bi bi-x-circle check1 text-danger"></i>&nbsp;&nbsp;
            <span className="check1 text-danger">Not Available</span> */}
                        </label>
                        </div>
                    </div>
                    <div className="col-12">

                    <div className="row" >
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 1"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 1</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 2"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 2</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 3"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 3</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-3 col-lg-2 col-sm-12 dieine">
                                <Link to="/menu/dinein" state={{table:"Table 4"}}>
                                    <div class="card dine_table available">
                                        <img src={Chair} class="card-img-top" alt="..." />
                                        <small className='text-center'>Table 4</small>
                                        <p className='text-center text-success mb-0'>Available</p>
                                    </div>
                                </Link>
                            </div>
                       

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dinein;
