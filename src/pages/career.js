import { CareerItem } from "../career-item";

export const Career = () => {
    return (
    <div className = "flex flex-col gap-3 p-3">
    <CareerItem title="Memer" department = "UI/UX Design"  level="Experienced"
    onEdit={()=> alert("Editing First Item")}
    /> 
    <CareerItem title="Slack Chatter" department="Slack Chatter" level="Entry"
    onEdit={()=> alert("Editing Slack Chatter Item")}
    /> 
    <CareerItem title="Janitor" department="Health/Welfare" level="Experienced"
    onEdit={()=> alert("Editing Janitor Item")}
    /> 
    <CareerItem title="Github Issue Commentor" department="Engineering" level="Internship" studentFriendly = "{true}"
    onEdit={()=> alert("Editing Last Item")}
    /> 
    
    </div>)
}