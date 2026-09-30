import koffi from "koffi";

const kernel32 = koffi.load("kernel32.dll");
const user32 = koffi.load("user32.dll");

const GetConsoleWindow = kernel32.func("GetConsoleWindow", "void *", []);
const GetAncestor = user32.func("GetAncestor", "void *", ["void *", "uint"]);
const ShowWindow = user32.func("ShowWindow", "bool", ["void *", "int"]);

const GA_ROOTOWNER = 3;

const SW_HIDE = 0;
const SW_MINIMIZE = 6;
const SW_RESTORE = 9;

let isHiddenCmd = false;

const getTerminalWindow = () => {
  const hwnd = GetConsoleWindow();
  if (!hwnd) return null;
  return GetAncestor(hwnd, GA_ROOTOWNER) || hwnd;
};

export const hideCmd = () => {
  const hwnd = getTerminalWindow();
  if (!hwnd) return;
  ShowWindow(hwnd, SW_MINIMIZE);
  ShowWindow(hwnd, SW_HIDE);
  isHiddenCmd = true;
};

export const showCmd = () => {
  const hwnd = getTerminalWindow();
  if (!hwnd) return;
  ShowWindow(hwnd, SW_MINIMIZE);
  setTimeout(() => {
    ShowWindow(hwnd, SW_RESTORE);
  }, 1);
  isHiddenCmd = false;
};

export const toggleCmd = () => {
  if (isHiddenCmd) showCmd();
  else hideCmd();
};