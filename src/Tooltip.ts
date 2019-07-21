import Content from './Content';
import Utils from './Utils';

class Tooltip {
  private static dom: HTMLElement;
  private static isOpen: boolean;

  public static show() {
    this.dom = document.createElement('div');

    Utils.set([this.dom])
      .style('position', 'fixed')
      .style('top', '1px')
      .style('left', '1px')
      .style('display', 'block')
      .style('width', 'auto')
      .style('height', 'auto')
      .style('z-index', '99999')
      .style('background-color', '#ffffff')
      .style('border', '1px #000000 solid')
      .style('margin', '0')
      .style('padding', '3px')
      .style('padding-right', '30px')
      .style('max-width', '250px')
      .style('max-height', '120px')
      .style('overflow-y', 'auto')
      .style('opacity', '0.9');
    document.body.appendChild(this.dom);

    this.isOpen = true;
  }

  public static hide() {
    if (this.dom) {
      document.body.removeChild(this.dom);
      this.isOpen = false;
    }
  }

  public static addContentDOM(content: Content) {
    const titleDOM = document.createElement('h1');
    const pronounceDOM = document.createElement('span');
    const partDOM = document.createElement('span');
    const descriptionDOM = document.createElement('p');
    const exampleDOM = document.createElement('p');
    const exampleMeaningDOM = document.createElement('p');
    const seperatorDOM = document.createElement('div');

    Utils.set([titleDOM])
      .style('font-size', '14px')
      .style('margin-top', '3px')
      .style('margin-bottom', '3px');
    Utils.set([pronounceDOM])
      .style('font-weight', 'normal')
      .style('margin-left', '3px');
    Utils.set([
      descriptionDOM,
      pronounceDOM,
      partDOM,
      exampleDOM,
      exampleMeaningDOM,
    ]).style('font-size', '12px')
      .style('margin-top', '3px')
      .style('margin-bottom', '3px');
    Utils.set([exampleDOM, exampleMeaningDOM])
      .style('font-style', 'italic')
      .style('color', '#777777');
    Utils.set([partDOM])
      .style('background-color', '#dfdfdf')
      .style('margin-right', '3px');
    Utils.set([seperatorDOM])
      .style('margin-top', '10px')
      .style('margin-bottom', '10px');

    Utils.appendHTML(this.dom, titleDOM, content.title);
    Utils.appendText(this.dom, descriptionDOM, content.description);
    Utils.appendText(this.dom, exampleDOM, content.example);
    Utils.appendText(this.dom, exampleMeaningDOM, content.exampleMeaning);
    Utils.appendText(titleDOM, pronounceDOM, content.pronounce);
    Utils.prependText(descriptionDOM, partDOM, content.part);

    this.dom.appendChild(seperatorDOM);
  }

  public static getIsOpen() {
    return this.isOpen;
  }

  public static getDOM() {
    return this.dom;
  }
}

export default Tooltip;