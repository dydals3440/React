// 클래스형 컴포넌트 (함수형 컴포넌트가 나오기 이전에 사용)
import React from "react";
import Counter from "./basic/components/Counter";

export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // useEffect 처럼 컴포넌트가 처음 보일떄 호출되는 componentDidMount
  componentDidMount() {
    console.log("컴포넌트가 마운트 되었음!");
  }
  // component가 사라질때 호출되는 componentWillUnmount
  componentWillUnmount() {
    console.log("컴포넌트가 곧 언마운트 될 예정임");
  }

  render() {
    return (
      <div className="container">
        <div className="banner">
          Total Count: {this.state.count} {this.state.count > 10 ? "🔥" : "❄️"}
        </div>
        <div className="counters">
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// 많은 곳에서 함수로 간편하게 하는 것을 원하기 떄문에 함수형 컴포넌트를 사용하고 있습니다. 클래스의 장점을 하나 꼽자면, 함수형 컴포넌트는 무언가 변경이 될때마다 함수 전체가 다 호출이 되니 useState useMemo 와 같은 리액트 제공 hook을 사용했습니다.
// class는 member함수로 정의 되어져 있기 떄문에 상태가 바뀔떄마다 render() 함수만 호출이 됩니다. 그래서 기존의 함수는 유지되기 때문에 useCallback, useMemo등 별도의 처리를 할 필요가 없습니다.
// 정말 class의 객체 지향 프로그래밍으로 클라이언트사이드에서 복잡한일을 /상속을 이용해 일을 해야한다면 class를 요긴하게 쓸 수 있고, 현재 대세는 함수형 컴포넌트를 쓴다.

// class => 함수형 컴포넌트로 바뀐 이유, 디자인 하는 사람, 퍼블리셔 분들과 협업이 어렵기 떔ㄴㅇ에 나왔다.
