// Problema hay clases que tienen que implementar metodos que no necesitan

interface Bird {
  eat(): void;
}

interface FlyingBird extends Bird {
  fly(): void;
}

interface RunningBird extends Bird {
  run(): void;
}

interface SwimmingBird extends Bird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Pinguin implements Bird, SwimmingBird {
  public eat() {}
  public swim() {}
}
