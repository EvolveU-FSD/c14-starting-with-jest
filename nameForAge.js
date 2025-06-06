
// Remember me?  I'm BAAAAAAAAAACK!

export default function nameForAge(age) {
  if (age < 2) return 'baby'
  if ((age > 2) && (age < 12)) return 'child'
  if (age > 20) return 'twenty something'
  if ((age > 30) && (age < 40)) return 'thirty something'
  if (age > 40) return 'almost grown up!'
}
