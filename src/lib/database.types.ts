export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: number
          created_at: string
          full_name: string
          email: string
          company_name: string
          startup_stage: string
          consultation_goal: string
          other_goal?: string
          product_type: string
          other_product_type?: string
          message?: string
          status: 'new' | 'contacted' | 'completed'
        }
        Insert: {
          id?: number
          created_at?: string
          full_name: string
          email: string
          company_name: string
          startup_stage: string
          consultation_goal: string
          other_goal?: string
          product_type: string
          other_product_type?: string
          message?: string
          status?: 'new' | 'contacted' | 'completed'
        }
        Update: {
          id?: number
          created_at?: string
          full_name?: string
          email?: string
          company_name?: string
          startup_stage?: string
          consultation_goal?: string
          other_goal?: string
          product_type?: string
          other_product_type?: string
          message?: string
          status?: 'new' | 'contacted' | 'completed'
        }
      }
    }
  }
}