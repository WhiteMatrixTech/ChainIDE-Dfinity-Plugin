import { IStateTypes } from 'store/types';
import { useSelector } from 'react-redux';
import { IDfinityState } from './reducers';

export const getDfinitySourceRoots = (state: IStateTypes): string[] =>
  state.dfinityState.dfinitySourceRoots;

export function useDfinityState() {
  const dfinityState: IDfinityState = useSelector(
    (state: IStateTypes) => state.dfinityState
  );
  return dfinityState;
}
