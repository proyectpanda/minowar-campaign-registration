export const campaignVenues = {
  chmiel: { name: "Chmiel i Słód", enabled: true },
  matisoft: { name: "Matisoft", enabled: true },
  wastes: { name: "Wastes", enabled: true },
} as const;

export type CampId = keyof typeof campaignVenues;

export function isRegistrationCampAvailable(name: string) {
  return Object.values(campaignVenues).some(
    (venue) => venue.enabled && venue.name === name,
  );
}
