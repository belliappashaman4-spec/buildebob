import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://nocfaiidocdahsxejjov.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5vY2ZhaWlkb2NkYWhzeGVqam92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMwODY2MTYsImV4cCI6MjEwODY2MjYxNn0.BTyE5NYooVES1ZhCZQAPMOpu0P5QxklgdVldXMUB2Cc';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export interface InquirySubmissionPayload {
  reference_id: string;
  full_name: string;
  business_name: string;
  phone: string;
  email: string;
  business_type: string;
  services_interested: string[];
  budget: string;
  requirements?: string;
  source?: string;
  metadata?: Record<string, any>;
}

/**
 * Submit an inquiry directly to the Supabase backend.
 * Uses anon key with INSERT permission under Row Level Security.
 */
export async function submitInquiryToSupabase(payload: InquirySubmissionPayload) {
  try {
    const { error } = await supabase
      .from('inquiries')
      .insert({
        reference_id: payload.reference_id,
        full_name: payload.full_name,
        business_name: payload.business_name,
        phone: payload.phone,
        email: payload.email,
        business_type: payload.business_type,
        services_interested: payload.services_interested,
        budget: payload.budget,
        requirements: payload.requirements || null,
        source: payload.source || 'website_lead_form',
        metadata: payload.metadata || {},
      });

    if (error) {
      console.error('[Supabase Insert Error]:', error);
      return { success: false, error: error.message };
    }

    return { 
      success: true, 
      data: { reference_id: payload.reference_id } 
    };
  } catch (err: any) {
    console.error('[Supabase Network/Runtime Exception]:', err);
    return { success: false, error: err?.message || 'Network error occurred while contacting backend.' };
  }
}
