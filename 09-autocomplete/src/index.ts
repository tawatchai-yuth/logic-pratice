
/**
 * ค้นหาคำแนะนำโดยไม่สนใจตัวพิมพ์เล็กหรือพิมพ์ใหญ่
 * และเรียงลำดับตามความสำคัญของคำค้นหา
 */
export const autocomplete = (
  search: string,
  items: string[],
  maxResult: number,
): string[] => {
  
  if (!search || maxResult <= 0) {
    return [];
  }

  const keyword = search.toLowerCase();

  const matchedItems = items.filter((item) =>
    item.toLowerCase().includes(keyword),
  );

  matchedItems.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    const indexA = lowerA.indexOf(keyword);
    const indexB = lowerB.indexOf(keyword);

    if (lowerA === keyword && lowerB !== keyword) return -1;
    if (lowerA !== keyword && lowerB === keyword) return 1;

    const startsA = indexA === 0;
    const startsB = indexB === 0;

    if (startsA && !startsB) return -1;
    if (!startsA && startsB) return 1;

    return indexA - indexB;
  });

  return matchedItems.slice(0, maxResult);
};
