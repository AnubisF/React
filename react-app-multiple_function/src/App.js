import logo from './logo.svg';
import './App.css';
import Post from './Post';

function App() {
  const post = {
    tittle: "Test point",
    text: "This is really nice post...",
    author: {
      fname: "Artem",
      lname: "Vinogradov",
      date: "23.03.2021"
    },
    comments: {
      comment: {
      by: "Test user",
      text: "Good Job",
      date: "23.03.2021"
      }
    }
  }

  return (
    <Post post={post}/>
  );
}

export default App;
