import { Component, Store } from "../core/heropy"

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'Heropy/ parkyoungwoong',
  email: 'thesecon@gmail.com',
  blog: 'https://heropy.blog',
  github: 'https://github.com/parkyounwoong',
  repository: 'https://github.com/parkyoungwoong/vanillajs-movie-app'
})