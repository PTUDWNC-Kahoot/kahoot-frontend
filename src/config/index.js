
exports.GOOGLE_ID =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_GOOGLE_CLIENT_ID
    : "164048330398-ntkkjnhq4sb93f028cod2ou1m7nfm3cq.apps.googleusercontent.com";