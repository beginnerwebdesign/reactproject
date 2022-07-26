import { TextField } from "@mui/material"
export default function UpdateDetails() {
    return (
        <>
            
                <div className="container p-5">
                    <div className="row">
                    <div className="col-5">
                        <div className="row align-items-center m-3">
                            Update Family Details
                        </div>
                        <div className="row align-items-center m-3">
                            <div className="col-5">
                                <label style={{ fontWeight: "bold" }}>FID :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your FID" variant="outlined" size='small' />
                            </div>
                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>Fancestor  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your Fancestor" variant="outlined" size='small' />
                            </div>

                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>Project   :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your Project " variant="outlined" size='small' />
                            </div>

                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>Property   :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your Property" variant="outlined" size='small' />
                            </div>

                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="row"></div>
                            Update Trail Details
                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>TID  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your TID" variant="outlined" size='small' />
                            </div>

                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>FID  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your FID" variant="outlined" size='small' />
                            </div>

                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>No of acres  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label=" Enter Input" variant="outlined" size='small' />
                            </div>

                        </div>
                    </div>
                    <div className="col-5 offset-1">
                        <div className="row align-items-center m-3">
                            Update Project Details
                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>PID  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your PID" variant="outlined" size='small' />
                            </div>
                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>Pname  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your Pname" variant="outlined" size='small' />
                            </div>
                        </div>
                        <div className="row align-items-center m-3 ">
                            <div className="col-5">
                                <label>Ptype  :</label>
                            </div>
                            <div className="col-7">
                                <TextField id="outlined-basic" label="Your Ptype" variant="outlined" size='small' />
                            </div>
                        </div>

                    </div>

                    </div>
                    
                </div>

          
        </>
    )

}