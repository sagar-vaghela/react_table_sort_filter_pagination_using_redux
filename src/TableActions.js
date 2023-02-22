export const sortTable = (key) => {
    return {
      type: 'SORT_TABLE',
      payload: key,
    };
  };
  
  export const filterTable = (searchTerm) => {
    return {
        type: 'FILTER_TABLE',
        payload: searchTerm,
      };
      };
      
      export const setPage = (page) => {
        return {
          type: 'SET_PAGE',
          payload: page,
        };
      };
        