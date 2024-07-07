export {
    default as TripReducer,
} from './model/tripListSlice'
export { fetchTripList } from './model/airBusListThunk'
export {
    selectTripList,
    selectTripListError,
    selectTripsListLoading,
} from './model/selectors'
