import { FormEvent, useState } from "react";
import { ChangeEvent } from "react";
import FormViewSchool from "./FormViewSchool";
import SUserData from "./Interface";

export default function InputFormEducation() {
  // State
  const [userData, setUserData] = useState({
    schoolName: "",
    subject: "",
    endDate: "",
  });
  const [entries, setEntries] = useState<SUserData[]>([]);
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
      schoolName: "",
      subject: "",
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <div style={paddingStyle}>
            <label style={blockStyle}>School name</label>
            <input
              type="text"
              value={userData.schoolName}
              onChange={(e) => handleInputChange(e, "schoolName")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>Subject</label>
            <input
              type="text"
              value={userData.subject}
              onChange={(e) => handleInputChange(e, "subject")}
            ></input>
          </div>
          <div style={paddingStyle}>
            <label style={blockStyle}>End of education</label>
            <input
              type="date"
              value={userData.endDate}
              onChange={(e) => handleInputChange(e, "endDate")}
            ></input>
          </div>
          <button type="submit">Save</button>
        </form>
        )}
        <div className="formattedData" id="school">
          {entries.map((entry, index) => (
            <div key={index}>
              <FormViewSchool formDataSchool={entry} />
              <button type="button" onClick={() => handleRemove(index)}>
                Remove
              </button>
              <button type="button" onClick={() => handleEdit(index)}>
                Edit
              </button>
            </div>
          ))}
        </div>
    </>
  );
}
