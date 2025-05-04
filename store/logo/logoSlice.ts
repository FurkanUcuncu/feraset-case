import { getPromiseDelay, getPromiseResult } from "@/utils/PromiseHelper";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createLogoApi} from "@/services/logoService";
import {ILoading, ILogoInitialState, ILogoLabel} from "@/types/logo.types";
import {RootState} from "@/store";

export const createLogo = createAsyncThunk<
    any,
    void,
    { state: RootState }
>(
    "createLogo",
    async (_, {dispatch, getState, rejectWithValue}) => {
        dispatch(changeLoading("loading"));
        const result = getPromiseResult();

        const delay = getPromiseDelay();
        await new Promise((res) => setTimeout(res, delay)); // Wait the delay no matter what

        if (result !== "success") {
            return rejectWithValue("Simulated failure");
        }
        
        try {
            const {prompt, logoStyle} = getState()?.logo;
            const docRef = await createLogoApi({prompt, logoStyle});
            return { id: docRef.id };
        } catch (e: any) {
            return rejectWithValue(e.message || "Firestore error");
        }
    }
);

const initialState: ILogoInitialState = {
    loading: null,
    prompt: '',
    logoStyle: 'No Style'
};

export const logoSlice = createSlice({
    name: "logo",
    initialState,
    reducers: {
        changeLoading(state, action: PayloadAction<ILoading>) {
            state.loading = action.payload;
        },
        changePrompt(state, action: PayloadAction<string>){
            state.prompt = action.payload;
        },
        changeLogoStyle(state, action: PayloadAction<ILogoLabel>) {
            state.logoStyle = action.payload;
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
    changePrompt,
    changeLogoStyle
} = logoSlice.actions;
