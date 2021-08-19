//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dataReferencia) => {
  var dataEmMilisegundos = dataReferencia.getTime(); // pegando n de milisegundos de initialDate desde 1970
  var dataComGigasegundo = dataEmMilisegundos + 1e9 * 1000; //Somando 1gigasegundo
  
  return new Date(dataComGigasegundo); //transformando o numero de milisegundos (datacomgigasegundo) para um objeto date
};
