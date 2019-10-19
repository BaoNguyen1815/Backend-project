export default {
  rootPath:
    process.env.REACT_APP_STATE === "localhost" ? "http://curnonwatch-api.herokuapp.com" : ""
};
