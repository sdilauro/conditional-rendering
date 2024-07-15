import ReactEcs, { ReactEcsRenderer } from '@dcl/sdk/react-ecs'
import Component from './component'

export class UI {
  public isVisible: boolean


  constructor() {
    this.isVisible = false
    const uiComponent = (): ReactEcs.JSX.Element[] => [this.mainHudUI()]
    ReactEcsRenderer.setUiRenderer(uiComponent)
  }

  mainHudUI(): ReactEcs.JSX.Element {
    return (
      <Component
        isVisible={this.isVisible}
        changeVisibility={this.changeVisibility.bind(this)}
      />
    )
  }

  changeVisibility(visibility: boolean): void {
    this.isVisible = visibility
  }
}

export let gameUi: UI
export function main(): void {
  // all the initializing logic
  gameUi = new UI()
}
