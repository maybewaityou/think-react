/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * @providesModule EpicCreator
 *
 * description:
 *
 */
import IAction from '../../../dataflow/actions/Action';

export default (action$: any) => (actionType: string) => (nextAction: any) =>
    action$.ofType(actionType).mergeMap((action: IAction) => nextAction(action));
