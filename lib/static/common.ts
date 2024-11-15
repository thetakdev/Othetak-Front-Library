export const ASSET_IMAGE_URL = "https://image.thetak.net/";

export const HOURS = Array.from({ length: 25 }, (_, i) => ({
  label: `${String(i).padStart(2, "0")}시`,
  value: String(i).padStart(2, "0"),
}));

export const MINUTES = Array.from({ length: 60 }, (_, i) => ({
  label: `${String(i).padStart(2, "0")}분`,
  value: String(i).padStart(2, "0"),
}));
