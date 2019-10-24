 const navigates = (build)=>{
    it('navigates', () => {
      return build
        .navigate()
        .to('http://localhost:3000/')
    })
  }
  export default navigates;