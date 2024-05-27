import React from "react";
import Select from "react-select";

interface StatesNameType {
  value: string;
  label: string;
}
const statesName: StatesNameType[] = [
  { value: "acre", label: "Acre" },
  { value: "alagoas", label: "Alagoas" },
  { value: "bahia", label: "Bahia" },
];
export function FormState() {
  const selectState = () => <Select statesName={statesName} />;
  return (
    <>
      <h1>state</h1>
    </>
  );
}
