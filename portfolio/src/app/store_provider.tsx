'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../redux/store';
import { turnDarkMode } from '@/redux/features/theme/theme';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    const local_theme_dark_mode = localStorage.getItem("theme_dark_mode");
    storeRef.current.dispatch(turnDarkMode(local_theme_dark_mode === 'true'));
  }    

  return (
    <Provider
      store={storeRef.current}
    >
        {children}
    </Provider>
  )
}