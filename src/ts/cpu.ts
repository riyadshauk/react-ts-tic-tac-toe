/**
 * @todo add computer to make optimal move (consider backtracking, as in N-Queens problem)
 */
class CPU {
  /**
   * @returns {number} the index of the CPU's next move
   */
  public getNextMove: (squares: Array<string>) => number;
  constructor() {
    this.getNextMove = (squares: Array<string>): number => {

      return 0;
    };
  }
}