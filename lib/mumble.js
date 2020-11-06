const mumble = (string) => {
  if (string.length < 2) {
    return string.toUpperCase()
  }
  else {
    return 'A-Aa'
  }
};

export { mumble };