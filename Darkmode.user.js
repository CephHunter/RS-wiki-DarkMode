// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-alpha.3
// ==/UserScript==
(function() {var css = `
.oo-ui-fieldLayout-disabled > .oo-ui-fieldLayout-body > .oo-ui-fieldLayout-header > .oo-ui-labelElement-label {
  color: #72777d;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #dfdfdf;
  background: #595959;
  border-color: #595959;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #dfdfdf;
  background: #606060;
  border-color: #606060;
}
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #dfdfdf;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-buttonElement-active.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #2f69a8;
  border-color: #2f69a8;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #99c4f1;
  background: #595959;
  border-color: #595959;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #99c4f1;
  background: #606060;
  border-color: #606060;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #99c4f1;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #2f69a8;
  border-color: #2f69a8;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #f8f8f8;
  background: #377ac4;
  border-color: #377ac4;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #295c94;
  border-color: #295c94;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #d63434;
  background: #595959;
  border-color: #595959;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #d63434;
  background: #606060;
  border-color: #606060;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #d63434;
  background: #4c4c4c;
  border-color: #4c4c4c;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #b32424;
  border-color: #b32424;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
  color: #f8f8f8;
  background: #c82828;
  border-color: #c82828;
}
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #f8f8f8;
  background: #9e2020;
  border-color: #9e2020;
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button {
  color: #858585;
  background: #323232;
  border-color: #323232;
}
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #c5c5c5;
}
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-progressive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #99c4f1;
}
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-flaggedElement-destructive.oo-ui-buttonElement-frameless.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #d63434;
}
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-buttonElement-framed.oo-ui-widget-disabled > .oo-ui-buttonElement-button {
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
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:hover,
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:active,
.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle:active:focus,
.oo-ui-buttonElement-pressed.oo-ui-popupToolGroup.oo-ui-widget-enabled > .oo-ui-popupToolGroup-handle {
  background: #595959;
}
.oo-ui-popupToolGroup.oo-ui-popupToolGroup-active > .oo-ui-popupToolGroup-handle {
  background: #595959;
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
GEChartBox {
  background: #1e1e1e;
}
.highcharts-background {
  fill: #1e1e1e;
}
.highcharts-plot-background {
  fill: #1e1e1e;
}
.highcharts-legend-box {
  fill: #1e1e1e;
}
table GEChartBox {
  background: #323232;
}
table .highcharts-background {
  fill: #323232;
}
table .highcharts-plot-background {
  fill: #323232;
}
table .highcharts-legend-box {
  fill: #323232;
}
#GEchartpopup {
  background: #1e1e1e;
}
#GEchartpopup GEChartBox {
  background: #1e1e1e;
}
#GEchartpopup .highcharts-background {
  fill: #1e1e1e;
}
#GEchartpopup .highcharts-plot-background {
  fill: #1e1e1e;
}
#GEchartpopup .highcharts-legend-box {
  fill: #1e1e1e;
}
.highcharts-yaxis-grid .highcharts-grid-line {
  stroke: #52555a;
}
.highcharts-axis-line {
  stroke: #52555a;
}
.highcharts-title {
  color: #c5c5c5 !important;
}
.highcharts-subtitle {
  color: #acacac !important;
}
.highcharts-axis-labels > text {
  fill: #acacac !important;
}
#GEchartpopup {
  color: #c5c5c5;
}
.highcharts-axis-title,
.highcharts-range-label text,
.highcharts-legend-item text,
.highcharts-range-selector-buttons text {
  fill: #c5c5c5 !important;
}
.infobox-switch .hidden td[data-attr-param="graph"] {
  background: #323232;
  color: #c5c5c5;
}
.highcharts-navigator-outline {
  stroke: #52555a;
}
.highcharts-navigator-xaxis .highcharts-grid-line {
  stroke: #52555a;
}
.highcharts-navigator-series .highcharts-area {
  fill: rgba(69, 115, 167, 0.3);
}
.highcharts-navigator-series .highcharts-graph {
  stroke: #618cbe;
}
.zoomButton .highcharts-button-box {
  fill: #595959;
}
.zoomButton:hover .highcharts-button-box {
  fill: #606060;
}
.zoomButton:active .highcharts-button-box {
  fill: #4c4c4c;
}
.zoomButton text {
  fill: #dfdfdf !important;
}
.highcharts-label-box {
  stroke: #52555a;
}
.highcharts-range-input .highcharts-label-box {
  stroke: #52555a;
  fill: #353535;
}
.highcharts-range-input text {
  fill: #c5c5c5 !important;
}
.highcharts-scrollbar-track {
  fill: #383838;
  stroke: #383838;
}
.highcharts-scrollbar-button {
  fill: #515151;
  stroke: #515151;
}
.highcharts-scrollbar-thumb {
  fill: #6a6a6a;
  stroke: #6a6a6a;
}
#GEchartpopup .highcharts-scrollbar-track {
  fill: #383838;
  stroke: #383838;
}
#GEchartpopup .highcharts-scrollbar-button {
  fill: #515151;
  stroke: #515151;
}
#GEchartpopup .highcharts-scrollbar-thumb {
  fill: #6a6a6a;
  stroke: #6a6a6a;
}
.highcharts-scrollbar-arrow {
  fill: #dfdfdf;
}
.highcharts-scrollbar-rifles {
  stroke: #dfdfdf;
  stroke-width: 2px;
}
.highcharts-tooltip-box path:last-of-type {
  fill: rgba(43, 43, 43, 0.85);
  stroke: #52555a;
}
.highcharts-tooltip-box text {
  fill: #c5c5c5 !important;
}
.gemw-header .gemw-name a {
  color: #c5c5c5;
}
.gemw-header .gemw-examine {
  color: #acacac;
}
.gemw-header .gemw-price::after {
  color: #acacac;
}
.gemw-header .gemw-updated {
  color: #acacac;
}
.gemw-header .gemw-time {
  color: #c5c5c5;
}
.gemw-header .gemw-update-price .oo-ui-icon-help {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>help</title><path d="M10.06 1C13 1 15 2.89 15 5.53a4.59 4.59 0 0 1-2.29 4.08c-1.42.92-1.82 1.53-1.82 2.71V13H8.38v-.81a3.84 3.84 0 0 1 2-3.84c1.34-.9 1.79-1.53 1.79-2.71a2.1 2.1 0 0 0-2.08-2.14h-.17a2.3 2.3 0 0 0-2.38 2.22v.17H5A4.71 4.71 0 0 1 9.51 1a5 5 0 0 1 .55 0zM8 17a1.89 1.89 0 0 1 1.77-2H10a1.87 1.87 0 0 1 2 1.73 1.22 1.22 0 0 1 0 .27 1.87 1.87 0 0 1-1.73 2 1.22 1.22 0 0 1-.27 0 1.88 1.88 0 0 1-2-1.75A1 1 0 0 1 8 17z"/></svg>');
}
.gemw-body .gemw-section-left a {
  color: #acacac;
}
.gemw-body .gemw-property {
  border-top-color: #acacac;
}
.gemw-body .gemw-property dt {
  color: #c5c5c5;
}
.gemw-body .gemw-links {
  color: #acacac;
}
.gemw-body .gemw-chart {
  background: none;
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
  list-style-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='5' height='13'%3E %3Ccircle cx='2.5' cy='9.5' r='2.5' fill='#c5c5c5'/%3E %3C/svg%3E");
}
input[type="search"],
input[type="text"],
input[type="number"],
.mw-ui-input,
.mw-ui-input-inline,
.mw-searchInput,
.mw-input input,
input.smw-form-input,
input {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
input[type="search"]::-webkit-input-placeholder,
input[type="text"]::-webkit-input-placeholder,
input[type="number"]::-webkit-input-placeholder,
.mw-ui-input::-webkit-input-placeholder,
.mw-ui-input-inline::-webkit-input-placeholder,
.mw-searchInput::-webkit-input-placeholder,
.mw-input input::-webkit-input-placeholder,
input.smw-form-input::-webkit-input-placeholder,
input::-webkit-input-placeholder {
  color: #929292;
}
input[type="search"]::-ms-input-placeholder,
input[type="text"]::-ms-input-placeholder,
input[type="number"]::-ms-input-placeholder,
.mw-ui-input::-ms-input-placeholder,
.mw-ui-input-inline::-ms-input-placeholder,
.mw-searchInput::-ms-input-placeholder,
.mw-input input::-ms-input-placeholder,
input.smw-form-input::-ms-input-placeholder,
input::-ms-input-placeholder {
  color: #929292;
}
input[type="search"]::placeholder,
input[type="text"]::placeholder,
input[type="number"]::placeholder,
.mw-ui-input::placeholder,
.mw-ui-input-inline::placeholder,
.mw-searchInput::placeholder,
.mw-input input::placeholder,
input.smw-form-input::placeholder,
input::placeholder {
  color: #929292;
}
input[type="search"]:hover,
input[type="text"]:hover,
input[type="number"]:hover,
.mw-ui-input:hover,
.mw-ui-input-inline:hover,
.mw-searchInput:hover,
.mw-input input:hover,
input.smw-form-input:hover,
input:hover {
  border-color: #6a6e75;
}
input[type="submit"],
input[type="reset"],
input[type="button"],
.button,
button {
  color: #f8f8f8;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid;
}
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover,
.button:hover,
button:hover {
  color: #f8f8f8;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4;
}
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
  color: #f8f8f8;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94;
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
button.secondary:hover {
  color: #dfdfdf;
  background-image: none;
  border-color: #606060;
  background-color: #606060;
}
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
.tool-button.tool-active,
.tool.tool-active.oo-ui-buttonElement-frameless.oo-ui-iconElement {
  background: #595959;
  outline-color: #7f7f7f;
  box-shadow: none;
}
.codeEditor-status {
  background: #262626;
  border-color: #52555a;
}
.codeEditor-status-message {
  border-color: #52555a;
}
.ace_search {
  background: #1e1e1e;
  color: #c5c5c5;
  border-color: #52555a;
}
.ace_search_field {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
.ace_search_field::-webkit-input-placeholder {
  color: #929292;
}
.ace_search_field::-ms-input-placeholder {
  color: #929292;
}
.ace_search_field::placeholder {
  color: #929292;
}
.ace_search_field:hover {
  border-color: #6a6e75;
}
.ace_searchbtn {
  color: #dfdfdf;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
}
.ace_searchbtn:hover {
  color: #dfdfdf;
  background-image: none;
  border-color: #606060;
  background-color: #606060;
}
.ace_searchbtn:active,
.ace_searchbtn.active {
  color: #dfdfdf;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c;
}
.ace_searchbtn:last-child {
  border-right: none;
  border-left-color: #7f7f7f;
}
.ace_searchbtn:not(:nth-child(2)):not(:last-child) {
  border-right-color: #7f7f7f;
  border-left-color: #7f7f7f;
}
.ace_searchbtn.prev::after,
.ace_searchbtn.next::after {
  border-color: #c5c5c5;
}
.ace_button {
  color: #dfdfdf;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
}
.ace_button:hover {
  color: #dfdfdf;
  background-image: none;
  border-color: #606060;
  background-color: #606060;
}
.ace_button:active,
.ace_button.active {
  color: #dfdfdf;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c;
}
.ace_button.checked {
  border-color: #7f7f7f;
}
.ace_searchbtn_close {
  -webkit-filter: brightness(1.5);
          filter: brightness(1.5);
}
.ace_searchbtn_close:hover {
  -webkit-filter: brightness(1);
          filter: brightness(1);
}
.mw-scribunto-console-fieldset,
.mw-scribunto-message {
  background: #2b2b2b;
  color: #acacac;
}
.mw-scribunto-print {
  background: #2b2b2b;
  color: #c5c5c5;
}
.mw-scribunto-error {
  background: #2b2b2b;
  color: #d63434;
}
.mw-scribunto-clear {
  color: #d63434;
  border-bottom-color: #d63434;
}
.mw-scribunto-input {
  color: #99c4f1;
}
textarea#mw-scribunto-input {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none;
}
textarea#mw-scribunto-input::-webkit-input-placeholder {
  color: #929292;
}
textarea#mw-scribunto-input::-ms-input-placeholder {
  color: #929292;
}
textarea#mw-scribunto-input::placeholder {
  color: #929292;
}
textarea#mw-scribunto-input:hover {
  border-color: #6a6e75;
}
.mw-highlight pre .hll {
  background-color: #49483e;
}
.mw-highlight pre {
  background: #272822;
  color: #f8f8f2;
}
.mw-highlight pre .c {
  color: #75715e;
}
/* Comment */
.mw-highlight pre .err {
  color: #960050;
  background-color: #1e0010;
}
/* Error */
.mw-highlight pre .k {
  color: #66d9ef;
}
/* Keyword */
.mw-highlight pre .l {
  color: #ae81ff;
}
/* Literal */
.mw-highlight pre .n {
  color: #f8f8f2;
}
/* Name */
.mw-highlight pre .o {
  color: #f92672;
}
/* Operator */
.mw-highlight pre .p {
  color: #f8f8f2;
}
/* Punctuation */
.mw-highlight pre .ch {
  color: #75715e;
}
/* Comment.Hashbang */
.mw-highlight pre .cm {
  color: #75715e;
}
/* Comment.Multiline */
.mw-highlight pre .cp {
  color: #75715e;
}
/* Comment.Preproc */
.mw-highlight pre .cpf {
  color: #75715e;
}
/* Comment.PreprocFile */
.mw-highlight pre .c1 {
  color: #75715e;
}
/* Comment.Single */
.mw-highlight pre .cs {
  color: #75715e;
}
/* Comment.Special */
.mw-highlight pre .gd {
  color: #f92672;
}
/* Generic.Deleted */
.mw-highlight pre .ge {
  font-style: italic;
}
/* Generic.Emph */
.mw-highlight pre .gi {
  color: #a6e22e;
}
/* Generic.Inserted */
.mw-highlight pre .gs {
  font-weight: bold;
}
/* Generic.Strong */
.mw-highlight pre .gu {
  color: #75715e;
}
/* Generic.Subheading */
.mw-highlight pre .kc {
  color: #66d9ef;
}
/* Keyword.Constant */
.mw-highlight pre .kd {
  color: #66d9ef;
}
/* Keyword.Declaration */
.mw-highlight pre .kn {
  color: #f92672;
}
/* Keyword.Namespace */
.mw-highlight pre .kp {
  color: #66d9ef;
}
/* Keyword.Pseudo */
.mw-highlight pre .kr {
  color: #66d9ef;
}
/* Keyword.Reserved */
.mw-highlight pre .kt {
  color: #66d9ef;
}
/* Keyword.Type */
.mw-highlight pre .ld {
  color: #e6db74;
}
/* Literal.Date */
.mw-highlight pre .m {
  color: #ae81ff;
}
/* Literal.Number */
.mw-highlight pre .s {
  color: #e6db74;
}
/* Literal.String */
.mw-highlight pre .na {
  color: #a6e22e;
}
/* Name.Attribute */
.mw-highlight pre .nb {
  color: #f8f8f2;
}
/* Name.Builtin */
.mw-highlight pre .nc {
  color: #a6e22e;
}
/* Name.Class */
.mw-highlight pre .no {
  color: #66d9ef;
}
/* Name.Constant */
.mw-highlight pre .nd {
  color: #a6e22e;
}
/* Name.Decorator */
.mw-highlight pre .ni {
  color: #f8f8f2;
}
/* Name.Entity */
.mw-highlight pre .ne {
  color: #a6e22e;
}
/* Name.Exception */
.mw-highlight pre .nf {
  color: #a6e22e;
}
/* Name.Function */
.mw-highlight pre .nl {
  color: #f8f8f2;
}
/* Name.Label */
.mw-highlight pre .nn {
  color: #f8f8f2;
}
/* Name.Namespace */
.mw-highlight pre .nx {
  color: #a6e22e;
}
/* Name.Other */
.mw-highlight pre .py {
  color: #f8f8f2;
}
/* Name.Property */
.mw-highlight pre .nt {
  color: #f92672;
}
/* Name.Tag */
.mw-highlight pre .nv {
  color: #f8f8f2;
}
/* Name.Variable */
.mw-highlight pre .ow {
  color: #f92672;
}
/* Operator.Word */
.mw-highlight pre .w {
  color: #f8f8f2;
}
/* Text.Whitespace */
.mw-highlight pre .mb {
  color: #ae81ff;
}
/* Literal.Number.Bin */
.mw-highlight pre .mf {
  color: #ae81ff;
}
/* Literal.Number.Float */
.mw-highlight pre .mh {
  color: #ae81ff;
}
/* Literal.Number.Hex */
.mw-highlight pre .mi {
  color: #ae81ff;
}
/* Literal.Number.Integer */
.mw-highlight pre .mo {
  color: #ae81ff;
}
/* Literal.Number.Oct */
.mw-highlight pre .sa {
  color: #e6db74;
}
/* Literal.String.Affix */
.mw-highlight pre .sb {
  color: #e6db74;
}
/* Literal.String.Backtick */
.mw-highlight pre .sc {
  color: #e6db74;
}
/* Literal.String.Char */
.mw-highlight pre .dl {
  color: #e6db74;
}
/* Literal.String.Delimiter */
.mw-highlight pre .sd {
  color: #e6db74;
}
/* Literal.String.Doc */
.mw-highlight pre .s2 {
  color: #e6db74;
}
/* Literal.String.Double */
.mw-highlight pre .se {
  color: #ae81ff;
}
/* Literal.String.Escape */
.mw-highlight pre .sh {
  color: #e6db74;
}
/* Literal.String.Heredoc */
.mw-highlight pre .si {
  color: #e6db74;
}
/* Literal.String.Interpol */
.mw-highlight pre .sx {
  color: #e6db74;
}
/* Literal.String.Other */
.mw-highlight pre .sr {
  color: #e6db74;
}
/* Literal.String.Regex */
.mw-highlight pre .s1 {
  color: #e6db74;
}
/* Literal.String.Single */
.mw-highlight pre .ss {
  color: #e6db74;
}
/* Literal.String.Symbol */
.mw-highlight pre .bp {
  color: #f8f8f2;
}
/* Name.Builtin.Pseudo */
.mw-highlight pre .fm {
  color: #a6e22e;
}
/* Name.Function.Magic */
.mw-highlight pre .vc {
  color: #f8f8f2;
}
/* Name.Variable.Class */
.mw-highlight pre .vg {
  color: #f8f8f2;
}
/* Name.Variable.Global */
.mw-highlight pre .vi {
  color: #f8f8f2;
}
/* Name.Variable.Instance */
.mw-highlight pre .vm {
  color: #f8f8f2;
}
/* Name.Variable.Magic */
.mw-highlight pre .il {
  color: #ae81ff;
}
/* Literal.Number.Integer.Long */
.ace-tm .ace_gutter {
  background: #2F3129;
  color: #8F908A;
}
.ace-tm .ace_print-margin {
  width: 1px;
  background: #555651;
}
.ace-tm {
  background-color: #272822;
  color: #F8F8F2;
}
.ace-tm .ace_cursor {
  color: #F8F8F0;
}
.ace-tm .ace_marker-layer .ace_selection {
  background: #49483E;
}
.ace-tm.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #272822;
}
.ace-tm .ace_marker-layer .ace_step {
  background: #665200;
}
.ace-tm .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #49483E;
}
.ace-tm .ace_marker-layer .ace_active-line {
  background: #202020;
}
.ace-tm .ace_gutter-active-line {
  background-color: #272727;
}
.ace-tm .ace_marker-layer .ace_selected-word {
  border: 1px solid #49483E;
  background: #49483E;
}
.ace-tm .ace_invisible {
  color: #52524d;
}
.ace-tm .ace_entity.ace_name.ace_tag,
.ace-tm .ace_keyword,
.ace-tm .ace_meta.ace_tag,
.ace-tm .ace_storage {
  color: #F92672;
}
.ace-tm .ace_punctuation,
.ace-tm .ace_punctuation.ace_tag {
  color: #fff;
}
.ace-tm .ace_constant.ace_character,
.ace-tm .ace_constant.ace_language,
.ace-tm .ace_constant.ace_numeric,
.ace-tm .ace_constant.ace_other {
  color: #AE81FF;
}
.ace-tm .ace_invalid {
  color: #F8F8F0;
  background-color: #F92672;
}
.ace-tm .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #AE81FF;
}
.ace-tm .ace_support.ace_constant,
.ace-tm .ace_support.ace_function {
  color: #66D9EF;
}
.ace-tm .ace_fold {
  background-color: #A6E22E;
  border-color: #F8F8F2;
}
.ace-tm .ace_storage.ace_type,
.ace-tm .ace_support.ace_class,
.ace-tm .ace_support.ace_type {
  font-style: italic;
  color: #66D9EF;
}
.ace-tm .ace_entity.ace_name.ace_function,
.ace-tm .ace_entity.ace_other,
.ace-tm .ace_entity.ace_other.ace_attribute-name,
.ace-tm .ace_variable {
  color: #A6E22E;
}
.ace-tm .ace_variable.ace_parameter {
  font-style: italic;
  color: #FD971F;
}
.ace-tm .ace_string {
  color: #E6DB74;
}
.ace-tm .ace_comment {
  color: #75715E;
}
.ace-tm .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWPQ0FD0ZXBzd/wPAAjVAoxeSgNeAAAAAElFTkSuQmCC) right repeat-y;
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
.editnotice,
div.mw-warning-with-logexcerpt {
  background: #151515;
  color: #c5c5c5;
  border-color: #52555a;
  box-shadow: none;
}
#semiprotectedpagewarning {
  border-color: #52555a !important;
  background: #1a1a1a;
}
.ns-120 #mw-content-text .mw-parser-output > ul li,
.transcript > ul li,
.ns-120 #mw-content-text .mw-parser-output > ul ul li,
.transcript > ul ul li {
  border-left-color: #9f9f9f;
}
.ns-120 #mw-content-text .mw-parser-output > ul li b:first-child,
.transcript > ul li b:first-child,
.ns-120 #mw-content-text .mw-parser-output > ul ul li b:first-child,
.transcript > ul ul li b:first-child {
  color: #99c4f1;
}
table.property-page-results .header-title {
  color: #c5c5c5;
}
table.property-page-results .value-row:hover {
  background-color: #262626;
}
.smw-property-page-indicator {
  color: #c5c5c5;
  border-color: #52555a;
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
  background-color: #303030;
}
#mw-head #p-cactions.vectorMenu h3 {
  background: #262626;
}
#mw-head #p-cactions.vectorMenu h3 span {
  color: #c5c5c5;
}
#mw-head #p-cactions.vectorMenu h3 span:after {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="#f8f9fa"><title>down</title><path d="M11.05 3.996l-.965-1.053-4.035 3.86-3.947-3.86L1.05 3.996l5 5 5-5"/></svg>');
}
#mw-head #p-cactions.vectorMenu:hover h3 {
  background: #303030;
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
  background: #212121;
  border-color: #353535;
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
.wikiEditor-ui .wikiEditor-ui-view {
  border-color: #52555a;
}
.wikiEditor-ui .wikiEditor-ui-top {
  border-color: #52555a;
}
.wikiEditor-ui-toolbar {
  background: #262626;
}
.wikiEditor-ui-toolbar .group {
  border-color: #52555a;
  height: auto;
}
.wikiEditor-ui-toolbar .tabs span.tab a,
.wikiEditor-ui-toolbar .tabs span.tab a:visited,
.wikiEditor-ui-toolbar .tabs span.tab a:active,
.wikiEditor-ui-toolbar .tabs span.tab a:link {
  color: #c5c5c5;
}
#wikiEditor-ui-toolbar .oo-ui-iconElement-icon,
#wikiEditor-ui-toolbar .oo-ui-indicatorElement-indicator {
  -webkit-filter: invert(1);
          filter: invert(1);
}
.wikiEditor-ui-toolbar .sections .section {
  background: #262626;
  border-color: #52555a;
}
.wikiEditor-ui-toolbar .group .label {
  color: #c5c5c5;
}
.wikiEditor-ui-toolbar .group .tool-select {
  background-color: #353535;
  border-color: #52555a;
}
.wikiEditor-ui-toolbar .group .tool-select .label {
  color: #c5c5c5;
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options {
  background: #2b2b2b;
  border-color: #52555a;
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options .option {
  color: #c5c5c5;
}
.wikiEditor-ui-toolbar .group .tool-select .menu .options .option:hover {
  color: #c5c5c5;
  background-color: #383838;
}
.wikiEditor-ui-toolbar .booklet .index div {
  color: #c5c5c5;
}
.wikiEditor-ui-toolbar .booklet .index .current {
  color: #c5c5c5;
  background: #383838;
}
.wikiEditor-ui-toolbar .booklet .page {
  background: #262626;
}
.wikiEditor-ui-toolbar .booklet .page-characters div span {
  border-color: #52555a;
  color: #c5c5c5;
}
.wikiEditor-ui-toolbar .booklet .page-characters div span:hover {
  background: #383838;
}
.wikiEditor-ui-toolbar .booklet .page-table td {
  color: #c5c5c5;
  border-color: #52555a;
}
.wikiEditor-ui-toolbar .booklet .page-table th {
  color: #99c4f1;
}
.editOptions {
  background: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5;
}
#wpTextbox0 {
  background: #a9a9a9 !important;
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
.questdetails .oo-ui-icon-info {
  background-image: linear-gradient(transparent, transparent), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="#f8f9fa"><title>info</title><path d="M9.5 16A6.61 6.61 0 0 1 3 9.5 6.61 6.61 0 0 1 9.5 3 6.61 6.61 0 0 1 16 9.5 6.63 6.63 0 0 1 9.5 16zm0-14A7.5 7.5 0 1 0 17 9.5 7.5 7.5 0 0 0 9.5 2zm.5 6v4.08h1V13H8.07v-.92H9V9H8V8zM9 6h1v1H9z"/></svg>');
}
.questreq ul {
  border-left: 1px dotted #9f9f9f;
}
blockquote {
  color: #acacac;
}
blockquote p:not(.quote-source) {
  border-color: #52555a;
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
  border-color: #2e2f32;
}
.navbox .navbox-group {
  background: #2b2b2b;
}
.navbox #navbox-title,
.navbox .navbox-footer {
  border-color: #1e1e1e;
  color: #dfdfdf;
  background: #265588;
}
.navbox #navbox-title a,
.navbox .navbox-footer a {
  color: #dfdfdf;
}
.navbox .navbox-collapsible #navbox-title,
.navbox .navbox-collapsible .navbox-footer {
  background-color: #2f69a8;
}
.documentation {
  background-color: #262626;
  color: #c5c5c5;
}
.documentation a,
.documentation a:visited,
.documentation a:active,
.documentation a:link {
  color: #6bbaea;
}
.documentation a.new,
.documentation a:visited.new,
.documentation a:active.new,
.documentation a:link.new {
  color: #ba0000;
}
.shortcut {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a;
}
#content .tabberlive ul.tabbernav li.tabberactive a {
  color: #f8f8f8;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid;
  border: none;
}
#content .tabberlive ul.tabbernav li.tabberactive a:hover {
  color: #f8f8f8;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4;
}
#content .tabberlive ul.tabbernav li.tabberactive a:active,
#content .tabberlive ul.tabbernav li.tabberactive a.active {
  color: #f8f8f8;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94;
}
#content .tabberlive ul.tabbernav li a {
  color: #dfdfdf;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid;
  border: none;
}
#content .tabberlive ul.tabbernav li a:hover {
  color: #dfdfdf;
  background-image: none;
  border-color: #606060;
  background-color: #606060;
}
#content .tabberlive ul.tabbernav li a:active,
#content .tabberlive ul.tabbernav li a.active {
  color: #dfdfdf;
  background-image: none;
  border-color: #4c4c4c;
  background-color: #4c4c4c;
}
#content .tabberlive div.tabbertab {
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
ol.references li:target,
sup.reference:target {
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
  border-color: #52555a !important;
}
#content .portal-link a {
  background-color: #323232;
  color: #c5c5c5;
}
#content .portal-link a:hover {
  background-color: #4c4c4c;
  color: #dfdfdf;
}
#DisassemblyT tr:first-of-type th:first-of-type {
  border-top-color: #323232 !important;
}
#DisassemblyT .infobox-header {
  border-top-color: #323232 !important;
}
.switch-infobox .switch-infobox-triggers .button,
.infobox-switch .infobox-buttons .button {
  color: #f8f8f8;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid;
}
.switch-infobox .switch-infobox-triggers .button:hover,
.infobox-switch .infobox-buttons .button:hover {
  color: #f8f8f8;
  background-image: none;
  background-color: #377ac4;
  border-color: #377ac4;
}
.switch-infobox .switch-infobox-triggers .button:active,
.infobox-switch .infobox-buttons .button:active,
.switch-infobox .switch-infobox-triggers .button.active,
.infobox-switch .infobox-buttons .button.active {
  color: #f8f8f8;
  background-image: none;
  background-color: #295c94;
  border-color: #295c94;
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
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#f8f9fa"> <path d="M12.001 2.085c-5.478 0-9.916 4.438-9.916 9.916 0 5.476 4.438 9.914 9.916 9.914 5.476 0 9.914-4.438 9.914-9.914 0-5.478-4.438-9.916-9.914-9.916zm.001 18c-4.465 0-8.084-3.619-8.084-8.083 0-4.465 3.619-8.084 8.084-8.084 4.464 0 8.083 3.619 8.083 8.084 0 4.464-3.619 8.083-8.083 8.083z"/> <path d="M11.766 6.688c-2.5 0-3.219 2.188-3.219 2.188l1.411.854s.298-.791.901-1.229c.516-.375 1.625-.625 2.219.125.701.885-.17 1.587-1.078 2.719-.953 1.186-1 3.655-1 3.655h1.969s.135-2.318 1.041-3.381c.603-.707 1.443-1.338 1.443-2.494s-1.187-2.437-3.687-2.437zM11 16h2v2h-2z"/> </svg>') left center no-repeat;
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
  border-color: #9f9f9f;
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
  color: #acacac;
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
form fieldset {
  background: #151515;
  border-color: #52555a;
}
form fieldset legend {
  color: #c5c5c5;
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