import { configureStore } from '@reduxjs/toolkit';
import {contactsReducer} from './contactsSlice';
import { filterReducer } from './contactsFilterSlice';


export const store = configureStore({
  reducer: {
  filter: filterReducer,
  contacts: contactsReducer,
  },
});
