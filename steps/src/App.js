import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Build a portfolio 💻",
  "Network with professionals 🤝",
  "Contribute to open source 🌍",
  "Stay updated with tech trends 📈",
  "Practice coding challenges 🧩",
  "Attend tech meetups 📅",
  "Mentor others 👨‍🏫",
];

export default function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>10 Steps to Become a Successful Developer</h1>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);

  function handlerPrev() {
    if (step > 1) {
      setStep((prevStep) => prevStep - 1);
    }
  }

  function handlerNext() {
    setStep((prevStep) => {
      if (prevStep < messages.length) {
        return prevStep + 1;
      } else {
        alert("You have completed all the steps!");
        return prevStep;
      }
    });
  }

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_, index) => (
          <div key={index} className={`${step === index + 1 ? "active" : ""}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          style={{
            backgroundColor: step === 1 ? "gray" : "#7950f2",
            color: "#fff",
          }}
          onClick={handlerPrev}
          disabled={step === 1}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
          onClick={handlerNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
