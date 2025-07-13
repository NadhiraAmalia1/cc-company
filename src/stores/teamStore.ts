import { create } from 'zustand'

export type TeamMember = {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

type TeamState = {
  members: TeamMember[]
  loading: boolean
  error: string | null
  setMembers: (members: TeamMember[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
}

export const useTeamStore = create<TeamState>((set) => ({
  members: [],
  loading: false,
  error: null,
  setMembers: (members) => set({ members }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))