export const login = () => {
  localStorage.setItem("isAuth", "true")
  return {type: "LOGIN"}
}

export const logout = () => {
  localStorage.removeItem("isAuth")
  return {type: "LOGOUT"}
}