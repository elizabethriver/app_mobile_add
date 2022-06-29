import React from 'react'

export const ContactForm = () => {
  return (
    <form className="row">
    <div className="col">
      <label htmlFor="staticName" className="p-2">
        Name
        <input
          type="text"
          className="form-control form-control-sm"
          id="staticName"
        />
      </label>
      <label htmlFor="inputMobile" className="p-2">
        Telephone mobile
        <input
          type="text"
          className="form-control form-control-sm"
          id="inputMobile"
        />
      </label>
    </div>
  </form>
  )
}
