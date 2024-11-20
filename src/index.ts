// დინამიური იმპორტი. usersModuleFunc.js იქნება ფაილი, რომელსაც იმპორტირებისთვის გამოვიყენებთ
const moduleName = './usersModuleFunc.js'; 

async function moduleFromUsersPage() {
    try {
        // import ასინქრონული ფუნქციაა. ფუნქცია უნდა დაელოდოს რომ ფაილი ჩაიტვირთოს და მოდული მიიღოს
        const importedModule = await import(moduleName);
        
        // იმპორტირებული ფუნქციების გამოძახება, როგორიცაა user და newUser
        importedModule.user();
        importedModule.newUser('გვანცა');
        
        //  თუ რაიმე შეცდომა მოხდება try ბლოკის შესრულებისას, 
        //  ავტომატურად გადავა catch ბლოკზე და გამოიტანს error-ს
      } catch (error) {
        console.error('შეცდომა მოდულის იმპორტისას:', error);
      }
}

moduleFromUsersPage();
// დარეგისტრირებული მომხმარებელი:  ნინო
// ახალი მომხმარებელი:  გვანცა