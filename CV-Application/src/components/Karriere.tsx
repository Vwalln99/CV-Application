import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import FormViewCareer from "./FormViewCareer";
import TUserData from "./Interfaces";

export default function InputFormCareer() {
  // State
  const [userData, setUserData] = useState({
    jobName: "",
    position: "",
    jobDescripton: "",
    startDate: "",
    endDate: "",
  });
  const [entries, setEntries] = useState<TUserData[]>([]);
  const [showForm, setShowForm] = useState(true);

  // Style
  const blockStyle = {
    display: "block",
  };
  const paddingStyle = {
    padding: "10px",
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    setUserData({ ...userData, [type]: e?.target?.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEntries([...entries, userData]);
    setUserData({
      jobName: "",
      position: "",
      jobDescripton: "",
      startDate: "",
      endDate: "",
    });
    setShowForm(false);
  };
  

  const handleEdit = (index: number) => {
    setUserData(entries[index]);
    setShowForm(true);
  };

  const handleRemove = (index: number) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };

  return (
    <>
      {showForm && (
        <form onSubmit={(e) => handleSubmit(e)}className="formK">
          <div style={paddingStyle}>
            <label style={blockStyle}>Job name</label>
            <input
              type="text"
              value={userData.jobName}
              onChange={(e) => handleInputChange(e, "jobName")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Position</label>
            <input
              type="text"
              value={userData.position}
              onChange={(e) => handleInputChange(e, "position")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Job description</label>
            <input
              type="text"
              value={userData.jobDescripton}
              onChange={(e) => handleInputChange(e, "jobDescripton")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Start of Job</label>
            <input
              type="date"
              value={userData.startDate}
              onChange={(e) => handleInputChange(e, "startDate")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>End of Job</label>
            <input
              type="date"
              value={userData.endDate}
              onChange={(e) => handleInputChange(e, "endDate")}
            ></input>
          </div>
          <button type="submit">Save</button>
        </form>
      )}
       <div className="formattedData" id="karriere">
        {entries.map((entry, index) => (
          <div key={index} className="key" >
            <FormViewCareer formDataCareer={entry} />
            <button type="button" onClick={() => handleRemove(index)}>
              -
            </button>
            <button type="button" onClick={() => handleEdit(index)}>
              +
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
