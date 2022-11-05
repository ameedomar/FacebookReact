import "./App.css";
import "bootstrap";
import "bootstrap/scss/bootstrap.scss";
import FacebookPost from "./Components/FacebookPost";
import DisplayPosts from "./Components/DisplayPosts";
import AddComment from "./Components/AddComment";
import DisplayComment from "./Components/DisplayCommnet";

function App() {
  return (
    <div className="App">
      <FacebookPost />
      <DisplayPosts hello="Hello World! This is the first static post" />
      <AddComment />
      <DisplayComment comment="Not dd" />
    </div>
  );
}

export default App;
