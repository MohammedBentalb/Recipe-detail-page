import banner from './images/image-omelette.jpeg';

const preparationTime = {
  title: 'Preparation time',
  data: [
    { title: 'Total', duration: 'Approximately 10 minutes' },
    { title: 'Preparation', duration: '5 minutes' },
    { title: 'Cooking', duration: '5 minutes' },
  ],
};

const ingredients = {
  Title: 'Ingredients',
  data: [
    '2-3 large eggs',
    'salt, to taste',
    'pepper, to test',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs',
  ],
};

const instructions = {
  title: 'Instructions',
  data: [
    {
      steps: 'Beat the eggs',
      manner:
        'In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.',
    },
    {
      steps: 'Heat the pan',
      manner:
        'Place a non-stick frying pan over medium heat and add butter or oil.',
    },
    {
      steps: 'Cook the omelette',
      manner:
        'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.',
    },
    {
      steps: 'Add fillings (optional)',
      manner:
        'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.',
    },
    {
      steps: 'Fold and serve',
      manner:
        ' As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.',
    },
    {
      steps: 'Enjoy',
      manner: 'Serve hot, with additional salt and pepper if needed.',
    },
  ],
};

const nutrition = {
  title: 'Nutrition',
  paragraph:
    'The table below shows nutritional values per serving without the additional fillings.',
  data: [
    { category: 'Calories', value: '277kcal' },
    { category: 'Carbs', value: '0g' },
    { category: 'Protein', value: '20g' },
    { category: 'Fat', value: '22g' },
  ],
};

const wholeData = {
  title: 'Simple Omelette Recipe',
  desc: 'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
  preparationTime,
  ingredients,
  instructions,
  nutrition,
};

export {
  ingredients,
  nutrition,
  instructions,
  preparationTime,
  banner,
  wholeData,
};
