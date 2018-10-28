// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-beta.0
// ==/UserScript==
(function() {var css = `
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #e6e6e6;
  background: #595959;
  border-color: #595959
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #e6e6e6;
  background: #606060;
  border-color: #606060
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #e6e6e6;
  background: #4c4c4c;
  border-color: #4c4c4c
}
.oo-ui-buttonElement-active.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f2f2f2;
  background: #2f69a8;
  border-color: #2f69a8
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #99c4f1;
  background: #595959;
  border-color: #595959
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #99c4f1;
  background: #606060;
  border-color: #606060
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus {
  color: #99c4f1;
  background: #4c4c4c;
  border-color: #4c4c4c
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f2f2f2;
  background: #2f69a8;
  border-color: #2f69a8
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #f2f2f2;
  background: #377ac4;
  border-color: #377ac4
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus {
  color: #f2f2f2;
  background: #295c94;
  border-color: #295c94
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #d63434;
  background: #595959;
  border-color: #595959
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #d63434;
  background: #606060;
  border-color: #606060
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus {
  color: #d63434;
  background: #4c4c4c;
  border-color: #4c4c4c
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f2f2f2;
  background: #b32424;
  border-color: #b32424
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #f2f2f2;
  background: #c82828;
  border-color: #c82828
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus {
  color: #f2f2f2;
  background: #9e2020;
  border-color: #9e2020
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button {
  color: #8c8c8c;
  background: #363636;
  border-color: #363636
}
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #ccc
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #99c4f1
}
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #d63434
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button {
  color: #8c8c8c
}
.oo-ui-buttonGroupWidget.oo-ui-widget-enabled .oo-ui-buttonElement:not(:first-child):not(:last-child) > .oo-ui-buttonElement-button,
.oo-ui-buttonSelectWidget.oo-ui-widget-enabled .oo-ui-buttonElement:not(:first-child):not(:last-child) > .oo-ui-buttonElement-button {
  border-right-color: #7f7f7f;
  border-left-color: #7f7f7f
}
.oo-ui-buttonGroupWidget.oo-ui-widget-enabled .oo-ui-buttonElement:first-child > .oo-ui-buttonElement-button,
.oo-ui-buttonSelectWidget.oo-ui-widget-enabled .oo-ui-buttonElement:first-child > .oo-ui-buttonElement-button {
  border-right-color: #7f7f7f
}
.oo-ui-buttonGroupWidget.oo-ui-widget-enabled .oo-ui-buttonElement:last-child > .oo-ui-buttonElement-button,
.oo-ui-buttonSelectWidget.oo-ui-widget-enabled .oo-ui-buttonElement:last-child > .oo-ui-buttonElement-button {
  border-left-color: #7f7f7f
}
.oo-ui-buttonElement-pressed.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle,
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:active,
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:active:focus,
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:hover {
  background: #595959
}
.oo-ui-popupToolGroup.oo-ui-popupToolGroup-active > .oo-ui-popupToolGroup-handle {
  background: #595959
}
.oo-ui-checkboxInputWidget [type=checkbox] + span {
  background-color: #363636;
  border-color: #52555a
}
.oo-ui-checkboxInputWidget.oo-ui-widget-enabled [type=checkbox]:checked + span {
  background-color: #2f69a8;
  border-color: #2f69a8
}
.oo-ui-checkboxInputWidget [type=checkbox]:disabled + span {
  background-color: #363636;
  border-color: #363636;
  opacity: .5
}
.oo-ui-radioInputWidget [type=radio] + span {
  background-color: #363636;
  border-color: #52555a
}
.oo-ui-radioInputWidget.oo-ui-widget-enabled [type=radio]:checked + span {
  border-color: #2f69a8
}
.oo-ui-radioInputWidget [type=radio]:disabled + span {
  background-color: #363636;
  border-color: #363636;
  opacity: .5
}
.oo-ui-radioInputWidget [type=radio]:disabled:checked + span {
  background-color: #363636;
  border-color: #2f69a8
}
.mw-widget-dateInputWidget-handle {
  background-color: #363636;
  border-color: #52555a
}
.mw-widget-dateInputWidget-empty .mw-widget-dateInputWidget-handle {
  color: #ccc
}
.oo-ui-dropdownInputWidget-php {
  border-color: #52555a
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select {
  background-color: #363636;
  color: #ccc;
  border-color: #52555a
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select:hover {
  background-color: #363636;
  color: #ccc;
  border-color: #6a6e75
}
.oo-ui-dropdownInputWidget.oo-ui-widget-enabled select option {
  background: #323232;
  color: #ccc
}
.oo-ui-dropdownInputWidget.oo-ui-widget-disabled select {
  background-color: #363636;
  color: #ccc;
  border-color: #52555a;
  opacity: .5
}
.oo-ui-dropdownWidget-handle {
  border-color: #52555a
}
.oo-ui-dropdownWidget-open.oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle,
.oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle {
  background-color: #363636;
  color: #ccc
}
.oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle:hover {
  background-color: #363636;
  color: #ccc;
  border-color: #6a6e75
}
.oo-ui-menuSelectWidget {
  border-color: #52555a;
  background-color: #2b2b2b;
  color: #ccc
}
.oo-ui-menuOptionWidget.oo-ui-optionWidget-pressed,
.oo-ui-menuOptionWidget.oo-ui-optionWidget-selected {
  background: #383838;
  color: #99c4f1
}
.oo-ui-menuOptionWidget.oo-ui-optionWidget-pressed.oo-ui-menuOptionWidget.oo-ui-optionWidget-highlighted,
.oo-ui-menuOptionWidget.oo-ui-optionWidget-selected.oo-ui-menuOptionWidget.oo-ui-optionWidget-highlighted {
  background-color: #363636;
  color: #99c4f1
}
.oo-ui-menuOptionWidget:hover {
  background-color: #363636;
  color: #ccc
}
.oo-ui-popupToolGroup.oo-ui-widget-enabled .oo-ui-toolGroup-tools {
  border-color: #52555a;
  background-color: #2b2b2b;
  color: #ccc
}
.oo-ui-popupToolGroup.oo-ui-widget-enabled .oo-ui-tool:hover {
  background-color: #323232
}
.oo-ui-popupToolGroup.oo-ui-widget-enabled .oo-ui-tool-link .oo-ui-tool-title {
  color: #ccc
}
.oo-ui-popupToolGroup.oo-ui-widget-enabled .oo-ui-tool-active.oo-ui-widget-enabled {
  background: #383838
}
.oo-ui-popupToolGroup.oo-ui-widget-enabled .oo-ui-tool-active.oo-ui-widget-enabled .oo-ui-tool-link .oo-ui-tool-title {
  color: #99c4f1
}
.oo-ui-panelLayout-framed {
  background: #151515;
  border-color: #52555a
}
.oo-ui-windowManager-modal > .oo-ui-dialog {
  background: rgba(0,0,0,.5)
}
.oo-ui-windowManager-modal.oo-ui-windowManager-floating > .oo-ui-dialog > .oo-ui-window-frame {
  border-color: #52555a
}
.oo-ui-window-content {
  background: #1e1e1e;
  color: #ccc
}
.oo-ui-window-content .oo-ui-window-head {
  background: #2b2b2b
}
.oo-ui-window-content .oo-ui-window-body {
  outline-color: #52555a;
  z-index: 1
}
.oo-ui-window-content .oo-ui-window-foot {
  background: #2b2b2b
}
.oo-ui-window-content .oo-ui-processDialog-errors {
  background: rgba(30,30,30,.9);
  color: #ccc
}
.oo-ui-window-content .oo-ui-processDialog-errors .oo-ui-processDialog-errors-title {
  color: #ccc
}
.oo-ui-messageDialog-title {
  color: #ccc
}
.oo-ui-messageDialog-message {
  color: #b3b3b3
}
.oo-ui-messageDialog-content > .oo-ui-window-foot {
  outline-color: #52555a
}
.oo-ui-messageDialog-actions .oo-ui-actionWidget.oo-ui-widget-enabled .oo-ui-buttonElement-button:hover {
  background: #383838
}
.oo-ui-messageDialog-actions .oo-ui-actionWidget.oo-ui-widget-enabled.oo-ui-flaggedElement-progressive .oo-ui-buttonElement-button:hover .oo-ui-messageDialog-actions-horizontal .oo-ui-actionWidget {
  border-color: #52555a
}
.tdg-templateDataParamWidget-param-alias:first-child {
  background: #2f2f2f;
  border-color: #434343;
  color: #b3b3b3
}
.oo-ui-progressBarWidget,
.ve-init-mw-desktopArticleTarget-progress {
  background-color: #363636;
  border-color: #52555a
}
.oo-ui-progressBarWidget.oo-ui-widget-enabled .oo-ui-progressBarWidget-bar,
.ve-init-mw-desktopArticleTarget-progress-bar {
  background-color: #2f69a8
}
.oo-ui-progressBarWidget.oo-ui-widget-disabled .oo-ui-progressBarWidget-bar {
  background-color: #595959
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-webkit-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-ms-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea::placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input:hover,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea:hover {
  border-color: #6a6e75
}
.oo-ui-textInputWidget.oo-ui-widget-enabled:hover input,
.oo-ui-textInputWidget.oo-ui-widget-enabled:hover textarea {
  border-color: #6a6e75
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly],
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly] {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none;
  background-color: #262626
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::-webkit-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::-ms-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]::placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-enabled input[readonly]:hover,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea[readonly]:hover {
  border-color: #6a6e75
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none;
  opacity: .5;
  text-shadow: none;
  -webkit-text-fill-color: #ccc
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::-webkit-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::-webkit-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::-ms-input-placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::-ms-input-placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input::placeholder,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea::placeholder {
  color: #8c8c8c
}
.oo-ui-textInputWidget.oo-ui-widget-disabled input:hover,
.oo-ui-textInputWidget.oo-ui-widget-disabled textarea:hover {
  border-color: #6a6e75
}
.oo-ui-fieldLayout-disabled > .oo-ui-fieldLayout-body > .oo-ui-fieldLayout-header > .oo-ui-labelElement-label {
  color: #72777d
}
.oo-ui-indicator-clear {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>clear</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/></svg>')
}
.oo-ui-indicator-up {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#f8f9fa"><title>up</title><path d="M11 7.974l-.965 1.052L6 5.168 2.053 9.026 1 7.974l5-5 5 5"/></svg>')
}
.oo-ui-indicator-down {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#f8f9fa"><title>down</title><path d="M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5"/></svg>')
}
.oo-ui-icon-edit {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>edit</title><path d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/></svg>')
}
.oo-ui-image-progressive.oo-ui-icon-edit {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"><title>edit</title><path d="M16.77 8l1.94-2a1 1 0 0 0 0-1.41l-3.34-3.3a1 1 0 0 0-1.41 0L12 3.23zm-5.81-3.71L1 14.25V19h4.75l9.96-9.96-4.75-4.75z"/></svg>')
}
.oo-ui-icon-link {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>link</title><path d="M4.83 15h2.91a4.88 4.88 0 0 1-1.55-2H5a3 3 0 1 1 0-6h3a3 3 0 0 1 2.82 4h2.1a4.82 4.82 0 0 0 .08-.83v-.34A4.83 4.83 0 0 0 8.17 5H4.83A4.83 4.83 0 0 0 0 9.83v.34A4.83 4.83 0 0 0 4.83 15z"/><path d="M15.17 5h-2.91a4.88 4.88 0 0 1 1.55 2H15a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.82-4h-2.1a4.82 4.82 0 0 0-.08.83v.34A4.83 4.83 0 0 0 11.83 15h3.34A4.83 4.83 0 0 0 20 10.17v-.34A4.83 4.83 0 0 0 15.17 5z"/></svg>')
}
.oo-ui-icon-pilcrow {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"> <title> pilcrow </title> <path d="m 7.388022,2 h 9.278109 v 2 h -2 V 18 H 12.666277 V 4.0001848 H 9.333065 V 18 H 7.333138 V 9.990386 C 5.7072798,9.883573 4.2194862,9.482099 3.3271547,8.787866 2.4423848,8.087294 2,7.156403 2,5.9949814 2,4.7959481 2.4915387,3.8302979 3.4746161,3.0981365 4.4576935,2.365975 5.7621616,2 7.388022,2 Z" /> </svg>')
}
.oo-ui-image-progressive.oo-ui-icon-pilcrow {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"> <title> pilcrow </title> <path d="m 7.388022,2 h 9.278109 v 2 h -2 V 18 H 12.666277 V 4.0001848 H 9.333065 V 18 H 7.333138 V 9.990386 C 5.7072798,9.883573 4.2194862,9.482099 3.3271547,8.787866 2.4423848,8.087294 2,7.156403 2,5.9949814 2,4.7959481 2.4915387,3.8302979 3.4746161,3.0981365 4.4576935,2.365975 5.7621616,2 7.388022,2 Z" /> </svg>')
}
.oo-ui-icon-wrapping {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"> <title> wrapping </title> <path d="m 1,5 v 2 h 14 c 1.125297,0 2,0.8747028 2,2 0,1.125297 -0.874703,2 -2,2 H 14 V 9 l -3,3 3,3 v -2 h 1 c 2.198703,0 4,-1.801297 4,-4 0,-2.1987028 -1.801297,-4 -4,-4 z" /> <path d="m 1,13 h 8 v 2 H 1 Z" /> <path d="m 1,9 h 8 v 2 H 1 Z" /> </svg>')
}
.oo-ui-image-progressive.oo-ui-icon-wrapping {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"> <title> wrapping </title> <path d="m 1,5 v 2 h 14 c 1.125297,0 2,0.8747028 2,2 0,1.125297 -0.874703,2 -2,2 H 14 V 9 l -3,3 3,3 v -2 h 1 c 2.198703,0 4,-1.801297 4,-4 0,-2.1987028 -1.801297,-4 -4,-4 z" /> <path d="m 1,13 h 8 v 2 H 1 Z" /> <path d="m 1,9 h 8 v 2 H 1 Z" /> </svg>')
}
.oo-ui-icon-gotoLine {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"> <title> go to line </title> <path d="M 2,6 H 3 V 1 H 1 v 1 h 1 z m -1,9 h 2 v 1 H 2 v 1 h 1 v 1 H 1 v 1 H 4 V 14 H 1 Z M 3.5,8 H 1 v 1 h 2 v 1 H 1.5 C 1.2238576,10 1,10.223858 1,10.5 V 13 H 4 V 12 H 2 V 11 H 3.5 C 3.7761424,11 4,10.776142 4,10.5 v -2 C 4,8.2238576 3.7761424,8 3.5,8 Z" /> <path d="M 10,7.5 6,10 10,12.5 V 11 h 9 V 9 h -9 z" /> </svg>')
}
.oo-ui-icon-bigger {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>bigger</title><path d="M14 18h-1.57a.66.66 0 0 1-.44-.13.87.87 0 0 1-.25-.34l-1-2.77H5.3l-1 2.77a.83.83 0 0 1-.24.32.65.65 0 0 1-.44.15H2L7 5.47h2zm-3.85-4.7L8.42 8.72A12.66 12.66 0 0 1 8 7.37q-.1.41-.21.75t-.21.6L5.85 13.3zM15 2l3 4h-6l3-4z"/></svg>')
}
.oo-ui-icon-smaller {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>smaller</title><path d="M12 16h-1.05a.44.44 0 0 1-.29-.09.58.58 0 0 1-.17-.22l-.7-1.84H6.2l-.7 1.84a.56.56 0 0 1-.16.21.43.43 0 0 1-.29.1H4l3.31-8.35h1.38zm-2.57-3.13L8.28 9.82a8.5 8.5 0 0 1-.28-.9q-.06.27-.14.5l-.14.4-1.15 3zM15 6l3-4h-6l3 4z"/></svg>')
}
.oo-ui-icon-subscript {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>subscript</title><path d="M13.68 16h-2.42a.67.67 0 0 1-.46-.15 1.33 1.33 0 0 1-.28-.34l-2.77-4.44a2.65 2.65 0 0 1-.28.69L5 15.51a2.22 2.22 0 0 1-.29.34.58.58 0 0 1-.42.15H2l4.15-6.19L2.17 4h2.42a.81.81 0 0 1 .41.09.8.8 0 0 1 .24.26L8 8.59a2.71 2.71 0 0 1 .33-.74L10.6 4.4a.69.69 0 0 1 .6-.4h2.32l-4 5.71zm3.82-4h.5v-1h-.5a1.49 1.49 0 0 0-1 .39 1.49 1.49 0 0 0-1-.39H15v1h.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H15v1h.5a1.49 1.49 0 0 0 1-.39 1.49 1.49 0 0 0 1 .39h.5v-1h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5z"/></svg>')
}
.oo-ui-icon-superscript {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>superscript</title><path d="M17.5 1h.5V0h-.5a1.49 1.49 0 0 0-1 .39 1.49 1.49 0 0 0-1-.39H15v1h.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H15v1h.5a1.49 1.49 0 0 0 1-.39 1.49 1.49 0 0 0 1 .39h.5V8h-.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5zm-3.82 15h-2.42a.67.67 0 0 1-.46-.15 1.33 1.33 0 0 1-.28-.34l-2.77-4.44a2.65 2.65 0 0 1-.28.69L5 15.51a2.22 2.22 0 0 1-.29.34.58.58 0 0 1-.42.15H2l4.15-6.19L2.17 4h2.42a.81.81 0 0 1 .41.09.8.8 0 0 1 .24.26L8 8.59a2.71 2.71 0 0 1 .33-.74L10.6 4.4a.69.69 0 0 1 .6-.4h2.32l-4 5.71z"/></svg>')
}
.oo-ui-icon-bold {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>bold</title><path d="M8.326 11.274l1.722-4.908s1.305 3.843 1.626 4.907zM13.7 17H17L11.5 3h-3L3 17h3.3l1.24-3.496h4.92z"/></svg>')
}
.oo-ui-icon-italic {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>italic</title><path d="M8.605 11.274l3.326-6.543 1.266 6.543zM14.322 17H17L13.703 3h-3L3 17h2.678l2.047-3.995h5.808z"/></svg>')
}
.oo-ui-icon-indent {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>indent</title><path d="M1 16h18v2H1zm8-9h10v2H9zm0 4h10v2H9zM1 2h18v2H1zm5 8l-5 4V6l5 4z"/></svg>')
}
.oo-ui-icon-listBullet {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>bullet list</title><path d="M7 15h12v2H7zm0-6h12v2H7zm0-6h12v2H7z"/><circle cx="3" cy="4" r="2"/><circle cx="3" cy="10" r="2"/><circle cx="3" cy="16" r="2"/></svg>')
}
.oo-ui-icon-listNumbered {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>numbered list</title><path d="M7 15h12v2H7zm0-6h12v2H7zm0-6h12v2H7zM2 6h1V1H1v1h1v4zm-1 9h2v1H2v1h1v1H1v1h3v-5H1v1zm2.5-7H1v1h2v1H1.5a.5.5 0 0 0-.5.5V13h3v-1H2v-1h1.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/></svg>')
}
.oo-ui-icon-outdent {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>outdent</title><path d="M1 16h18v2H1zm8-9h10v2H9zm0 4h10v2H9zM1 2h18v2H1zm0 8l5 4V6l-5 4z"/></svg>')
}
.oo-ui-icon-find {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>article search</title><path d="M12.43 14.34A5 5 0 0 1 10 15a5 5 0 1 1 3.95-2L17 16.09V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 1.45-.63z"/><circle cx="10" cy="10" r="3"/></svg>')
}
.oo-ui-icon-markup {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>markup</title><path d="M6.5 3.5l-5 5L0 10l1.5 1.5 5 5L8 15l-5-5 5-5-1.5-1.5zm12 5l-5-5L12 5l5 5-5 5 1.5 1.5 5-5L20 10l-1.5-1.5z"/></svg>')
}
.oo-ui-image-progressive.oo-ui-icon-markup {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"><title>markup</title><path d="M6.5 3.5l-5 5L0 10l1.5 1.5 5 5L8 15l-5-5 5-5-1.5-1.5zm12 5l-5-5L12 5l5 5-5 5 1.5 1.5 5-5L20 10l-1.5-1.5z"/></svg>')
}
.oo-ui-icon-newline {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>newline</title><path d="M17 4v6H7V6l-6 5 6 5v-4h12V4h-2z"/></svg>')
}
.oo-ui-icon-noWikiText {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>no WikiText</title><path d="M16 3v2h1v10l2 2V3zM9 5V3H5l2 2zM1 1L0 2l1 1v14h3v-2H3V5l2 2v10h4v-2H7V9l6 6h-2v2h4l3 3 1-1-3-3zm12 10l2 2V3h-4v2h2z"/></svg>')
}
.oo-ui-icon-table {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>table</title><path d="M19.66 2.88a2 2 0 0 0-.54-.54A2 2 0 0 0 18 2H2a2 2 0 0 0-1.12.34 2 2 0 0 0-.54.54A2 2 0 0 0 0 4v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-.34-1.12zM2 6h7v4H2zm0 10v-4h7v4zm16 0h-7v-4h7zm0-6h-7V6h7z"/></svg>')
}
.oo-ui-icon-wikiText {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>Wikitext</title><path d="M1 3v14h3v-2H3V5h1V3H1zm4 0v14h4v-2H7V5h2V3H5zm12 0h-1v2h1v10h-1v2h3V3h-2zm-6 0v2h2v10h-2v2h4V3h-4z"/></svg>')
}
.oo-ui-image-progressive.oo-ui-icon-wikiText {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"><title>Wikitext</title><path d="M1 3v14h3v-2H3V5h1V3H1zm4 0v14h4v-2H7V5h2V3H5zm12 0h-1v2h1v10h-1v2h3V3h-2zm-6 0v2h2v10h-2v2h4V3h-4z"/></svg>')
}
.oo-ui-icon-image {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>image</title><path d="M18 2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1.83 15l4.09-5.25 2.92 3.51L12.92 8l5.25 7z"/></svg>')
}
.oo-ui-icon-imageGallery {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>image gallery</title><path d="M17 5H3a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM3 16l3.5-4.5 2.5 3 3.5-4.5 4.5 6zM4 2h12a2 2 0 0 1 2 2H2a2 2 0 0 1 2-2z"/></svg>')
}
.oo-ui-icon-articleSearch {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>article search</title><path d="M12.43 14.34A5 5 0 0 1 10 15a5 5 0 1 1 3.95-2L17 16.09V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 1.45-.63z"/><circle cx="10" cy="10" r="3"/></svg>')
}
.oo-ui-icon-articleRedirect {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>article redirect</title><path d="M15 1H5a2 2 0 0 0-2 2v1c0 5 2 8 7 8V9l5 4-5 4v-3c-3.18 0-5.51-.85-7-2.68V17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"/></svg>')
}
.oo-ui-icon-book {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>book</title><path d="M15 2a7.65 7.65 0 0 0-5 2 7.65 7.65 0 0 0-5-2H1v15h4a7.65 7.65 0 0 1 5 2 7.65 7.65 0 0 1 5-2h4V2zm2.5 13.5H14a4.38 4.38 0 0 0-3 1V5s1-1.5 4-1.5h2.5z"/><path d="M9 3.5h2v1H9z"/></svg>')
}
.oo-ui-icon-eye {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>eye</title><path d="M10 7.5a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 10 7.5zm0 7a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z"/></svg>')
}
.oo-ui-image-progressive.oo-ui-icon-eye {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#99c4f1"><title>eye</title><path d="M10 7.5a2.5 2.5 0 1 0 2.5 2.5A2.5 2.5 0 0 0 10 7.5zm0 7a4.5 4.5 0 1 1 4.5-4.5 4.5 4.5 0 0 1-4.5 4.5zM10 3C3 3 0 10 0 10s3 7 10 7 10-7 10-7-3-7-10-7z"/></svg>')
}
.oo-ui-icon-add {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>add</title><path d="M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z"/></svg>')
}
.oo-ui-icon-advanced {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>advanced</title><path d="M10 2.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 10 2.5zm0 11a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5z"/><path d="M12 3.29L11.5 0h-3L8 3.29a7 7 0 0 1 4 0zM8 16.71L8.5 20h3l.5-3.29a7 7 0 0 1-4 0zm8.16-10.04l2-2.68L16 1.87l-2.68 2a7 7 0 0 1 2.83 2.83zM3.84 13.33L1.87 16 4 18.13l2.68-2a7 7 0 0 1-2.83-2.83zM16.71 12l3.29-.5v-3L16.71 8a7 7 0 0 1 0 4zM3.29 8L0 8.5v3l3.29.5a7 7 0 0 1 0-4zm10.04 8.16l2.68 2L18.13 16l-2-2.68a7 7 0 0 1-2.83 2.83zM6.67 3.84L4 1.87 1.87 4l2 2.68a7 7 0 0 1 2.8-2.84z"/></svg>')
}
.oo-ui-icon-cancel {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>cancel</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM2 10a8 8 0 0 1 1.69-4.9L14.9 16.31A8 8 0 0 1 2 10zm14.31 4.9L5.1 3.69A8 8 0 0 1 16.31 14.9z"/></svg>')
}
.oo-ui-icon-close {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>close</title><path d="M3.636 2.224l14.142 14.142-1.414 1.414L2.222 3.638z"/><path d="M17.776 3.636L3.634 17.778 2.22 16.364 16.362 2.222z"/></svg>')
}
.oo-ui-icon-help {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>help</title><path d="M10.06 1C13 1 15 2.89 15 5.53a4.59 4.59 0 0 1-2.29 4.08c-1.42.92-1.82 1.53-1.82 2.71V13H8.38v-.81a3.84 3.84 0 0 1 2-3.84c1.34-.9 1.79-1.53 1.79-2.71a2.1 2.1 0 0 0-2.08-2.14h-.17a2.3 2.3 0 0 0-2.38 2.22v.17H5A4.71 4.71 0 0 1 9.51 1a5 5 0 0 1 .55 0zM8 17a1.89 1.89 0 0 1 1.77-2H10a1.87 1.87 0 0 1 2 1.73 1.22 1.22 0 0 1 0 .27 1.87 1.87 0 0 1-1.73 2 1.22 1.22 0 0 1-.27 0 1.88 1.88 0 0 1-2-1.75A1 1 0 0 1 8 17z"/></svg>')
}
.oo-ui-icon-search {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>search</title><path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z"/></svg>')
}
.oo-ui-icon-subtract {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>subtract</title><path d="M4 9h12v2H4z"/></svg>')
}
.oo-ui-icon-alert {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>alert</title><path d="M19.64 16.36L11.53 2.3A1.85 1.85 0 0 0 10 1.21 1.85 1.85 0 0 0 8.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/></svg>')
}
.oo-ui-icon-notice {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>notice</title><path d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm1 16H9v-2h2zm0-4H9V4h2z"/></svg>')
}
.oo-ui-icon-template-format-inline {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 2 20 20" fill="#f8f9fa"> <g id="inline"> <path d="M8 9v7h1V9zm7 0v7h1V9zM4 11v3h3v-3zm6 0v3h4v-3zm7 0v3h3v-3z"/> </g> </svg>')
}
.oo-ui-icon-template-format-block {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="2 2 20 20" fill="#f8f9fa"> <g id="block-rtl"> <path d="M19 6h-1v5h1zm-2 1H9v3h8zm2 6h-1v5h1zm-2 1H6v3h11z"/> </g> </svg>')
}
.oo-ui-icon-menu {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>menu</title><path d="M1 3v2h18V3zm0 8h18V9H1zm0 6h18v-2H1z"/></svg>')
}
.nocell,
.sg-red {
  background: #58120b;
  color: #ccc
}
.maybecell,
.sg-yellow {
  background: #625e0f;
  color: #ccc
}
.sg-green,
.yescell {
  background: #1e5400;
  color: #ccc
}
table.alternating-rows tr:nth-child(even) {
  background-color: #2b2b2b
}
.table-na {
  background: #2b2b2b;
  color: #b3b3b3
}
.status-active {
  background-color: #236100;
  color: #ccc
}
.status-inactive {
  background-color: #323232;
  color: #d63434
}
.censored {
  color: #000;
  background-color: #000
}
.censored a {
  text-decoration: underline
}
.censored a,
.censored a:active,
.censored a:link,
.censored a:visited {
  color: #000
}
.censored:hover {
  color: #ccc;
  background-color: #1e1e1e
}
.censored:hover a {
  color: #6bbaea
}
.tile {
  background: #323232;
  border: solid 1px transparent
}
.tile.dark {
  color: #ccc;
  background: #2b2b2b;
  border: solid 1px transparent
}
.tile.dark h2 {
  color: #e6e6e6
}
.tile.dark a {
  color: #6bbaea
}
.tile.dark .byline {
  color: #b3b3b3
}
.byline {
  color: #b3b3b3
}
.byline a,
.byline a:active,
.byline a:link,
.byline a:visited {
  color: #b3b3b3
}
.tile-halves {
  border: 1px solid transparent;
  background: #323232
}
.tile-top.tile-image {
  background-color: #323232
}
.tile-bottom {
  background: #323232;
  border-top: 1px solid #52555a
}
.tile-bottom.read-more {
  background: #2b2b2b
}
.tile-bottom.read-more a {
  color: #ccc
}
.tile-bottom.read-more:hover {
  background: #262626
}
.tile-bottom.read-more .arrow {
  -webkit-filter: invert(30%) sepia(50%) hue-rotate(175deg);
  filter: invert(30%) sepia(50%) hue-rotate(175deg)
}
.ajaxpoll {
  background: #323232;
  border: none
}
.ajaxpoll .ajaxpoll-answer-vote {
  background: #363636;
  border: solid 1px #52555a
}
.ajaxpoll .ajaxpoll-answer-vote div {
  background: #2f69a8
}
.ajaxpoll .ajaxpoll-ajax {
  color: #ccc;
  background: #444
}
.ajaxpoll .ajaxpoll-info,
.ajaxpoll .ajaxpoll-misc {
  color: #b3b3b3
}
.ajaxpoll .ajaxpoll-id-info {
  color: #323232
}
div.extimage,
div.gifresize,
div.thumbinner {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
div.extimage .caption,
div.extimage .thumbcaption,
div.gifresize .caption,
div.gifresize .thumbcaption,
div.thumbinner .caption,
div.thumbinner .thumbcaption {
  width: auto;
  color: #ccc;
  border-color: #52555a;
  background: #323232;
  border: none;
  border-top: solid 1px #52555a
}
div.musicplayer {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
.mwe-math-element img {
  -webkit-filter: invert(.85);
  filter: invert(.85)
}
.gallery .gallerybox .thumb {
  background-color: #323232;
  border-color: #52555a
}
.gallery .gallerytext {
  color: #b3b3b3
}
.gemw-header .gemw-name a {
  color: #ccc
}
.gemw-header .gemw-examine {
  color: #b3b3b3
}
.gemw-header .gemw-price::after {
  color: #b3b3b3
}
.gemw-header .gemw-updated {
  color: #b3b3b3
}
.gemw-header .gemw-time {
  color: #ccc
}
.gemw-body .gemw-section-left a {
  color: #b3b3b3
}
.gemw-body .gemw-property {
  border-top-color: #b3b3b3
}
.gemw-body .gemw-property dt {
  color: #ccc
}
.gemw-body .gemw-links {
  color: #b3b3b3
}
.gemw-body .gemw-chart {
  background: 0 0
}
.gemw-container .gemw-button {
  background: #2f69a8;
  border-color: #2f69a8
}
.gemw-container .gemw-button a,
.gemw-container .gemw-button a:active,
.gemw-container .gemw-button a:link,
.gemw-container .gemw-button a:visited {
  color: #f2f2f2
}
.gemw-container .gemw-button.secondary {
  background: #595959;
  border-color: #595959
}
.gemw-container .gemw-button.secondary a,
.gemw-container .gemw-button.secondary a:active,
.gemw-container .gemw-button.secondary a:link,
.gemw-container .gemw-button.secondary a:visited {
  color: #e6e6e6
}
GEChartBox {
  background: #1e1e1e
}
.highcharts-background {
  fill: #1e1e1e
}
.highcharts-plot-background {
  fill: #1e1e1e
}
.highcharts-legend-box {
  fill: #1e1e1e
}
table GEChartBox {
  background: #323232
}
table .highcharts-background {
  fill: #323232
}
table .highcharts-plot-background {
  fill: #323232
}
table .highcharts-legend-box {
  fill: #323232
}
#GEchartpopup {
  background: #1e1e1e
}
#GEchartpopup GEChartBox {
  background: #1e1e1e
}
#GEchartpopup .highcharts-background {
  fill: #1e1e1e
}
#GEchartpopup .highcharts-plot-background {
  fill: #1e1e1e
}
#GEchartpopup .highcharts-legend-box {
  fill: #1e1e1e
}
.highcharts-yaxis-grid .highcharts-grid-line {
  stroke: #52555a
}
.highcharts-axis-line {
  stroke: #52555a
}
.highcharts-title {
  color: #ccc!important
}
.highcharts-subtitle {
  color: #b3b3b3!important
}
.highcharts-axis-labels > text {
  fill: #b3b3b3!important
}
#GEchartpopup {
  color: #ccc
}
.highcharts-axis-title,
.highcharts-legend-item text,
.highcharts-range-label text,
.highcharts-range-selector-buttons text {
  fill: #ccc!important
}
.infobox-switch .hidden td[data-attr-param=graph] {
  background: #323232;
  color: #ccc
}
.highcharts-navigator-outline {
  stroke: #52555a
}
.highcharts-navigator-xaxis .highcharts-grid-line {
  stroke: #52555a
}
.highcharts-navigator-series .highcharts-area {
  fill: rgba(69,115,167,.3)
}
.highcharts-navigator-series .highcharts-graph {
  stroke: #618cbe
}
.zoomButton .highcharts-button-box {
  fill: #595959
}
.zoomButton:hover .highcharts-button-box {
  fill: #606060
}
.zoomButton:active .highcharts-button-box {
  fill: #4c4c4c
}
.zoomButton text {
  fill: #e6e6e6!important
}
.highcharts-label-box {
  stroke: #52555a
}
.highcharts-range-input .highcharts-label-box {
  stroke: #52555a;
  fill: #363636
}
.highcharts-range-input text {
  fill: #ccc!important
}
.highcharts-scrollbar-track {
  fill: #383838;
  stroke: #383838
}
.highcharts-scrollbar-button {
  fill: #515151;
  stroke: #515151
}
.highcharts-scrollbar-thumb {
  fill: #6a6a6a;
  stroke: #6a6a6a
}
#GEchartpopup .highcharts-scrollbar-track {
  fill: #383838;
  stroke: #383838
}
#GEchartpopup .highcharts-scrollbar-button {
  fill: #515151;
  stroke: #515151
}
#GEchartpopup .highcharts-scrollbar-thumb {
  fill: #6a6a6a;
  stroke: #6a6a6a
}
.highcharts-scrollbar-arrow {
  fill: #e6e6e6
}
.highcharts-scrollbar-rifles {
  stroke: #e6e6e6;
  stroke-width: 2px
}
.highcharts-tooltip-box path:last-of-type {
  fill: rgba(43,43,43,.85);
  stroke: #265588
}
.highcharts-tooltip-box text {
  fill: #ccc!important
}
pre {
  border: solid 1px #434343;
  background-color: #2f2f2f
}
code {
  border: solid 1px #434343;
  background-color: #2f2f2f
}
hr {
  border-color: #52555a
}
select {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
select::-webkit-input-placeholder {
  color: #8c8c8c
}
select::-ms-input-placeholder {
  color: #8c8c8c
}
select::placeholder {
  color: #8c8c8c
}
select:hover {
  border-color: #6a6e75
}
textarea {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
textarea::-webkit-input-placeholder {
  color: #8c8c8c
}
textarea::-ms-input-placeholder {
  color: #8c8c8c
}
textarea::placeholder {
  color: #8c8c8c
}
textarea:hover {
  border-color: #6a6e75
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #ccc;
  border-color: #52555a
}
ul {
  list-style-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='5' height='13'%3E %3Ccircle cx='2.5' cy='9.5' r='2.5' fill='#cccccc'/%3E %3C/svg%3E")
}
.mw-input input,
.mw-ui-input,
.mw-ui-input-inline,
input,
input.smw-form-input,
input[type=number],
input[type=search],
input[type=text] {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
.mw-input input::-webkit-input-placeholder,
.mw-ui-input-inline::-webkit-input-placeholder,
.mw-ui-input::-webkit-input-placeholder,
input.smw-form-input::-webkit-input-placeholder,
input::-webkit-input-placeholder,
input[type=number]::-webkit-input-placeholder,
input[type=search]::-webkit-input-placeholder,
input[type=text]::-webkit-input-placeholder {
  color: #8c8c8c
}
.mw-input input::-ms-input-placeholder,
.mw-ui-input-inline::-ms-input-placeholder,
.mw-ui-input::-ms-input-placeholder,
input.smw-form-input::-ms-input-placeholder,
input::-ms-input-placeholder,
input[type=number]::-ms-input-placeholder,
input[type=search]::-ms-input-placeholder,
input[type=text]::-ms-input-placeholder {
  color: #8c8c8c
}
.mw-input input::placeholder,
.mw-ui-input-inline::placeholder,
.mw-ui-input::placeholder,
input.smw-form-input::placeholder,
input::placeholder,
input[type=number]::placeholder,
input[type=search]::placeholder,
input[type=text]::placeholder {
  color: #8c8c8c
}
.mw-input input:hover,
.mw-ui-input-inline:hover,
.mw-ui-input:hover,
input.smw-form-input:hover,
input:hover,
input[type=number]:hover,
input[type=search]:hover,
input[type=text]:hover {
  border-color: #6a6e75
}
.button,
button,
input[type=button],
input[type=reset],
input[type=submit] {
  color: #f2f2f2;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid
}
.button:hover,
button:hover,
input[type=button]:hover,
input[type=reset]:hover,
input[type=submit]:hover {
  color: #f2f2f2;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4
}
.button.active,
.button:active,
button.active,
button:active,
input[type=button].active,
input[type=button]:active,
input[type=reset].active,
input[type=reset]:active,
input[type=submit].active,
input[type=submit]:active {
  color: #f2f2f2;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94
}
.button.secondary,
button.secondary,
input[type=button].secondary,
input[type=reset].secondary,
input[type=submit].secondary {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid
}
.button.secondary:hover,
button.secondary:hover,
input[type=button].secondary:hover,
input[type=reset].secondary:hover,
input[type=submit].secondary:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
.button.secondary.active,
.button.secondary:active,
button.secondary.active,
button.secondary:active,
input[type=button].secondary.active,
input[type=button].secondary:active,
input[type=reset].secondary.active,
input[type=reset].secondary:active,
input[type=submit].secondary.active,
input[type=submit].secondary:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
input.mw-ui-button {
  color: #e6e6e6;
  background: #595959;
  border-color: #595959
}
input.mw-ui-button:hover {
  color: #e6e6e6;
  background: #606060;
  border-color: #606060
}
input.mw-ui-button:active,
input.mw-ui-button:focus {
  color: #e6e6e6;
  background: #4c4c4c;
  border-color: #4c4c4c
}
input.mw-ui-button.mw-ui-progressive {
  color: #f2f2f2;
  background: #2f69a8;
  border-color: #2f69a8
}
input.mw-ui-button.mw-ui-progressive:hover {
  color: #f2f2f2;
  background: #377ac4;
  border-color: #377ac4
}
.oo-ui-buttonElement-pressedinput.mw-ui-button.mw-ui-progressive,
input.mw-ui-button.mw-ui-progressive:active,
input.mw-ui-button.mw-ui-progressive:active:focus {
  color: #f2f2f2;
  background: #295c94;
  border-color: #295c94
}
input.mw-ui-button.mw-ui-progressive:disabled,
input.mw-ui-button.mw-ui-progressive:disabled:active,
input.mw-ui-button.mw-ui-progressive:disabled:hover,
input.mw-ui-button:disabled,
input.mw-ui-button:disabled:active,
input.mw-ui-button:disabled:hover {
  color: #8c8c8c;
  background: #363636;
  border-color: #363636
}
.client-js .mw-ui-checkbox:not(#noop) [type=checkbox] + label:before {
  background-color: #363636;
  border-color: #52555a
}
.client-js .mw-ui-checkbox:not(#noop) [type=checkbox]:enabled:checked + label:before {
  background-color: #2f69a8;
  border-color: #2f69a8
}
.rsw-infobox {
  background-color: #323232
}
.rsw-infobox .infobox-header {
  color: #ccc;
  background-color: #265588;
  border-bottom-color: #323232
}
.rsw-infobox .infobox-subheader {
  background-color: #2f69a8;
  color: #e6e6e6;
  border-top-color: #323232;
  border-bottom-color: #323232
}
.rsw-infobox .infobox-subheader a {
  color: #e6e6e6
}
.rsw-infobox .infobox-image.bordered-image {
  border-color: #52555a
}
.rsw-infobox .infobox-map {
  border-top-color: #323232
}
.rsw-infobox th:not([colspan="2"]) {
  border-left-color: #52555a;
  border-right-color: #2f69a8
}
.rsw-infobox th:not(.infobox-header):not(.infobox-subheader) {
  border-left-color: #52555a
}
.rsw-infobox td:not(.infobox-image):not(.infobox-map) {
  border-right-color: #52555a
}
.rsw-infobox td[colspan="2"]:not(.infobox-image):not(.infobox-map) {
  border-color: #52555a
}
.infobox-monster .offensive-header {
  background-color: #58120b
}
.infobox-monster .offensive-subheader {
  color: #861c10;
  background-color: #e6bbb3
}
.infobox-monster .defensive-header {
  background-color: #356e90
}
.infobox-monster .defensive-subheader {
  color: #32637c;
  background-color: #86bedc
}
.infobox-monster .slayer-header {
  background-color: #464646
}
.infobox-bonuses td {
  border-color: #52555a;
  background-color: #323232
}
.infobox-bonuses th {
  border-color: #52555a;
  background-color: #2b2b2b
}
.cioPos {
  color: #06df2e
}
.cioNeg {
  color: #d63434
}
.cioEmpty {
  color: #b3b3b3
}
.cioError {
  color: #d63434
}
#cioTotals {
  background: #1e5400
}
.infotableBonuses .attribute-value {
  background: #2b2b2b
}
.infotableBonuses .attribute-total {
  background: #2b2b2b
}
.infotableBonuses .attribute-total .attribute-value {
  background: #2b2b2b
}
.infobox {
  background-color: #323232;
  color: #ccc;
  border: none
}
.tool-button.tool-active,
.tool.tool-active.oo-ui-buttonElement-frameless.oo-ui-iconElement {
  background: #595959;
  outline-color: #7f7f7f;
  box-shadow: none
}
.codeEditor-status {
  background: #262626;
  border-color: #52555a
}
.codeEditor-status-message {
  border-color: #52555a
}
.ace_search {
  background: #1e1e1e;
  color: #ccc;
  border-color: #52555a
}
.ace_search_field {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
.ace_search_field::-webkit-input-placeholder {
  color: #8c8c8c
}
.ace_search_field::-ms-input-placeholder {
  color: #8c8c8c
}
.ace_search_field::placeholder {
  color: #8c8c8c
}
.ace_search_field:hover {
  border-color: #6a6e75
}
.ace_searchbtn {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid
}
.ace_searchbtn:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
.ace_searchbtn.active,
.ace_searchbtn:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
.ace_searchbtn:last-child {
  border-right: none;
  border-left-color: #7f7f7f
}
.ace_searchbtn:not(:nth-child(2)):not(:last-child) {
  border-right-color: #7f7f7f;
  border-left-color: #7f7f7f
}
.ace_searchbtn.next::after,
.ace_searchbtn.prev::after {
  border-color: #ccc
}
.ace_button {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid
}
.ace_button:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
.ace_button.active,
.ace_button:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
.ace_button.checked {
  border-color: #7f7f7f
}
.ace_searchbtn_close {
  -webkit-filter: brightness(1.5);
  filter: brightness(1.5)
}
.ace_searchbtn_close:hover {
  -webkit-filter: brightness(1);
  filter: brightness(1)
}
.mw-scribunto-console-fieldset,
.mw-scribunto-message {
  background: #2b2b2b;
  color: #b3b3b3
}
.mw-scribunto-print {
  background: #2b2b2b;
  color: #ccc
}
.mw-scribunto-error {
  background: #2b2b2b;
  color: #d63434
}
.mw-scribunto-clear {
  color: #d63434;
  border-bottom-color: #d63434
}
.mw-scribunto-input {
  color: #99c4f1
}
textarea#mw-scribunto-input {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none
}
textarea#mw-scribunto-input::-webkit-input-placeholder {
  color: #8c8c8c
}
textarea#mw-scribunto-input::-ms-input-placeholder {
  color: #8c8c8c
}
textarea#mw-scribunto-input::placeholder {
  color: #8c8c8c
}
textarea#mw-scribunto-input:hover {
  border-color: #6a6e75
}
.mw-highlight pre .hll {
  background-color: #49483e
}
.mw-highlight pre {
  background: #262626;
  color: #f8f8f2
}
.mw-highlight pre .c {
  color: #75715e
}
.mw-highlight pre .err {
  color: #960050;
  background-color: #1e0010
}
.mw-highlight pre .k {
  color: #66d9ef
}
.mw-highlight pre .l {
  color: #ae81ff
}
.mw-highlight pre .n {
  color: #f8f8f2
}
.mw-highlight pre .o {
  color: #f92672
}
.mw-highlight pre .p {
  color: #f8f8f2
}
.mw-highlight pre .ch {
  color: #75715e
}
.mw-highlight pre .cm {
  color: #75715e
}
.mw-highlight pre .cp {
  color: #75715e
}
.mw-highlight pre .cpf {
  color: #75715e
}
.mw-highlight pre .c1 {
  color: #75715e
}
.mw-highlight pre .cs {
  color: #75715e
}
.mw-highlight pre .gd {
  color: #f92672
}
.mw-highlight pre .ge {
  font-style: italic
}
.mw-highlight pre .gi {
  color: #a6e22e
}
.mw-highlight pre .gs {
  font-weight: 700
}
.mw-highlight pre .gu {
  color: #75715e
}
.mw-highlight pre .kc {
  color: #66d9ef
}
.mw-highlight pre .kd {
  color: #66d9ef
}
.mw-highlight pre .kn {
  color: #f92672
}
.mw-highlight pre .kp {
  color: #66d9ef
}
.mw-highlight pre .kr {
  color: #66d9ef
}
.mw-highlight pre .kt {
  color: #66d9ef
}
.mw-highlight pre .ld {
  color: #e6db74
}
.mw-highlight pre .m {
  color: #ae81ff
}
.mw-highlight pre .s {
  color: #e6db74
}
.mw-highlight pre .na {
  color: #a6e22e
}
.mw-highlight pre .nb {
  color: #f8f8f2
}
.mw-highlight pre .nc {
  color: #a6e22e
}
.mw-highlight pre .no {
  color: #66d9ef
}
.mw-highlight pre .nd {
  color: #a6e22e
}
.mw-highlight pre .ni {
  color: #f8f8f2
}
.mw-highlight pre .ne {
  color: #a6e22e
}
.mw-highlight pre .nf {
  color: #a6e22e
}
.mw-highlight pre .nl {
  color: #f8f8f2
}
.mw-highlight pre .nn {
  color: #f8f8f2
}
.mw-highlight pre .nx {
  color: #a6e22e
}
.mw-highlight pre .py {
  color: #f8f8f2
}
.mw-highlight pre .nt {
  color: #f92672
}
.mw-highlight pre .nv {
  color: #f8f8f2
}
.mw-highlight pre .ow {
  color: #f92672
}
.mw-highlight pre .w {
  color: #f8f8f2
}
.mw-highlight pre .mb {
  color: #ae81ff
}
.mw-highlight pre .mf {
  color: #ae81ff
}
.mw-highlight pre .mh {
  color: #ae81ff
}
.mw-highlight pre .mi {
  color: #ae81ff
}
.mw-highlight pre .mo {
  color: #ae81ff
}
.mw-highlight pre .sa {
  color: #e6db74
}
.mw-highlight pre .sb {
  color: #e6db74
}
.mw-highlight pre .sc {
  color: #e6db74
}
.mw-highlight pre .dl {
  color: #e6db74
}
.mw-highlight pre .sd {
  color: #e6db74
}
.mw-highlight pre .s2 {
  color: #e6db74
}
.mw-highlight pre .se {
  color: #ae81ff
}
.mw-highlight pre .sh {
  color: #e6db74
}
.mw-highlight pre .si {
  color: #e6db74
}
.mw-highlight pre .sx {
  color: #e6db74
}
.mw-highlight pre .sr {
  color: #e6db74
}
.mw-highlight pre .s1 {
  color: #e6db74
}
.mw-highlight pre .ss {
  color: #e6db74
}
.mw-highlight pre .bp {
  color: #f8f8f2
}
.mw-highlight pre .fm {
  color: #a6e22e
}
.mw-highlight pre .vc {
  color: #f8f8f2
}
.mw-highlight pre .vg {
  color: #f8f8f2
}
.mw-highlight pre .vi {
  color: #f8f8f2
}
.mw-highlight pre .vm {
  color: #f8f8f2
}
.mw-highlight pre .il {
  color: #ae81ff
}
.ace-tm .ace_gutter {
  background: #2d2d2d;
  color: #8f908a
}
.ace-tm .ace_print-margin {
  width: 1px;
  background: #555651
}
.ace-tm {
  background-color: #262626;
  color: #f8f8f2
}
.ace-tm .ace_cursor {
  color: #f8f8f0
}
.ace-tm .ace_marker-layer .ace_selection {
  background: #49483e
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0 #272822
}
.ace-tm .ace_marker-layer .ace_step {
  background: #665200
}
.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483e
}
.ace-tm .ace_marker-layer .ace_active-line {
  background: #202020
}
.ace-tm .ace_gutter-active-line {
  background-color: #272727
}
.ace-tm .ace_marker-layer .ace_selected-word {
  border: 1px solid #49483e;
  background: #49483e
}
.ace-tm .ace_invisible {
  color: #52524d
}
.ace-tm .ace_entity.ace_name.ace_tag,
.ace-tm .ace_keyword,
.ace-tm .ace_meta.ace_tag,
.ace-tm .ace_storage {
  color: #f92672
}
.ace-tm .ace_punctuation,
.ace-tm .ace_punctuation.ace_tag {
  color: #fff
}
.ace-tm .ace_constant.ace_character,
.ace-tm .ace_constant.ace_language,
.ace-tm .ace_constant.ace_numeric,
.ace-tm .ace_constant.ace_other {
  color: #ae81ff
}
.ace-tm .ace_invalid {
  color: #f8f8f0;
  background-color: #f92672
}
.ace-tm .ace_invalid.ace_deprecated {
  color: #f8f8f0;
  background-color: #ae81ff
}
.ace-tm .ace_support.ace_constant,
.ace-tm .ace_support.ace_function {
  color: #66d9ef
}
.ace-tm .ace_fold {
  background-color: #a6e22e;
  border-color: #f8f8f2
}
.ace-tm .ace_storage.ace_type,
.ace-tm .ace_support.ace_class,
.ace-tm .ace_support.ace_type {
  font-style: italic;
  color: #66d9ef
}
.ace-tm .ace_entity.ace_name.ace_function,
.ace-tm .ace_entity.ace_other,
.ace-tm .ace_entity.ace_other.ace_attribute-name,
.ace-tm .ace_variable {
  color: #a6e22e
}
.ace-tm .ace_variable.ace_parameter {
  font-style: italic;
  color: #fd971f
}
.ace-tm .ace_string {
  color: #e6db74
}
.ace-tm .ace_comment {
  color: #75715e
}
.ace-tm .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y
}
table.wikipedia {
  background: #151515;
  border: none
}
.forumheader,
.messagebox,
.official {
  background-color: #151515;
  border-color: #52555a
}
.messagebox.action,
.messagebox.christmas,
.messagebox.disambig,
.messagebox.easter,
.messagebox.file,
.messagebox.halloween,
.messagebox.info,
.messagebox.obsolete,
.messagebox.safe,
.messagebox.thanksgiving,
.messagebox.unsafe,
.messagebox.warn {
  background: #151515
}
.noarticletext .tile {
  background-color: #151515;
  border-color: #52555a
}
.editnotice,
div.mw-warning-with-logexcerpt {
  background: #151515;
  color: #ccc;
  border-color: #52555a;
  box-shadow: none
}
#semiprotectedpagewarning {
  border-color: #52555a!important;
  background: #1a1a1a
}
.warningbox {
  background: #151515;
  border-color: #52555a;
  color: #ccc
}
.ns-120 #mw-content-text .mw-parser-output > ul li,
.ns-120 #mw-content-text .mw-parser-output > ul ul li,
.transcript > ul li,
.transcript > ul ul li {
  border-left-color: #8c8c8c
}
.ns-120 #mw-content-text .mw-parser-output > ul li b:first-child,
.ns-120 #mw-content-text .mw-parser-output > ul ul li b:first-child,
.transcript > ul li b:first-child,
.transcript > ul ul li b:first-child {
  color: #99c4f1
}
table.property-page-results .header-title {
  color: #ccc
}
table.property-page-results .value-row:hover {
  background-color: #262626
}
.smw-property-page-indicator {
  color: #ccc;
  border-color: #52555a
}
#filetoc {
  background: #151515;
  border-color: #52555a
}
.mw_metadata th {
  background: #2b2b2b;
  border-color: #52555a
}
.mw_metadata td {
  background: #323232;
  border-color: #52555a
}
div.vectorTabs {
  padding: 0;
  background: #262626
}
#mw-head .vectorTabs ul li {
  background-color: #262626
}
#mw-head .vectorTabs ul li.selected {
  background-color: #1e1e1e;
  border: solid 1px #52555a;
  border-bottom: none
}
#mw-head .vectorTabs ul li.selected span {
  position: relative;
  top: -1px
}
#mw-head .vectorTabs ul li.selected a {
  color: #ccc
}
#mw-head .vectorTabs ul li:hover {
  background-color: #303030
}
#mw-head #p-cactions.vectorMenu h3 {
  background: #262626
}
#mw-head #p-cactions.vectorMenu h3 span {
  color: #ccc
}
#mw-head #p-cactions.vectorMenu h3 span:after {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#f8f9fa"><title>down</title><path d="M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5"/></svg>')
}
#mw-head #p-cactions.vectorMenu:hover h3 {
  background: #303030
}
#mw-head .vectorMenu .menu {
  background: #2b2b2b;
  border-color: #52555a
}
#mw-head .vectorMenu .menu li:hover {
  background: #323232
}
#mw-head #simpleSearch {
  background: #363636
}
#mw-head #simpleSearch #searchInput {
  background-color: #363636;
  color: #ccc;
  border: solid 1px #52555a;
  box-shadow: none;
  border: none
}
#mw-head #simpleSearch #searchInput::-webkit-input-placeholder {
  color: #8c8c8c
}
#mw-head #simpleSearch #searchInput::-ms-input-placeholder {
  color: #8c8c8c
}
#mw-head #simpleSearch #searchInput::placeholder {
  color: #8c8c8c
}
#mw-head #simpleSearch #searchInput:hover {
  border-color: #6a6e75
}
#mw-head #simpleSearch #searchButton {
  background-color: transparent;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"> <g fill="none" stroke="#cccccc" stroke-width="2"> <path d="M11.29 11.71l-4-4"/> <circle cx="5" cy="5" r="4"/> </g> </svg>');
  background-position: center center;
  background-repeat: no-repeat
}
#mw-head #simpleSearch #mw-searchButton {
  display: none
}
.mw-echo-notifications-badge::before {
  -webkit-filter: invert(1);
  filter: invert(1)
}
#mw-history-search {
  background-color: #151515;
  border-color: #52555a
}
#pagehistory li {
  border-color: #1e1e1e
}
#pagehistory li.selected {
  background-color: #2b2b2b;
  color: #ccc;
  border-color: #1e1e1e
}
.EditPageEditor #diff,
.diff,
.diff-addedline,
.diff-deletedline,
.diff-ntitle,
.diff-otitle {
  background-color: #1e1e1e;
  color: #ccc
}
td.diff-context {
  background: #212121;
  border-color: #353535;
  color: #ccc
}
.diffchange {
  color: #222
}
#viewingnew-warning,
#viewingold-warning {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
#mw-revision-info,
#mw-revision-info-current,
#mw-revision-nav {
  color: #ccc
}
.mainpage-body h2 a {
  color: #ccc
}
.mainpage-recent-updates p:not(.byline) {
  color: #ccc
}
.mainpage-recent-updates .jagex-promotion .byline {
  color: #b137e8
}
.mainpage-skills li a:last-child {
  color: #ccc
}
.mainpage-news .news-updates {
  border-right-color: #52555a
}
.mainpage-editing .tile-bottom a,
.mainpage-editing .tile-bottom a:active,
.mainpage-editing .tile-bottom a:link,
.mainpage-editing .tile-bottom a:visited {
  color: #e6e6e6
}
.discussiontable.noresults th {
  background-color: #2b2b2b
}
.discussiontable.noresults th a {
  color: #ccc
}
.discussiontable th {
  color: #f2f2f2;
  background-color: #265588
}
.discussiontable th a {
  color: #f2f2f2
}
.discussiontable .edited,
.discussiontable .edited-by,
.discussiontable .topic,
.discussiontable .yg-archive {
  color: #ccc;
  background-color: #323232
}
.discussiontable.noresults .edited,
.discussiontable.noresults .edited-by,
.discussiontable.noresults .topic,
.discussiontable.noresults .yg-archive {
  color: #ccc;
  background-color: #323232
}
.forumactiveheader,
.forumarchiveheader,
.forumoldarchives {
  background-color: #265588;
  color: #f2f2f2
}
.forumoldarchives a,
.forumoldarchives a:active,
.forumoldarchives a:link,
.forumoldarchives a:visited {
  color: #f2f2f2
}
.forumcolumnheader {
  background-color: #2b2b2b;
  color: #ccc
}
.forumsearchbox {
  background: #323232!important;
  border: solid 1px #52555a
}
.forumlist.archive {
  background-color: transparent!important;
  border: none!important
}
#sp-contributions-footer {
  background-color: #151515;
  border: 1px solid #52555a
}
.searchresult {
  color: #b3b3b3
}
.mw-search-result-data {
  color: #06df2e
}
.results-info {
  color: #b3b3b3
}
.mw-search-profile-tabs {
  color: #ccc;
  background: #151515;
  border-color: #52555a
}
.search-types .current a,
.search-types .current a:active,
.search-types .current a:link,
.search-types .current a:visited {
  color: #ccc
}
.mw-plusminus-pos {
  color: #06df2e
}
.mw-plusminus-neg {
  color: #d63434
}
.mw-tag-markers,
.mw-tag-markers a,
.mw-tag-markers a:active,
.mw-tag-markers a:link,
.mw-tag-markers a:visited,
.mw-tag-markers:active,
.mw-tag-markers:link,
.mw-tag-markers:visited {
  color: #d63434
}
.mw-tag-marker-visualeditor a,
.mw-tag-marker-visualeditor a:active,
.mw-tag-marker-visualeditor a:link,
.mw-tag-marker-visualeditor a:visited,
.mw-tag-marker-visualeditor-needcheck a,
.mw-tag-marker-visualeditor-needcheck a:active,
.mw-tag-marker-visualeditor-needcheck a:link,
.mw-tag-marker-visualeditor-needcheck a:visited {
  color: #e49f10
}
.mw-recentchanges-toplinks .speedy-delete a,
.mw-recentchanges-toplinks .speedy-delete a:active,
.mw-recentchanges-toplinks .speedy-delete a:link,
.mw-recentchanges-toplinks .speedy-delete a:visited,
.mw-recentchanges-toplinks .speedy-move a,
.mw-recentchanges-toplinks .speedy-move a:active,
.mw-recentchanges-toplinks .speedy-move a:link,
.mw-recentchanges-toplinks .speedy-move a:visited {
  color: #cb1c00
}
.rcoptions {
  background: #151515;
  border-color: #52555a
}
.mw-changeslist-legend {
  background: #222;
  border-color: #52555a;
  color: #ccc
}
.admininfo,
.introheader {
  color: #ccc!important;
  background-color: #151515!important
}
.browse-input-resp .mw-ui-input:focus {
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.2);
  border-color: #6a6e75
}
.smwb-center,
.smwb-title {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #ccc
}
.smwb-ipropvalue .smwb-prophead,
.smwb-propvalue .smwb-prophead {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #ccc
}
.smwb-ipropvalue .smwb-propval,
.smwb-propvalue .smwb-propval {
  border-color: #52555a;
  background-color: #323232
}
#other_options tr:nth-child(even) {
  background: #1a1a1a!important
}
#other_options tr:nth-child(odd) {
  background: #272727!important
}
.smw-ask-actions a.smw-ask-action-btn-lblue,
.smw-ask-actions a:visited.smw-ask-action-btn-lblue {
  color: #f2f2f2;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid
}
.smw-ask-actions a.smw-ask-action-btn-lblue:hover,
.smw-ask-actions a:visited.smw-ask-action-btn-lblue:hover {
  color: #f2f2f2;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4
}
.smw-ask-actions a.smw-ask-action-btn-lblue.active,
.smw-ask-actions a.smw-ask-action-btn-lblue:active,
.smw-ask-actions a:visited.smw-ask-action-btn-lblue.active,
.smw-ask-actions a:visited.smw-ask-action-btn-lblue:active {
  color: #f2f2f2;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94
}
.smw-ask-actions a.smw-ask-action-btn-lgrey,
.smw-ask-actions a:visited.smw-ask-action-btn-lgrey {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid
}
.smw-ask-actions a.smw-ask-action-btn-lgrey:hover,
.smw-ask-actions a:visited.smw-ask-action-btn-lgrey:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
.smw-ask-actions a.smw-ask-action-btn-lgrey.active,
.smw-ask-actions a.smw-ask-action-btn-lgrey:active,
.smw-ask-actions a:visited.smw-ask-action-btn-lgrey.active,
.smw-ask-actions a:visited.smw-ask-action-btn-lgrey:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
.smw-column-header {
  color: #ccc
}
.smw-callout {
  color: #000
}
#signupstart,
#userloginprompt {
  border: 1px solid #52555a
}
.signup-realname-tip {
  color: #b3b3b3
}
.allpagesredirect a,
.allpagesredirect a:active,
.allpagesredirect a:link,
.allpagesredirect a:visited,
.watchlistredir a,
.watchlistredir a:active,
.watchlistredir a:link,
.watchlistredir a:visited {
  color: #888
}
.rsw-tooltip {
  background: #262626;
  border-color: #52555a;
  color: #ccc
}
.rsw-tooltip a {
  color: #6bbaea
}
#rsw-config {
  border-color: #52555a;
  box-shadow: 0 10px 60px 0 #000;
  background: #1e1e1e;
  color: #ccc
}
#rsw-config #rsw-config-header {
  background-color: #1e1e1e
}
#rsw-config #rsw-config-footer {
  background-color: #2b2b2b;
  border-top-color: #52555a
}
#rsw-config #rsw-config-body {
  background-color: #1e1e1e
}
#rsw-config #rsw-config-body #rsw-config-note {
  color: #b3b3b3;
  border-bottom-color: #52555a
}
#rsw-config-background {
  background-color: #000;
  opacity: 50%
}
.js-tooltip-wrapper {
  border-color: #265588;
  background: #262626;
  box-shadow: 3px 3px 10px -5px #000;
  color: #ccc
}
.js-tooltip-click {
  color: #f2f2f2;
  background: #2f69a8;
  border: 2px solid #2f69a8
}
.js-tooltip-arrow.js-tooltip-arrow-pointleft {
  border-right-color: #265588
}
.js-tooltip-arrow.js-tooltip-arrow-pointright {
  border-left-color: #265588
}
.js-tooltip-close {
  color: #f2f2f2;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid
}
.js-tooltip-close:hover {
  color: #f2f2f2;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4
}
.js-tooltip-close.active,
.js-tooltip-close:active {
  color: #f2f2f2;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94
}
.qtip-bootstrap {
  background-color: #262626;
  color: #ccc;
  border: 1px solid #52555a
}
.qtip-bootstrap .qtip-titlebar {
  background-color: #1e1e1e;
  border-bottom-color: #52555a
}
.qtip-bootstrap .qtip-tip canvas {
  -webkit-filter: invert(.4);
  filter: invert(.4)
}
.wikiEditor-ui .wikiEditor-ui-view {
  border-color: #52555a
}
.wikiEditor-ui .wikiEditor-ui-top {
  border-color: #52555a
}
.wikiEditor-ui-toolbar {
  background: #262626
}
.wikiEditor-ui-toolbar .group {
  border-color: #52555a;
  height: auto
}
.wikiEditor-ui-toolbar .tabs span.tab a,
.wikiEditor-ui-toolbar .tabs span.tab a:active,
.wikiEditor-ui-toolbar .tabs span.tab a:link,
.wikiEditor-ui-toolbar .tabs span.tab a:visited {
  color: #ccc
}
.wikiEditor-ui-toolbar .sections .section {
  background: #262626;
  border-color: #52555a
}
.wikiEditor-ui-toolbar .group .label {
  color: #b3b3b3
}
.wikiEditor-ui-toolbar .group .tool-select {
  background-color: #363636;
  border-color: #52555a
}
.wikiEditor-ui-toolbar .group .tool-select .label {
  color: #ccc
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options {
  background: #2b2b2b;
  border-color: #52555a
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options .option {
  color: #ccc
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options .option:hover {
  color: #ccc;
  background-color: #323232
}
.wikiEditor-ui-toolbar .booklet .index div {
  color: #ccc
}
.wikiEditor-ui-toolbar .booklet .index .current {
  color: #ccc;
  background: #323232
}
.wikiEditor-ui-toolbar .booklet .page {
  background: #262626
}
.wikiEditor-ui-toolbar .booklet .page-characters div span {
  border-color: #52555a;
  color: #ccc
}
.wikiEditor-ui-toolbar .booklet .page-characters div span:hover {
  background: #323232
}
.wikiEditor-ui-toolbar .booklet .page-table td {
  color: #ccc;
  border-color: #52555a
}
.wikiEditor-ui-toolbar .booklet .page-table th {
  color: #99c4f1
}
.editOptions {
  background: #2b2b2b;
  border-color: #52555a;
  color: #ccc
}
#wpTextbox0 {
  background: #a9a9a9!important
}
.mediawiki .ui-dialog {
  background: #1e1e1e;
  border-color: #52555a;
  color: #ccc
}
.mediawiki .ui-dialog .ui-widget-header {
  background: #2b2b2b!important;
  color: #ccc;
  border-color: #52555a
}
.mediawiki .ui-dialog .ui-widget-header .ui-state-hover {
  background: #606060;
  border-color: #606060;
  margin: -11px -1px 0 0
}
.mediawiki .ui-dialog .ui-icon-closethick {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>close</title><path d="M3.636 2.224l14.142 14.142-1.414 1.414L2.222 3.638z"/><path d="M17.776 3.636L3.634 17.778 2.22 16.364 16.362 2.222z"/></svg>')!important
}
.mediawiki .ui-dialog .ui-dialog-content {
  color: #ccc
}
.mediawiki .ui-dialog .ui-dialog-buttonpane {
  background: #2b2b2b;
  border-color: #52555a!important
}
.mediawiki .ui-dialog .ui-button {
  color: #e6e6e6!important;
  background-image: none!important;
  border-color: #595959!important;
  background-color: #595959!important;
  border-style: solid!important
}
.mediawiki .ui-dialog .ui-button:hover {
  color: #e6e6e6!important;
  background-image: none!important;
  border-color: #606060!important;
  background-color: #606060!important
}
.mediawiki .ui-dialog .ui-button.active,
.mediawiki .ui-dialog .ui-button:active {
  color: #e6e6e6!important;
  background-image: none!important;
  border-color: #4c4c4c!important;
  background-color: #4c4c4c!important
}
.ui-widget-overlay {
  background: #000;
  opacity: 50%
}
table.article-table,
table.wikitable {
  background-color: #323232;
  color: #ccc;
  border: none
}
table.article-table > * > tr > td,
table.wikitable > * > tr > td {
  border-color: #52555a
}
table.article-table > * > tr > th,
table.wikitable > * > tr > th {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #ccc
}
table.article-table > * > tr > th a,
table.article-table > * > tr > th a:active,
table.article-table > * > tr > th a:link,
table.article-table > * > tr > th a:visited,
table.wikitable > * > tr > th a,
table.wikitable > * > tr > th a:active,
table.wikitable > * > tr > th a:link,
table.wikitable > * > tr > th a:visited {
  color: #6bbaea
}
table.article-table > * > tr > th a.new,
table.article-table > * > tr > th a:active.new,
table.article-table > * > tr > th a:link.new,
table.article-table > * > tr > th a:visited.new,
table.wikitable > * > tr > th a.new,
table.wikitable > * > tr > th a:active.new,
table.wikitable > * > tr > th a:link.new,
table.wikitable > * > tr > th a:visited.new {
  color: #ba0000
}
table.lighttable .highlight-over {
  background-color: #236100
}
table.lighttable .highlight-on {
  background-color: #1e5400
}
table.jquery-tablesorter th.headerSort {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="#cccccc"> <path d="M14.5 5l-4 4-4-4zM14.5 4l-4-4-4 4z"/> </svg>')
}
table.jquery-tablesorter th.headerSortUp {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#cccccc"> <path d="M6.5 4l4-4 4 4z"/> </svg>')
}
table.jquery-tablesorter th.headerSortDown {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#cccccc"> <path d="M14.5 0l-4 4-4-4z"/> </svg>')
}
table.wikitable td[bgcolor],
table.wikitable td[style*=background],
table.wikitable th[style*=background],
table.wikitable tr[bgcolor] td,
table.wikitable tr[style*=background] td {
  color: #3a3a3a
}
table.wikitable td[bgcolor] a,
table.wikitable td[style*=background] a,
table.wikitable th[style*=background] a,
table.wikitable tr[bgcolor] td a,
table.wikitable tr[style*=background] td a {
  color: #438ab5
}
table.TablePager {
  background-color: #323232;
  color: #ccc;
  border: none
}
table.TablePager td {
  border-color: #52555a;
  color: #ccc;
  background-color: #323232
}
table.TablePager tr:hover td {
  background-color: #3a3a3a
}
table.TablePager th {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #ccc
}
table {
  border-color: #52555a
}
table.archive {
  background-color: #323232!important;
  border: solid 1px #52555a!important
}
.GE-set-cost tr:last-of-type td {
  background: #2b2b2b!important
}
.questdetails {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
.questdetails .questdetails-header {
  background-color: #2b2b2b
}
.questdetails #rs-qc-form {
  background: 0 0
}
.questdetails .oo-ui-icon-info {
  background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>info</title><path d="M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z"/></svg>')
}
.questreq ul {
  border-left: 1px dotted #8c8c8c
}
blockquote {
  color: #b3b3b3
}
blockquote p:not(.quote-source) {
  border-color: #52555a
}
.pullquote {
  color: #b3b3b3
}
.navbox {
  color: #ccc
}
.navbox,
.navbox .navbox-subgroup {
  background-color: #1e1e1e
}
.navbox .navbox-group,
.navbox .navbox-list {
  border-color: #3a3c3f
}
.navbox .navbox-group {
  background: #2b2b2b
}
.navbox #navbox-title,
.navbox .navbox-footer {
  border-color: #1e1e1e;
  color: #e6e6e6;
  background: #265588
}
.navbox #navbox-title a,
.navbox .navbox-footer a {
  color: #e6e6e6
}
.navbox .navbox-collapsible #navbox-title,
.navbox .navbox-collapsible .navbox-footer {
  background-color: #2f69a8
}
.documentation {
  background-color: #262626;
  color: #ccc
}
.documentation .doc-header {
  border-bottom-color: #52555a
}
.documentation a,
.documentation a:active,
.documentation a:link,
.documentation a:visited {
  color: #6bbaea
}
.documentation a.new,
.documentation a:active.new,
.documentation a:link.new,
.documentation a:visited.new {
  color: #ba0000
}
.shortcut {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
#content .tabberlive ul.tabbernav li.tabberactive a {
  color: #f2f2f2;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid;
  border: none
}
#content .tabberlive ul.tabbernav li.tabberactive a:hover {
  color: #f2f2f2;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4
}
#content .tabberlive ul.tabbernav li.tabberactive a.active,
#content .tabberlive ul.tabbernav li.tabberactive a:active {
  color: #f2f2f2;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94
}
#content .tabberlive ul.tabbernav li a {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
  border: none
}
#content .tabberlive ul.tabbernav li a:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
#content .tabberlive ul.tabbernav li a.active,
#content .tabberlive ul.tabbernav li a:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
#content .tabberlive div.tabbertab {
  background-color: #262626
}
ol.references li:target,
sup.reference:target {
  background-color: #383838
}
.transcript {
  background-color: #262626
}
td.famtreeleaf {
  background-color: #323232;
  color: #ccc;
  border: solid 1px #52555a
}
#alphabetical-header {
  background-color: #151515;
  border-color: #222
}
.mmgtable-details {
  border-color: #52555a!important
}
#content .portal-link a {
  background-color: #323232;
  color: #ccc
}
#content .portal-link a:hover {
  background-color: #4c4c4c;
  color: #e6e6e6
}
#DisassemblyT .disassembly-border {
  border-top-color: #323232
}
.infobox-switch .infobox-buttons .button,
.switch-infobox .switch-infobox-triggers .button {
  color: #f2f2f2;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid
}
.infobox-switch .infobox-buttons .button:hover,
.switch-infobox .switch-infobox-triggers .button:hover {
  color: #f2f2f2;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4
}
.infobox-switch .infobox-buttons .button.active,
.infobox-switch .infobox-buttons .button:active,
.switch-infobox .switch-infobox-triggers .button.active,
.switch-infobox .switch-infobox-triggers .button:active {
  color: #f2f2f2;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94
}
.chat-options .chat-options-underline {
  border-bottom-color: #ccc
}
.chat-options + .js-tooltip-click {
  color: #ccc!important
}
.coins {
  color: #34c534
}
.coins-pos {
  color: #6ec4f7
}
.coins-neg {
  color: #d72b16
}
.fact-text {
  color: #99c4f1;
  border-bottom: dotted 1px #99c4f1
}
.gifgallery img {
  background: #323232;
  border-color: #52555a
}
.gifgallery .gallery-image-wrapper {
  background: 0 0
}
.ChooseOption,
.OptionWindow {
  background: #52555a
}
.menaphite-script img {
  -webkit-filter: invert(.9);
  filter: invert(.9)
}
.menaphite-script .js-tooltip-click {
  background-color: #595959;
  border-color: #595959;
  color: #e6e6e6
}
.update-list a,
.update-list a:active,
.update-list a:link,
.update-list a:visited {
  color: #fff
}
.production-selected {
  background: #1e5400;
  color: #ccc
}
.mw-body {
  color: #ccc;
  background-color: #1e1e1e;
  border-color: #52555a;
  box-shadow: 0 0 7px rgba(30,30,30,.8)
}
a,
a:active,
a:link,
a:visited,
div#mw-panel div.portal div.body ul li a,
div#mw-panel div.portal div.body ul li a:active,
div#mw-panel div.portal div.body ul li a:link,
div#mw-panel div.portal div.body ul li a:visited,
div.vectorMenu li a,
div.vectorMenu li a:active,
div.vectorMenu li a:link,
div.vectorMenu li a:visited,
div.vectorTabs li a,
div.vectorTabs li a:active,
div.vectorTabs li a:link,
div.vectorTabs li a:visited,
image a,
image a:active,
image a:link,
image a:visited,
table.messagebox a,
table.messagebox a:active,
table.messagebox a:link,
table.messagebox a:visited,
table.prettytable a,
table.prettytable a:active,
table.prettytable a:link,
table.prettytable a:visited,
table.wikitable a,
table.wikitable a:active,
table.wikitable a:link,
table.wikitable a:visited {
  color: #6bbaea
}
a.new,
a:active.new,
a:link.new,
a:visited.new,
div#mw-panel div.portal div.body ul li a.new,
div#mw-panel div.portal div.body ul li a:active.new,
div#mw-panel div.portal div.body ul li a:link.new,
div#mw-panel div.portal div.body ul li a:visited.new,
div.vectorMenu li a.new,
div.vectorMenu li a:active.new,
div.vectorMenu li a:link.new,
div.vectorMenu li a:visited.new,
div.vectorTabs li a.new,
div.vectorTabs li a:active.new,
div.vectorTabs li a:link.new,
div.vectorTabs li a:visited.new,
image a.new,
image a:active.new,
image a:link.new,
image a:visited.new,
table.messagebox a.new,
table.messagebox a:active.new,
table.messagebox a:link.new,
table.messagebox a:visited.new,
table.prettytable a.new,
table.prettytable a:active.new,
table.prettytable a:link.new,
table.prettytable a:visited.new,
table.wikitable a.new,
table.wikitable a:active.new,
table.wikitable a:link.new,
table.wikitable a:visited.new {
  color: #ba0000
}
.mw-body-content a.external,
.mw-body-content a.external:active,
.mw-body-content a.external:link,
.mw-body-content a.external:visited,
.mw-body-content a.extiw,
.mw-body-content a.extiw:active,
.mw-body-content a.extiw:link,
.mw-body-content a.extiw:visited {
  color: #6bbaea
}
.mw-body-content a.external.new,
.mw-body-content a.external:active.new,
.mw-body-content a.external:link.new,
.mw-body-content a.external:visited.new,
.mw-body-content a.extiw.new,
.mw-body-content a.extiw:active.new,
.mw-body-content a.extiw:link.new,
.mw-body-content a.extiw:visited.new {
  color: #ba0000
}
.mw-body-content a.mw-selflink,
.mw-body-content a.mw-selflink:active,
.mw-body-content a.mw-selflink:link,
.mw-body-content a.mw-selflink:visited {
  color: #ccc
}
#mw-indicator-mw-helplink a {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f8f9fa"> <path d="M12.001 2.085c-5.478 0-9.916 4.438-9.916 9.916 0 5.476 4.438 9.914 9.916 9.914 5.476 0 9.914-4.438 9.914-9.914 0-5.478-4.438-9.916-9.914-9.916zm.001 18c-4.465 0-8.084-3.619-8.084-8.083 0-4.465 3.619-8.084 8.084-8.084 4.464 0 8.083 3.619 8.083 8.084 0 4.464-3.619 8.083-8.083 8.083z"/> <path d="M11.766 6.688c-2.5 0-3.219 2.188-3.219 2.188l1.411.854s.298-.791.901-1.229c.516-.375 1.625-.625 2.219.125.701.885-.17 1.587-1.078 2.719-.953 1.186-1 3.655-1 3.655h1.969s.135-2.318 1.041-3.381c.603-.707 1.443-1.338 1.443-2.494s-1.187-2.437-3.687-2.437zM11 16h2v2h-2z"/> </svg>') left center no-repeat
}
body {
  background-color: #262626;
  background-image: url(https://i.imgur.com/AFaXBVa.jpg)
}
#mw-panel .portal h3 {
  color: #ccc
}
#toc {
  background-color: #323232
}
#toc .toctitle {
  border: solid 1px #52555a;
  background: #2b2b2b
}
#toc .toctitle h2 {
  color: #ccc
}
#toc .toctitle a,
#toc .toctitle a:active,
#toc .toctitle a:link,
#toc .toctitle a:visited {
  color: #6bbaea
}
#toc .toctitle a.new,
#toc .toctitle a:active.new,
#toc .toctitle a:link.new,
#toc .toctitle a:visited.new {
  color: #ba0000
}
#toc > ul {
  border-color: #52555a
}
#toc ul ul {
  border-color: #8c8c8c
}
#toc .toclevel-1 a {
  color: #ccc
}
#toc .toclevel-2 a {
  color: #b3b3b3
}
#contentSub,
#contentSub2 {
  color: #b3b3b3
}
#footer ul li {
  color: #b3b3b3
}
.suggestions-results,
.suggestions-special {
  background: #2b2b2b;
  border-color: #52555a
}
.suggestions-result {
  color: #ccc
}
.suggestions-special .special-label {
  color: #b3b3b3
}
.suggestions-special .special-query {
  color: #ccc
}
.suggestions-result-current {
  background: #323232;
  color: #e6e6e6
}
.suggestions-result-current .special-label {
  color: #ccc
}
.suggestions-result-current .special-query {
  color: #e6e6e6
}
.catlinks {
  background: #151515;
  border-color: #52555a
}
form fieldset {
  background: #151515;
  border-color: #52555a
}
form fieldset legend {
  color: #ccc
}`;
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