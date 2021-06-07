/* eslint-disable default-case */
import React, { FC, useMemo } from 'react'
import { ThemeProvider } from 'next-themes'

export interface State {
  displaySubSidebar: boolean
}

const initialState = {
  displaySubSidebar: false,
}

type Action =
  | {
    type: 'OPEN_SUB_SIDEBAR'
  }
  | {
    type: 'CLOSE_SUB_SIDEBAR'
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const UIContext = React.createContext<State | any>(initialState)

UIContext.displayName = 'UIContext'

// eslint-disable-next-line consistent-return
const uiReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'OPEN_SUB_SIDEBAR': {
      return {
        ...state,
        displaySubSidebar: true
      }
    }
    case 'CLOSE_SUB_SIDEBAR': {
      return {
        ...state,
        displaySubSidebar: false
      }
    }
  }
}

export const UIProvider: FC = (props) => {
  const [state, dispatch] = React.useReducer(uiReducer, initialState)

  const openSubSidebar = () => dispatch({ type: 'OPEN_SUB_SIDEBAR' })
  const closeSubSidebar = () => dispatch({ type: 'CLOSE_SUB_SIDEBAR' })
  const toggleSubSidebar = () =>
    state.displaySubSidebar
      ? dispatch({ type: 'CLOSE_SUB_SIDEBAR' })
      : dispatch({ type: 'OPEN_SUB_SIDEBAR' })

  const value = useMemo(
    () => ({
      ...state,
      openSubSidebar,
      closeSubSidebar,
      toggleSubSidebar,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  )

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <UIContext.Provider value={value} {...props} />
}

export const useUI = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const context = React.useContext(UIContext)
  if (context === undefined) {
    throw new Error(`useUI must be used within a UIProvider`)
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return context
}

export const ManagedUIContext: FC = ({ children }) => (
  <UIProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </UIProvider>
)
