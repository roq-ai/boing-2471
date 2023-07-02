import { EndUserInterface } from 'interfaces/end-user';
import { HealthCoachInterface } from 'interfaces/health-coach';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  end_user?: EndUserInterface[];
  health_coach?: HealthCoachInterface[];
  user?: UserInterface;
  _count?: {
    end_user?: number;
    health_coach?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
