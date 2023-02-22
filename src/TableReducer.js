const initialState = {
    data: [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
      { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com' },
      { id: 4, name: 'Samantha Johnson', email: 'samantha.johnson@example.com' },
      { id: 5, name: 'Jack Wilson', email: 'jack.wilson@example.com' },
      { id: 6, name: 'Emily Davis', email: 'emily.davis@example.com' },
      { id: 7, name: 'Tom Brown', email: 'tom.brown@example.com' },
      { id: 8, name: 'Alice Lee', email: 'alice.lee@example.com' },
      { id: 9, name: 'Timothy Jackson', email: 'timothy.jackson@example.com' },
      { id: 10, name: 'Karen Anderson', email: 'karen.anderson@example.com' },
    ],
    sortedBy: { key: null, direction: null },
    filteredBy: '',
    page: 1,
    itemsPerPage: 3,
  };
  
  const tableReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SORT_TABLE':
        const key = action.payload;
        const direction =
          state.sortedBy.key === key && state.sortedBy.direction === 'asc' ? 'desc' : 'asc';
        return {
          ...state,
          sortedBy: { key, direction },
        };
      case 'FILTER_TABLE':
        return {
          ...state,
          filteredBy: action.payload,
        };
      case 'SET_PAGE':
        return {
          ...state,
          page: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default tableReducer;
  