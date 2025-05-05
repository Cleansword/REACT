import Login from "./component/Login"
import Profile from "./component/Profile"
import UserContextProvider from "./Context/UserContextProvider"
import './App.css'


function App() {
  return (
  
     <UserContextProvider>
      <h1>welcome to mini context project</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
    
   
    
  
  )
}

export default App
