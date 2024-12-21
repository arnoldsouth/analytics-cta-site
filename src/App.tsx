import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { vehicles } from "./data/vehicles";
import VehicleCard from "./components/VehicleCard";
import ContactFormModal from "./components/ContactFormModal";
import { useState } from "react";
import { Vehicle } from "./data/vehicles";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const handleContactClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    onOpen();
  };

  return (
    <Box bg="gray.50" minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading mb={8} textAlign="center" color="brand.600">
          Premium Auto Dealership
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {vehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onContactClick={() => handleContactClick(vehicle)}
            />
          ))}
        </SimpleGrid>
      </Container>
      <ContactFormModal
        isOpen={isOpen}
        onClose={onClose}
        vehicle={selectedVehicle}
      />
    </Box>
  );
}

export default App;
