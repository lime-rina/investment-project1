import { formatter } from '../util/investment'

function Results({ results }) {
    const initialInvestement = results[0]?.valueEndOfYear - results[0]?.interest - results[0]?.annualInvestment
    return < div >
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results?.map((row, index) => {
                    return (<tr key={index}>
                        <td>{row.year}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                        <td>{formatter.format(row.interest)}</td>
                        <td>{formatter.format(row.valueEndOfYear - row.annualInvestment * row.year)}</td>
                        <td>{formatter.format(row.valueEndOfYear)}</td>
                    </tr>)
                })}
            </tbody>
        </table>
    </div >
}

export default Results;