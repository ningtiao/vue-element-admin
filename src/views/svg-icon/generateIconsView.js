const data = {
  state: {
    iconsMap: []
  },
  generate(iconsMap) {
    console.log(iconsMap)
    this.state.iconsMap = iconsMap
  }
}
console.log(data)
export default data
