import { Button, InputGroup } from 'reactstrap';
import React from 'react';
import { ThemeContext,themes } from '../components/Navbar';


function ReactDark() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div className="App d-flex py--3 mb-1">
      <header className="App-header">
        <h1 className="text-warning">
        {/* Dark/Light Mode */}
         </h1>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <Button style={{width:"50px"}}
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={ darkMode ? 'fas fa-sun text-danger ' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">
                    {/* Switch mode */}
                </span>
              </Button>
            )}
          </ThemeContext.Consumer>
        </InputGroup> 
      </header>
    </div>
  );
}

export default ReactDark;