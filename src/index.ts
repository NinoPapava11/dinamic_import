import path from 'path'; 
// ფიგურული ფრჩხილების გარეშე იმპორტი ES მოდული
// ეს მოდული CommonJS სტილშია დაწერილი და ამიტომაც არ იყენებს {}, 
// module.exports{....}

// ვიყენებ /dist/user.js მისამართის მისაწვდომად
// const path = require('path');   
//ესე იქნებოდა commonjs მოდულით

const moduleName = './user'; 
const modulePath = path.resolve(__dirname, `${moduleName}.js`);
// /home/user/Desktop/dynamic-require/dist/user.js
const userModule = require(modulePath);
// დინამიური require

const { createUser, updateUser } = userModule;

const user = createUser('ნინო', 26, 'რუსთავი');
console.log('რეგისტრირებული მომხმარებელი:', user);
// რეგისტრირებული მომხმარებელი: { name: 'ნინო', age: 26, city: 'რუსთავი' }

const updatedUser = updateUser(user.name, { age: 27, city: 'თბილისი' });
console.log('განახლებული მომხმარებელი:', updatedUser);
// განახლებული მომხმარებელი: { user: 'ნინო', updates: { age: 27, city: 'თბილისი' } }
