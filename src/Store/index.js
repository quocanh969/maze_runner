import { createStore } from "redux";
import rootReducer from '../Reducers';

const configureStore = () => {
    const rootStore = createStore(
        rootReducer
    )

    return rootStore;
}

export default configureStore;