import { useState } from "react";

export function useChoices(openItem, order) {
  const readycChoice = openItem.choice ? openItem.choice : openItem.choices;
  const [choice, setChoice] = useState(readycChoice);
  function changeChoices(e) {
    setChoice(e.target.value);
  }
  return { choice, changeChoices };
}
