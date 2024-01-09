import React from 'react';
import { useState } from "react";
const problems1 = [
  {
    title: 'Title1',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'Title2',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'title1',
    difficulty: 'Hard',
    acceptence: '234',
  },
  {
    title: 'title1',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'title4',
    difficulty: 'Medium',
    acceptence: '234',
  },
];

const problems2 = [
  {
    title: 'twoTitle1',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'Title2',
    difficulty: 'Hard',
    acceptence: '234',
  },
  {
    title: 'title1',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'title1',
    difficulty: 'Medium',
    acceptence: '234',
  },
  {
    title: 'title4',
    difficulty: 'Medium',
    acceptence: '234',
  },
];

const Questions = () => {
  const [problems, setProblems] = useState([]);

  return (
    <div>
      <div>
        <input type='text' placeholder='email' />
        <input type='text' placeholder='password' />
        <button>SignIn</button>

        <br />
        <div>
          <button
            onClick={() => {
              setProblems((problem) => problems1);
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              setProblems((problem) => problems2);
            }}
          >
            2
          </button>
        </div>
        <div>
          {problems.map((problem) => (
            <ProblemStatement
              title={problem.title}
              acceptence={problem.acceptence}
              difficulty={problem.difficulty}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function ProblemStatement(props){
    const title = props.title
    const acceptence = props.acceptence
    const difficulty = props.difficulty
  
    return <table>
    <tr>
      <td>
        {title}
      </td>
      <td>
        {acceptence}
      </td>
      <td style={{color: difficulty === 'Medium' ? 'yellow' : 'red'}}>
        {difficulty}
      </td>
    </tr>
  </table>
  }

export default Questions;
