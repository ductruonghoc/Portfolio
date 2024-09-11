'use client'
import { useRef } from 'react'
import { Provider, useSelector } from 'react-redux'
import { makeStore, AppStore } from '../redux/store';
import { selectDarkMode } from '@/redux/features/theme/theme';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <Provider
      store={storeRef.current}
    >
        {children}
    </Provider>
  )
}