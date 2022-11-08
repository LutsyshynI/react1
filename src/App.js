
import './App.css';
import {Header, Posts, Users} from "./components";

function App() {
  return (
      <div className="App">
          <div>
          <Header/>
          </div>
          <hr/>
          <div>
              <Users/>
              <Posts/>
          </div>



      </div>

  );
}

export default App;
