import ISorter from "../models/types";

export function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

export function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

export const safeSetTimeout = <F extends (...args: any[]) => any>(
  callback: F,
  timeout?: number,
  ...args: Parameters<F>
) => {
  return setTimeout(callback, timeout, ...args);
};

export const safeSetInterval = <F extends (...args: any[]) => any>(
  callback: F,
  timeout?: number,
  ...args: Parameters<F>
) => {
  return setInterval(callback, timeout, ...args);
};

export type Pick<T, U extends keyof T> = { [K in U]: T[K] };

export function pick<T, U extends keyof T>(obj: T, keys: U[]): Pick<T, U> {
  return keys.reduce((acc, key) => {
    if (key in obj) {
      acc[key] = obj[key];
    }
    return acc;
  }, {} as T);
}

export const toggleArrayItem = <T extends unknown>(
  array: Array<T>,
  value: T
) => {
  // const newArray = array.filter((x) => x !== value);
  // if (newArray.length === array.length) return array.concat(value);
  // return newArray

  return array.includes(value)
    ? array.filter((i) => i !== value) // remove item
    : [...array, value]; // add item
};

export function genericSearch<T>(
  object: T,
  properties: Array<keyof T>,
  query: string
): boolean {
  if (query === "") {
    return true;
  }

  return properties.some((property) => {
    const value = object[property];
    if (typeof value === "string" || typeof value === "number") {
      return value.toString().toLowerCase().includes(query.toLowerCase());
    }
    return false;
  });
}

export function genericSort<T>(objectA: T, objectB: T, sorter: ISorter<T>) {
  const result = () => {
    if (objectA[sorter.property] > objectB[sorter.property]) {
      return 1;
    } else if (objectA[sorter.property] < objectB[sorter.property]) {
      return -1;
    } else {
      return 0;
    }
  };

  return sorter.isDescending ? result() * -1 : result();
}

const getValue = (value: any) =>
  typeof value === "string" ? value.toUpperCase() : value;

/**
 * Filters an array of objects (one level-depth) with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Array}
 */
export function filterItems<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]?: string | null;
  }
): Array<T> {
  const filterKeys = Object.keys(filters) as Array<K>;
  return array.filter((item: T) => {
    return filterKeys.every((key) => {
      if (!filters[key]) return true;
      return getValue(filters[key]) === getValue(item[key]);
    });
  });
}

export function filterCollections<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]?: string[];
  }
): Array<T> {
  const filterKeys = Object.keys(filters) as Array<K>;
  return array.filter((item: T) => {
    return filterKeys.every((key) => {
      if (!filters[key]?.length) return true;
      return filters[key]?.find(
        (filter: any) => getValue(filter) === getValue(item[key as K])
      );
    });
  });
}

/**
 * Find an objects (one level-depth) with multiple criteria.
 *
 * @param  {Array}  array: the array to filter
 * @param  {Object} filters: an object with the filter criteria
 * @return {Object}
 */
export function findArrayItems<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]?: T[K];
  }
): T | undefined {
  const filterKeys = Object.keys(filters) as Array<K>;
  return array.find((item: T) => {
    return filterKeys.every((key) => {
      if (!filters[key]) return true;
      return getValue(filters[key]) === getValue(item[key]);
    });
  });
}

export function filterArray<T, K extends keyof T>(
  array: Array<T>,
  filters: {
    [Property in keyof T]: (value: T[K]) => void;
  }
) {
  const filterKeys = Object.keys(filters) as Array<K>;
  return array.filter((item: T) => {
    // validates all filter criteria
    return filterKeys.every((key) => {
      // ignores non-function predicates
      if (typeof filters[key] !== "function") return true;
      return filters[key](item[key]);
    });
  });
}

export const getOfferPrice = (price: number = 0, offer: number = 0) => {
  let formattedPrice = price - (price * offer) / 100;
  return formattedPrice?.toFixed();
};

/**
 * Groups all items in an array of objects `T` where the value of property `K` is the same
 * @param array Items to group
 * @param key Key of `T` to group by
 */
export function groupByPropValue<T, K extends keyof T>(array: T[], key: K) {
  let map = new Map<T[K], T[]>();
  array.forEach((item) => {
    let itemKey = item[key];
    if (!map.has(itemKey)) {
      map.set(
        itemKey,
        array.filter((i) => i[key] === item[key])
      );
    }
  });

  return map;
}

export function groupByValueLength<T, K extends keyof T>(
  collection: T[],
  key: K
) {
  return collection.reduce((acc, item) => {
    let itemKey = item[key];
    acc[itemKey] = (acc[itemKey] || 0) + 1;
    return acc;
  }, {} as any);
}

export function getUniqueBy<T, K extends keyof T>(arr: T[], prop: K) {
  const set = new Set();
  return arr.filter((o) => !set.has(o[prop]) && set.add(o[prop]));
}

export const caluclatePercentage = (value: number, total: number) =>
  (value / total) * 100;
