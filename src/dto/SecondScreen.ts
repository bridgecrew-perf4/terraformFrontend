import {GeneralInformation} from './GeneralInformation';
import {VMInformation} from './VMInformation';
import {StorageAccountInformation} from './StorageAccountInformation';
import {SQLDatabaseInformation} from './SQLDatabaseInformation';

export class SecondScreen {
  generalInfo: GeneralInformation = new GeneralInformation();
  vmInfo: VMInformation = new VMInformation();
  fileShareStorageAccountInfo: StorageAccountInformation = new StorageAccountInformation();
  // containerStorageAccountInfo: StorageAccountInformation = new StorageAccountInformation();
  sqlDatabaseInfo: SQLDatabaseInformation = new SQLDatabaseInformation();
  type: string;
}
