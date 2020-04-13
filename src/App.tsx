import React, { useState } from 'react';
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
import { ScheduleLesson } from './pages/SchedleLesson';
import { Services } from './pages/Services';
import { Settings } from './pages/Settings';
import { Wallet } from './pages/Wallet';
import { Login } from './pages/Login';
import {ForgotPassword} from './pages/ForgotPassword';
import { TextResourceView } from './components/TextResourceView';
import { userMeta } from './types/UserTypes';
import { User } from './types/UserTypes';


//Components
import { Header } from './components/Header';

//Context
import { UserContext } from './contexts/UserContext';


const App: React.FC = () => {
  const updateUserContext = function (userInfo?: User): void {
    if (userInfo !== undefined) {
      updateContext({
        ...context,
        user: userInfo
      });
    } else {
      updateContext({
        ...context,
        user: {}
      });
    }
  }

  const [context, updateContext] = useState({
    user: {},
    updateUser: updateUserContext
  });

  return (
    <UserContext.Provider value={context}>
      <div className={styles.App}>
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/CreateAccount" component={CreateAccount} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Calendar" component={Calendar} />
          <Route path="/Blog" component={Blog} />
          <Route path="/AgreementDocs" component={AgreementDocs} />
          <Route path="/About" component={About} />
          <Route path="/Lesson/:lessonId" component={Lesson} />
          <Route path="/Resources" component={Resources} />
          <Route path="/ScheduleLesson/:date?" component={ScheduleLesson} />
          <Route path="/Services" component={Services} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Wallet" component={Wallet} />
          <Route path="/Login" component={Login} />
          <Route path="/ForgotPassword" component={ForgotPassword}/>
          <Route path="/TextResource" component={TextResourceView}/>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
