import PageTitle from "../PageTitle";
import AdminHome from "./AdminHome";
import DataTable from "./DataTable";
import { PieChart, Pie } from 'recharts';

export default function UserHome() {
    let familyMembersHeaders = ["FID", "Ancestor", "Project", "Property", "% comes"]
    let trailsHearders = ["TID", "FID", "No of acres", "Expenses Spent"]
    let projectHeaders = ["PID", "Pname", "Ptype", "Expenses"]
    const data = [
        { name: 'Geeksforgeeks', students: 6 },
        { name: 'Technical scripter', students: 31 },
        { name: 'Geek-i-knack', students: 44 },
        { name: 'Geek-o-mania', students: 19 }
    ];
    return (
        <>

            <div className="container p-5">
                <PageTitle name="USER LOGIN" />
                <DataTable headers={familyMembersHeaders} data={[[15, "", "accord", "2009", "$500"]]} name="Family Members" />
                <DataTable headers={trailsHearders} data={[[20, 16, 6, "$500"]]} name="Trails" />
                <DataTable headers={projectHeaders} data={[[15, "", "facebook", "$200"]]} name="Projects" />
                <div className="row align-items-center">
                    <p>Expenses</p>
                <PieChart width={200} height={200}>
                    <Pie data={data} dataKey="students" outerRadius={100} fill="grey" />
                </PieChart>
                </div>
                
            </div>



        </>
    )
}