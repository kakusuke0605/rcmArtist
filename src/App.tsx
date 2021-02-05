import './App.css';
import { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { HomeContainer } from './container/Home';
import { SearchContainer } from './container/search';
import { ResultContainer } from './container/result';
import { DetailContainer } from './container/detail';




const App: FC = () => {
  return (
      <Switch>
        <Route path={'/search'} component={SearchContainer} />
        <Route exact path={'/'} component={HomeContainer} />
        <Route path={'/result'} component={ResultContainer} />
        <Route path={'/detail'} component={DetailContainer}/>
        <Redirect to={'/'} />
      </Switch>
  );
}

export default App;
