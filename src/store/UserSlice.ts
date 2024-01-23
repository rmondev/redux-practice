import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import UserData from '@/store/AppTypes'

// type UserData = {
//   user: string;
//   password: string;
//   confirmPassword: string;
//   email: string;
//   terms: boolean;
//   firstName: string;
//   lastName: string;
//   isActive: boolean;
//   dateCreated: string;

// };



const initialState: UserData = {  
  user: '',
  password: '',
  confirmPassword: '',
  email: '',
  terms: false,
  firstName: '',
  lastName: '',
  isActive: false,
  dateCreated: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserData>>)=> {
      return {...state, ...action.payload };
    },
    resetUser: () => initialState,
  }
})

// Action creators are generated for each case reducer function
export const { setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;