
import InputForm from './components/Formular'
import InputFormEducation from './components/Schulbildung'
import InputFormCareer from './components/Karriere'
import "./App.css";

function App() {
  

  return (
    <>
      <div className='container'>
        <h1>Curriculum Vitae</h1>
        <h2>Personal Data</h2>
        <div>
          < InputForm/>
        </div>
        <h2>Education</h2>
        <div>
          <InputFormEducation/>
        </div>
        <h2>Career</h2>
        <div>
          <InputFormCareer/>
        </div>
      </div>
     </>
  )
}

export default App
