type ForestType = "conservation" | "reforestation";

interface Forest {
  uuid: string;
  country: string;
  type: ForestType;
  short_description: string;
  image_url: string;
  carbon_stored: string;
  covered_area: string;
  change_in_30_days: string;
  long_description: string;
}
