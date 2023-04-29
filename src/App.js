import './App.css';
import BaseApp from './Core/Base';
import UserComponent from './Components/UserComponent';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom';
import { AddUser } from './Components/AddUser';
import { data } from './Data/data';
import { useState } from 'react';
import NoPage from './Components/NoPage';
import UserDetails from './Components/UserDetails';
import EditUser from './Components/EditUser';



function App() {
  const [user, setUser] = useState(data)
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserComponent
            user={user}
            setUser={setUser} />
        </Route>
        <Route path="/adduser">
          <AddUser
            user={user}
            setUser={setUser} />
        </Route>
        <Route path="/edit/:id">
          <EditUser
            user={user}
            setUser={setUser}
          />
        </Route>
        <Route path="/user/:id">
          <UserDetails user={user} />
        </Route>

        <Route path="**">
          <NoPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
