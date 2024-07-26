import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

const url = 'http://localhost:4000/questions'

useEffect(() => {
  fetch(url)
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw Error("JSON did not compelte")
    }
  })
  .then(data => setQuestions(data))
  .catch(err => console.error("Could not get to the server"))
}, [])

const addQuestions = (newQuestions) => {
  setQuestions([...questions, newQuestions])
}


const deleteQuestions = (id) => {
  setQuestions(questions.filter((Question) => {
    if (Question.id === id){
      return false; 
    } else {
      return true;
    }
  }));
};


const updateQuestion = (updatedQuestion) => {
  setQuestions(questions.map(curQuestion => {
    if(curQuestion.id === updatedQuestion.id){
      return updatedQuestion 
    } else {
      return curQuestion
    }
  }))
}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestions={addQuestions} /> :  <QuestionList questions={questions} deleteQuestions={deleteQuestions} updateQuestion={updateQuestion}  />}
    </main>
  );
}

export default App;


