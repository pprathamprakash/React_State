import React from "react";

var isDone = false;

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      {/* above is imperative programing since u are calling a function which grabs an element by it and
      applies the styling imperatively when onclick happens. Also the function is given as input becuase no () are used
      with function, and this is done so becuase if not done then as soon as program runs or refreshes the
      buy milk will automatically be crossed through because using a function name with () is calling it, and it happens in JS only
      if in HTML you used the function with () inside the element with onclick then nothing will happen and only when button is
      clicked then that function will be called, this is perhaps because JS executes its logic immediately in its environment
      but in HTML, the html can't automatically run the JS function it can only run it when something related to its property
      triggers so. */}
      <button onClick={unStrike}>Change back</button>
      {/* above is declarative programming because you aren't grabbing an element and changing its style rather you are changing
      the value of state when function is called and then chaging the appearance of element depending upon state
      so its not imperative but declarative and it needs to re-render the element to show change in appearance and property 
      This needs re-rendering because the <p> element is above and the function only updates the value of isDone var, and now
      to apply the ternary expression depending upon new value of isDone var u need to again run the <p> line in order to run ternary
      expression and then apply the styling*/}
    </div>
  );
}

export default App;
