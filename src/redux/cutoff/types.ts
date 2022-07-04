import { Cutoff } from 'src/types'

// List of actions available
export enum CutoffTypes {
  fetchCutoffsRequest = 'fetchCutoffsRequest',
  fetchCutoffsSucceed = 'fetchCutoffsSucceed',
  fetchCutoffsFailed = 'fetchCutoffsFailed',
}

export type FetchCutoffsRequestPayload = { category: string }

export type FetchCutoffsSuccessPayload = {
  cutoffs: Cutoff[]
}
