"use client";

import React, { useState } from "react";

import Select, { AriaOnFocus } from "react-select";
import { ColourOption, colourOptions } from "../docs/data";

export default function FormState() {
  const [ariaFocusMessage, setAriaFocusMessage] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onFocus: AriaOnFocus<ColourOption> = ({ focused, isDisabled }) => {
    const msg = `Você selecionou: ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

  return (
    <form className="space-y-6 space">
      <label
        className="text-2xl font-bold leading-loose text-green-800"
        id="aria-label"
        htmlFor="selectState"
      >
        Selecione seu estado
      </label>

      {!!ariaFocusMessage && !!isMenuOpen && (
        <blockquote className="italic text-xs my-4">
          {ariaFocusMessage}
        </blockquote>
      )}

      <Select
        aria-labelledby="aria-label"
        ariaLiveMessages={{
          onFocus,
        }}
        inputId="selectState"
        name="aria-live-color"
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
        options={colourOptions}
        placeholder="Estados"
      />
      <div className="flex justify-end bottom-1">
        <button className="h-11 px-6 bg-gray-700 text-white rounded-md">
          Próximo
        </button>
      </div>
    </form>
  );
}
