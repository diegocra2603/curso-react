import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { AuthProvider } from './auth'

export const HeroresApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
