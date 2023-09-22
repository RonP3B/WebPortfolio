export const downloadFile = (file: string): void => {
  const anchor = document.createElement("a");
  anchor.href = file;
  anchor.setAttribute("download", file);
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
