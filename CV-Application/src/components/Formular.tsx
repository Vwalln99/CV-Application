import { FormEvent, useState, ChangeEvent } from "react";
import FormViewPersonal from "./FormViewPersonal";

export default function InputForm() {
  // State
  const [userData, setUserData] = useState({
    firstName: "",
    lastname: "",
    birthDate: "",
    address: "",
    zipcode: "",
    location: "",
    email: "",
    telNum: "",
  });

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

  const isFormValid = () => {
    for (const key in userData) {
      if (userData[key] === "") {
        return false;
      }
    }
    return true;
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (isFormValid()) {
      setShowForm(false);
    } else {
      alert("Please fill out all fields before submitting the form.");
    }
  };

  return (
    <>
      {showForm && (
        <form onSubmit={(e) => handleSubmit(e)} className="formF">
          <div style={paddingStyle}>
            <label style={blockStyle}>First Name</label>
            <input
              type="text"
              value={userData.firstName}
              onChange={(e) => handleInputChange(e, "firstName")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Last Name</label>
            <input
              type="text"
              value={userData.lastname}
              onChange={(e) => handleInputChange(e, "lastname")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Birthdate</label>
            <input
              type="date"
              value={userData.birthDate}
              onChange={(e) => handleInputChange(e, "birthDate")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Address</label>
            <input
              type="text"
              value={userData.address}
              onChange={(e) => handleInputChange(e, "address")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Zipcode</label>
            <input
              type="number"
              value={userData.zipcode}
              onChange={(e) => handleInputChange(e, "zipcode")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Location</label>
            <input
              type="text"
              value={userData.location}
              onChange={(e) => handleInputChange(e, "location")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>E-Mail</label>
            <input
              type="email"
              value={userData.email}
              onChange={(e) => handleInputChange(e, "email")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Mobile Phone</label>
            <input
              type="number"
              value={userData.telNum}
              onChange={(e) => handleInputChange(e, "telNum")}
            ></input>
          </div>
          <button type="submit">Save</button>
        </form>
      )}

        <div className="formattedData" id="formular" contentEditable>
          <FormViewPersonal formDataPersonal={userData} />
        </div>
    </>
  );
}
