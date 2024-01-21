import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserData = {
  user: string;
  password: string;
  confirmPassword: string;
  email: string;
  terms: boolean;
  firstName: string;
  lastName: string;
  isActive: boolean;
  dateCreated: string;

};

const initialState: UserData = {  
  user: 'rmondev',
  password: 'password1',
  confirmPassword: 'password1',
  email: 'rmondev@gmail.com',
  terms: true,
  firstName: 'Riccardo',
  lastName: 'Moncada',
  isActive: true,
  dateCreated: '01212024'
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