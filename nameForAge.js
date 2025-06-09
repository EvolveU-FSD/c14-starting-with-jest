
// Remember me?  I'm BAAAAAAAAAACK!

export default function nameForAge(age) {
  if (age < 0) return 'unborn'
  if (age < 2) return 'baby'
  if (age < 13) return 'child'
  if (age < 20) return 'teenager'
  if (age < 30) return 'twenty something'
  if (age < 40) return 'thirty something'
  return 'almost grown up!'
}
