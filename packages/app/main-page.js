import {
  LitElement, html, css
} from 'lit-element';

class MainPage extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }`;
  }

  render() {
    return html`Page`;
  }

  static get is() {
    return 'main-page';
  }
}

customElements.define(MainPage.is, MainPage);
