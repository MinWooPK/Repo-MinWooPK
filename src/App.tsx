import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer/footer";
import { Skill } from "./views/skill/Skill";
import { Contact } from "./views/contact/contact";
import { MyWork } from "./views/my-works/my-work";
import { Home } from "./views/home/home";
import { About } from "./views/about/about";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/skill" component={Skill} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/my-work" component={MyWork} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
