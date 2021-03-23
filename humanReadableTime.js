function humanReadable(seconds) {
  // TODO
let s = 0
let m = 0
let h = 0
s = seconds % 60
m = Math.floor(seconds / 60) % 60
h = Math.floor(seconds / 3600)
  
let timeplaces = (n) => {
  if (n < 10) {
    return '0' + n
  }
  return String(n)
}
  
return timeplaces(h) + ':' + timeplaces(m) + ':' + timeplaces(s)

}