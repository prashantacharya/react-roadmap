import { Link } from 'react-router-dom';

import routes from '../../routes';

const NavigationBar = () => (
  <nav>
    <h1>React Roadmap</h1>
    <ul>
      {routes.map((route) => (
        <li key={route.path}>
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavigationBar;
