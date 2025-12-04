import React from 'react'
import QuizFlow from '@/components/QuizFlow'
import Mrr from './Mrr'

const MrrCheckout = () => {
  return <QuizFlow renderSalesPage={() => <Mrr />} />
}

export default MrrCheckout
