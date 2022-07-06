const webLink = {
  development: 'http://localhost:4000',
  production: 'https://api-dse00.herokuapp.com',
}

const PATHNAME = {
  HOME_PAGE: '/',
  SEARCH: '/search',
  PostS: '/Posts',
  STUDENTS: '/students',
  NEW_CASE: '/students/newcase',
  FIND_Post: '/',
  WEB_LINK:
    process.env.NODE_ENV === 'development'
      ? webLink.development
      : webLink.production,
}

export default PATHNAME
