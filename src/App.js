
import './App.css';
import {Header, Posts, Users} from "./components";

function App() {
  return (
      <div className="App">
          <Header/>
          <hr/>
          <div>
              <Users/>
              <Posts/>
          </div>



      </div>

  );
}

export default App;
