const By = require ('selenium-webdriver').By;
const sendKeys = (keys) => {
  return (args) => {
    args.sendKeys(keys)
  }
};
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
  [ elementLocated, 'Finds the login form', By.css('form') ],
  [ elementLocated, 'Finds and fills in the email form', By.name('session[email]'), sendKeys('email@email.com') ]
]

export default cases;