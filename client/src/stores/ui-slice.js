import { createSlice } from "@reduxjs/toolkit";

const initialState = {themeModalisOpen:false, editprofileModelOpen: false,
editPostModelOpen: false, editPostId: "", theme: JSON.parse(localStorage.getItem("theme")) || {primaryColor: "", backlgroundColor: ""} 
}


const  uiSlice = createSlice({
      name: 'ui',
      initialState,
      reducers: {
        OpenThemeModal: (state) => {
            state.themeModalIsOpen = true;
        },
        closeThemeModal: (state) => {
            state.themeModalIsOpen = false;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload;
            // localStorage.setItem("theme", JSON.stringify(action.payload));
        },
        openEditProfileModel: (state) => {
            state.editprofileModelOpen = true;
        },
        closeEditProfileModel: (state) => {
            state.editprofileModelOpen = false;
        },
        openEditPostModel: (state, action) => {
            state.editPostModelOpen = true;
            state.editPostId = action.payload;
        },
        closeEditPostModel: (state) => {
            state.editPostModelOpen = false;
            // state.editPostId = "";
        }
      }



})

export const uiSliceActions = uiSlice.actions;

export default uiSlice;