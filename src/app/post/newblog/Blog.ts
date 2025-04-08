export class Blog {
    
    constructor(
      public titulo: string,
      public descripcion: string
    ) {}
  
    toString(): string {
      return `titulo=${encodeURIComponent(this.titulo)}&descripcion=${encodeURIComponent(this.descripcion)}`;
    }
  }
  