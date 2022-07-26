import { Link } from "react-router-dom";

export default function Faq()
{
    return(
        <>
    
            <div className="container p-5">
                <div className="row align-items-center">
                    <div className="col-6">
                        <h3>Frequently Asked Questions</h3>
                    </div>

                </div>
                <div className="row align-items-center">
                    <div className="col-8 offset-1">
                        <p>Who is ---------------?</p>
                        <p>What projects is __________ working on?</p>
                        <p>What land belongs to________when land ________is sold?</p>
                        <p>How much to pay _______when land_____is sold?</p>
                        <p>What were the ________ related to it?</p>
                    </div>
                    <div className="col-8 offset-2">
                        <p>Have a query?<Link to="/queries" style={{color:'black'}}>Click here</Link></p>
                    </div>
                </div>

            </div>
   
        </>
    )

}