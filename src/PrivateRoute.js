import React from "react";
import { Route, Redirect } from "react-router-dom";
import TokenService from "./services/token-service";

export default function PrivateRoute({ data, component, ...props }) {
  const Component = component;
  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Component {...componentProps} data={data} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: componentProps.location },
            }}
          />
        )
      }
    />
  );
}
