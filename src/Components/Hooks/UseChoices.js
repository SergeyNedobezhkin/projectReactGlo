import { useState } from "react";

export function UseChoices(openItem) {
  const [choice, setChoice] = useState();

  function changeChoices(e) {
    setChoice(e.target.value);
  }
  return { choice, changeChoices };
}
