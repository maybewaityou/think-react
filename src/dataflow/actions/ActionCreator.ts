/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * @providesModule actionCreator
 *
 * description:
 *
 */
export default function actionCreator(actionType: string, payload: any) {
  return {
    type: actionType,
    payload,
  };
}
