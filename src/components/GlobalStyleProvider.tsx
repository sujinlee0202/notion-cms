"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    background: #fff;
    box-sizing: border-box
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

export default function GlobalStyleProvider() {
  return <GlobalStyle />;
}
