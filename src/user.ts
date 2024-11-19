export function createUser(name: string, age: number, city: string) {
  return { name, age, city };
}

export function updateUser(
  user: { name: string; },
  updates: { name: string; age: number; city: string }
) {
  return { user, updates };
}
