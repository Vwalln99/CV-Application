
import InputForm from './components/Formular'
import InputFormEducation from './components/Schulbildung'
import InputFormCareer from './components/Karriere'
import "./App.css";

function App() {
  

  return (
    <>
      <div className='container'>
        <h1>Curriculum Vitae</h1>
        <div>
          < InputForm/>
        </div>
        <div>
          <InputFormEducation/>
        </div>
        <div>
          <InputFormCareer/>
        </div>
      </div>
     </>
  )
}

export default App
