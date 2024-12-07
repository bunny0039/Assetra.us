import { createSlice } from "@reduxjs/toolkit";

const permissionReducer = createSlice({
  name: "permissionReducer",
  initialState: {
    employeePermission: null,
  },
  reducers: {
    setEmployeePermission: (state, action) => {
      const replaceDotWithUnderscore = (str) =>
        str.includes(".")
          ? str.replace(/\./g, "_") // Replace '.' with '_'
          : str.replace(/_/g, "."); // Replace '_' with '.'

      // Reduce function to build the permissions object
      const permissions = action.payload.reduce((acc, { name, scope }) => {
        // Convert names using the replace function
        const transformedName = replaceDotWithUnderscore(name);
        if (!acc[scope]) {
          acc[scope] = {};
        }
        acc[scope][transformedName] = true;
        return acc;
      }, {});

      state.employeePermission = permissions;
    },
  },
});

export const { setEmployeePermission } = permissionReducer.actions;
export default permissionReducer.reducer;
