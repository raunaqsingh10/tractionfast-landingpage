export type StartupStage =
  | 'idea'
  | 'development'
  | 'launched'
  | 'seeking_users'
  | 'scaling';

export type ConsultationGoal =
  | 'validation'
  | 'initial_users'
  | 'acquisition'
  | 'market_demand'
  | 'other';

export type ProductType =
  | 'saas'
  | 'mobile'
  | 'ecommerce'
  | 'physical'
  | 'service'
  | 'other';

export interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  startupStage: StartupStage;
  consultationGoal: ConsultationGoal;
  otherGoal?: string;
  productType: ProductType;
  otherProductType?: string;
  message?: string;
}