// Utility function to calculate the mean of Flavanoids and Gamma for each class
export const calculateMean = (winedata, type) => {
  const means = {};
  const counts = {};

  winedata.forEach((entry) => {
    const alcoholClass = entry.Alcohol;
    const flavanoids = Number(entry.Flavanoids);
    const Gamma = (entry.Ash * entry.Hue) / entry.Magnesium;

    if (!means[alcoholClass]) {
      means[alcoholClass] = 0;
      counts[alcoholClass] = 0;
    }
    means[alcoholClass] += type ? Gamma : flavanoids;
    counts[alcoholClass]++;
  });

  for (const alcoholClass in means) {
    means[alcoholClass] /= counts[alcoholClass];
  }
  return means;
};

// Utility function to calculate the median of Flavanoids and Gamma for each class
export const calculateMedian = (winedata, type) => {
  const medians = {};
  winedata.forEach((entry) => {
    const alcoholClass = entry.Alcohol;
    const flavanoids = entry.Flavanoids;
    const Gamma = (entry.Ash * entry.Hue) / entry.Magnesium;
    if (!medians[alcoholClass]) {
      medians[alcoholClass] = [];
    }
    medians[alcoholClass].push(type ? Gamma : flavanoids);
  });
  for (const alcoholClass in medians) {
    medians[alcoholClass].sort((a, b) => a - b);
    const mid = Math.floor(medians[alcoholClass].length / 2);
    medians[alcoholClass] =
      medians[alcoholClass].length % 2 !== 0
        ? medians[alcoholClass][mid]
        : (medians[alcoholClass][mid - 1] + medians[alcoholClass][mid]) / 2;
  }
  return medians;
};

// Utility function to calculate the mode of Flavanoids and Gamma for each class
export const calculateMode = (winedata, type) => {
  const modes = {};
  winedata.forEach((entry) => {
    const alcoholClass = entry.Alcohol;
    const flavanoids = entry.Flavanoids;
    const Gamma = (entry.Ash * entry.Hue) / entry.Magnesium;
    if (!modes[alcoholClass]) {
      modes[alcoholClass] = {};
    }
    modes[alcoholClass][type ? Gamma : flavanoids] = modes[alcoholClass][
      type ? Gamma : flavanoids
    ]
      ? modes[alcoholClass][type ? Gamma : flavanoids] + 1
      : 1;
  });
  for (const alcoholClass in modes) {
    let maxCount = 0;
    let mode;
    for (const flavanoids in modes[alcoholClass]) {
      if (modes[alcoholClass][flavanoids] > maxCount) {
        maxCount = modes[alcoholClass][flavanoids];
        mode = flavanoids;
      }
    }
    modes[alcoholClass] = mode;
  }
  return modes;
};
