import { configureStore } from "@reduxjs/toolkit";
import DepartmentSlice from "./slice/DepartmentSlice";

const store = configureStore({
    reducer: {
        DepartmentSlice: DepartmentSlice,
    }
});

export default store;