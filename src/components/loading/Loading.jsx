import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

export const Loading = (loading) => {
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
      };
  return (
    <div>
        <ClipLoader loading={loading} cssOverride={override} size={150} />
    </div>
  )
}
