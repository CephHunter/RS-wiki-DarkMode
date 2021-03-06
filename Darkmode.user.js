// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-beta.2
// ==/UserScript==
(function() {var css = `
body {
  background-image: none!important
}
.demo-menu {
  background: #262626;
  border-color: #52555a
}
.demo-menu + div {
  background: #1e1e1e!important;
  border: solid 1px #52555a!important;
  color: #ccc
}
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
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eclear%3C/title%3E%3Cpath%20d%3D%22M10%200a10%2010%200%201%200%2010%2010A10%2010%200%200%200%2010%200zm5.66%2014.24l-1.41%201.41L10%2011.41l-4.24%204.25-1.42-1.42L8.59%2010%204.34%205.76l1.42-1.42L10%208.59l4.24-4.24%201.41%201.41L11.41%2010z%22/%3E%3C/svg%3E)
}
.oo-ui-indicator-up {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eup%3C/title%3E%3Cpath%20d%3D%22M11%207.974l-.965%201.052L6%205.168%202.053%209.026%201%207.974l5-5%205%205%22/%3E%3C/svg%3E)
}
.oo-ui-indicator-down {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Edown%3C/title%3E%3Cpath%20d%3D%22M11.05%203.996l-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205%205-5%22/%3E%3C/svg%3E)
}
.oo-ui-icon-edit {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath%20d%3D%22M16.77%208l1.94-2a1%201%200%200%200%200-1.41l-3.34-3.3a1%201%200%200%200-1.41%200L12%203.23zm-5.81-3.71L1%2014.25V19h4.75l9.96-9.96-4.75-4.75z%22/%3E%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-edit {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%3Ctitle%3Eedit%3C/title%3E%3Cpath%20d%3D%22M16.77%208l1.94-2a1%201%200%200%200%200-1.41l-3.34-3.3a1%201%200%200%200-1.41%200L12%203.23zm-5.81-3.71L1%2014.25V19h4.75l9.96-9.96-4.75-4.75z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-link {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Elink%3C/title%3E%3Cpath%20d%3D%22M4.83%2015h2.91a4.88%204.88%200%200%201-1.55-2H5a3%203%200%201%201%200-6h3a3%203%200%200%201%202.82%204h2.1a4.82%204.82%200%200%200%20.08-.83v-.34A4.83%204.83%200%200%200%208.17%205H4.83A4.83%204.83%200%200%200%200%209.83v.34A4.83%204.83%200%200%200%204.83%2015z%22/%3E%3Cpath%20d%3D%22M15.17%205h-2.91a4.88%204.88%200%200%201%201.55%202H15a3%203%200%201%201%200%206h-3a3%203%200%200%201-2.82-4h-2.1a4.82%204.82%200%200%200-.08.83v.34A4.83%204.83%200%200%200%2011.83%2015h3.34A4.83%204.83%200%200%200%2020%2010.17v-.34A4.83%204.83%200%200%200%2015.17%205z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-pilcrow {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%20%3Ctitle%3E%20pilcrow%20%3C/title%3E%20%3Cpath%20d%3D%22m%207.388022,2%20h%209.278109%20v%202%20h%20-2%20V%2018%20H%2012.666277%20V%204.0001848%20H%209.333065%20V%2018%20H%207.333138%20V%209.990386%20C%205.7072798,9.883573%204.2194862,9.482099%203.3271547,8.787866%202.4423848,8.087294%202,7.156403%202,5.9949814%202,4.7959481%202.4915387,3.8302979%203.4746161,3.0981365%204.4576935,2.365975%205.7621616,2%207.388022,2%20Z%22%20/%3E%20%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-pilcrow {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%20%3Ctitle%3E%20pilcrow%20%3C/title%3E%20%3Cpath%20d%3D%22m%207.388022,2%20h%209.278109%20v%202%20h%20-2%20V%2018%20H%2012.666277%20V%204.0001848%20H%209.333065%20V%2018%20H%207.333138%20V%209.990386%20C%205.7072798,9.883573%204.2194862,9.482099%203.3271547,8.787866%202.4423848,8.087294%202,7.156403%202,5.9949814%202,4.7959481%202.4915387,3.8302979%203.4746161,3.0981365%204.4576935,2.365975%205.7621616,2%207.388022,2%20Z%22%20/%3E%20%3C/svg%3E)
}
.oo-ui-icon-wrapping {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%20%3Ctitle%3E%20wrapping%20%3C/title%3E%20%3Cpath%20d%3D%22m%201,5%20v%202%20h%2014%20c%201.125297,0%202,0.8747028%202,2%200,1.125297%20-0.874703,2%20-2,2%20H%2014%20V%209%20l%20-3,3%203,3%20v%20-2%20h%201%20c%202.198703,0%204,-1.801297%204,-4%200,-2.1987028%20-1.801297,-4%20-4,-4%20z%22%20/%3E%20%3Cpath%20d%3D%22m%201,13%20h%208%20v%202%20H%201%20Z%22%20/%3E%20%3Cpath%20d%3D%22m%201,9%20h%208%20v%202%20H%201%20Z%22%20/%3E%20%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-wrapping {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%20%3Ctitle%3E%20wrapping%20%3C/title%3E%20%3Cpath%20d%3D%22m%201,5%20v%202%20h%2014%20c%201.125297,0%202,0.8747028%202,2%200,1.125297%20-0.874703,2%20-2,2%20H%2014%20V%209%20l%20-3,3%203,3%20v%20-2%20h%201%20c%202.198703,0%204,-1.801297%204,-4%200,-2.1987028%20-1.801297,-4%20-4,-4%20z%22%20/%3E%20%3Cpath%20d%3D%22m%201,13%20h%208%20v%202%20H%201%20Z%22%20/%3E%20%3Cpath%20d%3D%22m%201,9%20h%208%20v%202%20H%201%20Z%22%20/%3E%20%3C/svg%3E)
}
.oo-ui-icon-gotoLine {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%20%3Ctitle%3E%20go%20to%20line%20%3C/title%3E%20%3Cpath%20d%3D%22M%202,6%20H%203%20V%201%20H%201%20v%201%20h%201%20z%20m%20-1,9%20h%202%20v%201%20H%202%20v%201%20h%201%20v%201%20H%201%20v%201%20H%204%20V%2014%20H%201%20Z%20M%203.5,8%20H%201%20v%201%20h%202%20v%201%20H%201.5%20C%201.2238576,10%201,10.223858%201,10.5%20V%2013%20H%204%20V%2012%20H%202%20V%2011%20H%203.5%20C%203.7761424,11%204,10.776142%204,10.5%20v%20-2%20C%204,8.2238576%203.7761424,8%203.5,8%20Z%22%20/%3E%20%3Cpath%20d%3D%22M%2010,7.5%206,10%2010,12.5%20V%2011%20h%209%20V%209%20h%20-9%20z%22%20/%3E%20%3C/svg%3E)
}
.oo-ui-icon-bigger {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ebigger%3C/title%3E%3Cpath%20d%3D%22M14%2018h-1.57a.66.66%200%200%201-.44-.13.87.87%200%200%201-.25-.34l-1-2.77H5.3l-1%202.77a.83.83%200%200%201-.24.32.65.65%200%200%201-.44.15H2L7%205.47h2zm-3.85-4.7L8.42%208.72A12.66%2012.66%200%200%201%208%207.37q-.1.41-.21.75t-.21.6L5.85%2013.3zM15%202l3%204h-6l3-4z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-smaller {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Esmaller%3C/title%3E%3Cpath%20d%3D%22M12%2016h-1.05a.44.44%200%200%201-.29-.09.58.58%200%200%201-.17-.22l-.7-1.84H6.2l-.7%201.84a.56.56%200%200%201-.16.21.43.43%200%200%201-.29.1H4l3.31-8.35h1.38zm-2.57-3.13L8.28%209.82a8.5%208.5%200%200%201-.28-.9q-.06.27-.14.5l-.14.4-1.15%203zM15%206l3-4h-6l3%204z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-subscript {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Esubscript%3C/title%3E%3Cpath%20d%3D%22M13.68%2016h-2.42a.67.67%200%200%201-.46-.15%201.33%201.33%200%200%201-.28-.34l-2.77-4.44a2.65%202.65%200%200%201-.28.69L5%2015.51a2.22%202.22%200%200%201-.29.34.58.58%200%200%201-.42.15H2l4.15-6.19L2.17%204h2.42a.81.81%200%200%201%20.41.09.8.8%200%200%201%20.24.26L8%208.59a2.71%202.71%200%200%201%20.33-.74L10.6%204.4a.69.69%200%200%201%20.6-.4h2.32l-4%205.71zm3.82-4h.5v-1h-.5a1.49%201.49%200%200%200-1%20.39%201.49%201.49%200%200%200-1-.39H15v1h.5a.5.5%200%200%201%20.5.5v6a.5.5%200%200%201-.5.5H15v1h.5a1.49%201.49%200%200%200%201-.39%201.49%201.49%200%200%200%201%20.39h.5v-1h-.5a.5.5%200%200%201-.5-.5v-6a.5.5%200%200%201%20.5-.5z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-superscript {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Esuperscript%3C/title%3E%3Cpath%20d%3D%22M17.5%201h.5V0h-.5a1.49%201.49%200%200%200-1%20.39%201.49%201.49%200%200%200-1-.39H15v1h.5a.5.5%200%200%201%20.5.5v6a.5.5%200%200%201-.5.5H15v1h.5a1.49%201.49%200%200%200%201-.39%201.49%201.49%200%200%200%201%20.39h.5V8h-.5a.5.5%200%200%201-.5-.5v-6a.5.5%200%200%201%20.5-.5zm-3.82%2015h-2.42a.67.67%200%200%201-.46-.15%201.33%201.33%200%200%201-.28-.34l-2.77-4.44a2.65%202.65%200%200%201-.28.69L5%2015.51a2.22%202.22%200%200%201-.29.34.58.58%200%200%201-.42.15H2l4.15-6.19L2.17%204h2.42a.81.81%200%200%201%20.41.09.8.8%200%200%201%20.24.26L8%208.59a2.71%202.71%200%200%201%20.33-.74L10.6%204.4a.69.69%200%200%201%20.6-.4h2.32l-4%205.71z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-bold {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ebold%3C/title%3E%3Cpath%20d%3D%22M8.326%2011.274l1.722-4.908s1.305%203.843%201.626%204.907zM13.7%2017H17L11.5%203h-3L3%2017h3.3l1.24-3.496h4.92z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-italic {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eitalic%3C/title%3E%3Cpath%20d%3D%22M8.605%2011.274l3.326-6.543%201.266%206.543zM14.322%2017H17L13.703%203h-3L3%2017h2.678l2.047-3.995h5.808z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-indent {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eindent%3C/title%3E%3Cpath%20d%3D%22M1%2016h18v2H1zm8-9h10v2H9zm0%204h10v2H9zM1%202h18v2H1zm5%208l-5%204V6l5%204z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-listBullet {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ebullet%20list%3C/title%3E%3Cpath%20d%3D%22M7%2015h12v2H7zm0-6h12v2H7zm0-6h12v2H7z%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%224%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%2210%22%20r%3D%222%22/%3E%3Ccircle%20cx%3D%223%22%20cy%3D%2216%22%20r%3D%222%22/%3E%3C/svg%3E)
}
.oo-ui-icon-listNumbered {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Enumbered%20list%3C/title%3E%3Cpath%20d%3D%22M7%2015h12v2H7zm0-6h12v2H7zm0-6h12v2H7zM2%206h1V1H1v1h1v4zm-1%209h2v1H2v1h1v1H1v1h3v-5H1v1zm2.5-7H1v1h2v1H1.5a.5.5%200%200%200-.5.5V13h3v-1H2v-1h1.5a.5.5%200%200%200%20.5-.5v-2a.5.5%200%200%200-.5-.5z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-outdent {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eoutdent%3C/title%3E%3Cpath%20d%3D%22M1%2016h18v2H1zm8-9h10v2H9zm0%204h10v2H9zM1%202h18v2H1zm0%208l5%204V6l-5%204z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-find {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Earticle%20search%3C/title%3E%3Cpath%20d%3D%22M12.43%2014.34A5%205%200%200%201%2010%2015a5%205%200%201%201%203.95-2L17%2016.09V3a2%202%200%200%200-2-2H5a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h10a2%202%200%200%200%201.45-.63z%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%223%22/%3E%3C/svg%3E)
}
.oo-ui-icon-markup {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Emarkup%3C/title%3E%3Cpath%20d%3D%22M6.5%203.5l-5%205L0%2010l1.5%201.5%205%205L8%2015l-5-5%205-5-1.5-1.5zm12%205l-5-5L12%205l5%205-5%205%201.5%201.5%205-5L20%2010l-1.5-1.5z%22/%3E%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-markup {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%3Ctitle%3Emarkup%3C/title%3E%3Cpath%20d%3D%22M6.5%203.5l-5%205L0%2010l1.5%201.5%205%205L8%2015l-5-5%205-5-1.5-1.5zm12%205l-5-5L12%205l5%205-5%205%201.5%201.5%205-5L20%2010l-1.5-1.5z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-newline {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Enewline%3C/title%3E%3Cpath%20d%3D%22M17%204v6H7V6l-6%205%206%205v-4h12V4h-2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-noWikiText {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eno%20WikiText%3C/title%3E%3Cpath%20d%3D%22M16%203v2h1v10l2%202V3zM9%205V3H5l2%202zM1%201L0%202l1%201v14h3v-2H3V5l2%202v10h4v-2H7V9l6%206h-2v2h4l3%203%201-1-3-3zm12%2010l2%202V3h-4v2h2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-table {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Etable%3C/title%3E%3Cpath%20d%3D%22M19.66%202.88a2%202%200%200%200-.54-.54A2%202%200%200%200%2018%202H2a2%202%200%200%200-1.12.34%202%202%200%200%200-.54.54A2%202%200%200%200%200%204v12a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2V4a2%202%200%200%200-.34-1.12zM2%206h7v4H2zm0%2010v-4h7v4zm16%200h-7v-4h7zm0-6h-7V6h7z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-wikiText {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3EWikitext%3C/title%3E%3Cpath%20d%3D%22M1%203v14h3v-2H3V5h1V3H1zm4%200v14h4v-2H7V5h2V3H5zm12%200h-1v2h1v10h-1v2h3V3h-2zm-6%200v2h2v10h-2v2h4V3h-4z%22/%3E%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-wikiText {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%3Ctitle%3EWikitext%3C/title%3E%3Cpath%20d%3D%22M1%203v14h3v-2H3V5h1V3H1zm4%200v14h4v-2H7V5h2V3H5zm12%200h-1v2h1v10h-1v2h3V3h-2zm-6%200v2h2v10h-2v2h4V3h-4z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-image {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eimage%3C/title%3E%3Cpath%20d%3D%22M18%202H2a2%202%200%200%200-2%202v12a2%202%200%200%200%202%202h16a2%202%200%200%200%202-2V4a2%202%200%200%200-2-2zM1.83%2015l4.09-5.25%202.92%203.51L12.92%208l5.25%207z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-imageGallery {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eimage%20gallery%3C/title%3E%3Cpath%20d%3D%22M17%205H3a2%202%200%200%200-2%202v10a2%202%200%200%200%202%202h14a2%202%200%200%200%202-2V7a2%202%200%200%200-2-2zM3%2016l3.5-4.5%202.5%203%203.5-4.5%204.5%206zM4%202h12a2%202%200%200%201%202%202H2a2%202%200%200%201%202-2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-articleSearch {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Earticle%20search%3C/title%3E%3Cpath%20d%3D%22M12.43%2014.34A5%205%200%200%201%2010%2015a5%205%200%201%201%203.95-2L17%2016.09V3a2%202%200%200%200-2-2H5a2%202%200%200%200-2%202v14a2%202%200%200%200%202%202h10a2%202%200%200%200%201.45-.63z%22/%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%223%22/%3E%3C/svg%3E)
}
.oo-ui-icon-articleRedirect {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Earticle%20redirect%3C/title%3E%3Cpath%20d%3D%22M15%201H5a2%202%200%200%200-2%202v1c0%205%202%208%207%208V9l5%204-5%204v-3c-3.18%200-5.51-.85-7-2.68V17a2%202%200%200%200%202%202h10a2%202%200%200%200%202-2V3a2%202%200%200%200-2-2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-book {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ebook%3C/title%3E%3Cpath%20d%3D%22M15%202a7.65%207.65%200%200%200-5%202%207.65%207.65%200%200%200-5-2H1v15h4a7.65%207.65%200%200%201%205%202%207.65%207.65%200%200%201%205-2h4V2zm2.5%2013.5H14a4.38%204.38%200%200%200-3%201V5s1-1.5%204-1.5h2.5z%22/%3E%3Cpath%20d%3D%22M9%203.5h2v1H9z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-eye {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath%20d%3D%22M10%207.5a2.5%202.5%200%201%200%202.5%202.5A2.5%202.5%200%200%200%2010%207.5zm0%207a4.5%204.5%200%201%201%204.5-4.5%204.5%204.5%200%200%201-4.5%204.5zM10%203C3%203%200%2010%200%2010s3%207%2010%207%2010-7%2010-7-3-7-10-7z%22/%3E%3C/svg%3E)
}
.oo-ui-image-progressive.oo-ui-icon-eye {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%2399c4f1%22%3E%3Ctitle%3Eeye%3C/title%3E%3Cpath%20d%3D%22M10%207.5a2.5%202.5%200%201%200%202.5%202.5A2.5%202.5%200%200%200%2010%207.5zm0%207a4.5%204.5%200%201%201%204.5-4.5%204.5%204.5%200%200%201-4.5%204.5zM10%203C3%203%200%2010%200%2010s3%207%2010%207%2010-7%2010-7-3-7-10-7z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-add {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eadd%3C/title%3E%3Cpath%20d%3D%22M16%209h-5V4H9v5H4v2h5v5h2v-5h5V9z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-advanced {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eadvanced%3C/title%3E%3Cpath%20d%3D%22M10%202.5a7.5%207.5%200%201%200%207.5%207.5A7.5%207.5%200%200%200%2010%202.5zm0%2011a3.5%203.5%200%201%201%203.5-3.5%203.5%203.5%200%200%201-3.5%203.5z%22/%3E%3Cpath%20d%3D%22M12%203.29L11.5%200h-3L8%203.29a7%207%200%200%201%204%200zM8%2016.71L8.5%2020h3l.5-3.29a7%207%200%200%201-4%200zm8.16-10.04l2-2.68L16%201.87l-2.68%202a7%207%200%200%201%202.83%202.83zM3.84%2013.33L1.87%2016%204%2018.13l2.68-2a7%207%200%200%201-2.83-2.83zM16.71%2012l3.29-.5v-3L16.71%208a7%207%200%200%201%200%204zM3.29%208L0%208.5v3l3.29.5a7%207%200%200%201%200-4zm10.04%208.16l2.68%202L18.13%2016l-2-2.68a7%207%200%200%201-2.83%202.83zM6.67%203.84L4%201.87%201.87%204l2%202.68a7%207%200%200%201%202.8-2.84z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-cancel {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ecancel%3C/title%3E%3Cpath%20d%3D%22M10%200a10%2010%200%201%200%2010%2010A10%2010%200%200%200%2010%200zM2%2010a8%208%200%200%201%201.69-4.9L14.9%2016.31A8%208%200%200%201%202%2010zm14.31%204.9L5.1%203.69A8%208%200%200%201%2016.31%2014.9z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-close {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath%20d%3D%22M3.636%202.224l14.142%2014.142-1.414%201.414L2.222%203.638z%22/%3E%3Cpath%20d%3D%22M17.776%203.636L3.634%2017.778%202.22%2016.364%2016.362%202.222z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-help {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ehelp%3C/title%3E%3Cpath%20d%3D%22M10.06%201C13%201%2015%202.89%2015%205.53a4.59%204.59%200%200%201-2.29%204.08c-1.42.92-1.82%201.53-1.82%202.71V13H8.38v-.81a3.84%203.84%200%200%201%202-3.84c1.34-.9%201.79-1.53%201.79-2.71a2.1%202.1%200%200%200-2.08-2.14h-.17a2.3%202.3%200%200%200-2.38%202.22v.17H5A4.71%204.71%200%200%201%209.51%201a5%205%200%200%201%20.55%200zM8%2017a1.89%201.89%200%200%201%201.77-2H10a1.87%201.87%200%200%201%202%201.73%201.22%201.22%200%200%201%200%20.27%201.87%201.87%200%200%201-1.73%202%201.22%201.22%200%200%201-.27%200%201.88%201.88%200%200%201-2-1.75A1%201%200%200%201%208%2017z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-search {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Esearch%3C/title%3E%3Cpath%20d%3D%22M19%2017l-5.15-5.15a7%207%200%201%200-2%202L17%2019zM3.5%208A4.5%204.5%200%201%201%208%2012.5%204.5%204.5%200%200%201%203.5%208z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-subtract {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Esubtract%3C/title%3E%3Cpath%20d%3D%22M4%209h12v2H4z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-alert {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Ealert%3C/title%3E%3Cpath%20d%3D%22M19.64%2016.36L11.53%202.3A1.85%201.85%200%200%200%2010%201.21%201.85%201.85%200%200%200%208.48%202.3L.36%2016.36C-.48%2017.81.21%2019%201.88%2019h16.24c1.67%200%202.36-1.19%201.52-2.64zM11%2016H9v-2h2zm0-4H9V6h2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-notice {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Enotice%3C/title%3E%3Cpath%20d%3D%22M10%200a10%2010%200%201%200%2010%2010A10%2010%200%200%200%2010%200zm1%2016H9v-2h2zm0-4H9V4h2z%22/%3E%3C/svg%3E)
}
.oo-ui-icon-template-format-inline {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%222%202%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%20%3Cg%20id%3D%22inline%22%3E%20%3Cpath%20d%3D%22M8%209v7h1V9zm7%200v7h1V9zM4%2011v3h3v-3zm6%200v3h4v-3zm7%200v3h3v-3z%22/%3E%20%3C/g%3E%20%3C/svg%3E)
}
.oo-ui-icon-template-format-block {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%222%202%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%20%3Cg%20id%3D%22block-rtl%22%3E%20%3Cpath%20d%3D%22M19%206h-1v5h1zm-2%201H9v3h8zm2%206h-1v5h1zm-2%201H6v3h11z%22/%3E%20%3C/g%3E%20%3C/svg%3E)
}
.oo-ui-icon-menu {
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Emenu%3C/title%3E%3Cpath%20d%3D%22M1%203v2h18V3zm0%208h18V9H1zm0%206h18v-2H1z%22/%3E%3C/svg%3E)
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
  border-color: #434343;
  background-color: #2f2f2f
}
code {
  border-color: #434343;
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
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Edown%3C/title%3E%3Cpath%20d%3D%22M11.05%203.996l-.965-1.053-4.035%203.86-3.947-3.86L1.05%203.996l5%205%205-5%22/%3E%3C/svg%3E)
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
#mw-head.sticky-hidden {
  background: #262626
}
#mw-head.sticky-hidden .vectorTabs ul li.selected {
  background-color: #1e1e1e;
  border: 0
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
#mw-searchoptions {
  background: #151515;
  border-color: #52555a
}
#mw-searchoptions .divider {
  border-color: #52555a
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
.introheader,
.userhelpinfo {
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
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Eclose%3C/title%3E%3Cpath%20d%3D%22M3.636%202.224l14.142%2014.142-1.414%201.414L2.222%203.638z%22/%3E%3Cpath%20d%3D%22M17.776%203.636L3.634%2017.778%202.22%2016.364%2016.362%202.222z%22/%3E%3C/svg%3E)!important
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
  background-image: linear-gradient(transparent,transparent),url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23f8f9fa%22%3E%3Ctitle%3Einfo%3C/title%3E%3Cpath%20d%3D%22M9.5%2016A6.61%206.61%200%200%201%203%209.5%206.61%206.61%200%200%201%209.5%203%206.61%206.61%200%200%201%2016%209.5%206.63%206.63%200%200%201%209.5%2016zm0-14A7.5%207.5%200%201%200%2017%209.5%207.5%207.5%200%200%200%209.5%202zm.5%206v4.08h1V13H8.07v-.92H9V9H8V8zM9%206h1v1H9z%22/%3E%3C/svg%3E)
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
#content .tabber .tabbernav .tabberactive a,
#content .tabber .tabbernav .tabberactive a:active,
#content .tabber .tabbernav .tabberactive a:hover {
  color: #e6e6e6;
  background-color: #262626;
  border-color: #52555a;
  border-bottom-color: #262626
}
#content .tabber .tabbernav li a {
  color: #e6e6e6;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
  border-width: 1px
}
#content .tabber .tabbernav li a:hover {
  color: #e6e6e6;
  background-image: none;
  border-color: #606060;
  background-color: #606060
}
#content .tabber .tabbernav li a.active,
#content .tabber .tabbernav li a:active {
  color: #e6e6e6;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c
}
#content .tabber .tabbertab {
  background-color: #262626;
  border-color: #52555a
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