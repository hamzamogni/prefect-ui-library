// we really do want any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toRecord<T extends any[], K extends keyof T[number]>(source: T, key: K): Record<K, T> {
  return source.reduce((result, item) => {
    const itemKey = item[key]
    result[itemKey] = item

    return result
  }, {})
}


// we really do want any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function unique<T extends any[]>(array: T): T {
  return array.filter((v, i, a) => a.indexOf(v) === i) as T
}


// we really do want any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNonEmptyArray<T extends any[]>(
  array: T | undefined,
): array is T {
  return array !== undefined && array.length > 0
}


export function asArray<T>(input: T | T[] | null): T[] {
  if (input === null || input === undefined) {
    return []
  }

  if (!Array.isArray(input)) {
    return [input]
  }

  return input
}

// we really do want any here
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSame(arrayA: any[], arrayB: any[]): boolean {
  if (arrayA.length !== arrayB.length) {
    return false
  }

  const arrayBCopy = [...arrayB]

  return arrayA.every(itemA => arrayBCopy.some((itemB, index) => {
    const match = itemA.toString() === itemB.toString()

    if (match) {
      arrayBCopy.splice(index, 1)
    }

    return match
  }))
}