"use client";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import {HighlightOffOutlined} from "@mui/icons-material";

const DialogComponent = ({open, closeModal, children}) => {
  const {onOpenChange} = useDisclosure();
  if (!open) return null;
  return (
    <Modal radius="none" className="p-0" isOpen={open} onOpenChange={onOpenChange} hideCloseButton={true} size="5xl" placement="center">
      <ModalContent className="p-0">
        {(onclose) => (
          <>
            <ModalHeader className="flex p-2 !bg-dark justify-end">
              <Button variant="text" onPress={closeModal} className="bg-none">
                <HighlightOffOutlined className="hover:cursor-pointer text-darkaccent hover:text-brand hover:border-brand" color="inherit" />
              </Button>
            </ModalHeader>
            <ModalBody className="p-0">{children}</ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DialogComponent;
