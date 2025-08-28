
export default class Person {
  constructor({ profilePictureUrl, name, titles, bio_button = null, bio_url = null }) {
    this.profilePictureUrl = profilePictureUrl
    this.name = name
    this.titles = titles
    this.bio_button = bio_button
    this.bio_url = bio_url
  }
}
