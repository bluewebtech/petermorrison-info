import { BrowserRouter as Router } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './views/Home';

const App = () => {
  return (
    <Router>
      <BaseLayout>
        <Home/>
      </BaseLayout>
    </Router>
  );
};

export default App;
