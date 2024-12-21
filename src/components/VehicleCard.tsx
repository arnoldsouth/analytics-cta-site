import React, { useEffect } from "react";
import { Box, Button, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { Vehicle } from "../data/vehicles";
import { trackTestDriveRequest, trackVehicleView } from "../utils/dataLayer";

interface VehicleCardProps {
  vehicle: Vehicle;
  onContactClick: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onContactClick,
}) => {
  useEffect(() => {
    // Track vehicle view when card is rendered
    trackVehicleView({
      vin: vehicle.vin,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
    });
  }, [vehicle]);

  const handleTestDriveClick = () => {
    trackTestDriveRequest({
      vin: vehicle.vin,
      make: vehicle.make,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
    });
    onContactClick();
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="md"
    >
      <Image
        src={vehicle.image}
        alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
        height="200px"
        width="100%"
        objectFit="cover"
      />
      <VStack p={4} align="stretch" spacing={3}>
        <Text fontSize="xl" fontWeight="bold">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </Text>
        <Text color="gray.600">{vehicle.description}</Text>
        <HStack>
          <Text fontWeight="bold" fontSize="lg">
            ${vehicle.price.toLocaleString()}
          </Text>
          <Text color="gray.500">
            | {vehicle.mileage.toLocaleString()} miles
          </Text>
        </HStack>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={handleTestDriveClick} flex={1}>
            Schedule Test Drive
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={onContactClick}
            flex={1}
          >
            Contact Us
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default VehicleCard;
