const FETCH_DATA = 'FETCH_DATA';
const SEARCH_API = 'SEARCH_API';

const initialState = {
  shows: [],
  Search: [],
};

export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const search = (payload) => ({
  type: SEARCH_API,
  payload,
});

export const fetchdata = () => (dispatch) => {
  fetch('https://api.tvmaze.com/shows').then((res) => (res.json()))
    .then((data) => {
      dispatch(fetchData(data));
    });
};

export const searchData = (showName) => (dispatch) => {
  fetch(`https://api.tvmaze.com/singlesearch/shows?q=${showName}`).then((res) => (res.json()))
    .then((data) => {
      dispatch(search(data));
    });
};

export default function showReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DATA:
      return { ...state, shows: payload };
    case SEARCH_API:
      return { ...state, shows: [payload] };
    default:
      return state;
  }
}
