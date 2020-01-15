# React Tabz

<img width="200" alt="React Tabz" src="https://user-images.githubusercontent.com/26111842/55259878-2d804180-5267-11e9-9129-c69ade927066.png">

###Demo
[Link for demo](https://react-tabz-demo.herokuapp.com/)

## install
`npm i react-tabz`

```javascript
import * as React from 'react';
import {Tab} from "react-tabz";

const headings = ["First Tab Heading", "Second Tab Heading"];

<Tab headings={headings}
    className="yourClassForTabComponent"
    tabItemClassName="someClassForContentPanel"
    tabSeparatorClassName="YourClassNameForTabSeparator">
        <div /*tabItemClassName class will be here */ >Tab panel content 1</div>
        <div>Tab panel content 2</div>
</Tab>
```

You can disable separator, in case that you want create it by pure CSS

```javascript
<Tab headings={headings}
    useSeparator={false}>
        <div>Tab panel content 1</div>
        <div>Tab panel content 2</div>
</Tab>
```
Tab props
```javascript
Tab.propTypes = {
        headings: PropTypes.arrayOf(PropTypes.string),
        children: PropTypes.arrayOf(PropTypes.element.isRequired),
        className: PropTypes.string,
        tabItemClassName: PropTypes.string,
        tabSeparatorClassName: PropTypes.string,
        onTabChange: PropTypes.func
    };
    
```    
TabItem props
```javascript
TabItem.propTypes = {
        text: PropTypes.string,
        checked: PropTypes.bool,
        onClick: PropTypes.func,
        className: PropTypes.string
    };
```    
TabSeparator props
```javascript
TabSeparator.propTypes = {
    className: PropTypes.string
};

Tab.defaultProps = {
    useSeparator: true
};
```
