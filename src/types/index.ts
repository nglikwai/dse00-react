export type Post = {
  description: string
  favour: number
  popular: number
  author: { username: string }
  category: string
  reviews: Review[]
  _id: string
  title: string
  images: []
  createdAt: Date
  updatedAt: Date
}

export type Review = {
  author: {
    username: string
    _id: string
    grade: string
    level: number
  }
  reply: string[]
  replyAuthor: string[]
  _id: string
  body: string
  post: string
  createdAt: Date
  updatedAt: Date
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
  isPost: boolean
}

export type User = {
  isLogin: boolean
  reserveNumber: number[]
  isPost: boolean
  _id: string
  name: string
  role: string
  email: string
  fetching: boolean
  createdAt: string
  avatar: { public_id: string; url: string }
}

export type Reply = string[]
export type ReplyAuthor = string[]

export type State = {
  post: { result: Post[]; currentPage: number }
  cutoff: { result: Cutoff[] }
  user: { isDarkmode: boolean }
}

export type Cutoff = {
  '2': number[]
  '3': number[]
  '4': number[]
  '5': number[]
  '6': number[]
  '7': number[]
  category: string
  createdAt: Date
  updatedAt: Date
  title: string
  years: string[]
  fullScore: number[]
}
