import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  //this function creates a form component that includes and input
  //field for the items name, a dropdown menu for item category and a submit button.
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
