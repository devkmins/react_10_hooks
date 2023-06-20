export const usePreventLeave = () => {
  const listener = (event: any) => {
    event.prevenDefault();
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};
