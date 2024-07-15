import { UiCanvasInformation, engine } from '@dcl/sdk/ecs'
import ReactEcs, { UiEntity } from '@dcl/sdk/react-ecs'
import { Color4 } from '@dcl/sdk/math'


type ComponentProps = {
  isVisible: boolean,
  changeVisibility: (arg:boolean) => void
}

function Component({
  isVisible,
  changeVisibility
  
}: ComponentProps): ReactEcs.JSX.Element | null {
  const canvasInfo = UiCanvasInformation.getOrNull(engine.RootEntity)
  if (canvasInfo === null) return null

  console.log({ isVisible })
  return (
    <UiEntity
      uiTransform={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems:'center'

      }}>
       <UiEntity
          uiTransform={{
            width: '10%',
            height: '6%',
            justifyContent: 'center',
            alignItems: 'center',
            positionType: 'absolute',
            position:{right:'10%', top:'10%'}
          }}
        uiBackground={{ color: Color4.Blue() }}
        uiText={{ value: 'show/hide' }}
        onMouseDown={() => { changeVisibility(!isVisible) }}
        />
          {isVisible && (
            <UiEntity
              uiTransform={{
                width: '20%',
                height: '20%',
                justifyContent: 'center',
                alignItems:'center'
              }}
              uiBackground={{color:Color4.Red()}}
            />
          )
        }
    </UiEntity>
      
  )
}

export default Component
