let state;
let action = { type: "INCREASE_COUNT" };

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREASE_COUNT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function render() {
  let container = document.querySelector("#container");
  container.textContent = state.count;
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

let button = document.querySelector("#button");
button.addEventListener("click", () => {
  dispatch(action);
});

dispatch({ type: "@@INIT" });
