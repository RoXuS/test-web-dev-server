import {
  LitElement, html, css
} from 'lit-element';

import './main-tools'

class MainApp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }`;
  }

  render() {
    return html`
      Hello
      <main-tools></main-tools>
    `;
  }

  static get is() {
    return 'main-app';
  }
}

customElements.define(MainApp.is, MainApp);
