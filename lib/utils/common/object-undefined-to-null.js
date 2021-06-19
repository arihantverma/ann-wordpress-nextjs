export default function objectUndefinedToNull(obj) {
  if (obj === undefined) {
    return null
  }
  if (typeof obj === 'object') {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        obj[key] = objectUndefinedToNull(obj[key])
      }
    }
  }
  return obj
}
