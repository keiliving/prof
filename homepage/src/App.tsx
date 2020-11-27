import React, { FC }  from 'react';
import Footer from './component/templete/footer'
import Header from './component/templete/header'
import Sidebar from './component/templete/sidebar'
import About from './component/about'
import Skills from './component/skills'
import './index.css';

import './App.css';
interface ContentState {
  value: number;
}
// Tab で表示したいページの情報を取得し、main-containerに反映 ここで状態管理？
class App extends React.Component<{}, ContentState> {
  constructor(props:{}) {
    super(props);
    this.state = {
      value: 1
    };
  }

parent_func:Function = (num:number) => {
  this.setState({value: num});
}
//Fixme switch内でreturnさせない。そのためにはFooterの型付け周りの処理を行う
set_content:Function = (num:number) => {
  switch(num){
    case 1:
      return <About />
    case 2:
      return <Skills />
    case 3:
      <p>aaazzzzz</p>
      break;
    default:
      console.log("default");
      break;
  }
  
}

render() {
  return (
    <div className="main-container">
      <Header parent_func={this.parent_func}/>
      <div className="main-content">
      
        <div className="wip">
          {this.set_content(this.state.value)}
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
