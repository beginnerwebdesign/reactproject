import { Link } from "react-router-dom";
import PageTitle from "../PageTitle";
import DataTable from "./DataTable";

export default function AdminHome()
{
    return(
        <>
       
            <div className="container p-5">
                <PageTitle name="ADMIN" />
                <DataTable headers={['FID','Ancestor','Project','Property','%comes']} data={[[13,'','Accord','2009','$500']]} name='Family members' />
                <DataTable headers={['TID','FID','No of acres','expenses spent']} data={[[20,16,6,'$500']]} name='Trails' />
                <DataTable headers={['PID','Pname','Ptype','expenses']} data={[[15,'','facebook','200$']]} name='Projects' />
                <Link to='/updatedetails' style={{color:'black'}}> Edit</Link>

            </div>
     
        </>
    )
}