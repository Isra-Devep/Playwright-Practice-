const LOGIN_MUTATION = `mutation LogIn($email: String, $password: String) {
    userSignIn(email: $email, password: $password) {
      user {
        id
        __typename
      }
      authTokens {
        authToken
        refreshToken
        __typename
      }
      __typename
    }
  }`;
  
  module.exports = { LOGIN_MUTATION };