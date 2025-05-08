import { useState } from "react";
import useRequest from "../../hooks/use-request";
import Router from "next/router";

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/"),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1>Sign up</h1>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          value={email}
          className="form-control"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>{" "}
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          className="form-control"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errors}
      <button type="submit" className="btn btn-primary">
        Sign up
      </button>
    </form>
  );
};
