import QuestionnaireStep from '@/components/QuestionnaireStep'
import ProcessingScreen from '@/components/ProcessingScreen'
import EmailCapture from '@/components/EmailCapture'
import SocialProofScreen from '@/components/info-screens/SocialProofScreen'
import PelvicFloorScreen from '@/components/info-screens/PelvicFloorScreen'
import DurationBenefitScreen from '@/components/info-screens/DurationBenefitScreen'
import StatisticsScreen from '@/components/info-screens/StatisticsScreen'
import ComparisonScreen from '@/components/info-screens/ComparisonScreen'
import ProfileSummaryScreen from '@/components/info-screens/ProfileSummaryScreen'
import FinalProjectionScreen from '@/components/info-screens/FinalProjectionScreen'
import { questionnaireData } from '@/data/questionnaire'
import { useQuizFlow } from '@/hooks/useQuizFlow'

interface QuizFlowProps {
  renderSalesPage: () => JSX.Element
}

const QuizFlow = ({ renderSalesPage }: QuizFlowProps) => {
  const { state, actions } = useQuizFlow({ steps: questionnaireData })

  if (state.showSalesPage) return renderSalesPage()
  if (state.showEmailCapture) return <EmailCapture onSubmit={() => actions.handleEmailSubmit()} />
  if (state.showProcessing) return <ProcessingScreen onComplete={actions.handleProcessingComplete} />
  if (state.showSocialProof) return <SocialProofScreen onContinue={actions.continueSocialProof} onBack={actions.handleBack} />
  if (state.showPelvicFloor) return <PelvicFloorScreen onContinue={actions.continuePelvicFloor} onBack={actions.handleBack} />
  if (state.showDurationBenefit) return <DurationBenefitScreen onContinue={actions.continueDurationBenefit} onBack={actions.handleBack} />
  if (state.showStatistics) return <StatisticsScreen onContinue={actions.continueStatistics} onBack={actions.handleBack} />
  if (state.showComparison) return <ComparisonScreen onContinue={actions.continueComparison} onBack={actions.handleBack} />
  if (state.showProfileSummary) return <ProfileSummaryScreen onContinue={actions.continueProfileSummary} onBack={actions.handleBack} />
  if (state.showFinalProjection) return <FinalProjectionScreen onContinue={actions.continueFinalProjection} onBack={actions.handleBack} />

  if (!state.currentStepData) return <div>Erro: Etapa não encontrada</div>

  return (
    <QuestionnaireStep
      step={state.currentStep}
      totalSteps={state.totalSteps}
      question={state.currentStepData.question}
      subtitle={state.currentStepData.subtitle}
      options={state.currentStepData.options}
      selectedOptions={state.answers[state.currentStep] || []}
      multiSelect={state.currentStepData.multiSelect}
      hasTestimonials={state.currentStepData.hasTestimonials}
      hasGif={state.currentStepData.hasGif}
      gifUrl={state.currentStepData.gifUrl}
      onSelect={(optionId) => actions.handleOptionSelect(state.currentStep, optionId)}
      onNext={actions.handleNext}
      onBack={actions.handleBack}
    />
  )
}

export default QuizFlow
