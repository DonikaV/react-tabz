import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import TabItem from "../components/TabItem";

describe('TabItem component', () => {
    it('TabItem className prop', () => {
        const Wrapper = shallow(
            <TabItem className={"test-class"}/>);
        expect(Wrapper.prop('className')).toBe("l-tab test-class");
    });

});