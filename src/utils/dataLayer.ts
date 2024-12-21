// Data layer utility for GTM events following ASC standards
interface DataLayerEvent {
  event: string;
  eventCategory?: string;
  eventAction?: string;
  eventLabel?: string;
  vehicleInfo?: {
    vin?: string;
    make?: string;
    model?: string;
    year?: string;
    price?: number;
  };
}

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize data layer if it doesn't exist
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
}

export const pushToDataLayer = (event: DataLayerEvent) => {
  if (typeof window !== "undefined") {
    window.dataLayer.push(event);
  }
};

// ASC standard events
export const trackVehicleView = (
  vehicleInfo: DataLayerEvent["vehicleInfo"]
) => {
  pushToDataLayer({
    event: "VehicleView",
    eventCategory: "Vehicle Interaction",
    eventAction: "Vehicle View",
    eventLabel: `${vehicleInfo?.year} ${vehicleInfo?.make} ${vehicleInfo?.model}`,
    vehicleInfo,
  });
};

export const trackTestDriveRequest = (
  vehicleInfo: DataLayerEvent["vehicleInfo"]
) => {
  pushToDataLayer({
    event: "TestDriveRequest",
    eventCategory: "Vehicle Interaction",
    eventAction: "Test Drive Request",
    eventLabel: `${vehicleInfo?.year} ${vehicleInfo?.make} ${vehicleInfo?.model}`,
    vehicleInfo,
  });
};

export const trackContactFormSubmission = (formType: string) => {
  pushToDataLayer({
    event: "ContactFormSubmission",
    eventCategory: "Form Interaction",
    eventAction: "Form Submit",
    eventLabel: formType,
  });
};
