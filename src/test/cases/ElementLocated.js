const  until = require('selenium-webdriver').until;
 const elementLocated= (build, msg = 'Locates an element and runs a callback', by, callback = () => {})=>{
  it (msg, () => {
    return build
      .wait(until.elementLocated(by))
      .then(callback)
  })
}

export default elementLocated;