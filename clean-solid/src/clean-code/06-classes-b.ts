(() => {
  // No aplicando el principio de responsabilidad unica
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;
    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastFolderOpen: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({
      workingDirectory,
      lastFolderOpen,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {

      super({ email, role, name, gender, birthdate });

      this.workingDirectory = workingDirectory;
      
      this.lastFolderOpen = lastFolderOpen;
    }

  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastFolderOpen: "/home",
    email: "lF6Ft@example.com",
    role: "Admin",
    name: "Fernando",
    gender: "M",
    birthdate: new Date("1990-06-22"),
  });

  console.log({ userSettings });
})();
