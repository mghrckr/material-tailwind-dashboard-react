const BASE_URL = `http://192.168.127.112:2887`




export const fetchUsers = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${BASE_URL}/datakaryawan`, {
                method: "GET"
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            dispatch({ type: 'users/get', payload: data });
        } catch (error) {
            console.log(error.message);
        }
    };
}

export const addUser = (userData) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`${BASE_URL}/datakaryawanbaru`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
  
        const data = await response.json();
        dispatch({ type: 'user/add', payload: data });
      } catch (error) {
        console.log(error.message);
      }
    };
  };
  