import { useState } from 'react'
import Greeting from "./components/Greeting.jsx";
import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

const User = [
    {name: "Bob", age: 250},
    {name: "Charlie", age: 35},
    {name: "Alice", age: 30}
]

const sorter = (arr) => {
    return arr.sort((a, b) => b.age - a.age);
};

const sortUsers = sorter(User);

function App() {
  const [count, setCount] = useState(0)

  return (
    <CardContainer>
        {sortUsers.map((User, index) =>(
            <UserCard key={index} name={User.name} age={User.age} />
        ))}
    </CardContainer>
  );
}

export default App
