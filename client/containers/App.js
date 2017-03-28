import React from 'react';
import { Header } from '../components';

class App extends React.Component {

    render() {
      return (
          <div>
              <Header  />
              { this.props.children }
          </div>
      );
    } //render

} //end class

export default App;
/*
라우터를 사용 할떄는, 우선 루트컴포넌트가 필요합니다. 바로 우리의 App.js 이죠.
App,js 에서, 라우터의 각 ‘페이지’들이 렌더링 될 자리를 만들어줘야해요
뭐 특별한걸 한 건 없습니다. { this.props.children } 을 삽입해준것 밖에는요
*/
