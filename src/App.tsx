import './App.css';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomeContainer } from './container/Home';
import { SearchContainer } from './container/search';




const App: FC = () => {
  return (
      <Switch>
        <Route path={'/search'} component={SearchContainer} />
        <Route path={'/'} component={HomeContainer} exact />
        <Redirect to={'/'} />
      </Switch>
  );
}

export default App;
