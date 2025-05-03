import { getPromiseDelay, getPromiseResult } from "@/utils/PromiseHelper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export const createLogo = createAsyncThunk("createLogo", async () => {
    const response = await new Promise((resolve, reject) => setTimeout(() => {
        if (getPromiseResult() === 'success') return resolve('success');
        return reject('error')
    }, getPromiseDelay()));
    return response;
});

const initialState: {
    loading: 'loading' | 'success' | 'error' | null;
} = {
    loading: null
};

export const getLogoState = (state: RootState) => state?.logo;

export const logoSlice = createSlice({
    name: "logo",
    initialState,
    reducers: {
        changeLoading(state, action) {
            state.loading = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createLogo.fulfilled, (state) => {
            state.loading = 'success';
        });
        builder.addCase(createLogo.rejected, (state) => {
            state.loading = 'error';
        });
    },
});

export const {
    changeLoading,
} = logoSlice.actions;
