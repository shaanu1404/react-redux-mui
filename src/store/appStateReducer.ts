import { createReducer, createAction } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { RootState } from './index';

type AppState = {
    isFullPageLoaderVisible: boolean;
}

const initialState: AppState = {
    isFullPageLoaderVisible: false,
}

const FULLPAGE_LOADER_VISIBLE = 'appState/fullPageLoader'

export const toggleFullPageLoader = createAction<boolean>(FULLPAGE_LOADER_VISIBLE)

export default createReducer(initialState, (builder) => {
    builder.addCase(toggleFullPageLoader, (state, { payload }) => {
        state.isFullPageLoaderVisible = payload
    })
})

export const useAppStateSelector = () => useSelector((state: RootState) => state.appState)