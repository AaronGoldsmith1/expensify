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

const routes = (
<BrowserRouter>
  <Route path="/" component={ExpenseDashboardPage} />
  <Route path="/create" component={AddExpensePage} />
</BrowserRouter>
);

ReactDOM.render(<p>Welcome to Expensify</p>, document.getElementById('app'));
