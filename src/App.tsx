import './App.css';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomeContainer } from './container/Home';
import { SearchContainer } from './container/search';
import { ResultContainer } from './container/result';




const App: FC = () => {
  return (
      <Switch>
        <Route path={'/search'} component={SearchContainer} />
        <Route exact path={'/'} component={HomeContainer} />
        <Route path={'/result'} component={ResultContainer}/>
        <Redirect to={'/'} />
      </Switch>
  );
}

export default App;
