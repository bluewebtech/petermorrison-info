import { Suspense, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Routes from './routes';

const App = () => {
  useEffect(() => {
    document.body.className = 'light';
    return () => { document.body.className = 'light'; }
  });

  return (
    <Suspense fallback={<div></div>}>
      <Router>
        <Switch>
          {Routes.map(({path, component}, key) => (
            <Route exact path={path} component={component} key={key}/>
          ))}
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
