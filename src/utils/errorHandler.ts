import { AxiosError } from 'axios'

const errorHandler = (error: Error, errorPrefix?: string) => {
  console.error(errorPrefix ? `error ${errorPrefix}` : 'error', error.name, error.message, error.stack)
}

const axiosErrorHandler = (error: AxiosError, errorPrefix?: string) => {
  console.error(errorPrefix ? `error ${errorPrefix}` : 'error', error.response.data)
}

export { errorHandler, axiosErrorHandler }
