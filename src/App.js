import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Layout from './Components/layout';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route) => (
            <Route path={route.path} key={route.path}>
              {route.component}
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
