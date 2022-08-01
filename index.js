var x = 0;
const handleOrientation = (event) => {
  const absolute = event.absolute;
  const alpha = event.alpha;
  const beta = event.beta;
  const gamma = event.gamma;
  x = alpha;
};

function hello() {
  return x
}
log(hello());