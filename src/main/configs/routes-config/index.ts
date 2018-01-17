/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */
import Home from '../../../pages/Home';
import { routeLoader } from '../../vendor/index';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    component: routeLoader(() => import(/* webpackChunkName: "about" */'../../../pages/About')),
  },
];
