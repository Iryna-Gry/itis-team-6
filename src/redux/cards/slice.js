import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from './operations';

const initialState = {
  cards: [],
  userTeam: [],

  userTeamTitle: null,
  isRefreshing: false,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCardToTeam(state, action) {
      state.userTeam.push(action.payload);
    },
    deleteCardFromTeam(state, action) {
      state.userTeam = state.userTeam.filter(card => card.id !== action.payload)
    },
    setAllTeam(state, action) {
      state.userTeam = action.payload;
    },

    setUserTeamTitle(state, action) {
      state.userTeamTitle = action.payload;
    },
  },
  extraReducers: {
    [fetchCards.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCards.fulfilled](state, action) {
      state.cards = action.payload;
      state.isRefreshing = false;
    },
    [fetchCards.rejected](state) {
      state.isRefreshing = false;
    },
  },
});

export const {
  addCardToTeam,
  deleteCardFromTeam,
  setAllTeam,
  setUserTeamTitle,
} = cardsSlice.actions;
