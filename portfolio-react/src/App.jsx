import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import CssFixedWidth from './pages/CssFixedWidth'
import CompassGradients from './pages/CompassGradients'
import RailsInstallation from './pages/RailsInstallation'
import SassPercentages from './pages/SassPercentages'
import CakephpMemory from './pages/CakephpMemory'
import FooBarBaz from './pages/FooBarBaz'
import CakephpUnitTests from './pages/CakephpUnitTests'
import InstallFestCommands from './pages/InstallFestCommands'
import FlaskDebug from './pages/FlaskDebug'
import MysqlUtf8 from './pages/MysqlUtf8'
import CssFlexboxCenter from './pages/CssFlexboxCenter'
import PythonVirtualEnv from './pages/PythonVirtualEnv'
import CakephpFilterTests from './pages/CakephpFilterTests'
import HerokuExplained from './pages/HerokuExplained'
import SqliteDump from './pages/SqliteDump'
import PassengerPermissions from './pages/PassengerPermissions'
import RailsMediaTemple from './pages/RailsMediaTemple'
import RubySymbols from './pages/RubySymbols'
import CakephpJoins from './pages/CakephpJoins'
import CakephpEmailTesting from './pages/CakephpEmailTesting'
import DuckTyping from './pages/DuckTyping'
import ComposerFork from './pages/ComposerFork'
import CakephpForeignKey from './pages/CakephpForeignKey'
import PlayTheBall from './pages/PlayTheBall'
import UnityBeginnings from './pages/UnityBeginnings'
import AgileScrum from './pages/AgileScrum'
import ExploringPython from './pages/ExploringPython'
import MachineLearningIntro from './pages/MachineLearningIntro'
import DataVisualization from './pages/DataVisualization'
import GoogleAnalyticsSeo from './pages/GoogleAnalyticsSeo'
import WritingNovel from './pages/WritingNovel'
import WritingCompetition from './pages/WritingCompetition'
import AiOverhyped from './pages/AiOverhyped'
import FinalYearProject from './pages/FinalYearProject'
import JobHuntingCovid from './pages/JobHuntingCovid'
import ContentManager from './pages/ContentManager'
import DiscoveringMoximo from './pages/DiscoveringMoximo'
import LaravelFirst from './pages/LaravelFirst'
import FilamentAdmin from './pages/FilamentAdmin'
import FrontendFatigue from './pages/FrontendFatigue'
import AiGettingBetter from './pages/AiGettingBetter'
import ReactVueNuxt from './pages/ReactVueNuxt'
import MovingToAustralia from './pages/MovingToAustralia'
import AdelaideOffer from './pages/AdelaideOffer'
import HospitalityLife from './pages/HospitalityLife'
import RemoteWorkJuggle from './pages/RemoteWorkJuggle'
import FellOffCoding from './pages/FellOffCoding'
import BackToGames from './pages/BackToGames'
import CyberlabStart from './pages/CyberlabStart'
import UnityTrafficSim from './pages/UnityTrafficSim'
import CyberlabReflection from './pages/CyberlabReflection'
import ClaudeAiCoding from './pages/ClaudeAiCoding'
import UniDisappointing from './pages/UniDisappointing'
import Graduating from './pages/Graduating'
import JobHunting2025 from './pages/JobHunting2025'
import VisaApplication from './pages/VisaApplication'
import StartingGameStudio from './pages/StartingGameStudio'
import HiringInterns from './pages/HiringInterns'
import PlanABC from './pages/PlanABC'
import WhyNotStandingOut from './pages/WhyNotStandingOut'
import HowToStandOut from './pages/HowToStandOut'
import Opus45 from './pages/Opus45'
import PixelArt from './pages/PixelArt'
import UnityBugs from './pages/UnityBugs'
import HiringOffshore from './pages/HiringOffshore'
import QuestionsEmployers from './pages/QuestionsEmployers'
import CommunicationSkills from './pages/CommunicationSkills'
import './App.css'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/posts/css-fixed-width" element={<CssFixedWidth />} />
        <Route path="/posts/compass-gradients" element={<CompassGradients />} />
        <Route path="/posts/rails-installation" element={<RailsInstallation />} />
        <Route path="/posts/sass-percentages" element={<SassPercentages />} />
        <Route path="/posts/cakephp-memory" element={<CakephpMemory />} />
        <Route path="/posts/foo-bar-baz" element={<FooBarBaz />} />
        <Route path="/posts/cakephp-unit-tests" element={<CakephpUnitTests />} />
        <Route path="/posts/installfest-commands" element={<InstallFestCommands />} />
        <Route path="/posts/flask-debug" element={<FlaskDebug />} />
        <Route path="/posts/mysql-utf8" element={<MysqlUtf8 />} />
        <Route path="/posts/css-flexbox-center" element={<CssFlexboxCenter />} />
        <Route path="/posts/python-virtual-env" element={<PythonVirtualEnv />} />
        <Route path="/posts/cakephp-filter-tests" element={<CakephpFilterTests />} />
        <Route path="/posts/heroku-explained" element={<HerokuExplained />} />
        <Route path="/posts/sqlite-dump" element={<SqliteDump />} />
        <Route path="/posts/passenger-permissions" element={<PassengerPermissions />} />
        <Route path="/posts/rails-media-temple" element={<RailsMediaTemple />} />
        <Route path="/posts/ruby-symbols" element={<RubySymbols />} />
        <Route path="/posts/cakephp-joins" element={<CakephpJoins />} />
        <Route path="/posts/cakephp-email-testing" element={<CakephpEmailTesting />} />
        <Route path="/posts/duck-typing" element={<DuckTyping />} />
        <Route path="/posts/composer-fork" element={<ComposerFork />} />
        <Route path="/posts/cakephp-foreign-key" element={<CakephpForeignKey />} />
        <Route path="/posts/play-the-ball" element={<PlayTheBall />} />
        <Route path="/posts/unity-beginnings" element={<UnityBeginnings />} />
        <Route path="/posts/agile-scrum" element={<AgileScrum />} />
        <Route path="/posts/exploring-python" element={<ExploringPython />} />
        <Route path="/posts/machine-learning-intro" element={<MachineLearningIntro />} />
        <Route path="/posts/data-visualization" element={<DataVisualization />} />
        <Route path="/posts/google-analytics-seo" element={<GoogleAnalyticsSeo />} />
        <Route path="/posts/writing-novel" element={<WritingNovel />} />
        <Route path="/posts/writing-competition" element={<WritingCompetition />} />
        <Route path="/posts/ai-overhyped" element={<AiOverhyped />} />
        <Route path="/posts/final-year-project" element={<FinalYearProject />} />
        <Route path="/posts/job-hunting-covid" element={<JobHuntingCovid />} />
        <Route path="/posts/content-manager" element={<ContentManager />} />
        <Route path="/posts/discovering-moximo" element={<DiscoveringMoximo />} />
        <Route path="/posts/laravel-first" element={<LaravelFirst />} />
        <Route path="/posts/filament-admin" element={<FilamentAdmin />} />
        <Route path="/posts/frontend-fatigue" element={<FrontendFatigue />} />
        <Route path="/posts/ai-getting-better" element={<AiGettingBetter />} />
        <Route path="/posts/react-vue-nuxt" element={<ReactVueNuxt />} />
        <Route path="/posts/moving-to-australia" element={<MovingToAustralia />} />
        <Route path="/posts/adelaide-offer" element={<AdelaideOffer />} />
        <Route path="/posts/hospitality-life" element={<HospitalityLife />} />
        <Route path="/posts/remote-work-juggle" element={<RemoteWorkJuggle />} />
        <Route path="/posts/fell-off-coding" element={<FellOffCoding />} />
        <Route path="/posts/back-to-games" element={<BackToGames />} />
        <Route path="/posts/cyberlab-start" element={<CyberlabStart />} />
        <Route path="/posts/unity-traffic-sim" element={<UnityTrafficSim />} />
        <Route path="/posts/cyberlab-reflection" element={<CyberlabReflection />} />
        <Route path="/posts/claude-ai-coding" element={<ClaudeAiCoding />} />
        <Route path="/posts/uni-disappointing" element={<UniDisappointing />} />
        <Route path="/posts/graduating" element={<Graduating />} />
        <Route path="/posts/job-hunting-2025" element={<JobHunting2025 />} />
        <Route path="/posts/visa-application" element={<VisaApplication />} />
        <Route path="/posts/starting-game-studio" element={<StartingGameStudio />} />
        <Route path="/posts/hiring-interns" element={<HiringInterns />} />
        <Route path="/posts/plan-abc" element={<PlanABC />} />
        <Route path="/posts/why-not-standing-out" element={<WhyNotStandingOut />} />
        <Route path="/posts/how-to-stand-out" element={<HowToStandOut />} />
        <Route path="/posts/opus-45" element={<Opus45 />} />
        <Route path="/posts/pixel-art" element={<PixelArt />} />
        <Route path="/posts/unity-bugs" element={<UnityBugs />} />
        <Route path="/posts/hiring-offshore" element={<HiringOffshore />} />
        <Route path="/posts/questions-employers" element={<QuestionsEmployers />} />
        <Route path="/posts/communication-skills" element={<CommunicationSkills />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App