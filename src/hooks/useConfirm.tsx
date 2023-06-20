export const useConfirm = (message: string, callback: any, rejection: any) => {
  const confirmAction = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return confirmAction;
};
