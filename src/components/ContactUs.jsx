import PageTitle from "../PageTitle";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Link } from "react-router-dom";

export default function ContactUs() {
    return (
        <>
          
                <div className="container py-5">
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-4 m-lg-3'>
                            <h3 className='text-center'>CONTACT US <i class="bi bi-telephone-fill"></i></h3>

                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-3">
                            <form>
                                <div className="row p-2">
                                    <FormControl>
                                        <TextField id="outlined-basic" label="your name" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="row p-2">
                                    <FormControl>
                                        <TextField id="outlined-basic" label="Email id" variant="outlined" size='small' />
                                    </FormControl>
                                </div>
                                <div className="row p-2">
                                    <TextField
                                        label="Enter your message here"
                                        multiline
                                        rows={7}
                                        maxRows={10}
                                    />
                                </div>
                                <div className="row p-2">
                                    <Link to="/faq" style={{ color: 'black' }}>Frequently Asked Questions</Link>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
     
        </>
    )
}