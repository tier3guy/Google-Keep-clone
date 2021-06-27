const questions = [
  {
    id : 1,
    quest : 'What is React?',
    ans : 'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook\'s News Feed in 2011 and on Instagram in 2012.'
  },
  {
    id : 2,
    quest : 'What is JSX?',
    ans : 'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.'
  },
  {
    id : 3,
    quest : 'What is the difference between Element and Component?',
    ans : 'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.'
  },
  {
    id : 4,
    quest : 'How to create components in React?',
    ans : 'There are two possible ways to create a component : Functional and Class component'
  },
  {
    id : 5,
    quest : 'What are Pure Components?',
    ans : 'React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won\'t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.'
  },
  {
    id : 6,
    quest : 'What is React?',
    ans : 'React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook\'s News Feed in 2011 and on Instagram in 2012.'
  },
  {
    id : 7,
    quest : 'What is JSX?',
    ans : 'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.'
  },
  {
    id : 8,
    quest : 'What is the difference between Element and Component?',
    ans : 'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.'
  },
  {
    id : 9,
    quest : 'How to create components in React?',
    ans : 'There are two possible ways to create a component : Functional and Class component'
  },
  {
    id : 10,
    quest : 'What are Pure Components?',
    ans : 'React.PureComponent is exactly the same as React.Component except that it handles the shouldComponentUpdate() method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. Component on the other hand won\'t compare current props and state to next out of the box. Thus, the component will re-render by default whenever shouldComponentUpdate is called.'
  }
];

export default questions;