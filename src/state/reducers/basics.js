import { actionTypes } from "../actionTypes";
import { commonStatuses } from "../models/common";
  
  const initialState = {
    api: {
      host: null,
      port: null,
      fetchingStatus: commonStatuses.none
    }
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_API_REFERENCES: {
        return {
          ...state,
          api: {
            ...state.api,
            fetchingStatus: commonStatuses.loading
          }
        };
      }
      case actionTypes.FETCH_API_REFERENCES_SUCCESS: {
        return {
          ...state,
          api: {
            host: action.payload.data.host,
            port: action.payload.data.port,
            fetchingStatus: commonStatuses.loaded
          }
        };
      }
      case actionTypes.FETCH_API_REFERENCES_UNSUCCESS:
      case actionTypes.FETCH_API_REFERENCES_FAIL: {
        return {
          ...state,
          api: {
            ...state.api,
            fetchingStatus: commonStatuses.failed
          }
        };
      }
      default:
        return state;
    }
  };
  