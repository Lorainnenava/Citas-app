export interface ContendModal {
  updateEstado: (_id: string, state: boolean) => void;
  handleCloseModal: () => void;
  rows: any;
}
