import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import TabItem from "./TabItem";
import TabSeparator from "./TabSeparator";
import style from '../main.css';

export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tabIndex: 0};
    }

    changeTab = (tabIndex) => {
        const { onTabChange } = this.props;
        if (onTabChange) {
            onTabChange();
        }
        this.setState({tabIndex});
    };

    componentDidMount() {
        const { headings, children } = this.props;
        const headingsLength = headings.length;
        const childrenLength = children.length;
        if (headingsLength !== childrenLength) {
            throw new Error("You should use same count of headings and children props.");
        }
        if (!Array.isArray(headings) && !Array.isArray(headings)) {
            throw new Error("Wrong values of props for Tab component");
        }
        if (headingsLength <= 1 || childrenLength <= 1) {
            throw new Error("Only one tab? Really?");
        }
    }

    render() {
        const { headings, children, className, tabItemClassName, tabSeparatorClassName } = this.props;
        const { tabIndex } = this.state;
        return (
            <div className={classNames("l-tabs", className)}>
                <div className="l-tabs-list">
                    {headings.map((item, index, array) => (
                        <React.Fragment key={index}>
                            <TabItem
                                text={item}
                                onClick={() => {
                                    this.changeTab(index);
                                }}
                                index={index}
                                checked={tabIndex === index}
                                className={tabItemClassName}
                            />
                            {(index === 0 || (array.length > index && index < array.length - 1)) &&
                            <TabSeparator className={tabSeparatorClassName}/>}
                        </React.Fragment>
                    ))}
                </div>
                <div className="l-tab-panels">
                    {children.map((children, index) => (
                        <div key={index}
                             className={classNames("l-tab-panel", {"l-tab-panel-show": tabIndex === index})}>
                            {children}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Tab.propTypes = {
    headings: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
    className: PropTypes.string,
    tabItemClassName: PropTypes.string,
    tabSeparatorClassName: PropTypes.string,
    onTabChange: PropTypes.func
};