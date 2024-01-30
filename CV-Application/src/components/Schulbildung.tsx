
import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import FormViewSchool from "./FormViewSchool";

export default function InputFormEducation(){
    
    //State
    const [userData, setUserData]=useState({
        schoolName:"",
        subject:"",
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
                <label style={blockStyle}>School name</label>
                <input type="text" value={userData.schoolName}
                onChange={(e)=>handleInputChange(e,"schoolName")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>Subject</label>
                <input type="text" value={userData.subject}
                onChange={(e)=>handleInputChange(e,"subject")}></input>
            </div>
            <div style={paddingStyle}>
                <label style={blockStyle}>End of education</label>
                <input type="date" value={userData.endDate}
                onChange={(e)=>handleInputChange(e,"birthDate")}></input>
            </div>
           
        </form>
        <div className="formattedData">
        <FormViewSchool formDataSchool={userData} />
        </div>
        </>
        
    );
}