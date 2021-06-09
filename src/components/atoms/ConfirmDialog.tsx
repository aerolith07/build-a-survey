import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';
import React from 'react';

interface ButtonWithConfirmProps {
  children: React.ReactElement,
  header?: string,
  body: string,
  cancelText?: string,
  confirmText?: string,
  onConfirm: () => void
}

const ConfirmDialog = ({
  header, body, cancelText, confirmText, onConfirm, children,
}: ButtonWithConfirmProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const confirmHandler = () => {
    onClose();
    onConfirm();
  };

  const cancelRef = React.useRef();

  React.Children.only(children);
  return (
    <>

      {React.cloneElement(children, { onClick: () => setIsOpen(true) })}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            {header && (
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                {header}
              </AlertDialogHeader>
            )}

            <AlertDialogBody>
              {body}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {cancelText}
              </Button>
              <Button colorScheme="red" onClick={confirmHandler} ml={3}>
                {confirmText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

ConfirmDialog.defaultProps = {
  header: undefined,
  cancelText: 'Cancel',
  confirmText: 'Confirm',
};

export default ConfirmDialog;
