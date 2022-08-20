import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./Usermanager.scss";
import { getAlluser } from "../../routes/services/userServiec";
import { useState } from "react";

const UserManage = () => {
  const [value, setValue] = useState();

  useEffect(() => {
    const awaits = async () => {
      const responsave = await getAlluser("All");
      console.log(responsave);
      if (responsave && responsave.errCode === 0) {
        setValue(responsave.allUser);
      }
    };
    awaits();
  }, []);
  return (
    <table className="mt-3 pd-1" id="customers">
      <tr>
        <th>email</th>
        <th>fistname</th>
        <th>lastname</th>
        <th>action</th>
      </tr>
      {value &&
        value.map((item) => (
          <tr>
            <td>{item.email}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <button>edit</button>
            <button>delete</button>
          </tr>
        ))}
    </table>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
