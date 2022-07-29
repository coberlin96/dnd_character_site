import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name: 'root',
    initialState:{
        name: 'Alan',
        stats: "nB28fvAfmGx9DM-S0hUoO-AZe4zg-sEokBKxyTF6lw0",
        classes: "RoPBMbb6bTV_n5NFvo6hQpKzlzh2xnnkJ_L0ICGfUNI",
        race: 'human',
        skills: 'EgHDItDPigjSnorDR7tLVmcxTt04UCrocCyPPWHx-8c',
        subrace: null,
    },
    reducers: {
        chooseName: (state, action) =>{ state.name = action.payload},
        chooseRace: (state, action) =>{ state.race = action.payload},
    }
})

export const reducer = rootSlice.reducer;
// export const {chooseName, choosePrice, chooseDescription} = rootSlice.actions;