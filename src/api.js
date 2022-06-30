const axios = require("axios").default;

export const dashboard = async () => {
  let response = null;
  try {
    response = await axios.get("https://app-phone-crud.herokuapp.com/contacts");
    return response;
  } catch (error) {
    response = error.response;
    throw error;
  }
};

export const postContact = async (firstName, lastName, phoneMobile) => {
  let response = null;
  try {
    const data = {
      firstName,
      lastName,
      phoneMobile,
    };
    response = await axios.post(
      "https://app-phone-crud.herokuapp.com/contacts",
      data
    );
    return response;
  } catch (error) {
    response = error.response;
    throw error;
  }
};

export const deleteContactByID = async (id) => {
  let response = null;

  try {
    response = await axios.delete(
      `https://app-phone-crud.herokuapp.com/contact/${id}`
    );
    return response;
  } catch (error) {
    // handle error
    response = error.response;
    throw error;
  }
};

export const updateContactByID = async (
  contactID,
  firstName,
  lastName,
  phoneMobile
) => {
  let response = null;
  try {
    const data = {
      firstName,
      lastName,
      phoneMobile,
    };
    response = await axios.put(
      `https://app-phone-crud.herokuapp.com/contact/${contactID}`,
      data
    );
    return response;
  } catch (error) {
    response = error.response;
    throw error;
  }
};
