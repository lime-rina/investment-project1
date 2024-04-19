import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";


export default function Inputs({ setResults }) {
    const [calculatorData, setCalculatorData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    })


    const handleResults = () => {
        const results = calculateInvestmentResults(calculatorData)
        setResults(results)
    }
    const handleChange = (change) => {
        const data = change.target.value;
        const entry = change.target.name;

        const updatedCalculatorData = { ...calculatorData, [entry]: data };
        setCalculatorData(updatedCalculatorData);
        handleResults()
    }

    return <div id="user-input">
        <div className="input-group">
            <p>
                <label>Initial investment</label>
                <input
                    type="number"
                    name="initialInvestment"
                    min="0"
                    step="0.01"
                    value={calculatorData.initialInvestment}
                    onChange={handleChange}
                >
                </input>
            </p>
            <p>
                <label>Annual investment</label>
                <input
                    type="number"
                    name="annualInvestment"
                    min="0"
                    step="0.01"
                    value={calculatorData.annualInvestment}
                    onChange={handleChange}
                ></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected return</label>
                <input
                    type="number"
                    name="expectedReturn"
                    min="0"
                    step="0.01"
                    value={calculatorData.expectedReturn}
                    onChange={handleChange}
                ></input>
            </p>

            <p>
                <label>Duration</label>
                <input
                    type="number"
                    name="duration"
                    min="0"
                    step="0.01"
                    value={calculatorData.duration}
                    onChange={handleChange}
                ></input>
            </p>
        </div>
    </div >
}

