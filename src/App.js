import UserDisplay from "./ex1/UserDisplay";
import UserProvider from "./ex1/UserProvider";

function App() {
  
  return (
    <div>
      <UserProvider>
        <p>Hello</p>
        <UserDisplay/>
      </UserProvider>
      
    </div>
  );
}

export default App;
