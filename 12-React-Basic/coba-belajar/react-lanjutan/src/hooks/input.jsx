import React from "react";

export function useInput() {
  const [value, setValue] = React.useState("");

  onchange = (e) => {
    const currentValue = e.currentTarget.value;
    setValue(currentValue);
  };

  return [value, onchange];
}
