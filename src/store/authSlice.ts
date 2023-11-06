import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import type { RootState } from './index'

type AuthState = {
    isAuthenticated: boolean;
    isError: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isError: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }: PayloadAction<LoginUserDTO>) => {
            if (payload.email === 'shanu@gmail.com' && payload.password === '123') {
                state.isAuthenticated = true
                state.isError = false
            } else {
                state.isError = true
                state.isAuthenticated = false
            }
        }
    }
})

export const useAuthSelector = () => useSelector((state: RootState) => state.auth)
export const { login } = authSlice.actions
export default authSlice.reducer

/* 
    Reducer DTOs
*/

type LoginUserDTO = {
    email: string;
    password: string;
}