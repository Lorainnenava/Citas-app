export type TypeAlertT = {
  message: string;
  type: "success" | "danger";
  active: boolean;
  time?: number;
  width?: string;
  height?: string;
};
export type TAlert = {
  showAlert: {
    message: string;
    type: "success" | "danger";
    active: boolean;
    time?: number;
    width?: string;
    height?: string;
    display?: string;
  };
  setShowAlert: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      message: string;
      type: "success" | "danger";
    }>
  >;
};
