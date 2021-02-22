import './App.css';
import Example from './components/Example'
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import Card from './components/Card'
import Palette from './components/Palette'

function App() {
  const user1 = {
    name: {
      first: 'John',
      last: 'Smith',
    },
    phone: '123-4567'
  }
  const user2 = {
    name: {
      first: 'Sarah',
      last: 'Haras',
    },
  }
  return (
    <div>
      <Example></Example>
      <HelloWorld />
      {/* <Greet user1 = {user1.name.first + ' ' + user1.name.last}
             user2 = {user2.name.first + ' ' + user2.name.last}
      /> */}
      <Greet user1 = {user1}
             user2 = {user2}
      />

      <Button1 />
      <Button2 />
      <Card user1 ={user1}
            user2 ={user2}
            // user2 ={user2.name.first, user2.name.last}
      />
      <Palette />
    </div>
  );
}

export default App;
