export class User {
  private id: number;
  private name: string;


  constructor(id: number, name: string){
    this.id = id;
    this.name = name;
  }

  /**
   * get initials from name
   * @return the first to initials of the name
   */
  getInitials(): string{
    if (!this.name.trim){
      return '';
    }
    let names = this.name.split(' ');
    if (names.length == 1){
      return names[0].charAt(0);
    }
    var initial = '';
    for (let i = 0; i < 2 ; i++){
      initial += names[i][0];
    }
    return initial;
  }

}
