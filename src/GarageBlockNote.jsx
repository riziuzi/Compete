import { BlockNoteEditor } from "@blocknote/core";
import {
  BlockNoteView,
  darkDefaultTheme,
  lightDefaultTheme,
  Theme,
  useBlockNote,
} from "@blocknote/react";
import "@blocknote/react/style.css";

// Reshuffled Color Palette
const colorPalette = {
  primary100: "#1F3A5F",
  primary200: "#cee8ff",
  primary300: "#acc2ef",
  accent100: "#3D5A80",
  accent200: "#4d648d",
  text100: "#FFFFFF",
  text200: "#e0e0e0",
  bg100: "#0F1C2E",
  bg200: "#374357",
  bg300: "#1f2b3e",
};

// Base theme
const lightRedTheme = {
  colors: {
    editor: {
      text: colorPalette.text100,
      background: colorPalette.bg200,
    },
    menu: {
      text: colorPalette.text100,
      background: colorPalette.bg200,
    },
    tooltip: {
      text: colorPalette.text100,
      background: colorPalette.primary200,
    },
    hovered: {
      text: colorPalette.text100,
      background: colorPalette.primary200,
    },
    selected: {
      text: colorPalette.text100,
      background: colorPalette.accent200,
    },
    disabled: {
      text: colorPalette.text100,
      background: colorPalette.accent100,
    },
    shadow: colorPalette.primary300,
    border: colorPalette.primary300,
    sideMenu: colorPalette.bg300,
    highlights: lightDefaultTheme.colors.highlights,
  },
  borderRadius: 4,
  fontFamily: "Helvetica Neue, sans-serif",
};

// Changes for dark mode
const darkRedTheme = {
  ...lightRedTheme,
  colors: {
    ...lightRedTheme.colors,
    editor: {
      text: colorPalette.text100,
      background: colorPalette.bg300,
    },
    sideMenu: colorPalette.text100,
    highlights: darkDefaultTheme.colors.highlights,
  },
};

export const redTheme = {
  light: lightRedTheme,
  dark: darkRedTheme,
};
