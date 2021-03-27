export function loadImage(filename: string): string {
  try {
    return require(`~/assets/img/items/${filename}`)
  } catch (error) {
    return ''
  }
}
