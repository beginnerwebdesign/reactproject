import { Button } from "@mui/material";
import PageTitle from "../PageTitle";
import { useNavigate } from "react-router-dom";
function Home() {
    let navigate=useNavigate();
    return (
        <>
            <div className="homeImage">
                <div className="container p-5">
                    <div className="row">
                        <div className="col-6 offset-6">
                            <PageTitle name="Diaz-Sifonte's Site management" />
                            <p>
                                This site would be able to manage Diaz-Silontes's
                                family projects,property, trials,groups etc...you can
                                also find what percentage goes to each family when
                                a property is sold.
                            </p>
                            <Button onClick={e=>navigate("/about")}>Learnmore</Button>
                        </div>
                    </div>
                </div>
                </div>
                
           
        </>

    );
}
export default Home;