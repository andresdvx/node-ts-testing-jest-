export const getAge = (birthDate: string): number => {
  // console.log({currentDate: new Date().getFullYear()})
  return new Date().getFullYear() - new Date(birthDate).getFullYear();
};
