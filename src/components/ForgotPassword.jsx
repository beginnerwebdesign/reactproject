import PageTitle from "../PageTitle";
import { TextField, Button,FormControl } from "@mui/material";
import DataTable from "./DataTable";
import Queries from "./Queries";

export default function ForgotPassword() {
    return (
        <>
                <div className="container text-center p-5">
                    <PageTitle name="Forgot Password" />
                    <p>Let us help you.That's okay it happens!enter your email id below and click the submit button.</p>
                    <form>
                    <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <Button type="submit" variant="contained" style={{ 'backgroundColor': "#525b69" }} > Submit </Button>
                        </div>
                    </form>
       </div>
        </>
    )
}