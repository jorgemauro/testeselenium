const Builder = require('selenium-webdriver').Builder;
require('selenium-webdriver/chrome');
const By = require ('selenium-webdriver').By;
const driver = require ('selenium-webdriver');
const sendKeys = (keys) => {
  return (args) => {
    args.sendKeys(keys)
  }
};
const ClickElement = (build, msg = 'click in element',finder) => {
  it (msg, () => {
  return build.findElement(finder).click();
  });
};
const verifyContent=(element, show)=>{
  return (args)=>{
    console.log("element",element);
    console.log("args", args);
    console.log("show", show);
    return args.getText()===show;

  }
}
const navigates = (build)=>{
  it('navigates', () => {
    return build
      .navigate()
      .to('http://localhost:3000/')
  })
};
const  until = require('selenium-webdriver').until;
 const elementLocated= (build, msg = 'Locates an element and runs a callback', by, callback = () => {})=>{
  it (msg, () => {
    return build
      .wait(until.elementLocated(by))
      .then(callback)
  })
};

const cases = [
  [ navigates ],
  [ elementLocated, 'Finds the login form', By.className('form') ],
  [ elementLocated, 'Finds and fills in the email form', By.name('session[email]'), sendKeys('email@email.com') ],
  [ elementLocated, 'Finds the button', By.id('sel-button') ],
  [ ClickElement, 'click the button', By.id('sel-button')],
  [ elementLocated, 'Finds the button', By.id('sel-button') ],
  [ elementLocated, 'compare state', By.className('App-title'), verifyContent(By.className('App-title'),"show?") ],
]

/// ... imports up here
describe('chrome', () => {
  beforeEach(done => {
    setTimeout(() => {
      done()
    }, 500)
  })
  
  const build = new Builder()
    .forBrowser('chrome')
    .build()
  for (let i = 0; i < cases.length; i += 1) {
    let [ func, ...args ] = cases[i]
    func(build, ...args)
  }
  after(() => {
    //return build.quit()
  })
})