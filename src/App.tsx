import React from 'react';
import styles from './styles/App.module.scss';

//Pages
import { Route, Switch } from 'react-router';
import { Landing } from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import { CreateAccount } from './pages/CreateAccount';
import { Contact } from './pages/Contact';
import { Calendar } from './pages/Calendar';
import { Blog } from './pages/Blog';
import { AgreementDocs } from './pages/AgreementDocs';
import { About } from './pages/About';
import { Lesson } from './pages/Lesson';
import { Resources } from './pages/Resources';
import { SchedualLesson } from './pages/SchedualLesson';
import { Services } from './pages/Services';
import { Settings } from './pages/Settings';
import { Wallet } from './pages/Wallet';
import { Login } from './pages/Login';


//Components
import { Header } from './components/Header';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Calendar" component={Calendar} />
        <Route path="/Blog" component={Blog} />
        <Route path="/AgreementDocs" component={AgreementDocs} />
        <Route path="/About" component={About} />
        <Route path="/Lesson" component={Lesson} />
        <Route path="/Resources" component={Resources} />
        <Route path="/SchedualLesson" component={SchedualLesson} />
        <Route path="/Services" component={Services} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Wallet" component={Wallet} />
        <Route path="/Login" component={Login} />

      </Switch>
    </div>
  );
}

export default App;
