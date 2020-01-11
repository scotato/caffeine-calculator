// https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20049372

// Coffee drinks	Size in oz. (mL)	Caffeine (mg)
// Brewed	8 (237)	95-165 = 130
// Espresso	1 (30)	47-64 = 56
// Instant	8 (237)	63
// Latte or mocha	8 (237)	63-126 = 95

// Teas	Size in oz. (mL)	Caffeine (mg)
// Brewed black	8 (237)	25-48 = 37
// Brewed green	8 (237)	25-29 = 27
// bottled	8 (237)	5-40 = 23

// Sodas	Size in oz. (mL)	Caffeine (mg)
// Cola	8 (237)	24-46 = 35

// Energy drinks	Size in oz. (mL)	Caffeine (mg)
// Energy drink	8 (237)	27-164 = 100
// Energy shot	1 (30)	40-100 = 70

// https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/in-depth/caffeine/art-20045678
// Up to 400 milligrams (mg) of caffeine a day appears to be safe for most healthy adults. That's roughly the amount of caffeine in four cups of brewed coffee, 10 cans of cola or two "energy shot" drinks. Keep in mind that the actual caffeine content in beverages varies widely, especially among energy drinks.

export const beverages = [
  {
    title: "Coffee",
    icon: "☕️",
    caffeine: 130,
    oz: 8,
    min: 8,
    max: 32,
    step: 4
  },
  {
    title: "Espresso",
    caffeine: 60,
    icon: "☕️",
    oz: 1,
    min: 1,
    max: 4,
    step: 1
  },
  {
    title: "Latte",
    caffeine: 100,
    icon: "☕️",
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Black Tea",
    icon: "🍵",
    caffeine: 40,
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Green Tea",
    icon: "🍵",
    caffeine: 30,
    oz: 8,
    min: 8,
    max: 20,
    step: 4
  },
  {
    title: "Soda",
    icon: "🥤",
    caffeine: 35,
    oz: 8,
    min: 8,
    max: 32,
    step: 4
  },
  {
    title: "Energy Drink",
    icon: "⚡️",
    caffeine: 100,
    oz: 8,
    min: 8,
    max: 32,
    step: 4
  },
  {
    title: "Energy Shot",
    icon: "⚡️",
    caffeine: 70,
    oz: 1,
    min: 1,
    max: 4,
    step: 1
  },
]