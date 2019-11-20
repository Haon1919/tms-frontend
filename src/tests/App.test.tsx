import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from  'enzyme';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render((
  <BrowserRouter>
      <App />
  </BrowserRouter>) , div);
  ReactDOM.unmountComponentAtNode(div);
});

it('has enzyme imported correctly', () => {
  const wrapper = shallow(<div>
    <h1>Hello, Enzyme!</h1>
  </div>)
  expect(wrapper.find('h1').length).toEqual(1);
  expect(wrapper.find('div').length).toEqual(1);
});