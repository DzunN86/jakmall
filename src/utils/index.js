export const rupiahFormat = (value) => {
  return new Intl.NumberFormat("id-ID").format(value);
};

export const validationSchema = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  phoneNumber: {
    required: "Phone number is required",
    minLength: {
      value: 6,
      message: "Phone number must be at least 6 digits",
    },
    maxLength: {
      value: 20,
      message: "Phone number must be at most 20 digits",
    },
    pattern: {
      // containing only numbers and +, -, (, )
      value: /^[0-9()+-]*$/,
      message: "Phone number must only contain numbers and +, -, (, )",
    },
  },
  deliveryAddress: {
    required: "Delivery address is required",
  },
  dropshipperName: {
    required: "Dropshipper name is required",
  },
  dropshipperPhone: {
    required: "Dropshipper phone number is required",
    minLength: {
      value: 6,
      message: "Phone number must be at least 6 digits",
    },
    maxLength: {
      value: 20,
      message: "Phone number must be at most 20 digits",
    },
    pattern: {
      // containing only numbers and +, -, (, )
      value: /^[0-9()+-]*$/,
      message: "Phone number must only contain numbers and +, -, (, )",
    },
  },
};
