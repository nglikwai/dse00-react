export type Tutor = {
  _id: string
  name: string
  intro: string
  location: string[]
  teachingSubjects: string[]
  teachingSubjectsPrice: number[]
  gender: string
  school: string
}

export type CaseUnit = {
  _id: string
  name: string
  subject: string
  price: number
  form: number
  region: string
  building: string
  case: number
  hour: number
  lession: number
  createdAt: string
  gender: string
  isTutor: boolean
}

export type User = {
  isLogin: boolean
  reserveNumber: number[]
  isTutor: boolean
  _id: string
  name: string
  role: string
  email: string
  fetching: boolean
  createdAt: string
  avatar: { public_id: string; url: string }
}
