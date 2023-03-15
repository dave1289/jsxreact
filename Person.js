const Person = ({ name, age, hobbies }) => {
   return <div>
      <p>Learn more about this person.</p>
         {age >= 18 ? <h3>Go vote!</h3> : <h3>You must be over 18!</h3>}
      <h3>{name}'s hobbies are</h3>
      <ul>
      {hobbies.map(h => <li>{h}</li>)}
      </ul>
   </div>
}
