export const longReload = () => {
  const delayInMilliseconds = 7000;
  setTimeout(function () {
    window.location.reload();
  }, delayInMilliseconds);
};
