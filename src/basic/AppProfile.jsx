import "/Users/kim-yongmin/Desktop/react/basic/src/basic/App.css";
import Profile from "./components/Profile.jsx";
import Avatar from "./components/Avatar.jsx";

function AppProfile() {
  const handleClick = (event) => {
    console.log(event);
    alert("버튼이 클릭됐당");
  };
  return (
    <>
      {/* handleClick()을 하게되면 return이 호출되는 시점에 handleclick이 실행되고 반환된 값이 onClick에 할당이 된다. 우리는 함수를 실행한 값이 할당되는게 아니라 onClick이 되었을때 함수를 연결하고 싶을때는 함수의 참조값인 이름을 전달해야합니다. 함수를 호출해서는 안됩니다. 자바스크립트 문법! */}
      <button onClick={handleClick}>버튼</button>
      <form onSubmit={() => {}}>
        <input />
      </form>
      <Avatar
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Matthew Kim"
        title="개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Bob Yu"
        title="잠자기"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Matthew Kim"
        title="개발자"
      />
    </>
  );
}

export default AppProfile;
