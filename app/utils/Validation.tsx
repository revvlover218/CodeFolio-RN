const ValidationRegEx = {
  email: new RegExp(
    /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ),
  cell: new RegExp(/^(?:\+27|0)(6|7|8)[0-9]{8}$/),
};

export interface ContactDetailsProp {
  text: string;
}

export const isValidEmailAddress = ({ text }: ContactDetailsProp) =>
  ValidationRegEx.email.test(text);

export const isValidCellNumber = ({ text }: ContactDetailsProp) =>
  ValidationRegEx.cell.test(text);

export const isValidEmailAddressOrPhoneNumber = ({
  text,
}: ContactDetailsProp) => {
  return isValidEmailAddress({ text }) || isValidCellNumber({ text });
};
