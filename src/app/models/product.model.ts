import { Game } from "app/models/game.model";

export class Product {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public games: Game[];

  public updateFrom(src: Product): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.games = src.games.map((i) => {
      let game = new Game();
      game.updateFrom(i);
      return game;
    });
  }
}
