function currency(cents = 0) {
  return (cents / 100).toFixed(2).replace(".", ",");
}

export { currency };
