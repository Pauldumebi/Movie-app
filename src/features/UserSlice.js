import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    email: '',
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {
      // Reducer comes here
  },
  extraReducers: {
       // Extra reducer comes here
  },
});

export const signupUser = createAsyncThunk(
  'users/signupUser',
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await fetch(
        'https://mock-user-auth-server.herokuapp.com/api/v1/users',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );
      let data = await response.json();
      console.log('data', data);
      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        return { ...data, username: name, email: email };
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log('Error', e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const { clearState } = userSlice.actions;
export const userSelector = (state) => state.user;