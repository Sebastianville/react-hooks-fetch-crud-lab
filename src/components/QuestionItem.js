import React from "react";

function QuestionItem({ question, deleteQuestions, updateQuestion}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = () => {
    fetch(`http://localhost:4000/questions/${id}`,{
    method: "DELETE"
  })
  .then(res => {
    if(res.ok){
      deleteQuestions(question.id)
    } else {
      throw Error ("DELETE was not completed")
    }
  })
  .catch(err => console.error("Was not able to reach to the server to delete"))
}

const handleChange = (e) => {
  fetch(`http://localhost:4000/questions/${id}`, {
    method: 'PATCH',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
        "correctIndex": integer
    })
  })
  .then(res => {
    if(res.ok){
      return res.json()
    } else {
      throw Error('patch did not go through')
    }
  })
  .then(data => {
    updateQuestion(data)
  })
}

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
