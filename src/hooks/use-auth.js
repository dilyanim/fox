import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id, name } = useSelector((state) => state.user);
  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
