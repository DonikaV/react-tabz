import React from 'react';
import { shallow, configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Tab from "../components/Tab";
const headings = ["First Tab Heading", "Second Tab Heading"];

describe('Tab component', () => {
    it('Render Tab component with className prop', () => {
        const Wrapper = shallow(
            <Tab headings={headings}
                 className={'test-class'}
            >
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        expect(Wrapper.find(".l-tabs").length).toBe(1);
        expect(Wrapper.prop("className")).toBe("l-tabs test-class");
    });

    it('Tab component render TabItems', () => {
        const Wrapper = shallow(
            <Tab headings={headings}
            >
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        expect(Wrapper.find("TabItem").length).toBe(2);
    });

    it('Tab component render TabSeparator', () => {
        const Wrapper = shallow(
            <Tab headings={headings}
                 tabSeparatorClassName={"test-class"}
            >
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        expect(Wrapper.find("TabSeparator").length).toBe(1);
    });

    it('TabItem click change state', () => {
        const Wrapper = shallow(
            <Tab headings={headings}>
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        Wrapper.find("TabItem").last().simulate("click");
        expect(Wrapper.state('tabIndex')).toBe(1);
        Wrapper.find("TabItem").first().simulate("click");
        expect(Wrapper.state('tabIndex')).toBe(0);
    });

    it('Tab component not render TabSeparator', () => {
        const Wrapper = shallow(
            <Tab headings={headings} useSeparator={false}
            >
                <div>Tab panel content 1</div>
                <div>Tab panel content 2</div>
            </Tab>);
        expect(Wrapper.find("TabSeparator").length).toBe(0);
    });

});