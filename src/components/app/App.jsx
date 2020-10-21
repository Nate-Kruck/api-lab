import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import CharacterPage from '../TeamList/CharacterPage';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <CharacterPage {...routerProps} />}
          />
          <Route
            path="/detail/:id"
            exact
            render={(routerProps) => <DetailPage {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}
