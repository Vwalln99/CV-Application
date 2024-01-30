
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import FormViewCareer from "./FormViewCareer";


export default function InputFormCareer(){
  
    //State
    const [userData, setUserData]=useState({
        jobName:"",
        position:"",
        jobDescripton:"",
        startDate:"",
        endDate:"",
    });
    //Style
    const blockStyle={
        display:"block",
    };
    const paddingStyle={
        padding: "10px",
    };


    const handleInputChange=(
        e: ChangeEvent<HTMLInputElement>,
            type:string               
        ) => {
            setUserData({...userData, [type]:e?.target?.value});
    };
    const handleSubmit=(e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(userData);
    };

    return(
        <>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <div style={paddingStyle}>
                <label style={blockStyle}>Job name</label>
                <input type="text" value={userData.jobName}
                onChange={(e)=>handleInputChange(e,"jobName")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Position</label>
                <input type="text" value={userData.position}
                onChange={(e)=>handleInputChange(e,"position")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Job description</label>
                <input type="text" value={userData.jobDescripton}
                onChange={(e)=>handleInputChange(e,"jobDescripton")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Start of Job</label>
                <input type="date" value={userData.startDate}
                onChange={(e)=>handleInputChange(e,"startDate")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>End of Job</label>
                <input type="date" value={userData.endDate}
                onChange={(e)=>handleInputChange(e,"endDate")}></input>
            </div>
          
           
        </form>
        <div className="formattedData">
        <FormViewCareer formDataCareer={userData} />
        </div>
        </>
    );
}