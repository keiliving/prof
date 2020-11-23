import React  from 'react';
import Footer from './component/templete/footer'
import Header from './component/templete/header'
import Sidebar from './component/templete/sidebar'
import './index.css';

import './App.css';
// Tab で表示したいページの情報を取得し、main-containerに反映 ここで状態管理？
class App extends React.Component {
  constructor(props:{}) {
    super(props);
    this.state = {
      value: 1
    };
  }

parent_func:Function = (num:number) => {
  this.setState({value: num});
  console.log(num);
}

render() {
  return (
    <div className="main-container">
      <Header parent_func={this.parent_func}/>
      <div className="main-content">
      
        <div className="wip">
          <p>ここに about 等を記入する
          </p>
        </div>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}
}

export default App;
