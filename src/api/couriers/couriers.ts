export interface Courier {
  /**
   *  The id of the courier whom we track capacity
   *  @isInt
   *  @minimum 1
   */
  id: number;

  /**
   * The max capacity available for this courier
   * @isInt
   * @minimum 0
   */
  max_capacity: number;
}
