export interface IHeader {
  searchType: string
  placeholder: string
}

export const initState = ():IHeader => ({
  searchType: 'dashboard',
  placeholder: 'search a dashboard'
})
export default initState
