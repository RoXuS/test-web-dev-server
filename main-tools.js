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

  firstUpdated() {
    menu();
  }

  static get is() {
    return 'main-tools';
  }
}

customElements.define(MainTools.is, MainTools);
