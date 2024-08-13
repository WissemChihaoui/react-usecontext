import UserDisplay from "./ex1/UserDisplay";
import UserProvider from "./ex1/UserProvider";

function App() {
  
  return (
    <div>
      <UserProvider>
        <UserDisplay/>
      </UserProvider>
      
    </div>
  );
}

export default App;
