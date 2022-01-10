import Cookies from 'js-cookie'
export const getUsernameFromCookie = () => {
    const username = Cookies.get('username')
    // if username cookie not found, return empty string
    return username || ''
  }
  export const setUsernameCookie = (value: any) => {
    Cookies.set('username', value, { expires: 1 }) // 1 day expiry
  }
  export const logoutUser = () => Cookies.remove('username')