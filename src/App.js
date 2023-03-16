
import questionData from "../src/components/Data"
import Question from "./components/Questions";
function App() {

 
  return (
    <div className="App">
     <h1 id="questionText" >Questions</h1>

     { questionData.map((question)=> <Question key = {question.id} questionData={question}/>)}
     
    
    </div>
  );
}

export default App;
