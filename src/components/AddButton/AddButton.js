import { connect } from "react-redux";
import { getPhotos } from "../actions";
import NewTodo from "../components/NewTodo";

const AddButton = () => {
  <button className={`button ${isLightTheme ? "light" : "dark"}`}>
    {DOWNLOAD_MORE_BUTTON_TITLE}
  </button>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddTodo: (todo) => {
      dispatch(addTodo(todo));
    },
  };
};

export default connect(null, mapDispatchToProps)(NewTodo);
