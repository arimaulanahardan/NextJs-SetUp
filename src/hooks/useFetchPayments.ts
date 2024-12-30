import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { Ipayments } from '@/interfaces/paymentInterface'
import { tablePaymentsService } from '@/api/tablePaymentsService'

export const useFetchPayments = () => {
  const [payments, setPayments] = useState<Ipayments[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPayments = useCallback(async () => {
    try {
      const payments = await tablePaymentsService.getPayments()
      setPayments(payments)
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPayments()
  }, [fetchPayments])

  return { payments, loading, error }
}
