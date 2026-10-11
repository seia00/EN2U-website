/**
 * Where we work, as map coordinates. Joined to the copy in i18n/strings.ts by
 * `id` — names, roles and descriptions live there; only geography lives here.
 *
 * Add a place: give it a node in strings.ts (both locales) and a row here.
 *
 * `label` places the name relative to the pin, in map units, so neighbouring
 * pins (Afghanistan / India sit ~40 units apart) don't collide. Pins are
 * country-scale, not street-scale: Japan is central Honshu, Gaza is the strip.
 */
export interface Place {
  id: string;
  lon: number;
  lat: number;
  label: { dx: number; dy: number; anchor: 'start' | 'middle' | 'end' };
}

export const places: readonly Place[] = [
  { id: 'jp', lon: 138.0, lat: 36.5, label: { dx: -24, dy: 9,   anchor: 'end' } },
  { id: 'gt', lon: -90.3, lat: 15.5, label: { dx: -24, dy: 9,   anchor: 'end' } },
  { id: 'ps', lon: 34.4,  lat: 31.4, label: { dx: -24, dy: -14, anchor: 'end' } },
  { id: 'af', lon: 67.7,  lat: 33.9, label: { dx: -2,  dy: -30, anchor: 'middle' } },
  { id: 'in', lon: 78.9,  lat: 22.0, label: { dx: 24,  dy: 30,  anchor: 'start' } },
];
