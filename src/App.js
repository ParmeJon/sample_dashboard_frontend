import React, { useEffect, useState } from 'react';
import CardDashboard from './components/CardDashboard';
import AnalyticsBoard from './components/AnalyticsBoard';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [accountsList, setAccountsList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getLink = `${process.env.REACT_APP_API_URI}accounts`;
    setLoading(true);
    fetch(getLink)
      .then((res) => {
        return res.json()
      }).then((json) => {
        setAccountsList(json);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/analytics">
              <AnalyticsBoard accounts={accountsList} loading={loading}/>
            </Route>
            <Route path="/">
              <CardDashboard accounts={accountsList} loading={loading}/>
            </Route>
          </Switch>
        </BrowserRouter> 
    </div>
  );
}

export default App;
