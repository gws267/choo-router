import Vue from 'vue'


export enum Direction {
  enter = 'enter',
  forward = 'forward',
  back = 'back'
}

export default class ChooRoute extends Vue {

  private static initData: {replace: boolean, direction: Direction | string} = {
    replace: false,
    direction: ''
  }

  public replace!: boolean
  public direction!: Direction

  constructor () {
    super({
      data: ChooRoute.initData
    })
  }
}
