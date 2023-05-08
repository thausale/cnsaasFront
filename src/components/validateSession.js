import cookie from "cookie";

export function validateSession(request) {
  const cookies = cookie.parse(request.headers.cookie || "");

  if (!cookies.session) {
    return false;
  }

  // Here you can add your logic to validate the session data
  // and return true if the session is valid, or false otherwise
  return true;
}
