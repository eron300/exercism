//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (ano) => { //trabalhar com if
  var divisivelPor4 = ano % 4 === 0;
  var divisivelPor100 = ano % 100 === 0;
  var divisivelPor400 = ano % 400 === 0;

  return divisivelPor400 || (divisivelPor4 && !divisivelPor100);
};
