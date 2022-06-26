import { Tutor } from 'src/types'

// List of actions available
export enum TutorTypes {
  fetchTutorsRequest = 'fetchTutorsRequest',
  fetchTutorsSucceed = 'fetchTutorsSucceed',
  fetchTutorsFailed = 'fetchTutorsFailed',
  searchTutorsRequest = 'searchTutorsRequest',
  searchTutorsSucceed = 'searchTutorsSucceed',
  searchTutorsFailed = 'searchTutorsFailed',
}

export type FetchTutorsRequestPayload = {}

export type SearchTutorsRequestPayload = {
  selectedPlace: string
  selectedPrice: number
  selectedSubject: string
  selectedGenderIndex: number
}

export type FetchTutorsSuccessPayload = {
  tutors: Tutor[]
}
