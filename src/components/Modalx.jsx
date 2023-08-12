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

const Modalx = ({ onClose, isOpen, Title, Btntitle, Placeholder }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{Title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form>
            <input
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={Placeholder}
              required
            />
          </form>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="green" size="sm">
            {Btntitle}
          </Button>
          <Button colorScheme="blue" ml={2} onClick={onClose} size="sm">
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Modalx;
