"use client";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const DialogComponent = ({open, onClose, children}) => {
  const {onOpenChange} = useDisclosure();
  if (!open) return null;
  return (
    <Modal isOpen={open} onOpenChange={onOpenChange} hideCloseButton={true} size="5xl" placement="center">
      <ModalContent>
        <>
          <ModalHeader className="flex flex-col gap-1"></ModalHeader>
          <ModalBody>{children}</ModalBody>
          <ModalFooter className="flex justify-between">
            <Button className="rounded-full border-1 border-gray-900 text-gray-900 hover:text-brand hover:border-brand" color="inherit" onPress={onClose}>
              close
            </Button>
            <Button className="rounded-full border-1 hover:border-gray-900 hover:text-gray-900 text-brand border-brand" color="inherit" onPress={onClose}>
              contact
            </Button>
          </ModalFooter>
        </>
      </ModalContent>
    </Modal>
  );
};

export default DialogComponent;
