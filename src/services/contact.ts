import { supabase } from '../lib/supabase';
import type { FormData } from '../types/form';

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          company_name: formData.companyName,
          startup_stage: formData.startupStage,
          consultation_goal: formData.consultationGoal,
          other_goal: formData.otherGoal,
          product_type: formData.productType,
          other_product_type: formData.otherProductType,
          message: formData.message,
          status: 'new',
        },
      ]);

    if (error) throw error;

    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      error: 'Failed to submit form. Please try again later.' 
    };
  }
}