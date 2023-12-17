import View from './view.js';
import {html} from '../utilities.js';

class EditorView extends View {
  constructor() {
    super();

    //this.classList.add('trip-info');
  }

  /**
   * @override
   */
  createHtml() {
    return html`

    `;
  }
}

customElements.define('editor-view', EditorView);

export default EditorView;
