const App = () => {
   return <div>
      <FirstComponent />
      <NamedComponent name='Steven' />
      <br></br>
      <br></br>
      <Tweet username="dave1216" firstname="David" date="1/2/23" message="This is a tweet doe yo!"/>
      <Tweet username="Lucy666" firstname="Lucille" date="6/6/2066" message="The end is nigh, I crave VEINS MOTHER!"/>
      <Tweet username="Acoleman" firstname="Amanda" date="2/23/22" message="WTF? Lucy."/>
      <Person name="david" age={33} hobbies={['Stereos', 'Guitar', 'Music']} />
      <Person name="Amanda" age={33} hobbies={['astrology, mycology, herbalism']} />
      <Person name="Lucille" age={8} hobbies={['food', 'good food', 'bad food', 'fat food']} />
      </div>
}
// tweet formate -- username="" firstname="" date="" message=""
// person fomrate -- name="" age={} hobbies=[]

ReactDOM.render(<App />, document.getElementById("root"))