// Set enabled to true to restore a venue in registration and partner sections.
// Venue artwork and descriptions remain in the repository.
export const campaignVenues = {
  chmiel: { name: "Chmiel i Słód", enabled: true },
  matisoft: { name: "Matisoft", enabled: true },
  battlehub: { name: "BattleHub", enabled: true },
  wargamer: { name: "Wargamer", enabled: true },
  wastes: { name: "Wastes", enabled: true },
} as const;

export type CampId = keyof typeof campaignVenues;

export function isRegistrationCampAvailable(name: string) {
  return Object.values(campaignVenues).some(
    (venue) => venue.enabled && venue.name === name,
  );
}
