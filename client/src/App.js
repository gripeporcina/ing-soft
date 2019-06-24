import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DietList from './components/DietList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store'

import AppNavbar from './components/AppNavbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal/>
      <DietList />
      </Container>
    </div>
    </Provider>
  );
}

export default App;
