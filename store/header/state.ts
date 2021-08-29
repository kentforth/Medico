export interface IHeader {
  searchType: string
  placeholder: string
}

export const initState = ():IHeader => ({
  searchType: 'Dashboard',
  placeholder: 'search a dashboard'
})
export default initState
