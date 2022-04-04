# Hey There :)

## some ground rules

* each react component will be made in a new jsx file in ```PascalCase```
* if you have many components organise them into folders
* each component must have one responsibilty only ***for easier debugging and integration***  
* each section and page from the website must have preferably its own folder
* the App.jsx sould remain as clean as possible "ie: don't edit in it before asking beforehand"
* for responsive layouts use Bootstarap grid
* ***organise your code as much as possible***

## Styling guide

* for react components naming we will use ```PascalCase```

* but for thir instances in code we will use  ```camelCase```

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```

* make the component name the same as the file name

```jsx
import Footer from './Footer';
```

* add a single space in single closing tags

```jsx
// bad
<Foo/>
// good
<Foo />
```

* use ```camelCase``` for props

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```

* use self closing tags for tags with no children

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

* if the component has few props close it on the same line

```jsx
// good
<Foo bar="bar" />
```

* if it has multiple props spread it on multiple lines and close the tag on a new line

```jsx
<Foo
  bar="bar"
  baz="baz"
/>

```

<h1 align="center">
    Happy Coding 😎
</h1>

## confused?

follow this [link](https://airbnb.io/javascript/react/)
