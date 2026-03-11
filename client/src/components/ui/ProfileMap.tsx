import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

interface ProfileMapProps {
  address: string;
  coordinates?: { lat: number; lng: number };
  companyName: string;
  className?: string;
}

export function ProfileMap({ address, coordinates, companyName, className = "" }: ProfileMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const mapboxToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
  const [mapFailed, setMapFailed] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !coordinates || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [coordinates.lng, coordinates.lat],
        zoom: 15,
        accessToken: mapboxToken
      });

      map.current.on('error', () => {
        setMapFailed(true);
      });

      const marker = new mapboxgl.Marker({ color: '#f5e03a', scale: 1.2 })
        .setLngLat([coordinates.lng, coordinates.lat])
        .addTo(map.current);

      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`
          <div class="p-2">
            <h4 class="font-semibold text-sm mb-1">${companyName}</h4>
            <p class="text-xs text-gray-600">${address}</p>
          </div>
        `);

      marker.setPopup(popup);
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    } catch {
      setMapFailed(true);
    }

    return () => {
      try {
        if (map.current) {
          map.current.remove();
        }
      } catch {
        // ignore cleanup errors
      }
    };
  }, [coordinates, address, companyName, mapboxToken]);

  const fallbackContent = (
    <div className="w-full h-64 rounded-b-lg bg-gray-700/50 flex flex-col items-center justify-center gap-3">
      <MapPin className="h-10 w-10 text-[#f5e03a]/60" />
      <div className="text-center px-4">
        <p className="text-white/80 text-sm font-medium">{companyName}</p>
        <p className="text-white/60 text-xs mt-1">{address}</p>
        {coordinates && (
          <p className="text-white/40 text-xs mt-1">
            {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
          </p>
        )}
      </div>
    </div>
  );

  if (!coordinates) {
    return (
      <Card className={`${className} bg-gray-800/50 border-gray-600/30`}>
        <CardHeader className="pb-3">
          <CardTitle className="text-white flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#f5e03a]" />
            Ubicación
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm">{address || 'Dirección no disponible'}</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className} bg-gray-800/50 border-gray-600/30`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-white flex items-center gap-2">
          <MapPin className="h-5 w-5 text-[#f5e03a]" />
          Ubicación
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-3">
          <div className="px-6 flex items-center gap-2 text-gray-300">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm">{address}</span>
          </div>

          {mapFailed ? (
            <div className="px-0">
              {fallbackContent}
            </div>
          ) : (
            <div
              ref={mapContainer}
              className="w-full h-64 rounded-b-lg"
              style={{ minHeight: '250px' }}
            />
          )}

          {!mapFailed && coordinates && (
            <div className="px-6 pb-6">
              <p className="text-xs text-gray-500">
                Lat: {coordinates.lat.toFixed(6)}, Lng: {coordinates.lng.toFixed(6)}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
