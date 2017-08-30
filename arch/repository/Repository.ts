/**
 * Created by MeePwn
 * https://github.com/maybewaityou
 *
 * description:
 *
 */

import { DataSource } from '../data-source/index';

export default abstract class Repository<D> extends DataSource<D> {

  protected mRemoteDataSource: DataSource<D>;
  protected mLocalDataSource: DataSource<D>;

  constructor(remoteDataSource: DataSource<D>, localDataSource: DataSource<D>) {
    super();
    this.mRemoteDataSource = remoteDataSource;
    this.mLocalDataSource = localDataSource;
  }

}
