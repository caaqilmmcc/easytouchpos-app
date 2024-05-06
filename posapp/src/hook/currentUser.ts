import { session } from '@/data/session'

export const currentUser = () => {
  return session.user
}
