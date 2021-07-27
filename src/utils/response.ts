export interface Response {
  message?: string
  success: boolean
}

export function ErrorMessage(message: string): Response {
  return { message, success: false }
}

export function SuccessMesage(message?: string): Response {
  return { message, success: true }
}
