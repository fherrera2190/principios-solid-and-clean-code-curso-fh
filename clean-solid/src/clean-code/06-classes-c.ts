(() => {
  // aplicando el principio de responsabilidad unica
  // Preferir composicion sobre herencia

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
  }

  class User {
    //Unico del usuario
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastFolderOpen: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;

      this.lastFolderOpen = lastFolderOpen;
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

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      workingDirectory,
      lastFolderOpen,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({
        workingDirectory,
        lastFolderOpen,
      });
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
  console.log({ userSettings: userSettings.user.checkCredentials() });
})();
