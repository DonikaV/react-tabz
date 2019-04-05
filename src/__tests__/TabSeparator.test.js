import React from 'react';
import {shallow, configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import TabSeparator from "../components/TabSeparator";

describe('TabSeparator component', () => {
    it('TabSeparator className prop', () => {
        const Wrapper = shallow(
            <TabSeparator className={"test-class"}/>);
        expect(Wrapper.prop('className')).toBe("l-tabs-separator test-class");
    });

});