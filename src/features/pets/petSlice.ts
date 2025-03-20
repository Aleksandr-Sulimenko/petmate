import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '@/types/pet';

interface PetState {
    pets: Pet[];
    loading: boolean;
    error: string | null;
}

const initialState: PetState = {
    pets: [],
    loading: false,
    error: null,
};

const petSlice = createSlice({
    name: 'pets',
    initialState,
    reducers: {
        fetchPetsStart: (state) => {
            state.loading = true;
        },
        fetchPetsSuccess: (state, action: PayloadAction<Pet[]>) => {
            state.pets = action.payload;
            state.loading = false;
            state.error = null;
        },
        fetchPetsFailure: (state, action: PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchPetsStart, fetchPetsSuccess, fetchPetsFailure } = petSlice.actions;
export default petSlice.reducer;