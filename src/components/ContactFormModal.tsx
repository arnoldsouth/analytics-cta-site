import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Vehicle } from "../data/vehicles";
import { trackContactFormSubmission } from "../utils/dataLayer";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: Vehicle | null;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  vehicle,
}) => {
  const toast = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Track form submission in data layer
    trackContactFormSubmission(vehicle ? "Vehicle Inquiry" : "General Contact");

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { ...formData, vehicle });

    toast({
      title: "Form submitted!",
      description: "We will contact you shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {vehicle
            ? `Contact Us About ${vehicle.year} ${vehicle.make} ${vehicle.model}`
            : "Contact Us"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Input
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" width="100%">
                Submit
              </Button>
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ContactFormModal;
