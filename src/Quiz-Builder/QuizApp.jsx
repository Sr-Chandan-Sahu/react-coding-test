import React, { useMemo, useState } from 'react'
import QuizOption from './QuizOption'
const styles = {
    container: {
        padding: "20px",
        border: "1px solid #E0E0E0",
        borderRadius: "15px",
        width: "max-content",
        marginBottom: "40px",
    },
    question: {
        fontWeight: "bold",
        marginBottom: "10px",
    },
    options: {
        marginBottom: "5px",
    },
    button: {
        marginTop: "10px",
        padding: "10px 15px",
        border: "none",
        backgroundColor: "#007BFF",
        color: "#FFF",
        fontSize: "14px",
        borderRadius: "5px",
        cursor: "pointer",
    },
    feedback: {
        marginTop: "10px",
        fontSize: "14px",
    },
}

const QuizApp = () => {
    const questions = useMemo(
        () => [
            {
                question: "What is the capital of France?",
                options: ["London", "Paris", "Berlin", "Madrid"],
                correct: "Paris",
            },
            {
                question: "What is the capital of Germany?",
                options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
                correct: "Berlin",
            },
        ],
        []
    )
    const questionsTotal = useMemo(() => questions.length, [questions])

    const [questionsIndex, setQuestionsIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [feedback, setFeedback] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [completedQuiz, setCompletedQuiz] = useState(false)

    const submitQuiz = () => {
        if (answer === questions[questionsIndex].correct) {
            setScore(score + 1)
            setFeedback('Correct!')
        } else {
            setFeedback('Incorrect!')
        }
        if (questionsIndex === questionsTotal - 1) {
            setCompletedQuiz(true)
        } else {
            setQuestionsIndex(questionsIndex + 1)
            setAnswer(null)
        }
    }
    return (
        <div style={styles.container}>
            <div id="question" style={styles.question}>
            {`${questions[questionsIndex].question}`}
            </div>
            <div style={styles.options}>
                {questions[questionsIndex].options.map((option, index) => (
                    <QuizOption
                        key={`option-${index}`}
                        option={option}
                        index={index}
                        answer={answer}
                        setAnswer={setAnswer}
                    />
                ))}
            </div>

            <button
                disabled={completedQuiz}
                style={styles.button}
                id="submitBTn"
                onClick={submitQuiz}
            >
                Submit
            </button>
            <div id='feedback' style={styles.feedback}>
                {questionsIndex !== 0 && !completedQuiz && `${feedback}`}
            </div>
            <div id='score' style={styles.feedback}>
                {completedQuiz && `Quiz complete! You scored ${score} out of ${questions.length}!`}
            </div>
        </div>
    )
}

export default QuizApp
