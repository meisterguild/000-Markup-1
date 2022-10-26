import { useMediaQuery } from 'react-responsive'
import { BREAK_POINTS } from 'styles/media'

export const useMedia = () => {
  const isSp = useMediaQuery({ maxWidth: BREAK_POINTS.tb - 1 })
  const isTb = useMediaQuery({ minWidth: BREAK_POINTS.tb })
  const isPc = useMediaQuery({ minWidth: BREAK_POINTS.pc })
  return { isSp, isTb, isPc }
}
