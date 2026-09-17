import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { LandingScreen } from './components/LandingScreen';
import { EmergencyMode } from './components/EmergencyMode';
import { HealthWorkerDashboard } from './components/HealthWorkerDashboard';
import { NewCareEpisode } from './components/NewCareEpisode';
import { CareJourneyHero } from './components/CareJourneyHero';
import { ReferralCreation } from './components/ReferralCreation';
import { FacilityDashboard } from './components/FacilityDashboard';
import { CareGapDashboard } from './components/CareGapDashboard';
import { FollowUpDashboard } from './components/FollowUpDashboard';
import { CareGuide } from './components/CareGuide';
import { AICopilot } from './components/AICopilot';
import { FamilyPatientView } from './components/FamilyPatientView';
import { FacilityFinder } from './components/FacilityFinder';
import { GovernmentAdminDashboard } from './components/GovernmentAdminDashboard';

const MainRouter: React.FC = () => {
  const { currentScreen } = useApp();

  return (
    <div className="min-h-screen bg-gov-bg flex flex-col font-sans">
      <Header />
      <main className="flex-1">
        {currentScreen === 'landing' && <LandingScreen />}
        {currentScreen === 'emergency' && <EmergencyMode />}
        {currentScreen === 'worker_dashboard' && <HealthWorkerDashboard />}
        {currentScreen === 'new_episode' && <NewCareEpisode />}
        {currentScreen === 'care_journey' && <CareJourneyHero />}
        {currentScreen === 'referral_creation' && <ReferralCreation />}
        {currentScreen === 'facility_dashboard' && <FacilityDashboard />}
        {currentScreen === 'care_gap_dashboard' && <CareGapDashboard />}
        {currentScreen === 'followup_dashboard' && <FollowUpDashboard />}
        {currentScreen === 'care_guide' && <CareGuide />}
        {currentScreen === 'ai_copilot' && <AICopilot />}
        {currentScreen === 'patient_view' && <FamilyPatientView />}
        {currentScreen === 'facility_finder' && <FacilityFinder />}
        {currentScreen === 'gov_admin_dashboard' && <GovernmentAdminDashboard />}
      </main>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}

export default App;
