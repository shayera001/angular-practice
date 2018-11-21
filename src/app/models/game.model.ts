export class Game {
  public institution: string;
  public score: number;

  public updateFrom(src: Game): void {
    this.institution = src.institution;
    this.score = src.score;
  }
}
