
import InputForm from './components/Formular'
import InputFormEducation from './components/Schulbildung'
import InputFormCareer from './components/Karriere'
import "./App.css";

function App() {
  
const paddingStyle={
    padding: "10px",
};

const btnStyle={
    padding:"10px",
    backgroundColor: "#add8e6",
    border:"none",
    borderRadius:"3px",
};


  return (
    <>
    <div className='container'>
      <div>
        <h1>Curriculum Vitae</h1>
        <h2>Personal Data</h2>
        <InputForm/>
      </div>
      <div>
        <h2>Education</h2>
        <InputFormEducation/>
      </div>
      <div>
        <h2>Professional career</h2>
        <InputFormCareer/>
      </div>
      </div>
        
    </>
  )
}

export default App
