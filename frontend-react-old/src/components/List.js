import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { recipes: state.recipes };
};

const ConnectedList = ({ recipes }) => (
  <ul>
    {recipes.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;
