import { Tutor } from 'src/types'

// List of actions available
export enum TutorTypes {
  fetchTutorsRequest = 'fetchTutorsRequest',
  fetchTutorsSucceed = 'fetchTutorsSucceed',
  fetchTutorsFailed = 'fetchTutorsFailed',
}

export type FetchTutorsRequestPayload = {}

export type FetchTutorsSuccessPayload = {
  tutors: Tutor[]
}
