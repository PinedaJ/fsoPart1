import React, { useState } from 'react'

const Statistics = (props) => {
  if (props.feedback.good === 0 && props.feedback.neutral === 0 && props.feedback.bad === 0)
    return (
      <div>No feedback given</div>
    )
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.feedback.good} />
          <StatisticsLine text='neutral: ' value={props.feedback.neutral} />
          <StatisticsLine text='bad: ' value={props.feedback.bad} />
          <StatisticsLine text='total: ' value={props.feedback.total} />
          <StatisticsLine text='avg: ' value={props.feedback.avgScore.toFixed(1)} />
          <StatisticsLine text='positive: ' value={props.feedback.percentagePositive.toFixed(1)} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticsLine = ({ text, value }) => {
  if (text === 'positive: ')  // print the stat with the percent symbol
    return (
      <tr>
        <td>{text}</td>
        <td>{value} % </td>
      </tr>
    )
  return (
    <tr>
      <td>{text} </td>
      <td>{value} </td>
    </tr>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = {
    good,
    neutral,
    bad,
    total: good + neutral + bad,
    percentagePositive: 100 * (good / (good + neutral + bad)),
    avgScore: (good + -1*bad) / (good + neutral + bad)
  }

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={handleGood} text='good' />
      <Button handleClick={handleNeutral} text='neutral' />
      <Button handleClick={handleBad} text='bad' />

      <h2>statistics</h2>
      <Statistics feedback={feedback} />
    </div>
  )
}

export default App