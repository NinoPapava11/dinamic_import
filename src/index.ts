// ფუნქციები, რომლებიც ხელმისაწვდომი იქნება იმპორტისთვის სხვა ფაილში

export function user() {
  // ცვლადი, რომელიც ინახავს სტრინგს
  let currentUser = 'ნინო';
  console.log('დარეგისტრირებული მომხმარებელი: ', currentUser);
}

export function newUser(name: string) {
  console.log('ახალი მომხმარებელი: ', name);
}
