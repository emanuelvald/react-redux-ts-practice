import { Provider } from 'react-redux';
import { BrowserRouter, Route, RouteComponentProps, Switch } from 'react-router-dom';

import { routes } from './routes';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                    name={route.name}
                    {...props}
                    {...route.props}
                  />
                )}
              />
            );
          })}
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
