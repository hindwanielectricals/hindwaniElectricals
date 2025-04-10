import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address?: string;
  lat?: number;
  lng?: number;
  zoom?: number;
  height?: string;
}

const GoogleMap = ({
  address = '234, SV Ln, near Hotel Vijay Vihar, Mamulpet, Chickpet, Bengaluru, Karnataka 560053',
  lat = 12.9676,
  lng = 77.5822,
  zoom = 15,
  height = '300px',
}: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Wait for the Google Maps API to be loaded
    const initMap = () => {
      if (!mapRef.current || !(window as any).google) return;
      
      // Create a new map instance
      const mapOptions = {
        center: { lat, lng },
        zoom,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };
      
      const map = new (window as any).google.maps.Map(mapRef.current, mapOptions);
      
      // Add a marker for the location
      new (window as any).google.maps.Marker({
        position: { lat, lng },
        map,
        title: address,
      });
    };
    
    // Check if Google Maps API is already loaded
    if ((window as any).google && (window as any).google.maps) {
      initMap();
    } else {
      // Google Maps script is loaded in index.html
      const checkGoogleMapsLoaded = setInterval(() => {
        if ((window as any).google && (window as any).google.maps) {
          clearInterval(checkGoogleMapsLoaded);
          initMap();
        }
      }, 100);

      return () => clearInterval(checkGoogleMapsLoaded);
    }
  }, [address, lat, lng, zoom]);
  
  return (
    <div 
      ref={mapRef} 
      className="w-full rounded-lg overflow-hidden shadow-md" 
      style={{ height }}
    />
  );
};

export default GoogleMap;
