import { createSlice } from "@reduxjs/toolkit";

const companyReducer = createSlice({
  name: "companyReducer",
  initialState: {
    companyDetails: null,
    rootCompanyInfo: null,
    currentCompanyId: null,
    currentOwnerId: null,
    ownerData: null,
  },
  reducers: {
    setCompanyDetailsReducer: (state, action) => {
      state.companyDetails = action.payload;
    },
    setRootCompanyInfo: (state, action) => {
      state.rootCompanyInfo = action.payload;
    },
    setCurrentCompanyId: (state, action) => {
      state.currentCompanyId = action.payload;
    },
    setCurrentOwnerId: (state, action) => {
      state.currentOwnerId = action.payload;
    },
    setOwnerData: (state, action) => {
      state.ownerData = action.payload;
    },
  },
});

export const {
  setCompanyDetailsReducer,
  setRootCompanyInfo,
  setCurrentCompanyId,
  setCurrentOwnerId,
  setOwnerData,
} = companyReducer.actions;
export default companyReducer.reducer;
