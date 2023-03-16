# Getting user information with React & Redux store🗑️

### A react app with a defined *redux boilerplate* which is used to store user information. 
<a href="#"><img alt="React" src="https://img.shields.io/badge/React%20-%2320232a.svg?logo=react&logoColor=%2361DAFB"></a>
<a href="#"><img alt="React" src="https://img.shields.io/badge/Redux%20-black.svg?logo=redux&logoColor=purple"></a>

- Using **axios for getting user information from [https://reqres.in/](https://reqres.in/). **
- **Semantics-UI** for dynamic styling component 
- Loading component from **react-bootstrap** 

## [Visit project 🌐](https://the-awesome-aishanipach-site.netlify.app/)

(I tried with couple of other APIs before, hence the 'product' naming.)



### Using redux-devtools extension✨:
``` javascript

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```
***redux/store.js***

