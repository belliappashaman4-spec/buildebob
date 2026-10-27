export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      inquiries: {
        Row: {
          budget: string
          business_name: string
          business_type: string
          created_at: string
          email: string
          full_name: string
          id: string
          metadata: Json
          phone: string
          reference_id: string
          requirements: string | null
          services_interested: string[]
          source: string
          status: string
          updated_at: string
        }
        Insert: {
          budget: string
          business_name: string
          business_type: string
          created_at?: string
          email: string
          full_name: string
          id?: string
          metadata?: Json
          phone: string
          reference_id: string
          requirements?: string | null
          services_interested?: string[]
          source?: string
          status?: string
          updated_at?: string
        }
        Update: {
          budget?: string
          business_name?: string
          business_type?: string
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          metadata?: Json
          phone?: string
          reference_id?: string
          requirements?: string | null
          services_interested?: string[]
          source?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
