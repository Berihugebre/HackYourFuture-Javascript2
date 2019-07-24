

class Form {
  constructor() {
    this.formElement = null;
    let containerOne = document.createElement('form');
    containerOne.setAttribute('id', 'foods');
    this.formElement = containerOne;
    let body = document.getElementsByTagName('body')[0];
    body.appendChild(this.formElement);
  }
  createButton() {
    const buttonOne = document.createElement('button');
    const buttonOneContent = document.createTextNode('Submit');
    buttonOne.appendChild(buttonOneContent);
    this.formElement.appendChild(buttonOne);
  }
  createInput() {
    const inputOne = document.createElement('input');
    this.formElement.appendChild(inputOne);
  }
  createOptions() {
    const select = document.createElement('select');
    const optionOne = document.createElement('option');
    const optionOneContent = document.createTextNode("HTML");
    const optionTwo = document.createElement('option')
    const optionTwoContent = document.createTextNode("CSS");
    const optionThree = document.createElement('option')
    const optionThreeContent = document.createTextNode("JS");
    optionOne.appendChild(optionOneContent);
    optionTwo.appendChild(optionTwoContent);
    optionThree.appendChild(optionThreeContent);
    select.appendChild(optionOne);
    select.appendChild(optionTwo);
    select.appendChild(optionThree);
    this.formElement.appendChild(select)
  }
  createHeader() {
    const header = document.createElement('h2');
    const headerContent = document.createTextNode('Please Choose your Favorite Language')
    header.appendChild(headerContent);
    this.formElement.appendChild(header);
  }
}
const form1 = new Form('form');
form1.createHeader();
form1.createOptions()

const form2 = new Form('form');
form2.createInput();
form2.createButton();
console.log()