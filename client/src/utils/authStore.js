import { create } from 'zustand'

const useAuthStore = create((set) => ({
  currentUser: null,
  setCurrentUser: () => set((newUser) => ({ currentUser: newUser })),
  removeCurrentUser: () => set({ currentUser: null }),
  updateCurrentUser: (updated) => set({ currentUser: updatedUser }),
}))

export default useAuthStore