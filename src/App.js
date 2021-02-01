import './App.css';
import SideNavBar from "./SideNavBar.js"
import TimeLine from "./TimeLine.js"

function App() {
  return (
    
    <div className="app">
      {/* Side navigation bar */}
      <SideNavBar/>
      {/* Timeline */}
      <TimeLine/>
      {/* Other stuff */}
    </div>
  );
}

export default App;
