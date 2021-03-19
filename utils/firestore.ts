import firebase from 'firebase'

export function basicConverter<T>() {
  return {
    toFirestore(value: T) {
      return value
    },
    fromFirestore(snapshot, options) {
      return snapshot.data(options) as T
    },
  } as firebase.firestore.FirestoreDataConverter<T>
}
