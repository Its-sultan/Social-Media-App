import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
  socket: null, onlineUsers: []},
  reducers: {

        changeCurrentUser: (state, action) => {
            state.currentUser = action.payload; 
        },
        setSocket: (state, action) => {
            state.socket = action.payload;
        },

        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        },

        // setUser: (state, action) => {
        //     state.user = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        // setLoading: (state, action) => {
        //     state.loading = action.payload;
        // },
        // setError: (state, action) => {
        //     state.error = action.payload;
        //     state.loading = false;
        // }
    }
});


export const userActions = userSlice.actions;

export default userSlice;