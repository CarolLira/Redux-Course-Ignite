import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';

// Antes do rootReducer.ts
// import cart from './modules/cart/reducer';
// const store = createStore(() => ({
//     cart,
// }));

const store = createStore(rootReducer);

export default store;