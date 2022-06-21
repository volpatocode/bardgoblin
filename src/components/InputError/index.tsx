import React from "react";

import { InputError } from "./styles";

export type errorType = {
  error: string;
};

export default function index({ error }: errorType) {
  return error && <InputError>{error}</InputError>;
}
