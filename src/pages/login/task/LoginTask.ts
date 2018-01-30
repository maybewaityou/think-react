/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import md5 from 'blueimp-md5-es6';

import { NetworkUtility } from '@utilities';
import { Constant } from '../../../main/constant/index';

interface ILoginParams {
  userName: string;
  password: string;
}

export function loginTask(params: ILoginParams) {
  return NetworkUtility.observe(`login/authUser_Pad.do?username=${params.userName}&password=${md5(params.password)}`);
}
