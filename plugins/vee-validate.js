import { extend } from "vee-validate";
import {
  required,
  alpha,
  email,
  image,
  integer,
  length,
  numeric,
} from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "This field is required",
});

extend("alpha", {
  ...alpha,
  message: "This field must only contain alphabetic characters",
});
extend("email", {
  ...email,
  message: "This field must be email only.",
});
extend("image", {
  ...image,
  message: "This field must be image only.",
});

function checkBoolean(value) {
  return value === true;
}
extend("checkbox", checkBoolean);

extend("tel", {
  ...integer,
  ...numeric,
  message: "This field must be tel only. Exaxmple: 0629416444",
});
extend("length", {
  ...length,
  message: "This field must be 10 length only.",
});
