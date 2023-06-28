import {createStore} from 'redux';
import reduser from './reduser/combineReduser';

const store = createStore(
    reduser
)

export default store