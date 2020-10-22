import { combineReducers } from 'redux';

const selectedAddressReducer = (selectedAddress = null, action) => {
  if (action.type === 'ADDRESS_SELECTED') {
    return action.payload;
  }

  return selectedAddress;
};

const ContactReducer = (contactsList = [], action) => {
  if (action.type === 'NEW_CONTACT') {
    return [...contactsList, action.payload];
  }

  return [
    {
      name: 'Chris',
      address: {
        firstLine: 'Aston Grange',
        secondLine: '484 Forest Rd',
        town: 'London',
        county: '',
        postcode: 'E17 4NZ',
      },
      telephone: '07722421007',
      email: 'chris@gmail.com',
    },
  ];
};

export default combineReducers({
  selectedAddress: selectedAddressReducer,
  addContact: ContactReducer,
});
