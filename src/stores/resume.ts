import { create } from 'zustand'
import type { Resume, ResumeContent } from '../lib/supabase'

interface ResumeState {
  currentResume: Resume | null
  resumes: Resume[]
  setCurrentResume: (resume: Resume | null) => void
  setResumes: (resumes: Resume[]) => void
  updateResumeContent: (content: Partial<ResumeContent>) => void
}

export const useResumeStore = create<ResumeState>((set, get) => ({
  currentResume: null,
  resumes: [],
  setCurrentResume: (resume) => set({ currentResume: resume }),
  setResumes: (resumes) => set({ resumes }),
  updateResumeContent: (content) => {
    const { currentResume } = get()
    if (currentResume) {
      const updatedResume = {
        ...currentResume,
        content: {
          ...currentResume.content,
          ...content
        }
      }
      set({ currentResume: updatedResume })
    }
  }
}))