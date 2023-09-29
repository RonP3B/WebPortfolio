import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl, { Map as MapType, Marker } from "mapbox-gl";
import { useEffect, useRef } from "react";

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MapType | null>(null);
  const marker = useRef<Marker | null>(null);

  useEffect(() => {
    if (map.current) return;

    const coords: [number, number] = [-69.827829, 18.50305];

    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: "mapbox://styles/mapbox/streets-v12",
      center: coords,
      zoom: 14,
    });

    marker.current = new mapboxgl.Marker().setLngLat(coords).addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }

      if (marker.current) {
        marker.current.remove();
        marker.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{ height: "400px", marginTop: "2rem", borderRadius: "15px" }}
      ref={mapContainer}
    />
  );
};

export default Map;
