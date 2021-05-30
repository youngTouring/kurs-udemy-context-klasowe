import React from 'react';
import { AppContext } from './AppContext'

class Button extends React.PureComponent {

  static contextType = AppContext;

  render() {
    return (
        <button 
          onClick = {this.context.toggleLoggedState}>
          Zmień status użytkownika
        </button>
      )
    }
}

export default Button;