export default {
  rootPath:
    process.env.REACT_APP_STATE === "localhost" ? "https://curnonwatch-api.herokuapp.com" : ""
};
