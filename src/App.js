import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Loading } from 'carbon-components-react';
import publicUrl from './util/publicUrl';

const HomePage = lazy(() => import('./content/HomePage'));
const WidgetTypePage = lazy(() => import('./content/WidgetTypePage'));
const WidgetsTablePage = lazy(() => import('./content/WidgetsTablePage'));

import './App.scss';

const App = () => {
  return (
    <>
      <Router basename={publicUrl}>
        <Suspense fallback={<Loading />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/widget-type/:shortCode" component={WidgetTypePage} />
          <Route path="/widget-types" component={WidgetsTablePage} />
        </Suspense>
      </Router>
    </>
  );
};

export default App;
