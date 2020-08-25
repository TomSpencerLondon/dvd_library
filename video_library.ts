export const donate = (library: any[], dvd: { title: string }) => {
  return library.concat({...dvd, copies: 1});
}
