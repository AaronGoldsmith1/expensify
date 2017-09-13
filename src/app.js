import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    Dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    Add Expense component
  </div>
)

const EditExpensePage = () => (
  <div>
    Edit Expense component
  </div>
)


const HelpPage = () => (
  <div>
    Help Page
  </div>
)


const routes = (
<BrowserRouter>
  <Route path="/" component={ExpenseDashboardPage} exact={true} />
  <Route path="/create" component={AddExpensePage} exact={true} />
  <Route path="/edit" component={EditExpensePage} exact={true} />
  <Route path="/help" component={HelpPage} exact={true} />
</BrowserRouter>
);

ReactDOM.render(<p>Welcome to Expensify</p>, document.getElementById('app'));
