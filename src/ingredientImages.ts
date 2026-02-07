export const defaultIngredientImage = require("../assets/images/ingredients/default.png");

type IngredientStyle = {
  width: number;
  height: number;
  borderRadius?: number;
};

type IngredientAsset = {
  source: any;
  style: IngredientStyle;
};

const defaultStyle: IngredientStyle = {
  width: 40,
  height: 40,
  borderRadius: 8,
};

const ingredientAssets: Record<string, IngredientAsset> = {
  milk: {
    source: require("../assets/images/ingredients/Milk.png"),
    style: { width: 40, height: 45 },
  },
  carrot: {
    source: require("../assets/images/ingredients/Carrot.png"),
    style: { width: 28, height: 64, borderRadius: 14 },
  },
  "soy sauce": {
    source: require("../assets/images/ingredients/Soy_sauce.png"),
    style: { width: 36, height: 64, borderRadius: 24 },
  },
  egg: {
    source: require("../assets/images/ingredients/Egg.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    "bok choy": {
    source: require("../assets/images/ingredients/Bok_choy.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    pepper: {
    source: require("../assets/images/ingredients/Pepper_shaker.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    salt: {
    source: require("../assets/images/ingredients/Salt_shaker.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    watermelon: {
    source: require("../assets/images/ingredients/Watermelon.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    potato: {
    source: require("../assets/images/ingredients/Potato.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    butter: {
    source: require("../assets/images/ingredients/Butter.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    kimchi: {
    source: require("../assets/images/ingredients/Kimchi.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    garlic: {
    source: require("../assets/images/ingredients/Garlic.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    "spring onion": {
    source: require("../assets/images/ingredients/Spring_onion.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    onion: {
    source: require("../assets/images/ingredients/Onion.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    chicken: {
    source: require("../assets/images/ingredients/Chicken_drumstick.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    pork: {
    source: require("../assets/images/ingredients/Pork_belly.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    tofu: {
    source: require("../assets/images/ingredients/Tofu.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
    vinegar: {
    source: require("../assets/images/ingredients/Vinegar.png"),
    style: { width: 50, height: 60, borderRadius: 30 },
  },
};

export function normalizeIngredientName(name: string) {
  return name.trim().toLowerCase().replace(/\s+/g, " ");
}

// HomeScreen uses this (source + style)
export function getIngredientAsset(name: string): IngredientAsset {
  const key = normalizeIngredientName(name);
  return ingredientAssets[key] ?? { source: defaultIngredientImage, style: defaultStyle };
}

// StockScreen uses this (source only)
export function getIngredientImage(name: string) {
  return getIngredientAsset(name).source;
}

// at bottom of src/ingredientImages.ts
export const INGREDIENT_KEYS = Object.keys(ingredientAssets);

