import { Article } from 'src/types'

// List of actions available
export enum ArticleTypes {
  fetchArticlesRequest = 'fetchArticlesRequest',
  fetchArticlesSucceed = 'fetchArticlesSucceed',
  fetchArticlesFailed = 'fetchArticlesFailed',
}

export type FetchArticlesRequestPayload = {}

export type FetchArticlesSuccessPayload = {
  articles: Article[]
}
