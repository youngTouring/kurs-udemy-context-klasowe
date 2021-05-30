import React, { PureComponent } from 'react';
import {AppContext, defaultObject} from './AppContext';
import './style.css';
import UserInfo from './UserInfo';
import Button from './Button';

class App extends PureComponent {

  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  }

  render(){
    return(
      <div>
        <AppContext.Provider value = {{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleState
          }}>
          <UserInfo/>
          <Button/>
        </AppContext.Provider>

        {/* oba provideray działają teraz niezależnie  - informacja jest pobierana z najbliższego providera */}
        <AppContext.Provider value = {{
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleStateIsAdult
          }}>
          <UserInfo/>
          <Button/>
        </AppContext.Provider>
      </div>
    )  
  }

  handleToggleState = () => this.setState(prevState => ({
    isUserLogged: !prevState.isUserLogged,
  }));

  handleStateIsAdult = () => this.setState(prevState => ({
    isUserAdult: !prevState.isUserAdult,
  }));


}

export default App;