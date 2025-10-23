import { useState } from 'react'
import { supabase, ClubFormData, BusinessFormData } from '@/lib/supabase'

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const submitClubForm = async (formData: ClubFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    console.log('Submitting club form data:', formData)

    try {
      const { data, error } = await supabase
        .from('Klubber')
        .insert([
          {
            'Klub navn': formData.club_name,
            'Kontakt person': formData.contact_person,
            'Email': formData.email,
            'Telefon': formData.phone || null,
            'Besked': formData.message
          }
        ])
        .select()

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      console.log('Club form submitted successfully:', data)
      setSubmitStatus('success')
      return { success: true, data }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Der opstod en fejl ved indsendelse af formularen'
      console.error('Error submitting club form:', error)
      setErrorMessage(errorMsg)
      setSubmitStatus('error')
      return { success: false, error: errorMsg }
    } finally {
      setIsSubmitting(false)
    }
  }

  const submitBusinessForm = async (formData: BusinessFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    console.log('Submitting business form data:', formData)

    try {
      const { data, error } = await supabase
        .from('Virksomhed')
        .insert([
          {
            'Firma navn': formData.company_name,
            'Kontakt person': formData.contact_person,
            'Email': formData.email,
            'Telefon': formData.phone || null,
            'Besked': formData.message
          }
        ])
        .select()

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      console.log('Business form submitted successfully:', data)
      setSubmitStatus('success')
      return { success: true, data }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Der opstod en fejl ved indsendelse af formularen'
      console.error('Error submitting business form:', error)
      setErrorMessage(errorMsg)
      setSubmitStatus('error')
      return { success: false, error: errorMsg }
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetStatus = () => {
    setSubmitStatus('idle')
    setErrorMessage('')
  }

  return {
    isSubmitting,
    submitStatus,
    errorMessage,
    submitClubForm,
    submitBusinessForm,
    resetStatus
  }
}
