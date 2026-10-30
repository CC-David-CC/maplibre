import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
export const library=maplibregl;
export function mount(){throw Error('MapLibre is a system library, not a window.');}
