export {
    default as TripReducer,
} from './model/tripListSlice'
export { fetchTripList } from './model/tripListThunk'
export {
    selectTripList,
    selectMinTime,
    selectMaxTime,
    selectMinDepartureTime,
    selectMaxDepartureDeTime,

    selectTripListError,
    selectTripsListLoading,
} from './model/selectors'
