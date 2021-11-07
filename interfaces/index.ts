// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Boulder = {
  id: number
  nameEN: string
  nameJP: string
  rocks: Rock[]
}

export type Rock = {
  id: number
  nameEN: string
  nameJP: string
  latitude: number
  longitude: number
  routes: Route[]
}

export type Route = {
  id: number
  label: string
  nameEN: string
  nameJP: string
  gradeJP: string
  gradeUSA: string
}