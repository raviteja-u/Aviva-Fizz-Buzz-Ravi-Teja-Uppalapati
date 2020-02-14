import React from 'react';
import { shallow, mount } from 'enzyme';
import { render } from '@testing-library/react';
import App from './App.js';


describe('App Component', () => {
    
    it('inputHandler should change state variable', () => {
        const wrapper = mount(<App />);
        const instance = wrapper.instance();
        const event = {
            target: {
                value : 55
            }
        }
        instance.inputChangeHandler(event);
        expect(wrapper.state('inputValue')).toEqual(55)
    });
}) 