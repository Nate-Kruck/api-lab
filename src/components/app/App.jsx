import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PageCharacter from '../TeamList/PageCharacter';
import DetailPage from './DetailPage';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <PageCharacter {...routerProps} />}
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
