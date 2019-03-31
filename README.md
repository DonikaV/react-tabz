# React Tabz

<img width="200" alt="React Tabz" src="https://user-images.githubusercontent.com/26111842/55259878-2d804180-5267-11e9-9129-c69ade927066.png">

## install
`npm i react-tabz`

```javascript
import * as React from 'react';
import {Tab} from "react-tabz";

const headings = ["First Tab Heading", "Second Tab Heading"];

<Tab headings={headings}>
     <div>Tab panel content 1</div>
     <div>Tab panel content 2</div>
</Tab>

```
Tab props
```javascript
static propTypes = {
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
static propTypes = {
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
```
