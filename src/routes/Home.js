import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { isLoggedIn } = this.props;
    let linkToRedirect = isLoggedIn ? "/system/user-manage" : "/login";

    return <Redirect to={linkToRedirect} />;
  }
}

// const Home = () => {
//   const [value, setValueInput] = useState({
//     form: "",
//     to: "",
//   });

//   const handlerChange = (event) => {
//     setValueInput({ ...value, [event.target.name]: event.target.value });
//   };

//   const onClickButon = () => {
//     const arr = [{ ...value }];
//     console.log(arr);
//   };

//   return (
//     <div
//       style={{
//         textAlign: "center",
//       }}
//     >
//       <input name="form" onChange={handlerChange} />
//       <input name="to" onChange={handlerChange} />
//       <button onClick={onClickButon}>Click me</button>
//     </div>
//   );
// };

// export default Home;

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
