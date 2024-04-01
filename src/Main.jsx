import React from "react"
import logo from './react-icon.png';

export default function Main() {
  return (
    <>
      <main>
        {/* Fun facts about React */}
        <div className="espaced">
          <h2>Fun facts about React</h2>
          <ul className="list-style">
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k stars in GitHub</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ul>
        </div>
        {/* Why you should learn React */}
        <div className='espaced'>
          <h2>Why you should learn React:</h2>
          <ol className="list-style">
            <li>It's fun to learn.</li>
            <li>You can use it for personal projects.</li>
            <li>It could help you get a job.</li>
            <li>You would be joining a large community.</li>
          </ol>
        </div>
      </main>
    </>
  )
}





