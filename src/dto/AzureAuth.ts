import {AuthUser} from './AuthUser';

export class AzureAuth {
  cloudName: string;
  id: string;
  isDefault: boolean;
  name: string;
  state: string;
  tenantId: string;
  user: AuthUser;
}
