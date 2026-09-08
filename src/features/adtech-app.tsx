import React, { useState, useMemo } from 'react';
import { 
  MapPin, 
  Activity, 
  Users, 
  MonitorPlay,
  Calendar,
  Clock,
  ChevronRight,
  TrendingUp,
  Info,
  BarChart2,
  Settings,
  ShoppingCart,
  Compass,
  Timer,
  Zap,
  Target,
  Image as ImageIcon,
  ArrowRight,
  ArrowLeft,
  Plus,
  CheckCircle2,
  DollarSign,
  Eye,
  Layers,
  X,
  FileText,
  Download,
  PieChart,
  Navigation,
  Search,
  Filter,
  ShieldCheck,
  Building2,
  Sparkles,
  Check,
  Radio,
  FileCheck,
  AlertCircle,
  Briefcase,
  ExternalLink,
  Lock,
  Unlock,
  Ban,
  RotateCcw,
  Edit3,
  User,
  LogIn,
  LogOut,
  KeyRound
} from 'lucide-react';

import screenSudirman from '@/assets/screen-sudirman.jpg';
import screenSenayan from '@/assets/screen-senayan.jpg';
import screenKemang from '@/assets/screen-kemang.jpg';
import screenSurabaya from '@/assets/screen-surabaya.jpg';
import screenBali from '@/assets/screen-bali.jpg';
import streetJakarta from '@/assets/street-jakarta.jpg';
import streetRegional from '@/assets/street-regional.jpg';

const MOCK_SCREENS = [
  {
    id: 'JKT-SDR-01',
    name: 'Sudirman Central Spectacular',
    operator: 'CityVision Arterial',
    city: 'Jakarta',
    street: 'Jl. Jenderal Sudirman Kav. 21',
    postcode: '12920',
    type: 'Roadside Spectacular',
    status: 'Live Sensor',
    traffic: 168400,
    dailyRate: 18500000,
    price: 'Rp 18.500.000 / day',
    resolution: '3840x2160 (16:9 4K)',
    hardware: { size: '18m x 9m', orientation: 'Landscape', tech: 'P6 SMD LED', formats: ['MP4', 'HTML5', 'Dynamic VAST'] },
    gender: { male: 54, female: 46 },
    ses: { a: 52, b: 34, c: 12, d: 2 },
    gen: { genZ: 26, millennial: 48, genX: 20, boomer: 6 },
    commercial: { loop: '60s', spot: '10s', spotsPerHour: 60, rotationFreq: 'Every 60s' },
    context: { type: 'Vehicular & Commuter', dwell: '22s', facing: 'Southbound to SCBD Financial Gate' },
    triggers: ['Meteorological (Rain/UV)', 'Doppler Traffic Velocity', 'Time-parting Dayparts'],
    image: screenSudirman,
    mapViewUrl: streetJakarta
  },
  {
    id: 'JKT-SNY-02',
    name: 'Senayan MRT Concourse Array',
    operator: 'MacroAd Transit',
    city: 'Jakarta',
    street: 'Jl. Pintu Satu Senayan MRT Gate A',
    postcode: '10270',
    type: 'Transit Concourse',
    status: 'Live Sensor',
    traffic: 112500,
    dailyRate: 12000000,
    price: 'Rp 12.000.000 / day',
    resolution: '1080x1920 (9:16 Portrait)',
    hardware: { size: '3.5m x 6m', orientation: 'Portrait', tech: 'P2.5 Fine Pitch', formats: ['MP4', 'H.264', 'HTML5'] },
    gender: { male: 47, female: 53 },
    ses: { a: 38, b: 46, c: 14, d: 2 },
    gen: { genZ: 38, millennial: 44, genX: 14, boomer: 4 },
    commercial: { loop: '45s', spot: '7.5s', spotsPerHour: 80, rotationFreq: 'Every 45s' },
    context: { type: 'Transit Pedestrian', dwell: '110s', facing: 'Turnstile Exit Flow to FX Sudirman' },
    triggers: ['Time-parting Dayparts', 'Transit Gate Flow Density'],
    image: screenSenayan,
    mapViewUrl: streetJakarta
  },
  {
    id: 'JKT-KMG-03',
    name: 'Kemang Luxury Galleria Arch',
    operator: 'Prisma HighStreet',
    city: 'Jakarta',
    street: 'Jl. Kemang Raya No. 88',
    postcode: '12730',
    type: 'Commercial Lifestyle',
    status: 'Live Sensor',
    traffic: 68300,
    dailyRate: 9500000,
    price: 'Rp 9.500.000 / day',
    resolution: '1920x1920 (1:1 Square)',
    hardware: { size: '5m x 5m', orientation: 'Square', tech: 'P4 Outdoor SMD', formats: ['MP4', 'WebM', 'HTML5 App'] },
    gender: { male: 39, female: 61 },
    ses: { a: 64, b: 28, c: 8, d: 0 },
    gen: { genZ: 31, millennial: 46, genX: 18, boomer: 5 },
    commercial: { loop: '60s', spot: '10s', spotsPerHour: 60, rotationFreq: 'Every 60s' },
    context: { type: 'High-Street Retail Dwell', dwell: '45s', facing: 'Valet Drop-off & Outdoor Piazza' },
    triggers: ['Meteorological (Rain/UV)', 'Audience Vision Cohort'],
    image: screenKemang,
    mapViewUrl: streetJakarta
  },
  {
    id: 'SBY-BSR-04',
    name: 'Basuki Rahmat Twin Gateway',
    operator: 'CityVision East',
    city: 'Surabaya',
    street: 'Jl. Basuki Rahmat CBD Corridor',
    postcode: '60261',
    type: 'Roadside Spectacular',
    status: 'Live Sensor',
    traffic: 134200,
    dailyRate: 14500000,
    price: 'Rp 14.500.000 / day',
    resolution: '3840x1080 (32:9 Ribbon)',
    hardware: { size: '24m x 6m', orientation: 'Landscape', tech: 'P8 SMD Gantry', formats: ['MP4', 'HTML5 Canvas'] },
    gender: { male: 56, female: 44 },
    ses: { a: 44, b: 38, c: 16, d: 2 },
    gen: { genZ: 28, millennial: 44, genX: 22, boomer: 6 },
    commercial: { loop: '60s', spot: '10s', spotsPerHour: 60, rotationFreq: 'Every 60s' },
    context: { type: 'Arterial Vehicular', dwell: '25s', facing: 'Surabaya CBD Inbound Gantry' },
    triggers: ['Doppler Traffic Velocity', 'Time-parting Dayparts'],
    image: screenSurabaya,
    mapViewUrl: streetRegional
  },
  {
    id: 'DPS-SST-05',
    name: 'Sunset Road Tourism Gantry',
    operator: 'Bali Landmark Media',
    city: 'Bali',
    street: 'Jl. Sunset Road Seminyak Gateway',
    postcode: '80361',
    type: 'Roadside Spectacular',
    status: 'Live Sensor',
    traffic: 98700,
    dailyRate: 11000000,
    price: 'Rp 11.000.000 / day',
    resolution: '1920x1080 (16:9 Landscape)',
    hardware: { size: '12m x 6m', orientation: 'Landscape', tech: 'P6 Weather Sealed', formats: ['MP4', 'HTML5 Live'] },
    gender: { male: 50, female: 50 },
    ses: { a: 58, b: 32, c: 10, d: 0 },
    gen: { genZ: 34, millennial: 48, genX: 14, boomer: 4 },
    commercial: { loop: '60s', spot: '10s', spotsPerHour: 60, rotationFreq: 'Every 60s' },
    context: { type: 'Tourist & Airport Corridor', dwell: '35s', facing: 'Ngurah Rai to Canggu/Seminyak Bound' },
    triggers: ['Meteorological (Rain/UV)', 'Time-parting Dayparts'],
    image: screenBali,
    mapViewUrl: streetRegional
  }
];

const TRIGGER_PLAYBOOKS: Record<string, { desc: string; brandImpact: string; condition: string }> = {
  'Meteorological (Rain/UV)': {
    desc: 'Calibrated local IoT weather telemetry & radar sensors detect precipitation rate, ambient humidity, and UV levels.',
    brandImpact: 'Instant dynamic asset swap when downpour begins. Ride-hailing, food delivery, and hot beverage brands trigger immediate hyper-contextual calls to action.',
    condition: 'Rainfall > 2.0 mm/hr OR UV Index > 8.0'
  },
  'Doppler Traffic Velocity': {
    desc: 'Corridor microwave Doppler radar and camera telemetry detect vehicle flow speeds in real-time.',
    brandImpact: 'When traffic slows below 15 km/h (heavy gridlock), creative automatically switches to high-density storytelling copy and QR code interactions due to extended dwell time.',
    condition: 'Arterial flow speed < 15 km/h'
  },
  'Time-parting Dayparts': {
    desc: 'Microsecond precision clock sync adjusts scheduled media based on morning commuter, midday lunch, and evening lifestyle windows.',
    brandImpact: 'QSR, fintech, and lifestyle brands showcase morning coffee promos at 07:00-10:00 and shift to dinner/entertainment promos at 18:00 without manual intervention.',
    condition: 'Synchronized NTP Clock daypart schedule'
  },
  'Audience Vision Cohort': {
    desc: 'On-device edge vision telemetry aggregates aggregate crowd density, demographic ratios, and footfall velocities without storing PII.',
    brandImpact: 'Fashion, luxury beauty, and automotive brands serve dynamic targeted variants tailored to real-time crowd composition shifts.',
    condition: 'Cohort match > 60% demographic threshold'
  },
  'Transit Gate Flow Density': {
    desc: 'Subway & transit concourse turnstile IoT sensors measure aggregate ingress and egress passenger volume per minute.',
    brandImpact: 'High-frequency app downloads and quick consumer goods run high-impact visual blitzes during peak transit station surge times.',
    condition: 'Turnstile gate flow > 250 commuters/min'
  }
};

type Screen = (typeof MOCK_SCREENS)[number];
type PlanStatus = 'REQUESTED' | 'BOOKED' | 'IN_PROGRESS' | 'PAID' | 'CANCELLED';

interface FlightPlan {
  id: string;
  campaignTitle: string;
  clientName: string;
  agencyDesk: string;
  status: PlanStatus;
  goLiveDate: string;
  durationDays: number;
  screens: Screen[];
  requestedAt: string;
  bookedAt: string | null;
  invoicedAt: string | null;
  paidAt: string | null;
}

interface Campaign {
  id: string;
  name: string;
  status: string;
  screensCount: number;
  spent: string;
  impressions: string;
  startDate: string;
  endDate: string;
  targetCity: string;
  screens: Screen[];
}

const INITIAL_FLIGHT_PLANS: FlightPlan[] = [
  {
    id: 'FLP-2026-091',
    campaignTitle: 'Aura Fintech Mega Launch',
    clientName: 'Aura Bank Indonesia',
    agencyDesk: 'Dentsu X Arteria Direct',
    status: 'REQUESTED',
    goLiveDate: '2026-10-01',
    durationDays: 14,
    screens: [MOCK_SCREENS[0]!, MOCK_SCREENS[1]!],
    requestedAt: '2026-09-02 14:32 WIB',
    bookedAt: null,
    invoicedAt: null,
    paidAt: null
  },
  {
    id: 'FLP-2026-092',
    campaignTitle: 'Ioniq EV Roadshow Nationwide',
    clientName: 'Hyundai Motors Indonesia',
    agencyDesk: 'Wavemaker Jakarta',
    status: 'BOOKED',
    goLiveDate: '2026-10-15',
    durationDays: 30,
    screens: [MOCK_SCREENS[0]!, MOCK_SCREENS[3]!, MOCK_SCREENS[4]!],
    requestedAt: '2026-08-28 09:15 WIB',
    bookedAt: '2026-08-29 11:20 WIB',
    invoicedAt: null,
    paidAt: null
  },
  {
    id: 'FLP-2026-088',
    campaignTitle: 'Summer Hydration Flash Campaign',
    clientName: 'Danone Waters Indonesia',
    agencyDesk: 'Mindshare ID',
    status: 'IN_PROGRESS',
    goLiveDate: '2026-09-10',
    durationDays: 7,
    screens: [MOCK_SCREENS[1]!, MOCK_SCREENS[2]!],
    requestedAt: '2026-08-15 16:00 WIB',
    bookedAt: '2026-08-16 10:00 WIB',
    invoicedAt: '2026-08-17 13:45 WIB',
    paidAt: null
  },
  {
    id: 'FLP-2026-074',
    campaignTitle: 'Q3 Lifestyle Privilege Program',
    clientName: 'BCA Priority Banking',
    agencyDesk: 'Arteria Enterprise Direct',
    status: 'PAID',
    goLiveDate: '2026-08-01',
    durationDays: 30,
    screens: [MOCK_SCREENS[0]!, MOCK_SCREENS[2]!],
    requestedAt: '2026-07-10 11:00 WIB',
    bookedAt: '2026-07-11 09:30 WIB',
    invoicedAt: '2026-07-12 14:00 WIB',
    paidAt: '2026-07-14 16:20 WIB'
  }
];

const INITIAL_CAMPAIGNS: Campaign[] = [
  {
    id: 'CAMP-801',
    name: 'Summer Brand Splash 2026',
    status: 'Active',
    screensCount: 3,
    spent: 'Rp 82.500.000',
    impressions: '1.240.500',
    startDate: '2026-08-15',
    endDate: '2026-09-15',
    targetCity: 'Jakarta',
    screens: [MOCK_SCREENS[0]!, MOCK_SCREENS[1]!, MOCK_SCREENS[2]!]
  },
  {
    id: 'CAMP-802',
    name: 'EV Vehicle Corridor Teaser',
    status: 'Scheduled',
    screensCount: 2,
    spent: 'Rp 99.000.000',
    impressions: '1.890.000',
    startDate: '2026-10-01',
    endDate: '2026-10-31',
    targetCity: 'Surabaya & Bali',
    screens: [MOCK_SCREENS[3]!, MOCK_SCREENS[4]!]
  },
  {
    id: 'CAMP-803',
    name: 'Fintech Mobile Awareness Blitz',
    status: 'Completed',
    screensCount: 3,
    spent: 'Rp 240.000.000',
    impressions: '4.100.000',
    startDate: '2026-06-01',
    endDate: '2026-07-01',
    targetCity: 'Jakarta',
    screens: [MOCK_SCREENS[0]!, MOCK_SCREENS[1]!, MOCK_SCREENS[2]!]
  }
];

export default function AdTechApp() {
  const [currentView, setCurrentView] = useState<'home' | 'marketplace' | 'detail' | 'planner' | 'campaigns' | 'report'>('home');
  const [plannerSubView, setPlannerSubView] = useState<'list' | 'detail'>('list');
  const [flightPlans, setFlightPlans] = useState(INITIAL_FLIGHT_PLANS);
  const [activePlanId, setActivePlanId] = useState<string>(INITIAL_FLIGHT_PLANS[0]!.id);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<{ username: string; role: string; name: string } | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authUsername, setAuthUsername] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  const [authFullName, setAuthFullName] = useState<string>('');
  const [authAgencyName, setAuthAgencyName] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [postAuthRedirect, setPostAuthRedirect] = useState<'planner' | 'campaigns' | 'report' | null>(null);

  // Active Screen Detail State
  const [selectedScreen, setSelectedScreen] = useState<typeof MOCK_SCREENS[0] | null>(null);
  const [detailTab, setDetailTab] = useState<'audience' | 'specs' | 'triggers' | 'booking'>('audience');
  const [simulatedCondition, setSimulatedCondition] = useState<'normal' | 'rain' | 'traffic'>('normal');

  // Allocation Modal State (When clicking "Add" on a screen)
  const [allocatingScreen, setAllocatingScreen] = useState<typeof MOCK_SCREENS[0] | null>(null);
  const [newCampaignTitle, setNewCampaignTitle] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [newGoLiveDate, setNewGoLiveDate] = useState('2026-10-01');
  const [newDurationDays, setNewDurationDays] = useState(14);

  // Filter States for Marketplace
  const [cityFilter, setCityFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [minSesA, setMinSesA] = useState(0);
  const [triggerFilter, setTriggerFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'trafficDesc' | 'rateAsc' | 'rateDesc'>('trafficDesc');

  // Cancel Confirmation Modal State
  const [planToCancel, setPlanToCancel] = useState<string | null>(null);

  // Campaign Reports state
  const [campaigns, setCampaigns] = useState(INITIAL_CAMPAIGNS);
  const [activeReport, setActiveReport] = useState(INITIAL_CAMPAIGNS[0]!);
  const [reportDateFrom, setReportDateFrom] = useState(INITIAL_CAMPAIGNS[0]!.startDate);
  const [reportDateTo, setReportDateTo] = useState(INITIAL_CAMPAIGNS[0]!.endDate);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const cleanUser = authUsername.trim();
    const cleanPass = authPassword.trim();

    if (cleanUser === 'admin' && cleanPass === 'login') {
      setIsAuthenticated(true);
      setCurrentUser({
        username: 'admin',
        role: 'Enterprise Operations Desk',
        name: 'Arteria Platform Admin'
      });
      setIsAuthModalOpen(false);
      setAuthUsername('');
      setAuthPassword('');
      showToast('Successfully authenticated as Enterprise Admin.');

      if (postAuthRedirect) {
        setCurrentView(postAuthRedirect);
        setPostAuthRedirect(null);
      }
    } else {
      setAuthError('Invalid credentials. For evaluation access, use username: admin and password: login');
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    if (!authUsername.trim() || !authPassword.trim()) {
      setAuthError('Please provide both username and password.');
      return;
    }

    // Auto-approve newly registered accounts for seamless prototyping
    setIsAuthenticated(true);
    setCurrentUser({
      username: authUsername.trim(),
      role: authAgencyName.trim() ? `${authAgencyName.trim()} Planner` : 'Direct Brand Planner',
      name: authFullName.trim() || authUsername.trim()
    });
    setIsAuthModalOpen(false);
    setAuthUsername('');
    setAuthPassword('');
    setAuthFullName('');
    setAuthAgencyName('');
    showToast(`Account created for ${authFullName || authUsername}. Enterprise access granted.`);

    if (postAuthRedirect) {
      setCurrentView(postAuthRedirect);
      setPostAuthRedirect(null);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    if (currentView === 'planner' || currentView === 'campaigns' || currentView === 'report') {
      setCurrentView('marketplace');
    }
    showToast('Signed out of Arteria Network. Restricted modules locked.');
  };

  const handleGuardedNavClick = (view: 'planner' | 'campaigns' | 'report') => {
    if (isAuthenticated) {
      setCurrentView(view);
    } else {
      setPostAuthRedirect(view);
      setAuthError(null);
      setIsAuthModalOpen(true);
    }
  };

  const activePlan = useMemo(() => {
    return flightPlans.find(p => p.id === activePlanId) ?? flightPlans[0]!;
  }, [flightPlans, activePlanId]);

  const activePlanDailyRate = useMemo(() => {
    return activePlan.screens.reduce((acc, s) => acc + s.dailyRate, 0);
  }, [activePlan]);

  const activePlanSubtotal = useMemo(() => {
    return activePlanDailyRate * activePlan.durationDays;
  }, [activePlanDailyRate, activePlan.durationDays]);

  const activePlanVAT = useMemo(() => {
    return Math.round(activePlanSubtotal * 0.11);
  }, [activePlanSubtotal]);

  const activePlanTotal = useMemo(() => {
    return activePlanSubtotal + activePlanVAT;
  }, [activePlanSubtotal, activePlanVAT]);

  const activePlanImpressions = useMemo(() => {
    const dailyEst = activePlan.screens.reduce((acc, s) => acc + Math.round(s.traffic * 0.28), 0);
    return dailyEst * activePlan.durationDays;
  }, [activePlan]);

  const activePlanEndDate = useMemo(() => {
    try {
      const d = new Date(activePlan.goLiveDate);
      d.setDate(d.getDate() + activePlan.durationDays);
      return d.toISOString().split('T')[0];
    } catch {
      return '2026-10-31';
    }
  }, [activePlan.goLiveDate, activePlan.durationDays]);

  const filteredScreens = useMemo(() => {
    return MOCK_SCREENS.filter(s => {
      if (cityFilter !== 'All' && s.city !== cityFilter) return false;
      if (typeFilter !== 'All' && s.type !== typeFilter) return false;
      if (s.ses.a < minSesA) return false;
      if (triggerFilter !== 'All' && !s.triggers.some(t => t.toLowerCase().includes(triggerFilter.toLowerCase()))) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'trafficDesc') return b.traffic - a.traffic;
      if (sortBy === 'rateAsc') return a.dailyRate - b.dailyRate;
      if (sortBy === 'rateDesc') return b.dailyRate - a.dailyRate;
      return 0;
    });
  }, [cityFilter, typeFilter, minSesA, triggerFilter, sortBy]);

  const handleUpdatePlanStatus = (planId: string, newStatus: 'REQUESTED' | 'BOOKED' | 'IN_PROGRESS' | 'PAID' | 'CANCELLED') => {
    const now = new Date().toISOString().replace('T', ' ').slice(0, 16) + ' WIB';
    setFlightPlans(prev => prev.map(p => {
      if (p.id !== planId) return p;
      return {
        ...p,
        status: newStatus,
        requestedAt: newStatus === 'REQUESTED' ? now : p.requestedAt,
        bookedAt: newStatus === 'BOOKED' ? now : p.bookedAt,
        invoicedAt: newStatus === 'IN_PROGRESS' ? now : p.invoicedAt,
        paidAt: newStatus === 'PAID' ? now : p.paidAt
      };
    }));
    showToast(`Flight Plan #${planId} updated to: ${newStatus}`);
  };

  const handleCancelPlan = (planId: string) => {
    handleUpdatePlanStatus(planId, 'CANCELLED');
    setPlanToCancel(null);
    showToast(`Flight Plan #${planId} has been cancelled.`);
  };

  const handleReactivatePlan = (planId: string) => {
    handleUpdatePlanStatus(planId, 'REQUESTED');
    showToast(`Flight Plan #${planId} reactivated as REQUESTED.`);
  };

  const handleToggleScreenInPlan = (planId: string, screen: typeof MOCK_SCREENS[0]) => {
    setFlightPlans(prev => prev.map(p => {
      if (p.id !== planId) return p;
      const exists = p.screens.some(s => s.id === screen.id);
      const updatedScreens = exists 
        ? p.screens.filter(s => s.id !== screen.id)
        : [...p.screens, screen];
      return { ...p, screens: updatedScreens };
    }));
  };

  const handleCreateNewPlanWithScreen = () => {
    if (!allocatingScreen) return;
    const cleanTitle = newCampaignTitle.trim() || `New Flight ${allocatingScreen.city} Corridor`;
    const newId = `FLP-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newPlan = {
      id: newId,
      campaignTitle: cleanTitle,
      clientName: newClientName.trim() || 'Direct Media Client',
      agencyDesk: 'Arteria Platform Desk',
      status: 'REQUESTED' as const,
      goLiveDate: newGoLiveDate,
      durationDays: newDurationDays,
      screens: [allocatingScreen],
      requestedAt: new Date().toISOString().replace('T', ' ').slice(0, 16) + ' WIB',
      bookedAt: null,
      invoicedAt: null,
      paidAt: null
    };

    setFlightPlans(prev => [newPlan, ...prev]);
    setActivePlanId(newId);
    setAllocatingScreen(null);
    setNewCampaignTitle('');
    setNewClientName('');
    showToast(`Created new plan "${cleanTitle}" with ${allocatingScreen.name}`);
  };

  const handleSaveActivePlan = () => {
    showToast(`Saved flight plan parameters for "${activePlan.campaignTitle}"`);
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-2.5 rounded-lg shadow-xl text-xs flex items-center space-x-2 border border-slate-700 animate-in fade-in slide-in-from-bottom-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-6 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setCurrentView('home')}
              className="flex items-center space-x-2 text-left focus:outline-none"
            >
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm tracking-wider">
                AR
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-wider text-slate-900 block leading-tight">ARTERIA<span className="text-blue-600">.NETWORK</span></span>
                <span className="text-[11px] text-slate-500 font-medium tracking-tight block">Arterial Media & Telemetry Exchange</span>
              </div>
            </button>
          </div>

          {/* Primary Navigation Tabs */}
          <nav className="flex items-center space-x-1 text-xs">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                currentView === 'home' 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Platform Overview
            </button>
            <button
              onClick={() => setCurrentView('marketplace')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                currentView === 'marketplace' || currentView === 'detail'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Inventory Marketplace
            </button>
            
            {/* Flight Media Planner (Protected) */}
            <button
              onClick={() => {
                if (isAuthenticated) {
                  setCurrentView('planner');
                  setPlannerSubView('list');
                } else {
                  handleGuardedNavClick('planner');
                }
              }}
              className={`px-3 py-1.5 rounded-md transition-all font-medium flex items-center space-x-1.5 ${
                currentView === 'planner'
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Flight Media Planner {isAuthenticated && `(${flightPlans.length})`}</span>
              {!isAuthenticated && <Lock className="w-3 h-3 text-slate-400 ml-0.5" />}
            </button>

            {/* Campaign Deliveries (Protected) */}
            <button
              onClick={() => handleGuardedNavClick('campaigns')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium flex items-center space-x-1.5 ${
                currentView === 'campaigns' 
                  ? 'bg-blue-50 text-blue-700 border border-blue-200 font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Campaign Deliveries</span>
              {!isAuthenticated && <Lock className="w-3 h-3 text-slate-400 ml-0.5" />}
            </button>

            {/* View Report (Protected) */}
            <button
              onClick={() => handleGuardedNavClick('report')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium flex items-center space-x-1.5 ${
                currentView === 'report' 
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-semibold shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>View Report</span>
              {!isAuthenticated && <Lock className="w-3 h-3 text-slate-400 ml-0.5" />}
            </button>
          </nav>

          {/* Right Status / Authentication Controls */}
          <div className="flex items-center space-x-3 text-xs">
            {isAuthenticated && currentUser ? (
              <div className="flex items-center space-x-2.5">
                <div className="hidden lg:flex flex-col text-right">
                  <span className="font-bold text-slate-900 leading-tight">{currentUser.name}</span>
                  <span className="text-[10px] text-emerald-700 font-medium">{currentUser.role}</span>
                </div>
                <div className="w-7 h-7 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center text-xs shadow-xs">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={handleLogout}
                  className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setAuthMode('login');
                    setAuthError(null);
                    setIsAuthModalOpen(true);
                  }}
                  className="px-3 py-1.5 text-slate-700 hover:text-slate-900 font-semibold hover:bg-slate-100 rounded-md transition-colors flex items-center space-x-1.5"
                >
                  <LogIn className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sign In</span>
                </button>
                <button
                  onClick={() => {
                    setAuthMode('register');
                    setAuthError(null);
                    setIsAuthModalOpen(true);
                  }}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-md transition-colors shadow-2xs"
                >
                  Register Desk
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Areas */}
      <main className="flex-1 flex flex-col">
        
        {/* VIEW 1: PLATFORM OVERVIEW (HOME) */}
        {currentView === 'home' && (
          <div className="flex-1 bg-slate-100 py-10 px-6">
            <div className="max-w-7xl mx-auto space-y-10">
              
              {/* Hero Banner */}
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-xs relative overflow-hidden">
                <div className="max-w-3xl space-y-4">
                  <h1 className="text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                    Precision Out-of-Home Infrastructure with Conditional Dynamic Triggers.
                  </h1>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Direct access to Indonesia's highest-traffic commercial arterial gantries, transit concourses, and lifestyle screens. Programmatically triggered by local precipitation radar, Doppler traffic velocity, and demographic cohorts.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <button
                      onClick={() => setCurrentView('marketplace')}
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md flex items-center space-x-2 shadow-sm transition-all"
                    >
                      <span>Inspect Inventory Marketplace</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setCurrentView('planner');
                        setPlannerSubView('list');
                      }}
                      className="px-5 py-2.5 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-semibold rounded-md flex items-center space-x-2 transition-all shadow-xs"
                    >
                      <span>Flight Media Plans ({flightPlans.length})</span>
                    </button>
                  </div>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Audited Daily Footfall</span>
                    <span className="text-xl font-bold text-slate-900 tabular-nums">14.8M+ Contacts</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Prime Arterial Corridors</span>
                    <span className="text-xl font-bold text-blue-600 tabular-nums">38 Key Nodes</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Dynamic Edge Sensors</span>
                    <span className="text-xl font-bold text-emerald-600">100% Operational</span>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Execution Latency</span>
                    <span className="text-xl font-bold text-slate-900 tabular-nums">&lt; 350ms Dynamic</span>
                  </div>
                </div>
              </div>

              {/* Spotlight Arterial Screens */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Spotlight Arterial Inventory</h2>
                    <p className="text-xs text-slate-500">Real-time edge sensor screens with active dynamic trigger playbooks</p>
                  </div>
                  <button 
                    onClick={() => setCurrentView('marketplace')}
                    className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                  >
                    <span>View All Screens ({MOCK_SCREENS.length})</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {MOCK_SCREENS.slice(0, 3).map(screen => (
                    <div key={screen.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between">
                      <div>
                        <div className="h-44 relative bg-slate-100">
                          <img src={screen.image} alt={screen.name} className="w-full h-full object-cover" />
                          <div className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700 shadow-xs">
                            {screen.operator}
                          </div>
                          <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                            {screen.status}
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{screen.city} &bull; {screen.type}</span>
                            <span className="font-medium">{screen.resolution.split(' ')[0]}</span>
                          </div>
                          <h3 className="font-bold text-slate-900 text-base">{screen.name}</h3>
                          <p className="text-xs text-slate-500 line-clamp-1">{screen.street}</p>

                          {/* Triggers tag */}
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {screen.triggers.map(tr => (
                              <span key={tr} className="bg-amber-50 text-amber-900 border border-amber-200 text-xs px-2 py-0.5 rounded font-medium flex items-center space-x-1">
                                <Zap className="w-3 h-3 text-amber-600" />
                                <span>{tr.split(' ')[0]}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between mt-3">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase font-semibold">Daily Investment</span>
                          <span className="text-xs font-bold text-slate-900 tabular-nums">{screen.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              setSelectedScreen(screen);
                              setCurrentView('detail');
                            }}
                            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition-colors"
                          >
                            Inspect Specs
                          </button>
                          <button
                            onClick={() => {
                              if (isAuthenticated) {
                                setAllocatingScreen(screen);
                              } else {
                                setPostAuthRedirect('planner');
                                setIsAuthModalOpen(true);
                                setAuthError('Sign in with admin/login to allocate inventory into Flight Media Plans.');
                              }
                            }}
                            className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-colors flex items-center space-x-1"
                          >
                            <Plus className="w-3 h-3" />
                            <span>Add</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Triggers Architecture Guide */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                <div className="flex items-center space-x-2 text-xs font-bold text-slate-800 tracking-wide uppercase">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>How Dynamic Triggers Work for Enterprise Brands</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <span className="text-blue-700 font-bold block">1. Local Telemetry Sensing</span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Every arterial display is calibrated to IoT rain gauges, Doppler speed radar, or footfall density meters that sample local conditions every 15 seconds.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <span className="text-blue-700 font-bold block">2. Edge Rule Evaluation</span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      Programmatic logic evaluates boolean conditions (such as flow speed below 15 km/h or precipitation above 2mm) directly on Arteria edge players.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <span className="text-blue-700 font-bold block">3. Instant Asset Switch</span>
                    <p className="text-slate-600 leading-relaxed text-xs">
                      In under 350ms, the next ad loop displays the corresponding contextual creative asset, maximizing relevance and campaign conversions.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: INVENTORY MARKETPLACE */}
        {currentView === 'marketplace' && (
          <div className="flex-1 bg-slate-100 py-8 px-6">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Filter Controls Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-xl font-bold text-slate-900">Arterial DOOH Inventory Exchange</h1>
                    <p className="text-xs text-slate-500">Browse certified roadside spectaculars, transit arrays, and retail gantries</p>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-500 font-medium">Sorting:</span>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="bg-slate-50 border border-slate-300 rounded px-2.5 py-1 text-slate-800 text-xs font-medium focus:ring-1 focus:ring-blue-500 outline-none"
                    >
                      <option value="trafficDesc">Highest Traffic First</option>
                      <option value="rateAsc">Daily Rate (Low to High)</option>
                      <option value="rateDesc">Daily Rate (High to Low)</option>
                    </select>
                  </div>
                </div>

                {/* Filter Selector Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2 border-t border-slate-100 text-xs">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">Metropolitan Market</label>
                    <select
                      value={cityFilter}
                      onChange={(e) => setCityFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs font-medium focus:outline-none"
                    >
                      <option value="All">All Cities (Indonesia)</option>
                      <option value="Jakarta">Jakarta Corridor</option>
                      <option value="Surabaya">Surabaya CBD</option>
                      <option value="Bali">Bali (Denpasar/Seminyak)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">Environment Type</label>
                    <select
                      value={typeFilter}
                      onChange={(e) => setTypeFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs font-medium focus:outline-none"
                    >
                      <option value="All">All Formats</option>
                      <option value="Roadside Spectacular">Roadside Spectacular</option>
                      <option value="Transit Concourse">Transit Concourse</option>
                      <option value="Commercial Lifestyle">Commercial Lifestyle</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">Dynamic Trigger Capability</label>
                    <select
                      value={triggerFilter}
                      onChange={(e) => setTriggerFilter(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs font-medium focus:outline-none"
                    >
                      <option value="All">All Screens</option>
                      <option value="Meteorological">Meteorological (Rain/UV)</option>
                      <option value="Doppler">Doppler Speed Radar</option>
                      <option value="Time-parting">Time-parting Dayparts</option>
                      <option value="Audience Vision">Audience Vision Cohort</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-500 block mb-1">Min SES A Tier</label>
                    <select
                      value={minSesA}
                      onChange={(e) => setMinSesA(Number(e.target.value))}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-2.5 py-1.5 text-slate-800 text-xs font-medium focus:outline-none"
                    >
                      <option value={0}>Any SES Ratio</option>
                      <option value={40}>&ge; 40% SES A (Affluent)</option>
                      <option value={50}>&ge; 50% SES A (High Affluent)</option>
                      <option value={60}>&ge; 60% SES A (Ultra Prime)</option>
                    </select>
                  </div>
                </div>

                {/* Filter Summary Strip */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Displaying {filteredScreens.length} of {MOCK_SCREENS.length} arterial nodes</span>
                  {(cityFilter !== 'All' || typeFilter !== 'All' || minSesA > 0 || triggerFilter !== 'All') && (
                    <button
                      onClick={() => {
                        setCityFilter('All');
                        setTypeFilter('All');
                        setMinSesA(0);
                        setTriggerFilter('All');
                      }}
                      className="text-blue-600 hover:text-blue-800 underline font-semibold"
                    >
                      Reset All Filters
                    </button>
                  )}
                </div>
              </div>

              {/* Screens Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredScreens.map(screen => {
                  const plansContainingScreen = flightPlans.filter(p => p.screens.some(s => s.id === screen.id));
                  return (
                    <div key={screen.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:border-blue-400 transition-all flex flex-col justify-between">
                      <div>
                        <div className="h-48 relative bg-slate-100">
                          <img src={screen.image} alt={screen.name} className="w-full h-full object-cover" />
                          <div className="absolute top-3 left-3 bg-white/95 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-700 shadow-xs">
                            {screen.operator}
                          </div>
                          <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                            {screen.status}
                          </div>
                        </div>

                        <div className="p-5 space-y-3">
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{screen.city} &bull; {screen.hardware.orientation}</span>
                            <span className="font-semibold text-slate-700 tabular-nums">{screen.traffic.toLocaleString()} daily contacts</span>
                          </div>
                          
                          <h3 className="font-bold text-slate-900 text-base leading-snug">{screen.name}</h3>
                          <p className="text-xs text-slate-500 flex items-center space-x-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <span className="truncate">{screen.street}, {screen.city}</span>
                          </p>

                          {/* Telemetry Micro Badges */}
                          <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded border border-slate-200 text-xs">
                            <div>
                              <span className="text-slate-400 block text-[10px] uppercase font-semibold">SES A + B Tier</span>
                              <span className="font-bold text-slate-800 tabular-nums">{screen.ses.a + screen.ses.b}% Affluence</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block text-[10px] uppercase font-semibold">Ad Rotation</span>
                              <span className="font-bold text-blue-700">{screen.commercial.spot} / {screen.commercial.loop}</span>
                            </div>
                          </div>

                          {/* Dynamic Triggers List */}
                          <div className="space-y-1 pt-1">
                            <span className="text-[10px] text-slate-400 block uppercase font-bold">Enabled Dynamic Triggers:</span>
                            <div className="flex flex-wrap gap-1">
                              {screen.triggers.map(tr => (
                                <span key={tr} className="bg-amber-50 text-amber-900 border border-amber-200 text-xs px-2 py-0.5 rounded font-medium flex items-center space-x-1">
                                  <Zap className="w-2.5 h-2.5 text-amber-600" />
                                  <span>{tr}</span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-slate-400 block uppercase font-semibold">Base Media Rate</span>
                          <span className="text-xs font-bold text-slate-900 tabular-nums">{screen.price}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => {
                              if (isAuthenticated) {
                                setAllocatingScreen(screen);
                              } else {
                                setPostAuthRedirect('planner');
                                setIsAuthModalOpen(true);
                                setAuthError('Sign in with admin/login to allocate inventory into Flight Media Plans.');
                              }
                            }}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors flex items-center space-x-1 ${
                              plansContainingScreen.length > 0 
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100' 
                                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-xs'
                            }`}
                          >
                            <Plus className="w-3.5 h-3.5" />
                            <span>{plansContainingScreen.length > 0 ? `In ${plansContainingScreen.length} Plans` : 'Add'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredScreens.length === 0 && (
                <div className="bg-white border border-slate-200 rounded-xl p-12 text-center space-y-3">
                  <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-slate-600 text-sm font-medium">No screens match your selected criteria.</p>
                  <button 
                    onClick={() => {
                      setCityFilter('All');
                      setTypeFilter('All');
                      setMinSesA(0);
                      setTriggerFilter('All');
                    }}
                    className="px-4 py-2 bg-slate-900 text-white rounded text-xs font-semibold"
                  >
                    Clear Filter Filters
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

        {/* VIEW 3: SCREEN DETAIL & DYNAMIC TRIGGER SIMULATOR */}
        {currentView === 'detail' && selectedScreen && (
          <div className="flex-1 bg-slate-100 py-8 px-6">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Back navigation bar */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setCurrentView('marketplace')}
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-md shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Return to Marketplace</span>
                </button>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setAllocatingScreen(selectedScreen)}
                    className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md flex items-center space-x-1.5 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Allocate to Flight Plan</span>
                  </button>
                </div>
              </div>

              {/* Main Detail Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left 2 Columns: Media Preview & Dynamic Playbook */}
                <div className="lg:col-span-2 space-y-6">
                  
                  {/* Streetview Simulation Card */}
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                    <div className="h-80 relative bg-slate-900">
                      <img src={selectedScreen.mapViewUrl} alt={selectedScreen.name} className="w-full h-full object-cover opacity-90" />
                      
                      {/* Visual Overlay */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded border border-slate-200 text-xs shadow-md">
                        <span className="text-[10px] text-slate-500 block uppercase font-semibold">GIS Verification Coordinates</span>
                        <span className="font-bold text-slate-900">{selectedScreen.street}, {selectedScreen.postcode}</span>
                      </div>

                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <div className="bg-slate-900/90 text-white px-3 py-1.5 rounded text-xs">
                          Facing: <strong className="text-blue-400">{selectedScreen.context.facing}</strong>
                        </div>
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${selectedScreen.name}, ${selectedScreen.street}, ${selectedScreen.city}, Indonesia`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 bg-white/95 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 px-3 py-1.5 rounded text-xs font-semibold transition-all shadow-md"
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>Open in Google Maps</span>
                        </a>
                      </div>

                      {/* Display Simulation Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-slate-200 rounded-lg p-4 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
                        <div>
                          <span className="text-[10px] text-slate-500 block uppercase font-semibold">Audited Daily Footfall</span>
                          <span className="text-base font-bold text-slate-900 tabular-nums">{selectedScreen.traffic.toLocaleString()} Contacts / Day</span>
                        </div>
                        <div className="flex items-center space-x-4 border-t md:border-t-0 md:border-l border-slate-200 pt-2 md:pt-0 md:pl-4">
                          <div>
                            <span className="text-[10px] text-slate-500 block uppercase font-semibold">Avg Dwell Time</span>
                            <span className="font-bold text-slate-800">{selectedScreen.context.dwell}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-slate-400 block uppercase font-semibold">Base Loop</span>
                            <span className="font-bold text-blue-600">{selectedScreen.commercial.spot} spot / {selectedScreen.commercial.loop} loop</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tabs Navigation for Specs vs Triggers */}
                  <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
                    <div className="flex border-b border-slate-200 text-xs">
                      <button
                        onClick={() => setDetailTab('audience')}
                        className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all ${
                          detailTab === 'audience' ? 'border-blue-600 text-blue-700 bg-blue-50/40' : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Audience Telemetry
                      </button>
                      <button
                        onClick={() => setDetailTab('triggers')}
                        className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all flex items-center justify-center space-x-1.5 ${
                          detailTab === 'triggers' ? 'border-blue-600 text-blue-700 bg-blue-50/40' : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        <span>Dynamic Triggers & Brand Playbook</span>
                      </button>
                      <button
                        onClick={() => setDetailTab('specs')}
                        className={`flex-1 py-3 text-center font-semibold border-b-2 transition-all ${
                          detailTab === 'specs' ? 'border-blue-600 text-blue-700 bg-blue-50/40' : 'border-transparent text-slate-500 hover:text-slate-900'
                        }`}
                      >
                        Hardware & Formats
                      </button>
                    </div>

                    <div className="p-6">
                      
                      {/* TAB 1: AUDIENCE TELEMETRY */}
                      {detailTab === 'audience' && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Gender split */}
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg space-y-3">
                              <span className="text-xs font-bold text-slate-700 block uppercase">Gender Distribution</span>
                              <div className="flex h-3 rounded-full overflow-hidden bg-slate-200">
                                <div className="bg-blue-600" style={{ width: `${selectedScreen.gender.male}%` }}></div>
                                <div className="bg-rose-500" style={{ width: `${selectedScreen.gender.female}%` }}></div>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-blue-700 font-bold tabular-nums">Male ({selectedScreen.gender.male}%)</span>
                                <span className="text-rose-600 font-bold tabular-nums">Female ({selectedScreen.gender.female}%)</span>
                              </div>
                            </div>

                            {/* Generational Split */}
                            <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg space-y-3">
                              <span className="text-xs font-bold text-slate-700 block uppercase">Dominant Cohorts</span>
                              <div className="space-y-1.5 text-xs">
                                <div className="flex justify-between">
                                  <span className="text-slate-500">Millennials (28-43)</span>
                                  <span className="font-bold text-slate-800 tabular-nums">{selectedScreen.gen.millennial}%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-1.5">
                                  <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${selectedScreen.gen.millennial}%` }}></div>
                                </div>

                                <div className="flex justify-between pt-1">
                                  <span className="text-slate-500">Gen Z (16-27)</span>
                                  <span className="font-bold text-slate-800 tabular-nums">{selectedScreen.gen.genZ}%</span>
                                </div>
                                <div className="w-full bg-slate-200 rounded-full h-1.5">
                                  <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: `${selectedScreen.gen.genZ}%` }}></div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* SES Socio-Economic Breakdown */}
                          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-xs font-bold text-slate-700 uppercase">Socio-Economic Status (SES Affluence Index)</span>
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 tabular-nums">
                                {selectedScreen.ses.a + selectedScreen.ses.b}% Prime Upper SES (A & B)
                              </span>
                            </div>
                            <div className="grid grid-cols-4 gap-3 text-center pt-2">
                              <div className="p-2.5 bg-white border border-slate-200 rounded">
                                <span className="text-[10px] text-slate-500 block uppercase font-semibold">SES A (Upper)</span>
                                <span className="text-lg font-bold text-emerald-600 tabular-nums">{selectedScreen.ses.a}%</span>
                              </div>
                              <div className="p-2.5 bg-white border border-slate-200 rounded">
                                <span className="text-[10px] text-slate-500 block uppercase font-semibold">SES B (Mid Upper)</span>
                                <span className="text-lg font-bold text-blue-600 tabular-nums">{selectedScreen.ses.b}%</span>
                              </div>
                              <div className="p-2.5 bg-white border border-slate-200 rounded">
                                <span className="text-[10px] text-slate-500 block uppercase font-semibold">SES C (Middle)</span>
                                <span className="text-lg font-bold text-slate-700 tabular-nums">{selectedScreen.ses.c}%</span>
                              </div>
                              <div className="p-2.5 bg-white border border-slate-200 rounded">
                                <span className="text-[10px] text-slate-500 block uppercase font-semibold">SES D (Lower)</span>
                                <span className="text-lg font-bold text-slate-500 tabular-nums">{selectedScreen.ses.d}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 2: DYNAMIC TRIGGERS & PLAYBOOK */}
                      {detailTab === 'triggers' && (
                        <div className="space-y-6">
                          <div className="bg-amber-50/60 border border-amber-200 p-4 rounded-lg text-xs text-amber-900 leading-relaxed">
                            <span className="font-bold block mb-1">⚡ What are Dynamic Triggers?</span>
                            Dynamic Triggers allow advertisers to serve hyper-contextual creative copy automatically without manual ad-ops intervention. When local sensors detect specific physical events (downpour, gridlocks, peak rush), the screen executes conditional programmatic rules to display your pre-approved creative variant.
                          </div>

                          {/* Trigger Playbook Cards */}
                          <div className="space-y-4">
                            {selectedScreen.triggers.map(triggerName => {
                              const playbook = TRIGGER_PLAYBOOKS[triggerName] || {
                                desc: 'Configurable edge trigger sensors integrated directly into the display hardware.',
                                brandImpact: 'Automated creative rotation based on real-time external conditions.',
                                condition: 'Pre-set programmatic threshold'
                              };

                              return (
                                <div key={triggerName} className="bg-white border border-slate-200 rounded-lg p-4 space-y-2 shadow-xs">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                      <div className="w-6 h-6 rounded bg-amber-100 flex items-center justify-center text-amber-800">
                                        <Zap className="w-3.5 h-3.5" />
                                      </div>
                                      <span className="font-bold text-sm text-slate-900">{triggerName}</span>
                                    </div>
                                    <span className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200 font-medium">
                                      Rule: {playbook.condition}
                                    </span>
                                  </div>

                                  <p className="text-xs text-slate-600 leading-relaxed">
                                    <strong className="text-slate-800">Sensor Telemetry: </strong>
                                    {playbook.desc}
                                  </p>

                                  <div className="bg-blue-50/50 border border-blue-100 rounded p-2.5 text-xs text-blue-900">
                                    <span className="font-bold text-[11px] text-blue-700 block uppercase mb-0.5">What it Means for Brands:</span>
                                    {playbook.brandImpact}
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Interactive Simulation Sandbox */}
                          <div className="bg-slate-900 text-white rounded-lg p-5 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-emerald-400 uppercase flex items-center space-x-1.5 tracking-wide">
                                <Activity className="w-3.5 h-3.5" />
                                <span>Interactive Trigger Asset Switch Simulator</span>
                              </span>
                              <span className="text-[11px] text-slate-400 font-medium">Preview Brand Playout</span>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs">
                              <button
                                onClick={() => setSimulatedCondition('normal')}
                                className={`px-3 py-1.5 rounded transition-colors ${
                                  simulatedCondition === 'normal' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                              >
                                Clear Skies &bull; Normal Flow
                              </button>
                              <button
                                onClick={() => setSimulatedCondition('rain')}
                                className={`px-3 py-1.5 rounded transition-colors ${
                                  simulatedCondition === 'rain' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                              >
                                Downpour Rain Trigger (&gt; 2mm)
                              </button>
                              <button
                                onClick={() => setSimulatedCondition('traffic')}
                                className={`px-3 py-1.5 rounded transition-colors ${
                                  simulatedCondition === 'traffic' ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                }`}
                              >
                                Corridor Traffic Gridlock (&lt; 15 km/h)
                              </button>
                            </div>

                            {/* Simulated Billboard Output */}
                            <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg text-xs space-y-2">
                              <div className="flex justify-between text-slate-400 text-[11px] font-semibold">
                                <span>ACTIVE CREATIVE VARIANT:</span>
                                <span className="text-emerald-400 tabular-nums">RESPONSE LATENCY: 220ms</span>
                              </div>
                              {simulatedCondition === 'normal' && (
                                <div className="space-y-1">
                                  <span className="text-white font-bold text-sm block">"Refresh Your Daily Journey with Aura Drink"</span>
                                  <p className="text-slate-300 text-xs">Primary brand awareness message targeting fluid commuter traffic.</p>
                                </div>
                              )}
                              {simulatedCondition === 'rain' && (
                                <div className="space-y-1 text-sky-200">
                                  <span className="text-sky-300 font-bold text-sm block">"Caught in the Sudirman Rain? Hot Coffee at 50% Off via App"</span>
                                  <p className="text-slate-300 text-xs">Triggered by IoT rain telemetry. Immediate direct-response surge.</p>
                                </div>
                              )}
                              {simulatedCondition === 'traffic' && (
                                <div className="space-y-1 text-amber-200">
                                  <span className="text-amber-300 font-bold text-sm block">"Sudirman Jammed? Scan to Order Dinner Ahead at SCBD Piazza"</span>
                                  <p className="text-slate-300 text-xs">Triggered by Doppler radar (&lt; 12 km/h). Long dwell-time QR code creative.</p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 3: HARDWARE & SPECS */}
                      {detailTab === 'specs' && (
                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Screen Resolution</span>
                            <span className="font-bold text-slate-800">{selectedScreen.resolution}</span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Physical Display Dimensions</span>
                            <span className="font-bold text-slate-800">{selectedScreen.hardware.size}</span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                            <span className="text-[10px] text-slate-500 uppercase block font-semibold">LED Pixel Pitch</span>
                            <span className="font-bold text-slate-800">{selectedScreen.hardware.tech}</span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded">
                            <span className="text-[10px] text-slate-500 uppercase block font-semibold">Rotation Loop Duration</span>
                            <span className="font-bold text-blue-700">{selectedScreen.commercial.loop} loop ({selectedScreen.commercial.spot} spot)</span>
                          </div>
                          <div className="col-span-2 p-3 bg-slate-50 border border-slate-200 rounded">
                            <span className="text-[10px] text-slate-500 uppercase block mb-1 font-semibold">Supported Dynamic Creative Formats</span>
                            <div className="flex flex-wrap gap-1.5">
                              {selectedScreen.hardware.formats.map(fmt => (
                                <span key={fmt} className="bg-white border border-slate-300 text-slate-800 px-2 py-0.5 rounded text-xs font-semibold">
                                  {fmt}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                </div>

                {/* Right Column: Screen Commercial Snapshot & Quick Booking */}
                <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
                    <div className="border-b border-slate-100 pb-4">
                      <span className="text-[10px] text-slate-500 uppercase block font-bold">Inventory Commercial Rate</span>
                      <span className="text-2xl font-black text-slate-900 tabular-nums">{selectedScreen.price}</span>
                      <span className="text-xs text-slate-500 block mt-0.5">Fixed daily rate &bull; Est eCPM: Rp 42.000</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Concession Operator</span>
                        <span className="font-bold text-slate-800">{selectedScreen.operator}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Hardware ID</span>
                        <span className="font-mono text-xs font-bold text-slate-800">{selectedScreen.id}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-slate-100">
                        <span className="text-slate-500">Hourly Rotations</span>
                        <span className="font-bold text-blue-600 tabular-nums">{selectedScreen.commercial.spotsPerHour} slots / hour</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-500">Proof-of-Play Audit</span>
                        <span className="font-bold text-emerald-600">Camera Telemetry API</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setAllocatingScreen(selectedScreen)}
                      className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-md transition-all shadow-sm flex items-center justify-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Allocate Screen to Media Plan</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* VIEW 4: FLIGHT MEDIA PLANNER (DEDICATED PAGE) */}
        {currentView === 'planner' && (
          <div className="flex-1 bg-slate-100 py-8 px-6">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Planner Sub-Nav / Header */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center space-x-3 mb-1">
                    <h1 className="text-2xl font-black text-slate-900">Flight Media Planner</h1>
                    <span className="text-xs bg-blue-50 border border-blue-200 text-blue-700 font-semibold px-2.5 py-0.5 rounded">
                      {flightPlans.length} Total Plans
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Manage campaign schedules, request availability, audit live telemetrics, and track reservation statuses
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setPlannerSubView(plannerSubView === 'list' ? 'detail' : 'list')}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-md transition-colors"
                  >
                    {plannerSubView === 'list' ? 'Switch to Active Plan Editor' : 'Back to Plans Summary Table'}
                  </button>
                  
                  <button
                    onClick={() => {
                      const newId = `FLP-2026-${Math.floor(100 + Math.random() * 900)}`;
                      const newPlan = {
                        id: newId,
                        campaignTitle: `Flight Plan ${flightPlans.length + 1}`,
                        clientName: 'Direct Brand Account',
                        agencyDesk: 'Arteria Enterprise Desk',
                        status: 'REQUESTED' as const,
                        goLiveDate: '2026-10-15',
                        durationDays: 14,
                        screens: [MOCK_SCREENS[0]!],
                        requestedAt: new Date().toISOString().replace('T', ' ').slice(0, 16) + ' WIB',
                        bookedAt: null,
                        invoicedAt: null,
                        paidAt: null
                      };
                      setFlightPlans(prev => [newPlan, ...prev]);
                      setActivePlanId(newId);
                      setPlannerSubView('detail');
                      showToast(`Created new flight plan #${newId}`);
                    }}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md flex items-center space-x-1.5 shadow-xs"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create New Flight Plan</span>
                  </button>
                </div>
              </div>

              {/* SUBVIEW: SUMMARY TABLE OF ALL FLIGHT PLANS */}
              {plannerSubView === 'list' && (
                <div className="space-y-6">
                  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                    <div className="p-5 border-b border-slate-200 flex justify-between items-center">
                      <span className="font-bold text-sm text-slate-900">Campaign Flight Plans Portfolio</span>
                      <span className="text-xs text-slate-500 font-medium">Lifecycle: Requested &rarr; Booked &rarr; In Progress &rarr; Paid</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs divide-y divide-slate-200">
                        <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[11px] tracking-wider">
                          <tr>
                            <th className="px-6 py-3.5">Campaign Title & Reference</th>
                            <th className="px-6 py-3.5">Client Account</th>
                            <th className="px-6 py-3.5">Date to Go Live</th>
                            <th className="px-6 py-3.5">Duration</th>
                            <th className="px-6 py-3.5">Screen Allocation</th>
                            <th className="px-6 py-3.5">Total Investment</th>
                            <th className="px-6 py-3.5">Status</th>
                            <th className="px-6 py-3.5 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                          {flightPlans.map(plan => {
                            const subtotal = plan.screens.reduce((acc, s) => acc + s.dailyRate, 0) * plan.durationDays;
                            const totalWithTax = Math.round(subtotal * 1.11);
                            const isPaid = plan.status === 'PAID';
                            const isCancelled = plan.status === 'CANCELLED';
                            const canEditOrCancel = !isPaid && !isCancelled;

                            return (
                              <tr key={plan.id} className="hover:bg-slate-50/80 transition-colors">
                                <td className="px-6 py-4">
                                  <span className="font-bold text-slate-900 text-sm block">{plan.campaignTitle}</span>
                                  <span className="text-xs text-slate-400 font-mono">ID: {plan.id}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-700">
                                  <span className="block font-medium">{plan.clientName}</span>
                                  <span className="text-xs text-slate-400">{plan.agencyDesk}</span>
                                </td>
                                <td className="px-6 py-4 text-slate-900 font-semibold tabular-nums">
                                  {plan.goLiveDate}
                                </td>
                                <td className="px-6 py-4 text-slate-700 tabular-nums">
                                  {plan.durationDays} Days
                                </td>
                                <td className="px-6 py-4">
                                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-xs font-semibold">
                                    {plan.screens.length} Screens
                                  </span>
                                  <div className="text-xs text-slate-400 truncate max-w-xs mt-1">
                                    {plan.screens.map(s => s.name).join(', ')}
                                  </div>
                                </td>
                                <td className="px-6 py-4 font-bold text-slate-900 tabular-nums">
                                  Rp {totalWithTax.toLocaleString('id-ID')}
                                </td>
                                <td className="px-6 py-4">
                                  {plan.status === 'REQUESTED' && (
                                    <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded text-xs font-semibold">
                                      Requested
                                    </span>
                                  )}
                                  {plan.status === 'BOOKED' && (
                                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-1 rounded text-xs font-semibold">
                                      Booked
                                    </span>
                                  )}
                                  {plan.status === 'IN_PROGRESS' && (
                                    <span className="bg-purple-50 text-purple-700 border border-purple-200 px-2.5 py-1 rounded text-xs font-semibold">
                                      In Progress
                                    </span>
                                  )}
                                  {plan.status === 'PAID' && (
                                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-300 px-2.5 py-1 rounded text-xs font-semibold flex items-center w-fit space-x-1">
                                      <Lock className="w-3 h-3" />
                                      <span>Paid & Locked</span>
                                    </span>
                                  )}
                                  {plan.status === 'CANCELLED' && (
                                    <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2.5 py-1 rounded text-xs font-semibold flex items-center w-fit space-x-1">
                                      <Ban className="w-3 h-3" />
                                      <span>Cancelled</span>
                                    </span>
                                  )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                  <div className="flex items-center justify-end space-x-1.5">
                                    {/* View Button */}
                                    <button
                                      onClick={() => {
                                        setActivePlanId(plan.id);
                                        setPlannerSubView('detail');
                                      }}
                                      className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded text-xs transition-colors flex items-center space-x-1"
                                      title="View plan details"
                                    >
                                      <Eye className="w-3.5 h-3.5" />
                                      <span>View</span>
                                    </button>

                                    {/* Edit Button - Enabled before Paid */}
                                    {canEditOrCancel && (
                                      <button
                                        onClick={() => {
                                          setActivePlanId(plan.id);
                                          setPlannerSubView('detail');
                                        }}
                                        className="px-2.5 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded text-xs transition-colors flex items-center space-x-1"
                                        title="Edit dates, title, or screens"
                                      >
                                        <Edit3 className="w-3.5 h-3.5" />
                                        <span>Edit</span>
                                      </button>
                                    )}

                                    {/* Cancel Button - Enabled before Paid */}
                                    {canEditOrCancel && (
                                      <button
                                        onClick={() => setPlanToCancel(plan.id)}
                                        className="px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold rounded text-xs transition-colors flex items-center space-x-1"
                                        title="Cancel flight plan"
                                      >
                                        <Ban className="w-3.5 h-3.5" />
                                        <span>Cancel</span>
                                      </button>
                                    )}

                                    {/* Reopen Button if Cancelled */}
                                    {isCancelled && (
                                      <button
                                        onClick={() => handleReactivatePlan(plan.id)}
                                        className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold rounded text-xs transition-colors flex items-center space-x-1"
                                        title="Reopen cancelled flight plan"
                                      >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                        <span>Reopen</span>
                                      </button>
                                    )}

                                    {/* Paid Indicator */}
                                    {isPaid && (
                                      <span className="text-[11px] text-slate-400 font-medium px-1 flex items-center space-x-1">
                                        <Lock className="w-3 h-3 text-slate-400" />
                                        <span>Audited</span>
                                      </span>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}

              {/* SUBVIEW: ACTIVE PLAN DETAIL & LIFECYCLE CONTROLLER */}
              {plannerSubView === 'detail' && (() => {
                const isPaid = activePlan.status === 'PAID';
                const isCancelled = activePlan.status === 'CANCELLED';
                const canEditOrCancel = !isPaid && !isCancelled;

                return (
                <div className="space-y-6">
                  
                  {/* Status Banner when Paid or Cancelled */}
                  {isPaid && (
                    <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-4 flex items-center justify-between text-xs text-emerald-900 shadow-xs">
                      <div className="flex items-center space-x-2.5">
                        <Lock className="w-4 h-4 text-emerald-700 shrink-0" />
                        <div>
                          <strong className="block font-bold">Plan Locked (Paid & Confirmed)</strong>
                          <span>This flight plan has been settled. Core schedule, corridor allocations, and commercials are locked for audited playout integrity.</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setCurrentView('report')}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-semibold whitespace-nowrap"
                      >
                        Inspect Audit Report
                      </button>
                    </div>
                  )}

                  {isCancelled && (
                    <div className="bg-rose-50 border border-rose-300 rounded-xl p-4 flex items-center justify-between text-xs text-rose-900 shadow-xs">
                      <div className="flex items-center space-x-2.5">
                        <Ban className="w-4 h-4 text-rose-700 shrink-0" />
                        <div>
                          <strong className="block font-bold">Flight Plan Cancelled</strong>
                          <span>This flight plan was cancelled prior to payment. Corridor reservations have been released back into marketplace inventory.</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleReactivatePlan(activePlan.id)}
                        className="px-3 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded font-semibold whitespace-nowrap flex items-center space-x-1"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Reactivate Plan</span>
                      </button>
                    </div>
                  )}

                  {/* Active Plan Selector & Status Stepper Banner */}
                  <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-5">
                    
                    {/* Top row: Campaign naming, quick switcher and action buttons */}
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-200 pb-5">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">ACTIVE FLIGHT ORDER: #{activePlan.id}</span>
                          {canEditOrCancel && (
                            <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-1.5 py-0.2 rounded font-semibold">
                              Editable
                            </span>
                          )}
                        </div>
                        <div className="flex items-center space-x-3">
                          <input
                            type="text"
                            value={activePlan.campaignTitle}
                            disabled={!canEditOrCancel}
                            onChange={(e) => {
                              const val = e.target.value;
                              setFlightPlans(prev => prev.map(p => p.id === activePlan.id ? { ...p, campaignTitle: val } : p));
                            }}
                            className={`text-xl font-black text-slate-900 bg-transparent border-b pb-0.5 outline-none ${
                              canEditOrCancel 
                                ? 'border-dashed border-slate-300 focus:border-blue-500' 
                                : 'border-transparent cursor-not-allowed text-slate-700'
                            }`}
                            placeholder="Enter Campaign Title..."
                          />
                        </div>
                        <p className="text-xs text-slate-500">
                          Client: <strong className="text-slate-800">{activePlan.clientName}</strong> &bull; Desk: <strong className="text-slate-800">{activePlan.agencyDesk}</strong>
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-500 font-medium">Switch Plan:</span>
                          <select
                            value={activePlan.id}
                            onChange={(e) => setActivePlanId(e.target.value)}
                            className="bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 font-semibold focus:outline-none"
                          >
                            {flightPlans.map(p => (
                              <option key={p.id} value={p.id}>
                                {p.campaignTitle} ({p.status})
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Cancel Action Button (only before Paid) */}
                        {canEditOrCancel && (
                          <button
                            onClick={() => setPlanToCancel(activePlan.id)}
                            className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded font-semibold flex items-center space-x-1 transition-colors"
                          >
                            <Ban className="w-3.5 h-3.5" />
                            <span>Cancel Plan</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* 4-Step Lifecycle Stepper */}
                    <div className="space-y-2">
                      <span className="text-[10px] text-slate-500 uppercase block font-bold tracking-wider">
                        Reservation Lifecycle Journey:
                      </span>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
                        
                        {/* Step 1: Requested */}
                        <div className={`p-3 rounded-lg border ${
                          activePlan.status === 'REQUESTED' 
                            ? 'bg-amber-50 border-amber-300 text-amber-900' 
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs">1. REQUESTED</span>
                            {activePlan.status !== 'REQUESTED' && activePlan.status !== 'CANCELLED' && (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            )}
                          </div>
                          <span className="text-xs text-slate-500 block">User submits corridor query</span>
                          {activePlan.requestedAt && (
                            <span className="text-[11px] text-slate-400 block mt-1">{activePlan.requestedAt}</span>
                          )}
                        </div>

                        {/* Step 2: Booked */}
                        <div className={`p-3 rounded-lg border ${
                          activePlan.status === 'BOOKED' 
                            ? 'bg-blue-50 border-blue-300 text-blue-900' 
                            : activePlan.status === 'IN_PROGRESS' || activePlan.status === 'PAID'
                              ? 'bg-slate-50 border-slate-200 text-slate-600'
                              : 'bg-slate-50/50 border-slate-100 text-slate-400'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs">2. BOOKED</span>
                            {(activePlan.status === 'IN_PROGRESS' || activePlan.status === 'PAID') && (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            )}
                          </div>
                          <span className="text-xs text-slate-500 block">Arteria desk confirms inventory</span>
                          {activePlan.bookedAt && (
                            <span className="text-[11px] text-slate-400 block mt-1">{activePlan.bookedAt}</span>
                          )}
                        </div>

                        {/* Step 3: In Progress */}
                        <div className={`p-3 rounded-lg border ${
                          activePlan.status === 'IN_PROGRESS' 
                            ? 'bg-purple-50 border-purple-300 text-purple-900' 
                            : activePlan.status === 'PAID'
                              ? 'bg-slate-50 border-slate-200 text-slate-600'
                              : 'bg-slate-50/50 border-slate-100 text-slate-400'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs">3. IN PROGRESS</span>
                            {activePlan.status === 'PAID' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                          </div>
                          <span className="text-xs text-slate-500 block">Pro-Forma invoice downloaded</span>
                          {activePlan.invoicedAt && (
                            <span className="text-[11px] text-slate-400 block mt-1">{activePlan.invoicedAt}</span>
                          )}
                        </div>

                        {/* Step 4: Paid */}
                        <div className={`p-3 rounded-lg border ${
                          activePlan.status === 'PAID' 
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-900' 
                            : 'bg-slate-50/50 border-slate-100 text-slate-400'
                        }`}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-bold text-xs">4. PAID</span>
                            {activePlan.status === 'PAID' && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                          </div>
                          <span className="text-xs text-slate-500 block">Settled & playout authorized</span>
                          {activePlan.paidAt && (
                            <span className="text-[11px] text-slate-400 block mt-1">{activePlan.paidAt}</span>
                          )}
                        </div>

                      </div>
                    </div>

                    {/* Admin Desk Simulator Switcher for Demo */}
                    <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
                      <div className="flex items-center space-x-2 text-slate-600 font-medium">
                        <Settings className="w-4 h-4 text-slate-500" />
                        <span><strong>Arteria Operations Desk Simulator:</strong></span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          onClick={() => handleUpdatePlanStatus(activePlan.id, 'REQUESTED')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${
                            activePlan.status === 'REQUESTED' ? 'bg-amber-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                          }`}
                        >
                          Mark Requested
                        </button>
                        <button
                          onClick={() => handleUpdatePlanStatus(activePlan.id, 'BOOKED')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${
                            activePlan.status === 'BOOKED' ? 'bg-blue-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                          }`}
                        >
                          Admin Approve &rarr; Booked
                        </button>
                        <button
                          onClick={() => handleUpdatePlanStatus(activePlan.id, 'IN_PROGRESS')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${
                            activePlan.status === 'IN_PROGRESS' ? 'bg-purple-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                          }`}
                        >
                          Mark In Progress
                        </button>
                        <button
                          onClick={() => handleUpdatePlanStatus(activePlan.id, 'PAID')}
                          className={`px-2.5 py-1 rounded text-xs font-semibold ${
                            activePlan.status === 'PAID' ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-300 text-slate-700'
                          }`}
                        >
                          Confirm Paid
                        </button>
                        {canEditOrCancel && (
                          <button
                            onClick={() => handleCancelPlan(activePlan.id)}
                            className="px-2.5 py-1 rounded text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-300 hover:bg-rose-100"
                          >
                            Cancel Plan
                          </button>
                        )}
                      </div>
                    </div>

                  </div>

                  {/* Flight Timing & Screen Configuration */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
                    {/* Left 2 Cols: Timing & Screens List */}
                    <div className="lg:col-span-2 space-y-6">
                      
                      {/* Date to Go Live & Duration Config */}
                      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Flight Timing & Broadcast Window</span>
                            {!canEditOrCancel && (
                              <span className="text-[10px] text-slate-400 font-medium flex items-center">
                                <Lock className="w-3 h-3 mr-1" /> Locked
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-slate-500 font-medium tabular-nums">Calculated End: {activePlanEndDate}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                          <div>
                            <label className="text-[11px] text-slate-500 block mb-1 font-bold">Date to Go Live:</label>
                            <input
                              type="date"
                              disabled={!canEditOrCancel}
                              value={activePlan.goLiveDate}
                              onChange={(e) => {
                                const val = e.target.value;
                                setFlightPlans(prev => prev.map(p => p.id === activePlan.id ? { ...p, goLiveDate: val } : p));
                              }}
                              className={`w-full bg-slate-50 border rounded px-3 py-2 text-slate-900 font-semibold focus:outline-none ${
                                canEditOrCancel ? 'border-slate-300' : 'border-slate-200 bg-slate-100/70 cursor-not-allowed text-slate-500'
                              }`}
                            />
                          </div>

                          <div>
                            <label className="text-[11px] text-slate-500 block mb-1 font-bold">Flight Duration Tenure:</label>
                            <div className="grid grid-cols-4 gap-2">
                              {[7, 14, 30, 60].map(days => (
                                <button
                                  key={days}
                                  disabled={!canEditOrCancel}
                                  onClick={() => {
                                    setFlightPlans(prev => prev.map(p => p.id === activePlan.id ? { ...p, durationDays: days } : p));
                                  }}
                                  className={`py-2 text-center rounded-md font-semibold border transition-colors ${
                                    activePlan.durationDays === days 
                                      ? 'bg-blue-600 text-white border-blue-600' 
                                      : canEditOrCancel
                                        ? 'bg-slate-50 border-slate-300 text-slate-700 hover:bg-slate-100'
                                        : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                                  }`}
                                >
                                  {days} Days
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Allocated Screens List */}
                      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            Allocated Screens in this Flight ({activePlan.screens.length})
                          </span>
                          {canEditOrCancel && (
                            <button
                              onClick={() => setCurrentView('marketplace')}
                              className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add More Screens from Marketplace</span>
                            </button>
                          )}
                        </div>

                        <div className="space-y-3">
                          {activePlan.screens.map(screen => (
                            <div key={screen.id} className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex items-center space-x-3">
                                <img src={screen.image} alt={screen.name} className="w-14 h-14 rounded object-cover border border-slate-200" />
                                <div>
                                  <span className="font-bold text-slate-900 text-sm block">{screen.name}</span>
                                  <span className="text-xs text-slate-500 block">{screen.street}, {screen.city}</span>
                                  <span className="text-xs text-blue-600 block mt-0.5 font-medium">{screen.commercial.spot} spot / {screen.commercial.loop} loop</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-6">
                                <div className="text-right">
                                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Daily Media Rate</span>
                                  <span className="text-xs font-bold text-slate-900 tabular-nums">{screen.price}</span>
                                </div>

                                {canEditOrCancel ? (
                                  <button
                                    onClick={() => handleToggleScreenInPlan(activePlan.id, screen)}
                                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                                    title="Remove screen from plan"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <span className="text-[11px] text-slate-400 italic">Locked</span>
                                )}
                              </div>
                            </div>
                          ))}

                          {activePlan.screens.length === 0 && (
                            <div className="p-8 text-center border-2 border-dashed border-slate-200 rounded-lg text-xs text-slate-500 space-y-2">
                              <p>No screens currently allocated to this flight media plan.</p>
                              {canEditOrCancel && (
                                <button
                                  onClick={() => setCurrentView('marketplace')}
                                  className="px-4 py-1.5 bg-blue-600 text-white rounded font-semibold hover:bg-blue-500"
                                >
                                  Browse Inventory Marketplace
                                </button>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Audience & Telemetrics Aggregation */}
                      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">Aggregated Flight Telemetrics</span>
                          <span className="text-xs text-slate-500 font-medium">Anonymous Geo-Analytics</span>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <span className="text-[10px] text-slate-500 block uppercase font-semibold">Daily Footfall Contacts</span>
                            <span className="text-base font-bold text-slate-900 tabular-nums">
                              {activePlan.screens.reduce((a, s) => a + s.traffic, 0).toLocaleString()}
                            </span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <span className="text-[10px] text-slate-500 block uppercase font-semibold">Total Flight Impressions</span>
                            <span className="text-base font-bold text-blue-600 tabular-nums">
                              {activePlanImpressions.toLocaleString()}
                            </span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <span className="text-[10px] text-slate-500 block uppercase font-semibold">Average SES A + B</span>
                            <span className="text-base font-bold text-emerald-600 tabular-nums">
                              {activePlan.screens.length > 0 
                                ? Math.round(activePlan.screens.reduce((a, s) => a + s.ses.a + s.ses.b, 0) / activePlan.screens.length)
                                : 0}%
                            </span>
                          </div>
                          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                            <span className="text-[10px] text-slate-500 block uppercase font-semibold">Blended eCPM</span>
                            <span className="text-base font-bold text-slate-800 tabular-nums">
                              Rp 44.500
                            </span>
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Right Col: Commercial Pricing & Lifecycle Actions */}
                    <div className="space-y-6">
                      
                      {/* Financial Investment Ledger */}
                      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
                        <span className="text-xs font-bold text-slate-900 uppercase block border-b border-slate-100 pb-3 tracking-wide">
                          Media Investment Ledger
                        </span>

                        <div className="space-y-2.5 text-xs">
                          <div className="flex justify-between text-slate-600">
                            <span>Corridor Screens:</span>
                            <span className="font-semibold text-slate-800">{activePlan.screens.length} screens</span>
                          </div>
                          <div className="flex justify-between text-slate-600">
                            <span>Combined Daily Rate:</span>
                            <span className="font-bold text-slate-800 tabular-nums">Rp {activePlanDailyRate.toLocaleString('id-ID')}</span>
                          </div>
                          <div className="flex justify-between text-slate-600">
                            <span>Flight Duration:</span>
                            <span className="font-semibold text-slate-800 tabular-nums">{activePlan.durationDays} Days</span>
                          </div>
                          <div className="flex justify-between text-slate-600 pt-2 border-t border-slate-100">
                            <span>Flight Media Subtotal:</span>
                            <span className="font-bold text-slate-900 tabular-nums">Rp {activePlanSubtotal.toLocaleString('id-ID')}</span>
                          </div>
                          <div className="flex justify-between text-slate-500">
                            <span>Indonesian VAT (PPN 11%):</span>
                            <span className="tabular-nums">Rp {activePlanVAT.toLocaleString('id-ID')}</span>
                          </div>
                          <div className="flex justify-between text-slate-900 font-bold text-sm pt-3 border-t border-slate-200">
                            <span>Total Media Investment:</span>
                            <span className="text-blue-600 tabular-nums">Rp {activePlanTotal.toLocaleString('id-ID')}</span>
                          </div>
                        </div>

                        {/* Lifecycle Action Buttons according to user journey */}
                        <div className="pt-4 border-t border-slate-200 space-y-2.5">
                          
                          {/* Step 1 button */}
                          {activePlan.status === 'REQUESTED' && (
                            <div className="space-y-2">
                              <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg text-xs text-amber-900">
                                <span className="font-bold block">Status: Availability Requested</span>
                                Awaiting Arteria inventory clearance & corridor slot confirmation.
                              </div>
                              <button
                                onClick={() => handleUpdatePlanStatus(activePlan.id, 'BOOKED')}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-md transition-colors shadow-xs"
                              >
                                [Simulate Admin Clearance &rarr; Booked]
                              </button>
                              <button
                                onClick={() => setPlanToCancel(activePlan.id)}
                                className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs rounded-md transition-colors border border-rose-200"
                              >
                                Cancel Availability Request
                              </button>
                            </div>
                          )}

                          {/* Step 2 button */}
                          {activePlan.status === 'BOOKED' && (
                            <div className="space-y-2">
                              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg text-xs text-blue-900">
                                <span className="font-bold block">Status: Inventory Booked</span>
                                Screen slots reserved. Download the official tax invoice to transition to in-progress.
                              </div>
                              <button
                                onClick={() => handleUpdatePlanStatus(activePlan.id, 'IN_PROGRESS')}
                                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs rounded-md flex items-center justify-center space-x-2 transition-colors shadow-xs"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download Tax Invoice &rarr; In Progress</span>
                              </button>
                              <button
                                onClick={() => setPlanToCancel(activePlan.id)}
                                className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs rounded-md transition-colors border border-rose-200"
                              >
                                Cancel Reserved Booking
                              </button>
                            </div>
                          )}

                          {/* Step 3 button */}
                          {activePlan.status === 'IN_PROGRESS' && (
                            <div className="space-y-2">
                              <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg text-xs text-purple-900">
                                <span className="font-bold block">Status: In Progress</span>
                                Pro-Forma Invoice issued. Settle bank payment to confirm broadcasting playout.
                              </div>
                              <button
                                onClick={() => handleUpdatePlanStatus(activePlan.id, 'PAID')}
                                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-md flex items-center justify-center space-x-2 transition-colors shadow-xs"
                              >
                                <CheckCircle2 className="w-4 h-4" />
                                <span>Confirm Payment & Settle &rarr; Paid</span>
                              </button>
                              <button
                                onClick={() => setPlanToCancel(activePlan.id)}
                                className="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs rounded-md transition-colors border border-rose-200"
                              >
                                Cancel In-Progress Order
                              </button>
                            </div>
                          )}

                          {/* Step 4 button */}
                          {activePlan.status === 'PAID' && (
                            <div className="space-y-2">
                              <div className="bg-emerald-50 border border-emerald-300 p-3 rounded-lg text-xs text-emerald-900">
                                <span className="font-bold block flex items-center">
                                  <Lock className="w-3.5 h-3.5 mr-1" />
                                  <span>Status: Fully Paid & Authorized</span>
                                </span>
                                Broadcast slots locked. Verified camera and telemetry playout enabled.
                              </div>
                              <button
                                onClick={() => setCurrentView('report')}
                                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-md flex items-center justify-center space-x-2 transition-colors"
                              >
                                <span>View Verified Playout Report</span>
                              </button>
                            </div>
                          )}

                          {/* Cancelled state button */}
                          {activePlan.status === 'CANCELLED' && (
                            <div className="space-y-2">
                              <div className="bg-rose-50 border border-rose-200 p-3 rounded-lg text-xs text-rose-900">
                                <span className="font-bold block">Status: Cancelled</span>
                                This flight plan has been cancelled and is inactive.
                              </div>
                              <button
                                onClick={() => handleReactivatePlan(activePlan.id)}
                                className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs rounded-md flex items-center justify-center space-x-1.5 transition-colors"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Reopen Plan as Requested</span>
                              </button>
                            </div>
                          )}

                          {canEditOrCancel && (
                            <button
                              onClick={handleSaveActivePlan}
                              className="w-full py-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs rounded-md transition-colors"
                            >
                              Save Plan Changes
                            </button>
                          )}
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
                );
              })()}

            </div>
          </div>
        )}

        {/* VIEW 5: CAMPAIGN DELIVERIES */}
        {currentView === 'campaigns' && (
          <div className="flex-1 bg-slate-100 py-8 px-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Campaign Deliveries</h1>
                  <p className="text-xs text-slate-500">Real-time status of active, scheduled, and completed OOH broadcast flights</p>
                </div>
                <button
                  onClick={() => {
                    setCurrentView('planner');
                    setPlannerSubView('list');
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md shadow-xs"
                >
                  Open Flight Media Planner
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {campaigns.map(camp => (
                  <div key={camp.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-slate-300 transition-all">
                    <div className="space-y-1.5">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold">{camp.id}</span>
                        <span className={`text-xs px-2 py-0.5 rounded font-semibold ${
                          camp.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                          {camp.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{camp.name}</h3>
                      <p className="text-xs text-slate-500">
                        {camp.targetCity} Corridor &bull; Broadcast Window: {camp.startDate} to {camp.endDate}
                      </p>
                    </div>

                    <div className="flex items-center space-x-8 text-xs">
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Allocated Screens</span>
                        <span className="font-bold text-slate-900 text-sm">{camp.screensCount} Screens</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Delivered Contacts</span>
                        <span className="font-bold text-blue-600 text-sm tabular-nums">{camp.impressions}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 block uppercase font-semibold">Invested</span>
                        <span className="font-bold text-slate-900 text-sm tabular-nums">{camp.spent}</span>
                      </div>

                      <button
                        onClick={() => {
                          setActiveReport(camp);
                          setReportDateFrom(camp.startDate);
                          setReportDateTo(camp.endDate);
                          setCurrentView('report');
                        }}
                        className="px-3.5 py-2 bg-white hover:bg-blue-600 hover:text-white border border-slate-300 hover:border-blue-600 text-blue-600 text-xs font-semibold rounded-md flex items-center space-x-1.5 transition-all shadow-xs"
                      >
                        <span>View Report</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW 6: VIEW REPORT */}
        {currentView === 'report' && (() => {
          const totalScreens = activeReport.screens.length;
          const combinedDailyTraffic = activeReport.screens.reduce((acc, s) => acc + s.traffic, 0);
          const combinedDailyRate = activeReport.screens.reduce((acc, s) => acc + s.dailyRate, 0);
          const avgMale = Math.round(activeReport.screens.reduce((acc, s) => acc + s.gender.male, 0) / (totalScreens || 1));
          const avgFemale = 100 - avgMale;
          const avgSesA = Math.round(activeReport.screens.reduce((acc, s) => acc + s.ses.a, 0) / (totalScreens || 1));
          const avgSesB = Math.round(activeReport.screens.reduce((acc, s) => acc + s.ses.b, 0) / (totalScreens || 1));
          const avgSesC = Math.round(activeReport.screens.reduce((acc, s) => acc + s.ses.c, 0) / (totalScreens || 1));
          const avgSesD = Math.max(0, 100 - (avgSesA + avgSesB + avgSesC));
          const avgGenZ = Math.round(activeReport.screens.reduce((acc, s) => acc + s.gen.genZ, 0) / (totalScreens || 1));
          const avgMillennial = Math.round(activeReport.screens.reduce((acc, s) => acc + s.gen.millennial, 0) / (totalScreens || 1));
          const avgGenX = Math.round(activeReport.screens.reduce((acc, s) => acc + s.gen.genX, 0) / (totalScreens || 1));
          const avgBoomer = Math.max(0, 100 - (avgGenZ + avgMillennial + avgGenX));
          const combinedSpotsPerHour = activeReport.screens.reduce((acc, s) => acc + s.commercial.spotsPerHour, 0);

          // Calculate audited days in the selected "From" -> "To" window
          const reportDaysCount = (() => {
            try {
              const fromTime = new Date(reportDateFrom).getTime();
              const toTime = new Date(reportDateTo).getTime();
              if (isNaN(fromTime) || isNaN(toTime)) return 30;
              const days = Math.round((toTime - fromTime) / (1000 * 60 * 60 * 24)) + 1;
              return Math.max(1, days);
            } catch {
              return 30;
            }
          })();

          // Contacts calculated for the audited date range
          const auditedPeriodImpressions = Math.round(combinedDailyTraffic * 0.28 * reportDaysCount);

          return (
            <div className="flex-1 bg-slate-100 py-8 px-6">
              <div className="max-w-7xl mx-auto space-y-6">
                
                {/* Report Header */}
                <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center space-x-2 text-xs text-slate-500 mb-1">
                      <span className="font-semibold text-slate-700">Audit Certified Playout Report</span>
                      <span>&bull;</span>
                      <span className="text-emerald-600 font-semibold flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        100% Verified Telemetry & Proof-of-Play
                      </span>
                    </div>
                    <h1 className="text-2xl font-black text-slate-900">{activeReport.name}</h1>
                    <p className="text-xs text-slate-500">
                      Campaign Ref: <strong className="text-slate-800 font-mono">{activeReport.id}</strong> &bull; Region: <strong className="text-slate-800">{activeReport.targetCity}</strong> &bull; Flight Window: {activeReport.startDate} to {activeReport.endDate}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <select
                      value={activeReport.id}
                      onChange={(e) => {
                        const found = campaigns.find(c => c.id === e.target.value);
                        if (found) {
                          setActiveReport(found);
                          setReportDateFrom(found.startDate);
                          setReportDateTo(found.endDate);
                        }
                      }}
                      className="bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-800 text-xs font-semibold focus:outline-none"
                    >
                      {campaigns.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                      ))}
                    </select>

                    <button 
                      onClick={() => showToast(`Exporting audit PDF for ${reportDateFrom} to ${reportDateTo}...`)}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md flex items-center space-x-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export Audit PDF</span>
                    </button>
                  </div>
                </div>

                {/* Date Filter Bar: "From" and "To" Controls */}
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">Audit Period:</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-300 rounded px-2.5 py-1">
                        <label htmlFor="report-from" className="text-[10px] uppercase font-bold text-slate-500">From:</label>
                        <input
                          id="report-from"
                          type="date"
                          value={reportDateFrom}
                          onChange={(e) => {
                            setReportDateFrom(e.target.value);
                            showToast(`Reporting window updated: From ${e.target.value}`);
                          }}
                          className="bg-transparent text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
                        />
                      </div>

                      <span className="text-slate-400 font-bold">&rarr;</span>

                      <div className="flex items-center space-x-1.5 bg-slate-50 border border-slate-300 rounded px-2.5 py-1">
                        <label htmlFor="report-to" className="text-[10px] uppercase font-bold text-slate-500">To:</label>
                        <input
                          id="report-to"
                          type="date"
                          value={reportDateTo}
                          onChange={(e) => {
                            setReportDateTo(e.target.value);
                            showToast(`Reporting window updated: To ${e.target.value}`);
                          }}
                          className="bg-transparent text-xs font-semibold text-slate-900 focus:outline-none cursor-pointer"
                        />
                      </div>
                    </div>

                    <span className="text-xs bg-blue-50 border border-blue-200 text-blue-700 px-2.5 py-1 rounded font-semibold tabular-nums">
                      {reportDaysCount} Days Audited Window
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-xs">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Presets:</span>
                    <button
                      onClick={() => {
                        setReportDateFrom(activeReport.startDate);
                        setReportDateTo(activeReport.endDate);
                        showToast(`Reset to full flight window: ${activeReport.startDate} to ${activeReport.endDate}`);
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold transition-colors"
                    >
                      Full Flight Window
                    </button>
                    <button
                      onClick={() => {
                        try {
                          const d = new Date(activeReport.endDate);
                          const endStr = d.toISOString().slice(0, 10);
                          d.setDate(d.getDate() - 6);
                          const startStr = d.toISOString().slice(0, 10);
                          setReportDateFrom(startStr);
                          setReportDateTo(endStr);
                          showToast(`Filtered to last 7 days of campaign`);
                        } catch {
                          setReportDateFrom(activeReport.startDate);
                          setReportDateTo(activeReport.endDate);
                        }
                      }}
                      className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-semibold transition-colors"
                    >
                      Last 7 Days
                    </button>
                  </div>
                </div>

                {/* 1. AGGREGATED CAMPAIGN TOTALS */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Period Verified Contacts</span>
                    <span className="text-xl font-black text-slate-900 tabular-nums">{auditedPeriodImpressions.toLocaleString()}</span>
                    <span className="text-xs text-emerald-600 block font-semibold">{reportDaysCount}d Sensor Audit</span>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Combined Daily Traffic</span>
                    <span className="text-xl font-black text-blue-600 tabular-nums">{combinedDailyTraffic.toLocaleString()}</span>
                    <span className="text-xs text-slate-500 block">Contacts / Day</span>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">SES A+B Affluence</span>
                    <span className="text-xl font-black text-emerald-600 tabular-nums">{avgSesA + avgSesB}%</span>
                    <span className="text-xs text-slate-500 block">High Purchasing Index</span>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Allocated Network</span>
                    <span className="text-xl font-black text-slate-900 tabular-nums">{totalScreens} Screens</span>
                    <span className="text-xs text-slate-500 block">{activeReport.targetCity} Corridor</span>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Combined Rotations</span>
                    <span className="text-xl font-black text-purple-600 tabular-nums">{combinedSpotsPerHour} / hr</span>
                    <span className="text-xs text-slate-500 block">Total Playout Cycles</span>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-1">
                    <span className="text-[10px] text-slate-500 block uppercase font-bold tracking-wider">Total Investment</span>
                    <span className="text-xl font-black text-slate-900 tabular-nums">{activeReport.spent}</span>
                    <span className="text-xs text-slate-500 block">Incl. 11% PPN Tax</span>
                  </div>
                </div>

                {/* 2. AGGREGATED DEMOGRAPHICS & TELEMETRY BREAKDOWN */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Gender Split Aggregate */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700 uppercase">Aggregated Gender Ratio</span>
                      <span className="text-[11px] text-slate-400 font-medium">All Assigned Screens</span>
                    </div>
                    <div className="flex h-3 rounded-full overflow-hidden bg-slate-200">
                      <div className="bg-blue-600" style={{ width: `${avgMale}%` }}></div>
                      <div className="bg-rose-500" style={{ width: `${avgFemale}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-blue-700 font-bold tabular-nums">Male ({avgMale}%)</span>
                      <span className="text-rose-600 font-bold tabular-nums">Female ({avgFemale}%)</span>
                    </div>
                  </div>

                  {/* SES Affluence Breakdown Aggregate */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700 uppercase">Socio-Economic Tiers (SES)</span>
                      <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 tabular-nums">
                        {avgSesA + avgSesB}% Upper (A+B)
                      </span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">SES A</span>
                        <span className="font-bold text-emerald-700 tabular-nums">{avgSesA}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">SES B</span>
                        <span className="font-bold text-blue-700 tabular-nums">{avgSesB}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">SES C</span>
                        <span className="font-bold text-slate-700 tabular-nums">{avgSesC}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">SES D</span>
                        <span className="font-bold text-slate-500 tabular-nums">{avgSesD}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Generational Demographics Aggregate */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-700 uppercase">Dominant Cohorts</span>
                      <span className="text-[11px] text-slate-500 font-medium">Age Distribution</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">Gen Z</span>
                        <span className="font-bold text-blue-600 tabular-nums">{avgGenZ}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">Millennials</span>
                        <span className="font-bold text-indigo-600 tabular-nums">{avgMillennial}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">Gen X</span>
                        <span className="font-bold text-slate-700 tabular-nums">{avgGenX}%</span>
                      </div>
                      <div className="p-2 bg-slate-50 border border-slate-200 rounded">
                        <span className="text-[10px] text-slate-500 uppercase block font-semibold">Boomers</span>
                        <span className="font-bold text-slate-500 tabular-nums">{avgBoomer}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. PER-OOH BREAKDOWN: FULL TELEMETRY, COMMERCIAL & HARDWARE ITEMIZATION */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">Itemized Per-OOH Playout & Telemetry Matrix</h2>
                      <p className="text-xs text-slate-500">Comprehensive hardware, commercial mechanics, audience demographics, and triggers per screen</p>
                    </div>
                    <span className="text-xs text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded font-medium">
                      {activeReport.screens.length} Nodes Placed
                    </span>
                  </div>

                  <div className="space-y-4">
                    {activeReport.screens.map(screen => {
                      const oohSubtotal = screen.dailyRate * reportDaysCount;
                      const oohVAT = Math.round(oohSubtotal * 0.11);
                      const oohTotalInvestment = oohSubtotal + oohVAT;
                      const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${screen.name}, ${screen.street}, ${screen.city}, Indonesia`)}`;

                      return (
                        <div key={screen.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs hover:border-blue-300 transition-all space-y-5">
                          
                          {/* Top row: Screen Identity & Total Investment */}
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200">
                                  {screen.id}
                                </span>
                                <span className="text-xs text-slate-600 font-semibold">{screen.operator}</span>
                                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                                  {screen.status}
                                </span>
                                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded font-medium">
                                  {screen.type}
                                </span>
                              </div>
                              <h3 className="font-bold text-slate-900 text-lg">{screen.name}</h3>
                              <p className="text-xs text-slate-500 flex items-center space-x-1">
                                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span>{screen.street}, {screen.city} ({screen.postcode})</span>
                              </p>
                            </div>

                            {/* Total Investment Card */}
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-left md:text-right min-w-[240px]">
                              <span className="text-[10px] text-slate-500 uppercase block font-bold tracking-wider">Total Investment ({reportDaysCount} Days)</span>
                              <span className="text-xl font-black text-slate-900 block tabular-nums">
                                Rp {oohTotalInvestment.toLocaleString('id-ID')}
                              </span>
                              <span className="text-xs text-slate-500 block mt-0.5 tabular-nums">
                                Base: {screen.price} &bull; Incl. 11% PPN
                              </span>
                            </div>
                          </div>

                          {/* Visual Proof Section: OOH Screenshot & Google Maps Street View */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            
                            {/* 1. Screenshot of the OOH Displayed */}
                            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 flex flex-col justify-between group">
                              <div className="relative h-56 bg-slate-950 overflow-hidden">
                                <img 
                                  src={screen.image} 
                                  alt={`${screen.name} Playout Display`} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                                
                                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white border border-slate-700 px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 shadow-md">
                                  <MonitorPlay className="w-3 h-3 text-blue-400" />
                                  <span>OOH Playout Screenshot</span>
                                </div>

                                <div className="absolute top-3 right-3 bg-emerald-500/90 text-white px-2 py-0.5 rounded text-xs font-semibold shadow-md">
                                  Camera Verified PoP
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-xs text-white">
                                  <span className="font-semibold">{screen.hardware.size} &bull; {screen.hardware.orientation}</span>
                                  <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-xs font-medium">
                                    {screen.resolution.split(' ')[0]}
                                  </span>
                                </div>
                              </div>

                              <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                                <span className="text-slate-600 font-semibold">Active Visual Verification</span>
                                <span className="text-emerald-700 font-bold text-xs flex items-center">
                                  <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                                  100% Playout Integrity
                                </span>
                              </div>
                            </div>

                            {/* 2. Google Maps Street View Screenshot with External Link */}
                            <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-900 flex flex-col justify-between group">
                              <div className="relative h-56 bg-slate-950 overflow-hidden">
                                <img 
                                  src={screen.mapViewUrl} 
                                  alt={`${screen.name} Google Street View`} 
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white border border-slate-700 px-2.5 py-1 rounded text-xs font-semibold flex items-center space-x-1.5 shadow-md">
                                  <Navigation className="w-3 h-3 text-emerald-400" />
                                  <span>Google Maps Street View</span>
                                </div>

                                <div className="absolute top-3 right-3 bg-blue-600/90 text-white px-2 py-0.5 rounded text-xs font-semibold shadow-md">
                                  Facing: {screen.context.facing.split(' ')[0]}
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                                  <span className="block font-semibold truncate">{screen.street}</span>
                                  <span className="text-xs text-slate-300">Audited Corridor Vantage</span>
                                </div>
                              </div>

                              {/* Google Maps External Link Button */}
                              <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                                <span className="text-slate-500 text-xs truncate max-w-[180px]">{screen.context.facing}</span>
                                <a
                                  href={googleMapsSearchUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200 hover:border-blue-600 rounded-lg text-xs font-semibold transition-all shadow-2xs"
                                >
                                  <MapPin className="w-3.5 h-3.5" />
                                  <span>Open in Google Maps</span>
                                  <ExternalLink className="w-3 h-3 ml-0.5" />
                                </a>
                              </div>
                            </div>

                          </div>

                          {/* Middle row: 4 Detailed Facet Data Panels */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
                            
                            {/* Panel 1: Audience & Footfall */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase block border-b border-slate-200 pb-1">
                                Audience Contacts
                              </span>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Daily Contacts:</span>
                                <span className="font-bold text-slate-900 tabular-nums">{screen.traffic.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Gender Ratio:</span>
                                <span className="font-bold text-slate-800 tabular-nums">{screen.gender.male}% M / {screen.gender.female}% F</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Prime SES A+B:</span>
                                <span className="font-bold text-emerald-700 tabular-nums">{screen.ses.a + screen.ses.b}% (A:{screen.ses.a}% B:{screen.ses.b}%)</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Top Generation:</span>
                                <span className="font-bold text-indigo-700">Millennial ({screen.gen.millennial}%)</span>
                              </div>
                            </div>

                            {/* Panel 2: Commercial Mechanics */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase block border-b border-slate-200 pb-1">
                                Commercial Mechanics
                              </span>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Spot Duration:</span>
                                <span className="font-bold text-blue-700">{screen.commercial.spot}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Loop Duration:</span>
                                <span className="font-bold text-slate-900">{screen.commercial.loop}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Hourly Rotations:</span>
                                <span className="font-bold text-slate-800 tabular-nums">{screen.commercial.spotsPerHour} slots / hour</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Daily Base Rate:</span>
                                <span className="font-bold text-slate-900 tabular-nums">{screen.price.split(' / ')[0]}</span>
                              </div>
                            </div>

                            {/* Panel 3: Hardware Specs */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase block border-b border-slate-200 pb-1">
                                Hardware Specs
                              </span>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Resolution:</span>
                                <span className="font-bold text-slate-800">{screen.resolution.split(' ')[0]}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Dimensions:</span>
                                <span className="font-bold text-slate-800">{screen.hardware.size}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Pixel Pitch:</span>
                                <span className="font-bold text-slate-800">{screen.hardware.tech}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Orientation:</span>
                                <span className="font-bold text-slate-800">{screen.hardware.orientation}</span>
                              </div>
                            </div>

                            {/* Panel 4: Environmental Context */}
                            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
                              <span className="text-[10px] font-bold text-slate-500 uppercase block border-b border-slate-200 pb-1">
                                Context & Flow
                              </span>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Corridor Type:</span>
                                <span className="font-bold text-slate-800">{screen.context.type}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Avg Dwell Time:</span>
                                <span className="font-bold text-blue-700">{screen.context.dwell}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Audit Verification:</span>
                                <span className="font-bold text-emerald-600">Camera Telemetry</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-slate-500">Formats:</span>
                                <span className="font-bold text-slate-800 truncate max-w-[120px]">{screen.hardware.formats.join(', ')}</span>
                              </div>
                            </div>

                          </div>

                          {/* Bottom row: Dynamic Triggers Enabled on this OOH */}
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <span className="text-[10px] text-slate-500 font-bold uppercase mr-1">Triggers Configured:</span>
                              {screen.triggers.map(tr => (
                                <span key={tr} className="bg-amber-50 text-amber-900 border border-amber-200 text-xs px-2 py-0.5 rounded font-medium flex items-center space-x-1">
                                  <Zap className="w-2.5 h-2.5 text-amber-600" />
                                  <span>{tr}</span>
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center space-x-3 text-xs text-slate-500">
                              <span className="text-emerald-700 font-semibold flex items-center">
                                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-600" />
                                Playout Fidelity: 100%
                              </span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </main>

      {/* REGISTRATION & LOGIN MODAL */}
      {isAuthModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-5 animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Arteria Platform Access</span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono font-bold">RBAC Tier 1</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {authMode === 'login' ? 'Enterprise Console Sign In' : 'Register Agency Media Desk'}
                </h3>
                <p className="text-xs text-slate-500">
                  {authMode === 'login' 
                    ? 'Authenticate to access Flight Planner, campaign deliveries, and certified playout reports.'
                    : 'Create your agency account to book arterial inventory and receive direct insertion orders.'}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsAuthModalOpen(false);
                  setAuthError(null);
                }}
                className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setAuthError(null);
                }}
                className={`flex-1 py-1.5 rounded transition-all ${
                  authMode === 'login' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('register');
                  setAuthError(null);
                }}
                className={`flex-1 py-1.5 rounded transition-all ${
                  authMode === 'register' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Quick Demo Credentials Callout */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs flex items-center justify-between">
              <div className="space-y-0.5 text-blue-900">
                <span className="font-bold block text-[11px]">Evaluation Admin Credentials:</span>
                <span className="font-mono text-[11px] text-blue-700">username: <strong>admin</strong> &bull; password: <strong>login</strong></span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setAuthMode('login');
                  setAuthUsername('admin');
                  setAuthPassword('login');
                  setAuthError(null);
                }}
                className="px-2.5 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded text-[11px] font-semibold transition-colors shrink-0 shadow-2xs"
              >
                Fill Admin
              </button>
            </div>

            {/* Error Message */}
            {authError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span className="leading-snug">{authError}</span>
              </div>
            )}

            {/* Form */}
            {authMode === 'login' ? (
              <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">Username</label>
                  <input
                    type="text"
                    required
                    value={authUsername}
                    onChange={(e) => setAuthUsername(e.target.value)}
                    placeholder="Enter 'admin'"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">Password</label>
                  <input
                    type="password"
                    required
                    value={authPassword}
                    onChange={(e) => setAuthPassword(e.target.value)}
                    placeholder="Enter 'login'"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-md transition-colors flex items-center justify-center space-x-1.5 shadow-xs pt-2"
                >
                  <LogIn className="w-3.5 h-3.5" />
                  <span>Authenticate & Unlock Console</span>
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegisterSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">Full Name / Lead Planner</label>
                  <input
                    type="text"
                    required
                    value={authFullName}
                    onChange={(e) => setAuthFullName(e.target.value)}
                    placeholder="e.g. Sarah Hartono"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-slate-600 block mb-1">Media Agency or Brand Desk</label>
                  <input
                    type="text"
                    value={authAgencyName}
                    onChange={(e) => setAuthAgencyName(e.target.value)}
                    placeholder="e.g. Dentsu X / Mindshare / Direct Brand"
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Username</label>
                    <input
                      type="text"
                      required
                      value={authUsername}
                      onChange={(e) => setAuthUsername(e.target.value)}
                      placeholder="Username"
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Password</label>
                    <input
                      type="password"
                      required
                      value={authPassword}
                      onChange={(e) => setAuthPassword(e.target.value)}
                      placeholder="Password"
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-md transition-colors flex items-center justify-center space-x-1.5 shadow-xs mt-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Register Desk & Sign In</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center">
                <ShieldCheck className="w-3 h-3 text-emerald-600 mr-1" />
                256-Bit Encrypted Media Desk
              </span>
              <span>Arteria Auth v2.4</span>
            </div>

          </div>
        </div>
      )}

      {/* ALLOCATION MODAL */}
      {allocatingScreen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl shadow-2xl max-w-xl w-full p-6 space-y-5 animate-in fade-in zoom-in-95">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] text-blue-600 font-bold uppercase block tracking-wider">Inventory Allocation</span>
                <h3 className="text-base font-bold text-slate-900">{allocatingScreen.name}</h3>
                <p className="text-xs text-slate-500">{allocatingScreen.city} &bull; {allocatingScreen.price}</p>
              </div>
              <button
                onClick={() => setAllocatingScreen(null)}
                className="p-1 text-slate-400 hover:text-slate-700 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Option 1: Add to Existing Campaign */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold text-slate-900 uppercase block tracking-wide">1. Allocate to an Existing Flight Plan:</span>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {flightPlans.map(plan => {
                  const isAllocated = plan.screens.some(s => s.id === allocatingScreen.id);
                  return (
                    <div
                      key={plan.id}
                      className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-slate-900 block">{plan.campaignTitle}</span>
                        <span className="text-xs text-slate-500">Go Live: {plan.goLiveDate} &bull; {plan.screens.length} Screens currently</span>
                      </div>
                      <button
                        onClick={() => {
                          handleToggleScreenInPlan(plan.id, allocatingScreen);
                          showToast(isAllocated ? `Removed from ${plan.campaignTitle}` : `Added to ${plan.campaignTitle}`);
                        }}
                        className={`px-3 py-1.5 rounded-md font-semibold text-xs transition-colors ${
                          isAllocated 
                            ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100' 
                            : 'bg-blue-600 hover:bg-blue-500 text-white'
                        }`}
                      >
                        {isAllocated ? 'Remove' : '+ Add to Plan'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Option 2: Create New Campaign Flight Plan */}
            <div className="space-y-3 pt-3 border-t border-slate-200">
              <span className="text-xs font-bold text-slate-900 uppercase block tracking-wide">2. Or Create New Campaign Flight Plan:</span>
              
              <div className="space-y-2 text-xs">
                <div>
                  <label className="text-[10px] text-slate-500 block uppercase font-semibold mb-1">New Campaign Title:</label>
                  <input
                    type="text"
                    placeholder="e.g. Q4 Flagship Brand Blitz"
                    value={newCampaignTitle}
                    onChange={(e) => setNewCampaignTitle(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-500 block uppercase font-semibold mb-1">Brand Client:</label>
                    <input
                      type="text"
                      placeholder="e.g. GoTo Group"
                      value={newClientName}
                      onChange={(e) => setNewClientName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block uppercase font-semibold mb-1">Go-Live Date:</label>
                    <input
                      type="date"
                      value={newGoLiveDate}
                      onChange={(e) => setNewGoLiveDate(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded px-3 py-1.5 text-slate-900 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={handleCreateNewPlanWithScreen}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center space-x-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Create Campaign & Allocate Screen</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CANCEL CONFIRMATION MODAL */}
      {planToCancel && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl shadow-2xl max-w-md w-full p-6 space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center space-x-3 text-rose-600">
              <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Cancel Flight Plan?</h3>
                <span className="text-xs text-slate-500 font-mono">Plan ID: #{planToCancel}</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Are you sure you want to cancel this media flight plan? Any reserved corridor slots will be released back into the marketplace. You can still reopen or reactivate this plan later if needed.
            </p>

            <div className="flex items-center justify-end space-x-2.5 pt-2 border-t border-slate-100">
              <button
                onClick={() => setPlanToCancel(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-xs font-semibold transition-colors"
              >
                Keep Plan
              </button>
              <button
                onClick={() => handleCancelPlan(planToCancel)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-md text-xs font-semibold transition-colors flex items-center space-x-1.5 shadow-xs"
              >
                <Ban className="w-3.5 h-3.5" />
                <span>Confirm Cancellation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-semibold text-slate-600">&copy; 2026 ARTERIA PROGRAMMATIC MEDIA EXCHANGE</span>
          <span className="font-medium text-slate-500">ENTERPRISE DOOH PLATFORM &bull; TELEMETRY ENGINE</span>
        </div>
      </footer>
    </div>
  );
}