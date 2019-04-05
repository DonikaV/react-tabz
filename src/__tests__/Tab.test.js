import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});


import Tab from "../components/Tab";
const headings = ["First Tab Heading", "Second Tab Heading"];

describe('index.js', () => {
    it('Tab render tab items', () => {
        const Tab = shallow(
            <Tab headings={headings}>
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        expect(Tab.find(".l-tabs").length).toBe(1);
    });
});