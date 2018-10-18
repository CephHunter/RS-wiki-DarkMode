// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-alpha.2
// ==/UserScript==
(function() {var css = `
.oo-ui-indicator-alert {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#000"><title>alert</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-alert {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#f8f9fa"><title>alert</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></g></svg>');
}
.oo-ui-indicator-clear {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#000"><title>clear</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-clear {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#f8f9fa"><title>clear</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/></g></svg>');
}
.oo-ui-indicator-up {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#000"><title>up</title><path d="M11 7.974l-.965 1.052L6 5.168 2.053 9.026 1 7.974l5-5 5 5"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-up {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#f8f9fa"><title>up</title><path d="M11 7.974l-.965 1.052L6 5.168 2.053 9.026 1 7.974l5-5 5 5"/></g></svg>');
}
.oo-ui-indicator-down {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#000"><title>down</title><path d="M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-down {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><g fill="#f8f9fa"><title>down</title><path d="M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5"/></g></svg>');
}
.oo-ui-indicator-required {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#000"><title>required</title><path d="M8.5 0h3v20h-3z"/><path d="M19.41 13.701l-1.5 2.598L.59 6.3l1.5-2.598z"/><path d="M17.91 3.701l1.5 2.598-17.32 10-1.5-2.598z"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-required {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#f8f9fa"><title>required</title><path d="M8.5 0h3v20h-3z"/><path d="M19.41 13.701l-1.5 2.598L.59 6.3l1.5-2.598z"/><path d="M17.91 3.701l1.5 2.598-17.32 10-1.5-2.598z"/></g></svg>');
}
.oo-ui-indicator-search {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#000"><title>search</title><path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z"/></svg>');
}
.oo-ui-image-invert.oo-ui-indicator-search {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="#f8f9fa"><title>search</title><path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z"/></g></svg>');
}
.oo-ui-fieldLayout-disabled > .oo-ui-fieldLayout-body > .oo-ui-fieldLayout-header > .oo-ui-labelElement-label {
  color: #72777d;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #dfdfdf;
  background: #595959;
  border-color: #595959;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:hover {
  color: #dfdfdf;
  background: #606060;
  border-color: #606060;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:active:focus {
  color: #dfdfdf;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-buttonElement-active.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-buttonElement-active.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-buttonElement-active.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #265588;
  border-color: #265588;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #99c4f1;
  background: #595959;
  border-color: #595959;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:hover {
  color: #99c4f1;
  background: #606060;
  border-color: #606060;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:active:focus {
  color: #99c4f1;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #265588;
  border-color: #265588;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:hover {
  color: #f8f8f8;
  background: #2e66a4;
  border-color: #2e66a4;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:active:focus {
  color: #f8f8f8;
  background: #1e446c;
  border-color: #1e446c;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #d63434;
  background: #595959;
  border-color: #595959;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:hover {
  color: #d63434;
  background: #606060;
  border-color: #606060;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:active:focus {
  color: #d63434;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #b32424;
  border-color: #b32424;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:hover {
  color: #f8f8f8;
  background: #c82828;
  border-color: #c82828;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > a.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > input.oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > button.oo-ui-buttonElement-button:active:focus {
  color: #f8f8f8;
  background: #9e2020;
  border-color: #9e2020;
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > a.oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > input.oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > button.oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > a.oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > input.oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > button.oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > a.oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > input.oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > button.oo-ui-buttonElement-button:active {
  color: #858585;
  background: #323232;
  border-color: #323232;
}
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex],
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:hover,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:active {
  color: #c5c5c5;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex],
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:hover,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:active {
  color: #99c4f1;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex],
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:hover,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button[tabindex]:active {
  color: #d63434;
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button[tabindex],
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button[tabindex]:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button[tabindex]:active {
  color: #858585;
}
.oo-ui-buttonGroupWidget.oo-ui-widget-enabled .oo-ui-buttonElement:not(:first-child):not(:last-child) > .oo-ui-buttonElement-button,
.oo-ui-buttonSelectWidget.oo-ui-widget-enabled .oo-ui-buttonElement:not(:first-child):not(:last-child) > .oo-ui-buttonElement-button {
  border-right-color: #7f7f7f;
  border-left-color: #7f7f7f;
}
.oo-ui-buttonGroupWidget.oo-ui-widget-enabled .oo-ui-buttonElement:last-child > .oo-ui-buttonElement-button,
.oo-ui-buttonSelectWidget.oo-ui-widget-enabled .oo-ui-buttonElement:last-child > .oo-ui-buttonElement-button {
  border-left-color: #7f7f7f;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-webkit-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-ms-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input:hover,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea:hover {
  border-color: #6a6e75;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled:hover input,
.oo-ui-textInputWidget.oo-ui-widget-enabled:hover textarea {
  border-color: #6a6e75;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly],
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly] {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
  background-color: #262626;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::-webkit-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::-ms-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]:hover,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]:hover {
  border-color: #6a6e75;
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
  opacity: 0.5;
  text-shadow: none;
  -webkit-text-fill-color: #c5c5c5;
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::-webkit-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::-ms-input-placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::placeholder {
  color: #929292;
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input:hover,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea:hover {
  border-color: #6a6e75;
}
.oo-ui-checkboxInputWidget [type='checkbox'] + span {
  background-color: #353535;
  border-color: #52555a;
}
.oo-ui-checkboxInputWidget.oo-ui-widget-enabled [type='checkbox']:checked + span {
  background-color: #2f69a8;
  border-color: #2f69a8;
}
.oo-ui-checkboxInputWidget [type='checkbox']:disabled + span {
  background-color: #323232;
  border-color: #323232;
  opacity: 0.5;
}
.oo-ui-radioInputWidget [type='radio'] + span {
  background-color: #353535;
  border-color: #52555a;
}
.oo-ui-radioInputWidget.oo-ui-widget-enabled [type='radio']:checked + span {
  border-color: #2f69a8;
}
.oo-ui-radioInputWidget [type='radio']:disabled + span {
  background-color: #323232;
  border-color: #323232;
  opacity: 0.5;
}
.oo-ui-radioInputWidget [type='radio']:disabled:checked + span {
  background-color: #323232;
  border-color: #2f69a8;
}
.oo-ui-dropdownInputWidget-php {
  border-color: #52555a;
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select {
  background-color: #353535;
  color: #c5c5c5;
  border-color: #52555a;
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select:hover {
  background-color: #353535;
  color: #c5c5c5;
  border-color: #52555a;
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select option {
  background: #383838;
  color: #c5c5c5;
}
.oo-ui-dropdownInputWidget.oo-ui-widget-disabled select {
  background-color: #353535;
  color: #c5c5c5;
  border-color: #52555a;
  opacity: 0.5;
}
.oo-ui-progressBarWidget {
  background-color: #353535;
  border-color: #52555a;
}
.oo-ui-progressBarWidget.oo-ui-widget-enabled .oo-ui-progressBarWidget-bar {
  background-color: #2f69a8;
}
.oo-ui-progressBarWidget.oo-ui-widget-disabled .oo-ui-progressBarWidget-bar {
  background-color: #595959;
}
.mw-widget-dateInputWidget-handle {
  background-color: #353535;
  border-color: #52555a;
}
.mw-widget-dateInputWidget-empty .mw-widget-dateInputWidget-handle {
  color: #c5c5c5;
}
.sg-red,
.nocell {
  background: #58120b;
  color: #c5c5c5;
}
.sg-yellow,
.maybecell {
  background: #625e0f;
  color: #c5c5c5;
}
.sg-green,
.yescell {
  background: #1e5400;
  color: #c5c5c5;
}
.coins-pos {
  color: #5e9ec4;
}
.coins-neg {
  color: #d72b16;
}
.portal-link a {
  background-color: #323232;
}
.portal-link a,
.portal-link a:visited,
.portal-link a:active,
.portal-link a:link {
  color: #c5c5c5;
}
.portal-link a:hover {
  background-color: #656565;
  color: #dfdfdf;
}
table.alternating-rows tr:nth-child(even) {
  background-color: #2b2b2b;
}
.status-active {
  background-color: #006d13;
  color: #c5c5c5;
}
.status-inactive {
  background-color: #58120b;
  color: #c5c5c5;
}
.attribute-value {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5;
}
.attribute-total td,
.attribute-total th,
.attribute-total .attribute-value {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5;
}
div.gifresize,
div.thumbinner,
div.extimage {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
div.gifresize .caption,
div.thumbinner .caption,
div.extimage .caption,
div.gifresize .thumbcaption,
div.thumbinner .thumbcaption,
div.extimage .thumbcaption {
  width: auto;
  color: #c5c5c5;
  border-color: #52555a;
  background: #323232;
  border: none;
  border-top: solid 1px #52555a;
}
div.musicplayer {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
.mwe-math-element img {
  -webkit-filter: invert(0.85);
          filter: invert(0.85);
}
.gallery .gallerybox .thumb {
  background-color: #323232;
  border-color: #52555a;
}
.gallery .gallerytext {
  color: #acacac;
}
pre {
  border: solid 1px #424242;
  background-color: #353535;
}
code {
  border: solid 1px #424242;
  background-color: #353535;
}
hr {
  border-color: #52555a;
}
select {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
select::-webkit-input-placeholder {
  color: #929292;
}
select::-ms-input-placeholder {
  color: #929292;
}
select::placeholder {
  color: #929292;
}
select:hover {
  border-color: #6a6e75;
}
textarea {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
textarea::-webkit-input-placeholder {
  color: #929292;
}
textarea::-ms-input-placeholder {
  color: #929292;
}
textarea::placeholder {
  color: #929292;
}
textarea:hover {
  border-color: #6a6e75;
}
textarea::-webkit-scrollbar {
  width: 13px;
}
textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: hsl(0, 0%, 15%);
  border: solid 1px hsl(0, 0%, 17%);
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: hsl(0, 0%, 25%);
  border: 1px solid hsl(0, 0%, 10%);
}
textarea::-webkit-scrollbar-corner {
  background-color: transparent;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #c5c5c5;
  border-color: #52555a;
}
ul {
  /* no important */
  list-style-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='5' height='13'%3E %3Ccircle cx='2.5' cy='9.5' r='2.5' fill='#c5c5c5'/%3E %3C/svg%3E");
}
input[type="search"],
input[type="text"],
input[type="number"],
.mw-ui-input,
.mw-ui-input-inline {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
input[type="search"]::-webkit-input-placeholder,
input[type="text"]::-webkit-input-placeholder,
input[type="number"]::-webkit-input-placeholder,
.mw-ui-input::-webkit-input-placeholder,
.mw-ui-input-inline::-webkit-input-placeholder {
  color: #929292;
}
input[type="search"]::-ms-input-placeholder,
input[type="text"]::-ms-input-placeholder,
input[type="number"]::-ms-input-placeholder,
.mw-ui-input::-ms-input-placeholder,
.mw-ui-input-inline::-ms-input-placeholder {
  color: #929292;
}
input[type="search"]::placeholder,
input[type="text"]::placeholder,
input[type="number"]::placeholder,
.mw-ui-input::placeholder,
.mw-ui-input-inline::placeholder {
  color: #929292;
}
input[type="search"]:hover,
input[type="text"]:hover,
input[type="number"]:hover,
.mw-ui-input:hover,
.mw-ui-input-inline:hover {
  border-color: #6a6e75;
}
input[type="submit"],
input[type="reset"],
input[type="button"],
.button,
button {
  color: #dfdfdf;
  background-image: none;
  background-color: #265588;
  border-color: #265588;
  border-style: solid;
}
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:hover,
button:hover,
input[type="submit"]:active,
input[type="reset"]:active,
input[type="button"]:active,
.button:active,
button:active,
input[type="submit"].active,
input[type="reset"].active,
input[type="button"].active,
.button.active,
button.active {
  color: #dfdfdf;
  background-image: none;
  background-color: #316eb0;
  border-color: #316eb0;
}
input[type="submit"].secondary,
input[type="reset"].secondary,
input[type="button"].secondary,
.button.secondary,
button.secondary {
  color: #dfdfdf;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
}
input[type="submit"].secondary:hover,
input[type="reset"].secondary:hover,
input[type="button"].secondary:hover,
.button.secondary:hover,
button.secondary:hover,
input[type="submit"].secondary:active,
input[type="reset"].secondary:active,
input[type="button"].secondary:active,
.button.secondary:active,
button.secondary:active,
input[type="submit"].secondary.active,
input[type="reset"].secondary.active,
input[type="button"].secondary.active,
.button.secondary.active,
button.secondary.active {
  color: #dfdfdf;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c;
}
table.wikipedia {
  background: #151515;
  border: none;
}
.messagebox,
.official,
.forumheader {
  background-color: #151515;
}
.messagebox.obsolete,
.messagebox.info,
.messagebox.action,
.messagebox.file,
.messagebox.warn,
.messagebox.disambig,
.messagebox.safe,
.messagebox.unsafe,
.messagebox.easter,
.messagebox.halloween,
.messagebox.thanksgiving,
.messagebox.christmas {
  background: #151515;
}
.noarticletext .tile {
  background-color: #151515;
  border-color: #52555a;
}
.editnotice {
  background: #151515;
  color: #c5c5c5;
  border-color: #52555a;
}
#mw-history-search {
  background-color: #151515;
  border-color: #52555a;
}
#pagehistory li {
  border-color: #1e1e1e;
}
#pagehistory li.selected {
  background-color: #2b2b2b;
  color: #c5c5c5;
  border-color: #1e1e1e;
}
.diff,
.diff-otitle,
.diff-ntitle,
.diff-deletedline,
.diff-addedline,
.EditPageEditor #diff {
  background-color: #1e1e1e;
  color: #c5c5c5;
}
td.diff-context {
  background: #2b2b2b;
  border-color: #2b2b2b;
  color: #c5c5c5;
}
.diffchange {
  color: #222222;
}
#viewingold-warning,
#viewingnew-warning {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
#mw-revision-info,
#mw-revision-info-current,
#mw-revision-nav {
  color: #c5c5c5;
}
.infobox {
  background-color: #323232;
  color: #c5c5c5;
  border: none;
}
table.wikitable,
table.article-table {
  background-color: #323232;
  color: #c5c5c5;
  border: none;
}
table.wikitable > * > tr > td,
table.article-table > * > tr > td {
  border-color: #52555a;
}
table.wikitable > * > tr > th,
table.article-table > * > tr > th {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5;
}
table.wikitable > * > tr > th a,
table.article-table > * > tr > th a,
table.wikitable > * > tr > th a:visited,
table.article-table > * > tr > th a:visited,
table.wikitable > * > tr > th a:active,
table.article-table > * > tr > th a:active,
table.wikitable > * > tr > th a:link,
table.article-table > * > tr > th a:link {
  color: #6bbaea;
}
table.wikitable > * > tr > th a.new,
table.article-table > * > tr > th a.new,
table.wikitable > * > tr > th a:visited.new,
table.article-table > * > tr > th a:visited.new,
table.wikitable > * > tr > th a:active.new,
table.article-table > * > tr > th a:active.new,
table.wikitable > * > tr > th a:link.new,
table.article-table > * > tr > th a:link.new {
  color: #ba0000;
}
table.lighttable .highlight-over {
  background-color: #236100;
}
table.lighttable .highlight-on {
  background-color: #1e5400;
}
table.jquery-tablesorter th.headerSort {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="#c5c5c5"> <path d="M14.5 5l-4 4-4-4zM14.5 4l-4-4-4 4z"/> </svg>');
}
table.jquery-tablesorter th.headerSortUp {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M6.5 4l4-4 4 4z"/> </svg>');
}
table.jquery-tablesorter th.headerSortDown {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M14.5 0l-4 4-4-4z"/> </svg>');
}
.table-na {
  background: #2b2b2b;
}
.rsw-infobox {
  background-color: #323232;
}
.rsw-infobox .infobox-header {
  color: #c5c5c5;
  background-color: #265588;
  border-bottom-color: #323232;
}
.rsw-infobox .infobox-subheader {
  background-color: #2f69a8;
  color: #dfdfdf;
  border-top-color: #323232;
  border-bottom-color: #323232;
}
.rsw-infobox .infobox-subheader a {
  color: #dfdfdf;
}
.rsw-infobox .infobox-image.bordered-image {
  border-color: #52555a;
}
.rsw-infobox .infobox-map {
  border-top-color: #323232;
}
.rsw-infobox th:not([colspan="2"]) {
  border-left-color: #52555a;
  border-right-color: #2f69a8;
}
.rsw-infobox th:not(.infobox-header):not(.infobox-subheader) {
  border-left-color: #52555a;
}
.rsw-infobox td:not(.infobox-image):not(.infobox-map) {
  border-right-color: #52555a;
}
.rsw-infobox td[colspan="2"]:not(.infobox-image):not(.infobox-map) {
  border-color: #52555a;
}
table.wikitable tr[style*="background"] td,
table.wikitable tr[bgcolor] td,
table.wikitable td[style*="background"],
table.wikitable td[bgcolor],
table.wikitable th[style*="background"] {
  color: #3a3a3a;
}
table.wikitable tr[style*="background"] td a,
table.wikitable tr[bgcolor] td a,
table.wikitable td[style*="background"] a,
table.wikitable td[bgcolor] a,
table.wikitable th[style*="background"] a {
  color: #438ab5;
}
table {
  border-color: #52555a;
}
table.archive {
  background-color: #323232 !important;
  border: solid 1px #52555a !important;
}
.GE-set-cost tr:last-of-type td {
  background: #2b2b2b !important;
}
.questdetails {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
.questdetails .questdetails-header {
  background-color: #2b2b2b;
}
.questdetails #rs-qc-form {
  background: none;
}
.questreq ul {
  border-left: 1px dotted #9f9f9f;
}
blockquote {
  border-left: solid 3px #52555a;
  color: #acacac;
}
blockquote p {
  border: none;
}
.pullquote {
  color: #acacac;
}
.navbox {
  color: #c5c5c5;
}
.navbox,
.navbox .navbox-subgroup {
  background-color: #1e1e1e;
}
.navbox .navbox-list,
.navbox .navbox-group {
  border-color: #1e1e1e;
}
.navbox .navbox-group {
  background: #2b2b2b;
}
.navbox #navbox-title,
.navbox .navbox-footer {
  border-color: #1e1e1e;
  color: #c5c5c5;
  background: #265588;
}
.navbox #navbox-title a,
.navbox .navbox-footer a {
  color: #c5c5c5;
}
.navbox .navbox-collapsible #navbox-title,
.navbox .navbox-collapsible .navbox-footer {
  background-color: #2f69a8;
}
.documentation {
  background-color: #262626;
  color: #c5c5c5;
}
.shortcut {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
.tabberlive ul.tabbernav li.tabberactive a {
  color: #dfdfdf;
  background-image: none;
  background-color: #265588;
  border-color: #265588;
  border-style: solid;
  border: none;
}
.tabberlive ul.tabbernav li.tabberactive a:hover,
.tabberlive ul.tabbernav li.tabberactive a:active,
.tabberlive ul.tabbernav li.tabberactive a.active {
  color: #dfdfdf;
  background-image: none;
  background-color: #316eb0;
  border-color: #316eb0;
}
.tabberlive ul.tabbernav li a {
  background-color: #262626;
}
.tabberlive ul.tabbernav li a,
.tabberlive ul.tabbernav li a:visited,
.tabberlive ul.tabbernav li a:active,
.tabberlive ul.tabbernav li a:link {
  color: #c5c5c5;
}
.tabberlive ul.tabbernav li a:hover {
  background-color: #3f3f3f;
}
.tabberlive div.tabbertab {
  background-color: #262626;
}
.infobox-bonuses td {
  border-color: #52555a;
  background-color: #323232;
}
.infobox-bonuses th {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5;
}
.infobox-monster .offensive-header {
  background-color: #58120b;
}
.infobox-monster .offensive-subheader {
  color: #861c10;
  background-color: #e6bbb3;
}
.infobox-monster .defensive-header {
  background-color: #356e90;
}
.infobox-monster .defensive-subheader {
  color: #32637c;
  background-color: #86bedc;
}
.infobox-monster .slayer-header {
  background-color: #464646;
}
.references > li:target {
  background-color: #383838;
}
.transcript {
  background-color: #262626;
}
td.famtreeleaf {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
#alphabetical-header {
  background-color: #151515;
  border-color: #222222;
}
.mmgtable-details {
  border-color: #52555a;
}
.mw-body {
  color: #c5c5c5;
  background-color: #1e1e1e;
  border-color: #52555a;
  box-shadow: 0 0 7px rgba(30, 30, 30, 0.8);
}
a,
image a,
table.wikitable a,
table.prettytable a,
table.messagebox a,
div.vectorTabs li a,
div.vectorMenu li a,
div#mw-panel div.portal div.body ul li a,
a:visited,
image a:visited,
table.wikitable a:visited,
table.prettytable a:visited,
table.messagebox a:visited,
div.vectorTabs li a:visited,
div.vectorMenu li a:visited,
div#mw-panel div.portal div.body ul li a:visited,
a:active,
image a:active,
table.wikitable a:active,
table.prettytable a:active,
table.messagebox a:active,
div.vectorTabs li a:active,
div.vectorMenu li a:active,
div#mw-panel div.portal div.body ul li a:active,
a:link,
image a:link,
table.wikitable a:link,
table.prettytable a:link,
table.messagebox a:link,
div.vectorTabs li a:link,
div.vectorMenu li a:link,
div#mw-panel div.portal div.body ul li a:link {
  color: #6bbaea;
}
a.new,
image a.new,
table.wikitable a.new,
table.prettytable a.new,
table.messagebox a.new,
div.vectorTabs li a.new,
div.vectorMenu li a.new,
div#mw-panel div.portal div.body ul li a.new,
a:visited.new,
image a:visited.new,
table.wikitable a:visited.new,
table.prettytable a:visited.new,
table.messagebox a:visited.new,
div.vectorTabs li a:visited.new,
div.vectorMenu li a:visited.new,
div#mw-panel div.portal div.body ul li a:visited.new,
a:active.new,
image a:active.new,
table.wikitable a:active.new,
table.prettytable a:active.new,
table.messagebox a:active.new,
div.vectorTabs li a:active.new,
div.vectorMenu li a:active.new,
div#mw-panel div.portal div.body ul li a:active.new,
a:link.new,
image a:link.new,
table.wikitable a:link.new,
table.prettytable a:link.new,
table.messagebox a:link.new,
div.vectorTabs li a:link.new,
div.vectorMenu li a:link.new,
div#mw-panel div.portal div.body ul li a:link.new {
  color: #ba0000;
}
.mw-body-content a.external,
.mw-body-content a.extiw,
.mw-body-content a.external:visited,
.mw-body-content a.extiw:visited,
.mw-body-content a.external:active,
.mw-body-content a.extiw:active,
.mw-body-content a.external:link,
.mw-body-content a.extiw:link {
  color: #6bbaea;
}
.mw-body-content a.external.new,
.mw-body-content a.extiw.new,
.mw-body-content a.external:visited.new,
.mw-body-content a.extiw:visited.new,
.mw-body-content a.external:active.new,
.mw-body-content a.extiw:active.new,
.mw-body-content a.external:link.new,
.mw-body-content a.extiw:link.new {
  color: #ba0000;
}
#mw-indicator-mw-helplink a {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c5c5c5"> <path d="M12.001 2.085c-5.478 0-9.916 4.438-9.916 9.916 0 5.476 4.438 9.914 9.916 9.914 5.476 0 9.914-4.438 9.914-9.914 0-5.478-4.438-9.916-9.914-9.916zm.001 18c-4.465 0-8.084-3.619-8.084-8.083 0-4.465 3.619-8.084 8.084-8.084 4.464 0 8.083 3.619 8.083 8.084 0 4.464-3.619 8.083-8.083 8.083z"/> <path d="M11.766 6.688c-2.5 0-3.219 2.188-3.219 2.188l1.411.854s.298-.791.901-1.229c.516-.375 1.625-.625 2.219.125.701.885-.17 1.587-1.078 2.719-.953 1.186-1 3.655-1 3.655h1.969s.135-2.318 1.041-3.381c.603-.707 1.443-1.338 1.443-2.494s-1.187-2.437-3.687-2.437zM11 16h2v2h-2z"/> </svg>') left center no-repeat;
}
body {
  background-color: #262626;
  background-image: url("https://i.imgur.com/AFaXBVa.jpg");
}
#mw-panel .portal h3 {
  color: #c5c5c5;
}
#toc {
  background-color: #323232;
}
#toc .toctitle {
  border: solid 1px #52555a;
  background: #2b2b2b;
}
#toc .toctitle h2 {
  color: #c5c5c5;
}
#toc .toctitle a,
#toc .toctitle a:visited,
#toc .toctitle a:active,
#toc .toctitle a:link {
  color: #6bbaea;
}
#toc .toctitle a.new,
#toc .toctitle a:visited.new,
#toc .toctitle a:active.new,
#toc .toctitle a:link.new {
  color: #ba0000;
}
#toc > ul {
  border-color: #52555a;
}
#toc ul ul {
  border-color: #acacac;
}
#toc .toclevel-1 a {
  color: #c5c5c5;
}
#toc .toclevel-2 a {
  color: #acacac;
}
#contentSub,
#contentSub2 {
  color: #acacac;
}
#footer ul li {
  color: #b8b8b8;
}
div.vectorTabs {
  padding: 0;
  background: #262626;
}
#mw-head .vectorTabs ul li {
  background-color: #262626;
}
#mw-head .vectorTabs ul li.selected {
  background-color: #1e1e1e;
  border: solid 1px #52555a;
  border-bottom: none;
}
#mw-head .vectorTabs ul li.selected span {
  position: relative;
  top: -1px;
}
#mw-head .vectorTabs ul li.selected a {
  color: #c5c5c5;
}
#mw-head .vectorTabs ul li:hover {
  background-color: #323232;
}
#mw-head #p-cactions.vectorMenu h3 {
  background: #262626;
}
#mw-head #p-cactions.vectorMenu h3 span {
  color: #c5c5c5;
}
#mw-head #p-cactions.vectorMenu h3 span:after {
  -webkit-filter: invert(1);
          filter: invert(1);
}
#mw-head #p-cactions.vectorMenu:hover h3 {
  background: #323232;
}
#mw-head .vectorMenu .menu {
  background: #2b2b2b;
  border-color: #52555a;
}
#mw-head .vectorMenu .menu li:hover {
  background: #383838;
}
#mw-head #simpleSearch {
  background: #353535;
}
#mw-head #simpleSearch #searchInput {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
  border: none;
}
#mw-head #simpleSearch #searchInput::-webkit-input-placeholder {
  color: #929292;
}
#mw-head #simpleSearch #searchInput::-ms-input-placeholder {
  color: #929292;
}
#mw-head #simpleSearch #searchInput::placeholder {
  color: #929292;
}
#mw-head #simpleSearch #searchInput:hover {
  border-color: #6a6e75;
}
#mw-head #simpleSearch #searchButton {
  background-color: transparent;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"> <g fill="none" stroke="#c5c5c5" stroke-width="2"> <path d="M11.29 11.71l-4-4"/> <circle cx="5" cy="5" r="4"/> </g> </svg>');
  background-position: center center;
  background-repeat: no-repeat;
}
#mw-head #simpleSearch #mw-searchButton {
  display: none;
}
.mw-echo-notifications-badge::before {
  -webkit-filter: invert(1);
          filter: invert(1);
}
.suggestions-results,
.suggestions-special {
  background: #2b2b2b;
  border-color: #52555a;
}
.suggestions-result {
  color: #c5c5c5;
}
.suggestions-special .special-label {
  color: #acacac;
}
.suggestions-special .special-query {
  color: #c5c5c5;
}
.suggestions-result-current {
  background: #383838;
  color: #dfdfdf;
}
.suggestions-result-current .special-label {
  color: #c5c5c5;
}
.suggestions-result-current .special-query {
  color: #dfdfdf;
}
.catlinks {
  background: #151515;
  border-color: #52555a;
}
`;
if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        // no head yet, stick it whereever
        document.documentElement.appendChild(node);
    }
}
})();