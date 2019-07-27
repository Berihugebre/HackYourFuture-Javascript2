
class Form {
  constructor(id) {
    this.formElement = null;
    let containerOne = document.createElement('form');
    containerOne.setAttribute('id', `${id}`)
    this.formElement = containerOne;
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(this.formElement);
  }
  createButton(id, textNode) {
    const buttonOne = document.createElement('button');
    const buttonOneContent = document.createTextNode(textNode);
    buttonOne.setAttribute('id', `${id}`);
    buttonOne.appendChild(buttonOneContent);
    this.formElement.appendChild(buttonOne);
  }
  createInput(id, type) {
    const input = document.createElement('input');
    input.setAttribute('id', `${id}`);
    input.setAttribute('type', `${type}`);
    this.formElement.appendChild(input);
  }
  createCheckbox(id, textNode) {
    const label = document.createElement('label');
    label.setAttribute('for', `${id}`);
    const labelContent = document.createTextNode(`${textNode}`);
    label.appendChild(labelContent);
    const checkbox = document.createElement('input');
    checkbox.setAttribute('id', `${id}`);
    checkbox.setAttribute('type', 'checkbox');
    this.formElement.appendChild(checkbox);
    this.formElement.appendChild(label);
  }
  createHeader(textNode) {
    const header = document.createElement('h2');
    const headerContent = document.createTextNode(textNode)
    header.appendChild(headerContent);
    this.formElement.appendChild(header);
  }
  createParagraph(id, textNode) {
    const p = document.createElement('p');
    p.setAttribute('id', `${id}`);
    const pContent = document.createTextNode(textNode);
    p.appendChild(pContent);
    this.formElement.appendChild(p);
  }
  createBreak() {
    const lineBreak = document.createElement('br');
    this.formElement.appendChild(lineBreak)
  }
}
const form1 = new Form('form1');
form1.createHeader('welcome to js-2 week3 classwork page');
form1.createParagraph('p1', 'type text and click Submit to see the length of your text ');
form1.createInput('input_one', 'text');
form1.createButton('button_one', 'Submit');
form1.createBreak();
form1.createParagraph('p2', '')
form1.createHeader('which one of those is your favorite language?')
form1.createCheckbox('html', 'HTML');
form1.createCheckbox('css', 'CSS');
form1.createCheckbox('js', 'JS');

let buttonEvent = document.getElementById('button_one');
buttonEvent.addEventListener('click', () => {
  const result = document.getElementById('input_one').value;
  document.getElementById('p2').innerHTML = `Length of your text is : ${result.length}`;
})