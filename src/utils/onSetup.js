import lifecycle from 'recompose/lifecycle';
export default function onSetup(setup) {
  return lifecycle(setup, () => null);
}
