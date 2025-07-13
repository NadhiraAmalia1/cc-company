// src/types/randomUser.ts
export type RandomUser = {
  login: {
    uuid: string
  }
  name: {
    first: string
    last: string
  }
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  email: string
  phone: string
  location: {
    city: string
    country: string
  }
}