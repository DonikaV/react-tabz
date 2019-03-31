import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const TabSeparator = ({className}) => {
    return <div className={classNames("l-tabs-separator", className)} />;
};

TabSeparator.propTypes = {
    className: PropTypes.string
};

TabSeparator.displayName = "TabSeparator";

export default TabSeparator;
