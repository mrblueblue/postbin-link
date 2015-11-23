import shortid from 'shortid';

export function generateBinId(){
  return shortid.generate();
}
