import { Middleware, Tuple, combineReducers, configureStore } from '@reduxjs/toolkit'
import { AirBusReducer } from '../entities/airBus'
import { TripReducer } from '../entities/TripList';



const logger: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching action:', action);
  let result = next(action);
  console.log('Next state:', store.getState());
  console.log('result ', result );
  return result;
};


const rootRecucer = combineReducers({
  airBusList: AirBusReducer,
  tripList:TripReducer
})


export const store = configureStore({
  reducer: rootRecucer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch