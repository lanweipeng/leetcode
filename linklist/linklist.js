class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }

}
class LinkList {
  constructor() {
    this.head = null
  }
  push(item) {
    const node = new Node(item)
    if (this.head === null) {
      this.head = node
    } else {
      let head = this.head
      while (head) {
        if (head.next === null) break
        head = head.next
      }
      head.next = node
    }
  }
  print() {
    let str = ''
    let head = this.head
    while (head && head.next) {
      str += head.data + '->'
      head = head.next
    }
    str += head.data
    console.log(str)
  }
}
exports.LinkList = LinkList