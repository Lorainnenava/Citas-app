export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width: string;
  tittle: string;
}
