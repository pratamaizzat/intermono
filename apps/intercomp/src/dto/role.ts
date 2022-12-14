import { DataPermission } from "./permission";

export type DataRole = {
  id: number;
  name: string;
  display_name: string;
  description?: string;
  created_at: string;
  updated_at: string;
  permissions: DataPermission[];
};
