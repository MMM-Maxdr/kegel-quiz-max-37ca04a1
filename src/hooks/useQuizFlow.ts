import { useEffect, useState } from 'react'
import { Step } from '@/data/questionnaire'

export interface UseQuizFlowOptions {
  steps: Step[]
  skipParamKeys?: string[]
}

export const useQuizFlow = ({ steps, skipParamKeys = ['sales', 'skip'] }: UseQuizFlowOptions) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [showProcessing, setShowProcessing] = useState(false)
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [showSalesPage, setShowSalesPage] = useState(false)
  const [showSocialProof, setShowSocialProof] = useState(false)
  const [showPelvicFloor, setShowPelvicFloor] = useState(false)
  const [showDurationBenefit, setShowDurationBenefit] = useState(false)
  const [showStatistics, setShowStatistics] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [showProfileSummary, setShowProfileSummary] = useState(false)
  const [showFinalProjection, setShowFinalProjection] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const shouldSkip = skipParamKeys.some(k => params.get(k) === '1')
    if (shouldSkip) setShowSalesPage(true)
  }, [skipParamKeys])

  const handleOptionSelect = (stepNumber: number, optionId: string) => {
    const currentStepData = steps.find(q => q.step === stepNumber)
    const isMultiSelect = currentStepData?.multiSelect
    setAnswers(prev => {
      const currentAnswers = prev[stepNumber] || []
      if (isMultiSelect) {
        if (currentAnswers.includes(optionId)) {
          return { ...prev, [stepNumber]: currentAnswers.filter(id => id !== optionId) }
        } else {
          return { ...prev, [stepNumber]: [...currentAnswers, optionId] }
        }
      } else {
        return { ...prev, [stepNumber]: [optionId] }
      }
    })
  }

  const handleNext = () => {
    if (currentStep === 1) setShowSocialProof(true)
    else if (currentStep === 3) setShowPelvicFloor(true)
    else if (currentStep === 6) setShowDurationBenefit(true)
    else if (currentStep === 8) setShowStatistics(true)
    else if (currentStep === 14) setShowComparison(true)
    else if (currentStep === 21) setShowProfileSummary(true)
    else if (currentStep === 25) setShowFinalProjection(true)
    else if (currentStep === 28) setShowProcessing(true)
    else if (currentStep < steps.length) setCurrentStep(prev => prev + 1)
    else setShowProcessing(true)
  }

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1)
  }

  const handleProcessingComplete = () => {
    setShowProcessing(false)
    setShowEmailCapture(true)
  }

  const handleEmailSubmit = () => {
    setShowEmailCapture(false)
    setShowSalesPage(true)
  }

  const handleInfoContinue = (setter: (v: boolean) => void) => {
    setter(false)
    setCurrentStep(prev => prev + 1)
  }

  const currentStepData = steps.find(q => q.step === currentStep)

  return {
    state: {
      currentStep,
      answers,
      showProcessing,
      showEmailCapture,
      showSalesPage,
      showSocialProof,
      showPelvicFloor,
      showDurationBenefit,
      showStatistics,
      showComparison,
      showProfileSummary,
      showFinalProjection,
      currentStepData,
      totalSteps: steps.length
    },
    actions: {
      handleOptionSelect,
      handleNext,
      handleBack,
      handleProcessingComplete,
      handleEmailSubmit,
      setShowSalesPage,
      continueSocialProof: () => handleInfoContinue(setShowSocialProof),
      continuePelvicFloor: () => handleInfoContinue(setShowPelvicFloor),
      continueDurationBenefit: () => handleInfoContinue(setShowDurationBenefit),
      continueStatistics: () => handleInfoContinue(setShowStatistics),
      continueComparison: () => handleInfoContinue(setShowComparison),
      continueProfileSummary: () => handleInfoContinue(setShowProfileSummary),
      continueFinalProjection: () => handleInfoContinue(setShowFinalProjection)
    }
  }
}
