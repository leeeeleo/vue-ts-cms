let BASE_URL = ''
const TIME_OUT = 1000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
  TIME_OUT
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/api'
  TIME_OUT
} else {
  BASE_URL = '/api'
  TIME_OUT
}
export { BASE_URL, TIME_OUT }
