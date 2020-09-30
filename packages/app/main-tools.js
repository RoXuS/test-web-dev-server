import {
  LitElement, html, css
} from 'lit-element';

import menu from './menu';

class MainTools extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }`;
  }

  render() {
    return html`<div @click="${this.open.bind(this)}">Click me!</div>`;
  }

  open() {
    menu();
  }

  static get is() {
    return 'main-tools';
  }
}

customElements.define(MainTools.is, MainTools);
