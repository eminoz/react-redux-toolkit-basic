import { createSlice, configureStore } from "@reduxjs/toolkit"; //toollkit daha basit redux kullanımı sağlar
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
      //normalde current state değiştirilmemeli sadece override edilmeli.
      //bu tool kit current stateti bir başka kütüphane kullanıp oraya snapshop ını
      //kaydeder ve onun üzerine override eder
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
export default store;
