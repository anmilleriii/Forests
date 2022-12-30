type ForestType = "Conservation" | "Reforestation";

interface Forest {
  uuid: string;
  country: string;
  type: ForestType;
  latitude: number;
  longitude: number;
  short_description: string;
  image_url: string;
  carbon_stored: string;
  covered_area: string;
  change_in_30_days: string;
  long_description: string;
}
