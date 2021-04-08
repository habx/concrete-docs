import { isString, deburr } from 'lodash'

const formatString = (str: string): string => {
  if (!isString(str)) {
    return ''
  }

  const cleanStr = str.toLowerCase().trim()

  return deburr(cleanStr).replace(/\s/g, '')
}

export const searchInString = (s: string, search: string): boolean =>
  formatString(s).includes(formatString(search))
