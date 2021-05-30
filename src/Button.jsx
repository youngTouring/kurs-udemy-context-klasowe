import React from 'react';
import { AppContext } from './AppContext'

class Button extends React.PureComponent {
  render() {
    return (
      <AppContext.Consumer>
        {
          ({toggleLoggedState}) => (
            <button 
              onClick = {toggleLoggedState}>
              Zmień status użytkownika
            </button>
          )
        }
      </AppContext.Consumer>
      
    );
  }
}

export default Button;