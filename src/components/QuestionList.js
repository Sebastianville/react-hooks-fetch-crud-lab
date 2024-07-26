import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, deleteQuestions, updateQuestion}) {
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions}</ul>
      {
      questions.map(question => <QuestionItem question={question} key={question.id} deleteQuestions={deleteQuestions} updateQuestion={updateQuestion} />)
      }
    </section>
  );
}

export default QuestionList;
