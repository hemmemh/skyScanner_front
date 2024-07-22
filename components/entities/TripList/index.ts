export {
    default as TripReducer,
} from './model/tripListSlice'
export { fetchTripList } from './model/tripListThunk'
export {
    selectTripList,
    selectTripListError,
    selectTripsListLoading,
} from './model/selectors'
