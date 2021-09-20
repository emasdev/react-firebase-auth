import React from "react";
import { Alert } from "antd";

export default function Error({ mensaje }) {
  return <Alert message={mensaje} type="error" />;
}
