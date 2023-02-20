function code() {
    let code = "#";
    const formula = "1234578906";
    for (let index = 0; index < formula.length; index++) {
      const value = Math.round(Math.random() * formula.length);
    
      code += formula[value == 10 ? 9 : value];
    }
    
    return code;
  }
export default  code