import { ADD_RECIPE } from '../constants/action-types';

export function addRecipe(payload) {
  return { type: ADD_RECIPE, payload }
};

export function getData() {
  return { type: "DATA_REQUESTED" };
}
