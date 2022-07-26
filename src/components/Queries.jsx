import { FormControl } from "@mui/material"
import {TextField} from "@mui/material"
import {Button} from "@mui/material"
export default function Queries()
{
    return(
        <>
    
            <div className="container p-5">
                <div className="row">
                    <div className="col-8">
                        <div className="row align-items-center">
                            <h5>Send Us Your Questions</h5>
                        </div>
                        <div className="row align-items-center">
                            <p>We will have a specialist to follow you up with an email as soon as we can</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <form>
                    <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Your First Name" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Your Last Name" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Your Email" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Enter query" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <Button type="submit" variant="contained" style={{ 'backgroundColor': "#525b69" }} > Submit </Button>
                        </div>
                        </form>
                    </div>
                </div>

            </div>
     
        </>
    )
}