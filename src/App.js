import React from 'react';
import logo from './logo.svg';
import './App.css';

const objData = [
  {
    buttonName: 'button1',
  },
  {
    buttonName: 'button2',
  },
  {
    buttonName: 'button3',
  },
];

class App extends React.Component {
  state = {
    activeName: 'button1',
  };

  handleClick = buttonName => {
    const newData = {
      activeName: buttonName
    }

    this.setState(newData);
  };

  render() {
    return (
      <div className="flex">
        {objData.map(({buttonName}) => (
          <ButtonTab
            isActive={buttonName === this.state.activeName}
            buttonName={buttonName}
            handleClick={this.handleClick}
            abasdasdsaatiaoihagiadhg="asdasdasd"
          />
        ))}
      </div>
    );
  }
}

export default App;

const ButtonTab = ({buttonName, isActive, handleClick }) => {
  return (
    <div
      className={`l-flex u-padding border-onesided ${isActive &&
        'activeState'}`}
      onClick={() => handleClick(buttonName)}>
      <p className="u-no-margin--bottom">{buttonName}</p>
    </div>
  );
};
