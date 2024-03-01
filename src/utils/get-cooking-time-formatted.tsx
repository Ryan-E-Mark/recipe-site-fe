export const getCookingTimeFormatted = (cookingTime: number) => {
    if (cookingTime >= 60) {
      const timeUnit = Math.floor(cookingTime / 60) > 1 ? "hours" : "hour";
      return `${Math.floor(cookingTime / 60)} ${timeUnit}`;
    }
    return `${cookingTime} minutes`;
}