function grow(x) {
  const reducer = (accumulator, currentValue) => accumulator * currentValue;
  return (x.reduce(reducer))
}