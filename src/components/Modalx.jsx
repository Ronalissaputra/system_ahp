import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const Modalx = ({ children, onClose, onSubmit, isOpen, Title, Btntitle }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="green" size="sm">
              {Btntitle}
            </Button>
            <Button colorScheme="blue" ml={2} onClick={onClose} size="sm">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default Modalx;
