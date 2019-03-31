import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class TabItem extends React.Component {
    onClick = () => {
        const {index} = this.props;
        this.props.onClick(index);
    };

    render() {
        const { text, checked, className, index } = this.props;
        return (
            <div
                onClick={this.onClick}
                id={`l-tab-item-${index}`}
                className={classNames("l-tab", { "l-tab-checked": checked }, className)}
            >
                {text}
            </div>
        );
    }
}

TabItem.propTypes = {
    text: PropTypes.string,
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
};

TabItem.defaultProps = {
    checked: false
};