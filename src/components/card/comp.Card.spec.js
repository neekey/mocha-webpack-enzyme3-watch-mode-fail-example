import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Sinon from 'sinon';
import Card from './comp.Card';

describe('[Component] Card', () => {
  it('should only render title if either `title` or `extra` is provided', () => {
    const clock = Sinon.useFakeTimers();

    const wrapper = shallow(<Card />);
    let titleWrapper = wrapper.find({ 'data-ref': 'title' });
    expect(titleWrapper.length).to.equal(1);
    wrapper.setProps({
      title: 'title',
      extra: null,
    });
    titleWrapper = wrapper.find({ 'data-ref': 'title' });
    expect(titleWrapper.length).to.equal(2);
    wrapper.setProps({
      title: null,
      extra: 'extra',
    });
    titleWrapper = wrapper.find({ 'data-ref': 'title' });
    expect(titleWrapper.length).to.equal(3);
    clock.tick(1000);
    clock.restore();
  });
  it('should be able to render title', () => {
    const title = 'title';
    const wrapper = shallow(<Card title={title} />);
    const titleText = wrapper.find({ 'data-ref': 'titleText' });
    expect(titleText.length).to.equal(1);
    expect(titleText.text()).to.equal(title);
  });
  it('should be able to render extra', () => {
    const extra = 'extra';
    const wrapper = shallow(<Card extra={extra} />);
    const extraEl = wrapper.find({ 'data-ref': 'titleExtra' });
    expect(extraEl.length).to.equal(1);
    expect(extraEl.text()).to.equal(extra);
  });
  it('should be able to render children correctly', () => {
    const children = 'children';
    const wrapper = shallow(<Card>{children}</Card>);
    const body = wrapper.find({ 'data-ref': 'body' });
    expect(body.length).to.equal(1);
    expect(body.text()).to.equal(children);
  });
  it('should be able to trigger onClick', () => {
    const onClick = Sinon.spy();
    const wrapper = shallow(<Card onClick={onClick} />);
    const container = wrapper.find({ 'data-ref': 'container' });
    container.simulate('click');
    expect(onClick.called).to.equal(true);
  });
});
