import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPercentage(value: number) {
  return value.toFixed(0) + "%"
}

export function countErrors(actual: string, expected: string) {
  const expectedChars = expected.split("")

  return expectedChars.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i]
    if (actualChar !== expectedChar) {
      errors++
    }
    return errors
  }, 0)
}

export function calculateAccuracy(errors: number, total: number) {
  if (total > 0) {
    const corrects = total - errors
    return (corrects / total) * 100
  }
  return 0
}