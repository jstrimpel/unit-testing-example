import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../index.js';
import sinon from 'sinon';
import { shallow } from 'enzyme';

describe('Index Component', () => {
  it('should render', () => {
    const tree = renderer.create(
      <Index title={'I am an example.'} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should respond to a user click', () => {
    const spy = sinon.spy();
    const component = shallow(<Index title={'I am an example.'} onClick={spy}/>);

    component.find('p').simulate('click', {});    

    expect(spy.callCount).to.equal(1);
  });
});