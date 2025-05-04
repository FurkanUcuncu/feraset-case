import { getPromiseDelay, getPromiseResult } from "@/utils/PromiseHelper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import {createLogoApi} from "@/services/logoService";

export const createLogo = createAsyncThunk(
    "createLogo",
    async ({ prompt, style }: { prompt: string; style: string }, thunkAPI) => {
        thunkAPI.dispatch(changeLoading("loading"));
        const result = getPromiseResult();

        const delay = getPromiseDelay();
        await new Promise((res) => setTimeout(res, delay)); // Wait the delay no matter what

        if (result !== "success") {
            return thunkAPI.rejectWithValue("Simulated failure");
        }
        
        try {
            const docRef = await createLogoApi({prompt, style});

            return { id: docRef.id };
        } catch (e: any) {
            // Real Firestore error
            return thunkAPI.rejectWithValue(e.message || "Firestore error");
        }
    }
);

const initialState: {
    loading: 'loading' | 'success' | 'error' | null;
} = {
    loading: null
};

// export const getLogoState = (state: RootState) => state?.logo;

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
