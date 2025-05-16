import "./index.scss";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__content">{children}</div>
    </div>
  );
};
